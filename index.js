console.log("Before Prepare Food");

function prepareFood(callback){
    setTimeout(()=>{
        console.log("Prepare food");
        callback("Food is Ready");
    },20);
    
}

function mycallback(value){
    console.log("Value = ",value);
}


prepareFood(mycallback);

console.log("After Prepare Food dinner is ready");