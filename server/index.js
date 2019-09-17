const express = require('express');
const { resolve } = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(resolve(__dirname, '../ui/dist')));
app.get('*', (request, response) => {
  response.sendFile(resolve(__dirname, '../ui/dist/index.html'));
});

app.listen(port, () => {
  console.info(`server started on port ${port}`);
});
