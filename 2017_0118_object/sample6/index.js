/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

function createUser (n, a) {
  return {
    name: n,
    ages: a,
  };
}

var users = [];

users.push (createUser ("OA", 18));
users.push (createUser ("Teresa", 16));

for (var i = 0; i < users.length; i++) {
  console.log (users[i].name);
  console.log (users[i].ages);
  console.log ("-----------------");
}