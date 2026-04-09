import React, { useEffect, useState } from 'react';

const RESOURCE = 'activities';

function Activities() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const apiHost = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
  const endpoint = `${apiHost}/api/${RESOURCE}/`;

  useEffect(() => {
    console.log('[Activities] api endpoint:', endpoint);

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('[Activities] fetched data:', data);
        const normalized = Array.isArray(data)
          ? data
          : Array.isArray(data?.results)
          ? data.results
          : data
          ? [data]
          : [];
        setItems(normalized);
      })
      .catch((fetchError) => {
        console.error('[Activities] fetch error:', fetchError);
        setError(fetchError.message);
      })
      .finally(() => setLoading(false));
  }, [endpoint]);

  return (
    <div className="container py-5">
      <h1 className="display-4 mb-4">Activities</h1>
      {loading && <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <>
          {items.length === 0 ? (
            <p className="text-muted">No activities found.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    {Object.keys(items[0] || {}).map((key) => (
                      <th key={key} scope="col">{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={item.id ?? index}>
                      {Object.values(item).map((value, idx) => (
                        <td key={idx}>{typeof value === 'object' ? JSON.stringify(value) : String(value)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Activities;

