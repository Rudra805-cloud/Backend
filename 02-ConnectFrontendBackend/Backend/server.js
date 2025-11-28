import express from 'express';
const app = express();

const port =process.env.port||3000;

app.get('/',(req,res)=>{
    res.send("server is ready");
})
app.get('/api/jokes',(req,res)=>{
   const jokes = [
  {
    id: 1,
    setup: "Why don’t programmers play hide and seek?",
    punchline: "Because they can never `git` commit to hiding!",
    category: "programming"
  },
  {
    id: 2,
    setup: "Why did the computer get cold?",
    punchline: "Because it forgot to close its Windows!",
    category: "computer"
  },
  {
    id: 3,
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because he didn’t Node how to Express himself!",
    category: "programming"
  },
  {
    id: 4,
    setup: "Why did the student eat his homework?",
    punchline: "Because the teacher told him it was a piece of cake!",
    category: "school"
  },
  {
    id: 5,
    setup: "Why don't skeletons fight each other?",
    punchline: "They don’t have the guts!",
    category: "funny"
  }
];
    res.send(jokes)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


