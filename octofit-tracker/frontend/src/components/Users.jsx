import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadUsers() {
      try {
        const codespacesExample = 'https://<codespace-name>-8000.app.github.dev/api/users';
        const apiUrl = `${getApiBaseUrl()}/api/users/`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data?.data ?? [];
        setUsers(payload);
      } catch (err) {
        setError(err.message || 'Unable to load users');
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) return <p className="text-muted">Loading users…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h5 fw-semibold">Users</h2>
        <ul className="list-group list-group-flush mt-3">
          {users.map((user) => (
            <li key={user._id || user.id || user.email} className="list-group-item px-0">
              <div className="fw-semibold">{user.name}</div>
              <div className="text-muted small">
                {user.email} · {user.grade} · {user.fitnessLevel}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
