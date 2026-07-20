import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

export default function Leaderboard() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/leaderboard/`);
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data?.data ?? [];
        setRows(payload);
      } catch (err) {
        setError(err.message || 'Unable to load leaderboard');
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  if (loading) return <p className="text-muted">Loading leaderboard…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h5 fw-semibold">Leaderboard</h2>
        <ul className="list-group list-group-flush mt-3">
          {rows.map((entry) => (
            <li key={entry._id || entry.id || entry.rank} className="list-group-item px-0">
              <div className="fw-semibold">#{entry.rank || '—'} · {entry.points} pts</div>
              <div className="text-muted small">{entry.userId || entry.name || 'Student'}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
