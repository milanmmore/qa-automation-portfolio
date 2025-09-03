import express from 'express';

export async function startServer(port: number) {
  const app = express();
  app.use(express.json());

  app.get('/ping', (_, res) => res.send('pong'));
  app.post('/auth/login', (req, res) => {
    const { username } = req.body;
    res.json({ token: `${username}-token` });
  });

  const server = app.listen(port);

  return {
    stop: () =>
      new Promise<void>((resolve, reject) => {
        server.close(err => (err ? reject(err) : resolve()));
      }),
  };
}
