const express = require('express');
const mysql = require('mysql');
const cors=require('cors');  
const app = express();
app.use(express.json()); 
app.use(cors());
const conex = mysql.createConnection({ 
     host: 'rdswssh45zep1dpvgvsjvpo.mysql.rds.aliyuncs.com', 
     user: 'jtp', 
     password:'crgGodH8WaYAXgtu', 
     database:'game' 
 })
conex.connect();

 
app.get('/', (req , res) => {
  res.send('Hello Express app!')
});
app.post('/mostrar', (req , res)=>{
  let buscar=req.body.buscar
  if(buscar==""){
    const consulta = `SELECT * FROM tbl_cliente`
 conex.query(consulta,(rows)=>{ 
     console.log(rows);
   res.json({
     "result" : rows
   })
   
 }) 
  }
  

  
});
app.listen(3000, () => {
  console.log('server started');
});
conex.end()