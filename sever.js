const express = require("express")

const app = express()

const data = require("./models/Database")

app.set("view engine" , "ejs")

app.set("views","folder")

app.use(express.urlencoded({extended:true}))

const DBurl="mongodb+srv://PhyoWaiYanOo:pndhpwyofef21@cluster0.frnwhka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const mongoose = require("mongoose");

mongoose.connect(DBurl).then(()=>{

    console.log("connected");

}).catch((err)=>{

    console.log(err);

});
app.get("/view", async (req , res )=>{
    let datas = await data.find().sort({createdAt : -1})
res.status(200).render("wellcome",{datas})
});
app.get("/",(req , res)=>{
res.status(200).render("form")
})

app.post("/login",async (req , res)=>{
    let {name,email,password} = req.body
    const userinput = new data(
        {name,email,password}
    )
    await userinput.save()
    res.redirect("/view") 
});
app.get("/back",(req , res)=>{
    res.status(301).redirect("/")
})
app.get("/delete/:id" , async(req , res)=>{
    let dat = req.params.id
    await data.findByIdAndDelete(dat)
    res.status(301).redirect("/view")
})
app.listen(3000)
