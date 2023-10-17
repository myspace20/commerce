import { Application } from "express";



async function startMetricsServer(app:Application){
    app.listen(9000,()=>{
        console.log("metrics server is live")
    })
}


export default startMetricsServer


