const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/burgers", (req, res) => {
  res.send("We have juicy burgers");
});

app.get("/echo", (req, res) => {
  const responseText = `Here are some details of your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Path:${req.path}

    
    `;

  res.send(responseText);
});

app.get("/sum", (req, res) => {
    if (!req.query.a) {
        return res.status(400).send("Please provide number a");
      } 
      if (!req.query.b) {
        return res.status(400).send("Please provide number b");
      }
  
  
    const a = Number(req.query.a);
  const b = Number(req.query.b);
  console.log(a, b);
  const result = a + b;

  
  res.status(200).send(`${result}`);
});

app.get("/cipher", (req,res)=>{
    const text = req.query.text.toUpperCase();
    const shift = Number(req.query.shift);
    let charArray= [];
    let caesarCipher=[];
    let final = []
    for(let i=0;i<text.length;i++){

 charArray.push(text.charCodeAt(i))
 
//console.log("this is charcode",charArray)


    }
charArray.map(each=> caesarCipher.push( each+shift))
caesarCipher.map(each=>final.push(String.fromCharCode(each)))
console.log('this is final', final)
const result= final.join('')
res.status(200).send(result)
})

app.listen(8000, () => {
  console.log("Express server is listening on port 8000");
});
