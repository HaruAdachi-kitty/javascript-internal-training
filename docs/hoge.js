function fn1() {
  console.log("fn1");
}
fn1();

function fn2() {
  console.log("fn2");
}

function fn3() {
  console.log("fn3");
}
const words = ["fn1", "fn2", "fn3"];
const result = ["fn1", "fn2", "fn3"].filter(function (word) {
  // word: "fn1", "fn2", "fn3"
  return word.length > 3;
});
console.log(result);

// 通常の関数宣言
function fn4() {
  console.log("fn4");
}
fn4();

// 関数式
const fn5 = function () {
  console.log("fn5");
};
fn5();

// アロー関数
const fn6 = () => console.log("fn6");
fn6();
let c = "c";
let keyName = "a";
const obj = { a: 1, b: 2, c: 3 };
const a = obj[keyName]; // 1
// obj['a'] → 1
const b = obj[keyName]; // 2
// obj['1'] → 2
console.log(a, b, c);

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

let str1 = 'aaa';
let str2 = 'bbb';

let msg = '結合:' + str1 + str2;
