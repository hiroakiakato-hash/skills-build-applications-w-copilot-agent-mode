import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadActivities() {
      try {
        const codespacesExample = 'https://<codespace-name>-8000.app.github.dev/api/activities';
        const apiUrl = `${getApiBaseUrl()}/api/activities/`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data?.data ?? [];
        setActivities(payload);
      } catch (err) {
        setError(err.message || 'Unable to load activities');
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  if (loading) return <p className="text-muted">Loading activities…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h5 fw-semibold">Activities</h2>
        <ul className="list-group list-group-flush mt-3">
          {activities.map((activity) => (
            <li key={activity._id || activity.id || activity.type} className="list-group-item px-0">
              <div className="fw-semibold">{activity.type}</div>
              <div className="text-muted small">{activity.minutes} min · {activity.points} pts</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
