import { app } from './index';

const codespaceName = process.env.CODESPACE_NAME;
const codespacesUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

console.log(`Configured API URL: ${codespacesUrl}`);

export default app;
