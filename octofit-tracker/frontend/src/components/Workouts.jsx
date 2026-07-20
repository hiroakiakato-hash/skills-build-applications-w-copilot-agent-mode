import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/workouts/`);
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data?.data ?? [];
        setWorkouts(payload);
      } catch (err) {
        setError(err.message || 'Unable to load workouts');
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  if (loading) return <p className="text-muted">Loading workouts…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h5 fw-semibold">Workouts</h2>
        <ul className="list-group list-group-flush mt-3">
          {workouts.map((workout) => (
            <li key={workout._id || workout.id || workout.title} className="list-group-item px-0">
              <div className="fw-semibold">{workout.title}</div>
              <div className="text-muted small">{workout.category} · {workout.duration} min · {workout.difficulty}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
