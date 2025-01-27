
import { handle } from 'hono/vercel';
import { Hono } from 'hono';
import { addComplaint } from './controllers/health-route';

//export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.post('/health/complaint', addComplaint);

export default app

export const POST = handle(app);
