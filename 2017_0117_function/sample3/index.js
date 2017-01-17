/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

var func1 = function (p1, p2) {

  var p3 = (p1 + p2) * 5 / 2;

  return p3;
};

var a = 1, b = 2;
var c = func1 (a, b);
console.log (c);

var d = 50, e = 100;
var f = func1 (d, e);
console.log (f);
