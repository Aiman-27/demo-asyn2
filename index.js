console.log("Before Prepare Food");

function prepareFood(callback){
    setTimeout(()=>{
        console.log("Prepare food");
        callback("Food is Ready");
    },10);
    
}
function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("Prepare French Toast");
        callback("French Toast is Ready");
    },20);
    
}

function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Prepare Coffe");
        callback("Coffe is Ready");
    },30);
    
}

function mycallback(value){
    console.log("Food is Ready callback = ",value);
    prepareFrenchToast(frenchToastcallback);
}

function frenchToastcallback(value){
    console.log("French Toast is Ready callback = ",value);
    prepareFood(coffeecallback);
}

function coffeecallback(value){
    console.log("Coffe is Ready callback = ",value);
}

prepareFood(mycallback);


console.log("After Prepare Food dinner is ready");