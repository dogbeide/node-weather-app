// var getUser = (id, callback) => {
//   var user = {
//     id,
//     name: 'David',
//   };
//
//   callback(user);
// };
//
// getUser(89, (user) => {
//   console.log(user);
// });

var getUser = (id, callback) => {
  
  var user = {
    id,
    name: 'David',
  };

  setTimeout(() => {
    callback(user);
  }, 2000);

};

getUser(89, (user) => {
  console.log(user);
});
