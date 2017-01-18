/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

var users = [];

users.push ({
    name: "OA",
    ages: 18,
  });

users.push ({
    name: "Teresa",
    ages: 16,
  });


for (var i = 0; i < users.length; i++) {
  console.log (users[i].name);
  console.log (users[i].ages);
  console.log ("-----------------");
}