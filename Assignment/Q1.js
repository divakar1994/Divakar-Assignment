function callback(){
    console.log("RUNNING");
}

function setTimeoutSync(callback,n){
    var date= Date.now();
    var time=0;
    do
    {
        time= Date.now();
    }while((time-date)<n);
    callback();
}
setTimeoutSync(callback,10000)