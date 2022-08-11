const path = require('path');
const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const oracledb = require('oracledb');
//const { resolveSoa } = require('dns');
//oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});