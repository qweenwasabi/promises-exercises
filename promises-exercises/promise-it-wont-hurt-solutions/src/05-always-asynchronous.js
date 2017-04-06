var promise = new Promise(function(fulfil, reject) {
   fulfil("PROMISE VALUE")
})

promise.then(console.log)

console.log("MAIN PROGRAM")
