console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback ayy!');
}, 0);

setTimeout(() => {
  console.log('Nodelay tho');
}, 0);

for (var i = 0; i < 2400; i++){
  console.log('Ending app',i);
}
