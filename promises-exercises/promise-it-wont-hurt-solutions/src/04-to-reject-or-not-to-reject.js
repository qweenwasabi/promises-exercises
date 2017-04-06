var promise = new Promise(function(fulfil, reject) {
  fulfil("I FIRED")
  reject(new Error('I DID NOT FIRE'))
})

function onReject (error) {
  console.log(error.message)
}

promise.then(console.log, onReject)
