Answer the following questions to help stretch your thoughts: 

What is a Promise? 
    A promise is a proxy for a value that isn't known at promise creation.
    A promise can be fulfilled (which creates a value) or rejected (creates an error).
    Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
How do we use Promises? 
    Promises are objects that can be declared using 'new' and can be stored in a variable.
    Promises should be made with two parameters: resolve and reject, plus a callback function parameter.
    Inside the callback, conditionals can determine all of the cases in which a promise should be resolved
    or rejected.
    Example: let myPromise = new Promise((resolve, reject)=>{
        //conditional that leads to either resolving or rejecting the promise.
        if(condition good) {resolve(some resolve statement)}
        else {reject}
    });
What are the benefits of using Promises? 
    Promises allow us to return asynchronous method values like we do with sychronous methods.
    Instead of returning the value immediately, the asynchronous method returns a promise to 
    supply the value in the future.
    Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise