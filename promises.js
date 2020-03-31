const backend = (numInput) =>{
    let myPromise = new Promise((resolve, reject) =>{
        if(numInput % 2 == 0){
            resolve(`Number is even: ${numInput}`);
        }else{
            reject(`Number is odd: ${numInput}`);
        }
    });
    return myPromise;
}

const builtInFuncs = () =>{
    let resultEven = backend(6);
    console.log(resultEven);
    let resultOdd = backend(3).catch((error)=>
    {
        console.log(error);
    });
}

const asyncAwait = async () =>{
    const resultEven = await backend(4);
    console.log(resultEven);
    const resultOdd = await backend(1).catch((error)=> {
        console.log(error);
    });
}

asyncAwait();
builtInFuncs();