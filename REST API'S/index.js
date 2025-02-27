const express=require("express");
const app=express();
const port=8080;
const path=require("path");

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride=require("method-override");
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
{
    id:         uuidv4() ,
    username:  "KUNDAN SOLANKI",
    content:   "Hello World! This is my first post.",
},
{
    id:         uuidv4(),
    username:   "CHIKU RAJPUT",
    content:    "This is my second post.",
},
{
    id:         uuidv4(),
    username:    "IMPOSTER",
    content:     "This is my third post.",
},

];

app.get("/posts",(req,res)=>{
    res.render("index.ejs", {posts} );
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs" );
});


app.post( "/posts", ( req , res )=>{
let {username,content}=req.body;  
let id=uuidv4();  
posts.push({id,username,content});
res.redirect("/posts");
}
)

app.get("/",(req,res)=>{
    res.send("serving working well!");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post= posts.find((p)=> p.id===id);
    res.render("show.ejs",{post});
  
})

app.patch("/posts/:id",(req,res)=>{
let {id}=req.params;
let newContent=req.body.content;
let post= posts.find((p)=> p.id===id);
post.content=newContent;
console.log(post);
res.redirect("/posts");

});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post= posts.find((p)=> p.id===id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts= posts.filter((p)=> id !== p.id); 
     res.redirect("/posts");
})

app.listen(port,()=>{
    console.log("listening to port:8080");
});