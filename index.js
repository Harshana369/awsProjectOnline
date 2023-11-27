import app from "./server.js"


app.listen(process.env.PORT,()=>{
    console.log("Proj_Online server is working on port " + process.env.PORT)
})