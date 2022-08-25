const express= require ("express");

const {accessControl}=require("./middleware")
const users=[
    {id:1,name:"ahmet",place:"yildirim"},
    {id:2,name:"mehmet",place:"nilufer"}
]

const app=express();
const PORT=5000;

// app.use(accessControl);//uygulama kapsaminda kullandik middleware i,burada degilde request icinde /users tan sonra accessControl yazarsak sadece o sorguya ozgu calisacak

app.use(express.json());
// get request
// localhost:5000/users
app.get("/users",(req,res,next)=>{
    // res.send("hello express")
    res.json({
        success:true,
        data:users
    });
});

app.post("/users",(req,res,next)=>{
    users.push(req.body);
    res.json({
        success:true,
        data:users
    });
});

app.put("/users/:id",(req,res,next)=>{
    const id=parseInt(req.params.id) ;

    for(let i=0;i<users.length;i++){
        if(users[i].id===id){
            users[i]={
                ...users[i],
                ...req.body
            }
        }
    };
    res.json({
        success:true,
        data:users
    });
});


app.delete("/users/:id",(req,res,next)=>{
    const id=parseInt(req.params.id) ;

    for(let i=0;i<users.length;i++){
        if(users[i].id===id){
            users.splice(i,1);
        }
    };
    res.json({
        success:true,
        data:users
    });
});

app.listen(PORT,()=>{

    console.log("server calisiyor");
})