import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running");
});
app.get("/cpu",(req,res)=>{
    for(let i =0 ; i<=100000;i++){
        Math.random();
    }
    res.send("hello world")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});