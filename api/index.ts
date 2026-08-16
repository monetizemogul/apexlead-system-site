import { createExpressApp } from '../server/app.js';
import type { IncomingMessage, ServerResponse } from 'http';

const app = createExpressApp();

// Vercel Serverless Function Handler
export default function handler(req: IncomingMessage, res: ServerResponse) {
  return app(req as any, res as any);
}
