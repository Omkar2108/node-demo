const express = require('express');

const app = express();
const port = 4000;

app.get('/', (_, res)=>{
  res.send("Hello World!");
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})