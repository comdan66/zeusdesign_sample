/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

var obj = {
  a: "Hello World!",
  b: function (num) {
    return num + 5;
  }
};

var b_return = obj.b (5);
console.log (b_return);