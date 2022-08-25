const accessControl=(req,res,next)=>{
    // const access=false;
    // if(!access){
    //     res.status(401).json({
    //         success:false,
    //         message:"basarili degil"

    //     })
    // };

    console.log("access control calisti");
    next();
}
 module.exports={
    accessControl
 };