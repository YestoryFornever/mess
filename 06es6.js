1. Object.is() 与原来的比较操作符“===”、“ ==”的区别？
	两等号判等，会在比较时进行类型转换；
	三等号判等(判断严格)，比较时不进行隐式类型转换,（类型不同则会返回false）；
	Object.is 在三等号判等的基础上特别处理了 NaN 、-0 和 +0 ，保证 -0 和 +0 不再相同，
	但 Object.is(NaN, NaN) 会返回 true.
	Object.is 应被认为有其特殊的用途，而不能用它认为它比其它的相等对比更宽松或严格。

2. 谈一谈你对ECMAScript6的了解？
	包管理
	语法糖
	
3. ECMAScript6 怎么写class，为什么会出现class这种东西?
	原型写法与普通面向对象差别比较大

4. es3，es5，es6的区别；
	es3=>es5 语法糖
	es5=>es6 模块 export import