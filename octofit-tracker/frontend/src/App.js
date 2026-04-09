import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function Home() {
  return (
    <div className="container py-5">
      <h1 className="display-4 mb-3">Octofit Tracker</h1>
      <p className="lead">Use the navigation menu to explore the REST API-backed pages.</p>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Activities</h5>
              <p className="card-text">View and manage fitness activities.</p>
              <Link to="/activities" className="btn btn-primary">Go to Activities</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Leaderboard</h5>
              <p className="card-text">Check the competitive leaderboard.</p>
              <Link to="/leaderboard" className="btn btn-primary">Go to Leaderboard</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Teams</h5>
              <p className="card-text">Manage teams and collaborations.</p>
              <Link to="/teams" className="btn btn-primary">Go to Teams</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text">View user profiles and data.</p>
              <Link to="/users" className="btn btn-primary">Go to Users</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Workouts</h5>
              <p className="card-text">Log and track your workouts.</p>
              <Link to="/workouts" className="btn btn-primary">Go to Workouts</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">About</h5>
              <p className="card-text">Learn more about Octofit.</p>
              <Link to="/about" className="btn btn-secondary">Go to About</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container py-5">
      <h1 className="display-4 mb-3">About Octofit</h1>
      <p className="lead">This app displays data from the Django REST Framework backend via React.</p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Features</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">User authentication and profiles</li>
            <li className="list-group-item">Activity logging and tracking</li>
            <li className="list-group-item">Team creation and management</li>
            <li className="list-group-item">Competitive leaderboard</li>
            <li className="list-group-item">Personalized workout suggestions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/logo.png" alt="Octofit Logo" className="logo" />
            Octofit
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#octofitNavbar"
            aria-controls="octofitNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="octofitNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

