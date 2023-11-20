var a={n:1};
var b=a;
a.x=a={n:2}//a指向a.x的新对象，而b还是指向{n:1}的原始对象

console.log(a);
console.log(b);//原始对象里多了一个新对象

a.n=3//对新对象{n:2}进行修改
console.log(b);

// 输出；
// { n: 2 }
// { n: 1, x: { n: 2 } }
// { n: 1, x: { n: 3 } }