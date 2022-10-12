// global.name = 'window2';
//
// exports.name = 'window'

name = 'window' // 等同于 window.name = 'window'

let person1 = {
  name: 'person1',
  show1: function () { console.log(this.name) },  // 由于 fun 的存在 当前作用域的this = person1
  show2: () => console.log(this.name), // 匿名函数 this 作用域在 window       详情见 obj = { name: '1', text: this.name }
  show3: function () {
    return function () { console.log(this.name); }  // 先返回函数,返回函数时确定this
  },
  show4: function () {
    return () => console.log(this.name); // 先返回匿名函数,返回函数时确定this
  }
}
var person2 = { name: 'person2' };
person1.show1();
person1.show1.call(person2)

// 非严格模式
person1.show2();
person1.show2.call(person2)

person1.show3()(); // 先返回函数,调用时this指向这句话运行时作用域 (this = window)
person1.show3().call(person2); // 先返回函数,调用时使用call修改 (this = person2)
person1.show3.call(person2)(); // 执行show3时call修改 (this = person2), 结果返回函数,调用时this指向这句话运行时作用域 (this = window)

person1.show4()(); // 先返回匿名函数,this来源与匿名函数的父级作用域(this = person1),再调用(this = person1)
person1.show4().call(person2); // 先返回匿名函数,this来源与匿名函数的父级作用域(this = person1),再调用时call修改 (this = person2),匿名函数不可修改this,所以最终(this = person1)
person1.show4.call(person2)(); // 先返回匿名函数,返回时使用call修改 (this = person2)父级作用域(this = person2),再调用(this = person2)

