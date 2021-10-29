import express from 'express';

const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('🔥 Server started on port 3000');
});
