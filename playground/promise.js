var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers')
      }
    }, 1500);
  });
};

asyncAdd(12, '44').then((result) => {
  console.log('Result:', result);
  return asyncAdd(result, 33);
}).then((result) => {
  console.log('Should be 78:', result);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

// var prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Ayyy success');
//     // reject('Unable to keep promise');
//   }, 2500);
// });
//
// prom.then((message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log('Error:', errorMessage);
// });
