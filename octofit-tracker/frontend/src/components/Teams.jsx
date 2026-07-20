import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTeams() {
      try {
        const codespacesExample = 'https://<codespace-name>-8000.app.github.dev/api/teams';
        const apiUrl = `${getApiBaseUrl()}/api/teams/`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data?.data ?? [];
        setTeams(payload);
      } catch (err) {
        setError(err.message || 'Unable to load teams');
      } finally {
        setLoading(false);
      }
    }

    loadTeams();
  }, []);

  if (loading) return <p className="text-muted">Loading teams…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h5 fw-semibold">Teams</h2>
        <ul className="list-group list-group-flush mt-3">
          {teams.map((team) => (
            <li key={team._id || team.id || team.name} className="list-group-item px-0">
              <div className="fw-semibold">{team.name}</div>
              <div className="text-muted small">{team.school} · {team.sport} · {team.members} members</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
