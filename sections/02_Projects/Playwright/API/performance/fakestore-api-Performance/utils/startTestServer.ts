import http from 'http';

type ServerOptions = {
  port?: number;
  handler: http.RequestListener;
};

export async function startTestServer({ port = 0, handler }: ServerOptions) {
  return new Promise<{
    server: http.Server;
    port: number;
    stop: () => Promise<void>;
  }>((resolve, reject) => {
    const server = http.createServer(handler);

    server.listen(port, () => {
      const address = server.address();
      if (typeof address === 'object' && address?.port) {
        resolve({
          server,
          port: address.port,
          stop: () =>
            new Promise<void>((stopResolve, stopReject) => {
              server.close((err) => (err ? stopReject(err) : stopResolve()));
            }),
        });
      } else {
        reject(new Error('Failed to start server'));
      }
    });
  });
}
