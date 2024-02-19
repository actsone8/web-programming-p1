const menuItems = ['sofa', 123, true, [1, 2, 3], { height: 10 }];
console.log("hi mom")
console.log(menuItems);

exports.findAll = () => {
  return new Promise(resolve => resolve(menuItems));
};
