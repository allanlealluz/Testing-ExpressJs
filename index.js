import express from "express";
import { engine } from "express-handlebars";

const app = express();
const messages = [
    "valuessss",
    "value2"
];
app.use(express.urlencoded({extended:false}))
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render('home', { messages }); // Passar um objeto contendo as mensagens
});
app.get("/dale",(req,res) => {
    res.render('other')
})
app.post("/message",(req,res)=>{
    messages.push(req.body.content)
    res.redirect("/")
})

app.listen(3050, () => {
    console.log('server is running on port 3050');
});