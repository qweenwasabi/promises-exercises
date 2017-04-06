var promiseRejected = Promise.resolve(new Error("rejected"));
promiseRejected.catch(function(error) {
  console.log("didnt work")
})
