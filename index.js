const express = require("express");
const app = express();

const port = 5000;

app.use(express.json());

const myPosts = [
  { id: 1, title: "post 1", content: "this is post 1" },
  { id: 2, title: "post 2", content: "this is post 2" },
  { id: 3, title: "post 3", content: "this is post 3" },
];

app.get("/", (req, res) => {
  res.send("My Blog app");
});

app.get("/posts", (req, res) => {
  res.json(myPosts);
});

app.get("/posts/:id", (req, res) => {
  const post = myPosts.find((post) => post.id === Number(req.params.id));
  if (!post) {
    res.status(404).send({ error: "post not found" });
  } else {
    res.json(post);
  }
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = req.body;

  if (!title & !content) {
    res.status(400).send({ error: "posts must have title and content" });
  } else {
    myPosts.push(newPost);
    res.json(newPost);
  }
});

app.listen(port, () => {
  console.log(`port is running at ${port}`);
});
