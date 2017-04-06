var firstPromise = first();

var secondPromise = firstPromise.then(function() {

function second(val){
    return Promise.resolve(val);
})

first().then(second).then(console.log);
