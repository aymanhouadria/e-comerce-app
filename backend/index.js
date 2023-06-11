const  express =  require("express");
const  cors =  require("cors");

const app =  express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
    res.send("Welcome")
});
const port = process.env.PORT || 5000;
app.listen(5000, console.log(`Server running on port ${port}`));