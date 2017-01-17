/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */



var users = [];
users.push (85);
users.push (80);
users.push (83);
console.log (users);

users.reduce (function (a, b) {
  return a + b;
});
