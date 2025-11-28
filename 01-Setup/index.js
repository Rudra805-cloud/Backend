//console.log("hellow rudra");
/*{is file ko run karne ke liye direct bhi kar skate the node index.js run hoti par jab jayada chize ho isklieye hi hum package file me multiple script task likhte hai bus direct vo karo aur run hoga}*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("twitter page")
})
app.get('/youtube',(req,res)=>{
    res.send("Youtube page")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})