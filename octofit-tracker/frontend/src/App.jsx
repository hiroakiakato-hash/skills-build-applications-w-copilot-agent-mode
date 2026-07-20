import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <p className="text-uppercase fw-semibold text-primary mb-3">OctoFit Tracker</p>
          <h1 className="display-4 fw-bold mb-3">Make fitness fun for every student.</h1>
          <p className="lead text-muted mb-4">
            Track workouts, join friendly challenges, and celebrate progress with a simple student-friendly experience.
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <a className="btn btn-primary btn-lg" href="https://github.com/hiroakiakato-hash/skills-build-applications-w-copilot-agent-mode" target="_blank" rel="noreferrer">
              Explore the project
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="http://localhost:8000" target="_blank" rel="noreferrer">
              Open API preview
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 fw-semibold mb-3">What’s ready</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">React 19 + Vite frontend</li>
                <li className="list-group-item px-0">Express + TypeScript backend</li>
                <li className="list-group-item px-0">MongoDB-ready Mongoose setup</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
