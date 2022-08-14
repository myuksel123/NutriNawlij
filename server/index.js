const path = require('path');
const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { resolveSoa } = require('dns');
const { Client } = require("pg");


app.use(cors());
let obj;

async function run(){

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "food",
  password: "admin",
  port: 5432,
});

client.connect();

client.query('Select * from public."Nutrients"', (err,res)=>{
  if(!err){
   obj = res.rows;
    console.log(obj);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

}
run();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get("/catalog", (req,res)=>{
  res.send(obj);
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});