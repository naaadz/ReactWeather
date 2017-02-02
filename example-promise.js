function addPromise(a,b) {
  return new Promise(function(resolve, reject){

    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('one of those was not a number');
    }
  })
}

addPromise(2,2).then(function(sum){
  console.log(sum);
}, function(err){
  console.log(err);
});

addPromise(2).then(function(sum){
  console.log(sum);
}, function(err){
  console.log(err);
});
