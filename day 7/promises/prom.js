

let myPromise = new Promise(function(myResolve, myReject) {
    let error = 0;
  
    if (error == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
myPromise.then(
    message=>console.log(message)
).catch(reason=>console.log(reason))
.finally(()=>console.log("ready to go"));