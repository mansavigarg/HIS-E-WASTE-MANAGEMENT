import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/about", (req , res) => {
    res.sendFile(__dirname + "/html/about.html");
});
app.get("/book", (req , res) => {
    res.sendFile(__dirname + "/html/book.html");
});
app.get("/dashboard", (req , res) => {
    res.sendFile(__dirname + "/html/dashboard.html");
});
app.get("/index", (req , res) => {
    res.sendFile(__dirname + "/html/index.html");
});
app.get("/sign_in", (req , res) => {
    res.sendFile(__dirname + "/html/sign_in.html");
});
app.get("/sign_up", (req , res) => {
    res.sendFile(__dirname + "/html/sign_up.html");
});



app.listen(port , () => {
    console.log(`This server is running on ${port}.`);
});



