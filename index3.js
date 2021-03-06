console.log("Before Prepare Food");

function prepareFood(data){

    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(data !== 2){
                console.log("Prepare food");
                resolve("Food is Ready");
            }
            else{
                reject("Value not accepted");
            }
            
        },10);
    });
    return promise;    
    
}
function prepareFrenchToast(){
    let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Prepare French Toast");
        resolve("French Toast is Ready");
    },20);
    });
    return promise;
}

function prepareCoffee(){
    let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Prepare Coffe");
        resolve("Coffee is Ready");
    },30);
    });
    return promise;
}

async function startProcess(){
    try {
    let foodValue = await prepareFood(2);
    console.log("Food",foodValue);
    let frenchToastValue = await prepareFrenchToast();
    console.log("Toast",frenchToastValue);
    let coffeeValue = await prepareCoffee();
    console.log("Coffee",coffeeValue);
    }
    catch(error){
        console.log("Error in catch = " ,error);
    }
}

startProcess();

console.log("After Prepare Food dinner is Ready");

/*


function coffeecallback(value){
    console.log("Coffee is Ready callback = ",value);
}

let promise = prepareFood(2);
//console.log("Promise=",promise);
promise.then(function(value){
    console.log("Food is Ready callback =",value);
    return prepareFrenchToast();
})
.then(function(frenchToastValue){
    console.log("French Toast is Ready callback = ",frenchToastValue);
    return prepareCoffee();
})
.then(function(prepareCoffee){
    console.log("Coffee is Ready callback = ",coffeeValue);
})

.catch(function(error){
    console.log("Error =",error);
});


/*
prepareFood(function (value){
    console.log("Food is Ready callback = ",value);
    prepareFrenchToast(function (value){
        console.log("French Toast is Ready callback = ",value);
        prepareCoffee(function (value){
            console.log("Coffe is Ready callback = ",value);
        });
    });
});

prepareFood(mycallback);*/


console.log("After Prepare Food dinner is ready");