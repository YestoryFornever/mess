#原型链#
	1. * javascript创建对象的几种方式？
		javascript创建对象简单的说, 无非就是使用内置对象或各种自定义对象，当然还可以用JSON；但写法有很多种，也能混合使用。

		1、对象字面量的方式
			person = { firstname: "Mark", lastname: "Yun", age: 25, eyecolor: "black" };

		2、用function来模拟无参的构造函数
			function Person() { }
			var person = new Person();//定义一个function，如果使用new"实例化",该function可以看作是一个Class
			person.name = "Mark";
			person.age = "25";
			person.work = function () {
				alert(person.name + " hello...");
			}
			person.work();

		3、用function来模拟参构造函数来实现（用this关键字定义构造的上下文属性）
			function Pet(name, age, hobby) {
				this.name = name;//this作用域：当前对象
				this.age = age;
				this.hobby = hobby;
				this.eat = function () {
					alert("我叫" + this.name + ",我喜欢" + this.hobby + ",是个程序员");
				}
			}
			var maidou = new Pet("麦兜", 25, "coding");//实例化、创建对象
			maidou.eat();//调用eat方法

		4、用工厂方式来创建（内置对象）
			var wcDog = new Object();
			wcDog.name = "旺财";
			wcDog.age = 3;
			wcDog.work = function () {
				alert("我是" + wcDog.name + ",汪汪汪......");
			}
			wcDog.work();

		5、用原型方式来创建
			function Dog() {

			}
			Dog.prototype.name = "旺财";
			Dog.prototype.eat = function () {
				alert(this.name + "是个吃货");
			}
			var wangcai = new Dog();
			wangcai.eat();

		5、用混合方式来创建
			function Car(name, price) {
				this.name = name;
				this.price = price;
			}
			Car.prototype.sell = function () {
				alert("我是" + this.name + "，我现在卖" + this.price + "万元");
			}
			var camry = new Car("凯美瑞", 27);
			camry.sell();

	2. * JavaScript原型，原型链 ? 有什么特点？
		每个对象都会在其内部初始化一个属性，就是prototype(原型) ，当我们访问一个对象的属性时，
		如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，
		于是就这样一直找下去，也就是我们平时所说的原型链的概念。

		关系：instance.constructor.prototype = instance.__proto__
		特点：
			JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。
			当我们修改原型时，与之相关的对象也会继承这一改变。

		当我们需要一个属性的时，Javascript引擎会先看当前对象中是否有这个属性， 如果没有的话，
		就会查找他的Prototype对象是否有这个属性，如此递推下去，一直检索到 Object 内建对象。
		function Func() { }
		Func.prototype.name = "Sean";
		Func.prototype.getInfo = function () {
			return this.name;
		}
		var person = new Func();//现在可以参考var person = Object.create(oldObject);
		console.log(person.getInfo());//它拥有了Func的属性和方法
		//"Sean"
		console.log(Func.prototype);
		// Func { name="Sean", getInfo=function()}

	3. 继承
		1>.	Javascript继承有哪两种形式？你能解释一下JavaScript中的继承是如何工作的吗？
			子构造函数中执行父构造函数，并用call\apply改变this
			克隆父构造函数原型上的方法

		2>.	代码实现形式
			function Person(name){
				this.name = name;
			}
			Person.prototype.showName = function(){
				alert(this.name);
			}
			function Worker(name, job){
				Person.apply(this,arguments)//第一种
				this.job = job;
			}
			for(var i in Person.prototype){//第二种
				Worker.prototype = Person.prototype;
			}
			new Worker('sl', 'coders').showName();

		3>.	Javascript如何实现继承？
			1、构造继承
			2、原型继承
			3、实例继承
			4、拷贝继承
			原型prototype机制或apply和call方法去实现较简单，建议使用构造函数与原型混合方式。
			function Parent(){
				this.name = 'wang';
			}
			function Child(){
				this.age = 28;
			}
			Child.prototype = new Parent();//继承了Parent，通过原型

			var demo = new Child();
			alert(demo.age);
			alert(demo.name);//得到被继承的属性
			* JavaScript继承的几种实现方式？
			* 参考：构造函数的继承，非构造函数的继承；

		4 >. hasOwnProperty
			Object.create();
			function Person(name, age) {
				this.name = name;
				this.age = age;
			}
			Person.prototype.hi = function () {
				console.log("Hi,my name is " + this.name + ",I'm" + this.age + "years old now.");
			}
			Person.prototype.LEGS_NUM = 2;
			Person.prototype.ARMS_NUM = 2;
			Person.prototype.walk = function () {
				console.log(this.name + " is walking...");
			};
			function Student(name, age, className) {
				Person.call(this, name, age);
				this.className = className;
			}
			Student.prototype = Object.create(Person.prototype);
			Student.prototype.constructor = Student;
			Student.prototype.hi = function () {
				console.log("Hi,my name is " + this.name + ",I'm" + this.age + "years old now,and from" + this.className + ".");
			}
			Student.prototype.learn = function (subject) {
				console.log(this.name + " is learning " + subject + " at " + subject + " at " + this.className + ".");
			}
			var xxx = new Student("xxx", 26, 'Class 3,Grade 2');
			xxx.hi();
			xxx.LEGS_NUM;
			xxx.walking();
			xxx.learn('math');

#作用域#
	1. this
		1>.this关键字的使用场合和用法（如在构造函数中、setTimeout中）
		2>.写出3个使用this的典型应用
			事件： 如onclickthis->发生事件的对象
			构造函数this->new 出来的object
			call/apply改变this
		3>.对this的理解
			* this总是指向函数的直接调用者（而非间接调用者）；
			* 如果有new关键字，this指向new出来的那个对象；
			* 在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window;

		全局this
		普通函数this
		对象方法this
		对象原型链this
		get / set方法this
		构造器this(指向一个空的并且它的原型为构造器的prototype属性的对象)
		call / apply方法this
		bind方法this
		
	2. Javascript作用链域?
		全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。
		当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找，
		直至全局函数，这种组织形式就是作用域链。

	3. 闭包
		1>. 以下代码点击<p>会输出什么？为什么？能想出几种解决办法。
			//子函数能被外部调用到，则该作用连上的所有变量都会被保存下来。
			<!DOCTYPE HTML>
			<html>
				<head>
					<meta charset="utf-8" />
					<title>闭包演示</title>
					<style type="text/css">
						p{background:gold;}
					</style>
					<script type="text/javascript">
						function init() {
							var pAry = document.getElementsByTagName("p");
								for( var i=0; i<pAry.length; i++ ) {
									pAry[i].onclick = function() {
									alert(i);
									(function(x){
										pAry[x].onclick = function () {
											alert(x);
									})(i);
								}
							}
						}
					</script>
				</head>
				<body onload="init();">
					<p>产品 0</p>
					<p>产品 1</p>
					<p>产品 2</p>
					<p>产品 3</p>
					<p>产品 4</p>
				</body>
			</html>

		2>.	闭包是什么，有什么特性，对页面有什么影响
			闭包就是能够读取其他函数内部变量的函数。
			闭包就是利用函数内部能够读取外部变量，而外部不能读取内部变量这种机制，防止变量被垃圾处理机制回收的一种技巧。

		3>.	什么是闭包（closure），为什么要用它？
			闭包是指有权访问另一个函数作用域中变量的函数，
			创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。
			闭包的特性：
			1.函数内再嵌套函数
			2.内部函数可以引用外层的参数和变量
			3.参数和变量不会被垃圾回收机制回收
			//li节点的onclick事件都能正确的弹出当前被点击的li索引
			<ul id="testUL">
				<li> index = 0</li>
				<li> index = 1</li>
				<li> index = 2</li>
				<li> index = 3</li>
			</ul>
			<script type="text/javascript">
				var nodes = document.getElementsByTagName("li");
				for(i = 0;i<nodes.length;i+= 1){
					nodes[i].onclick = (function(){
						console.log(i+1);//不用闭包的话，值每次都是4
					})(i);
				}
			</script>
			执行say667()后,say667()闭包内部变量会存在,而闭包内部函数的内部变量不会存在
			使得Javascript的垃圾回收机制GC不会收回say667()所占用的资源
			因为say667()的内部函数的执行需要依赖say667()中的变量
			这是对闭包作用的非常直白的描述
			function say667() {
				// Local variable that ends up within closure
				var num = 666;
				var sayAlert = function() {
					alert(num);
				}
				num++;
				return sayAlert;
			}
			var sayAlert = say667();
			sayAlert()//执行结果应该弹出的667

	4. 封装
		1 >. 简述javascript封装

#变量声明提升 执行上下文#
	expulsion context(一个栈的概念)
	Variable Object(变量对象) 包含了变量、函数声明、函数参数
	执行上下文 = {
		变量对象: {
			变量,
			函数声明,
			函数参数
		}
	}
	Active Object(激活对象)函数中特有

	顺序为
	1参数(若未传入, 初始化为undefined)
	2函数声明(若发生命名冲突, 会覆盖)
	3变量声明(初始化变量值为undefined, 若发生命名冲突会忽略, 即原则上不使用 undefined 覆盖有效的值)
	function fn(arg1, arg2) {
		var arg3 = 0;
		function fnX() { }
		var arg4 = function fnY() { };
		(function fnZ() { });
		arg5 = 1;
	}
	fn(2);

	AO(test) = {
		arg1: 2,
		arg2: undefined,
		fnX: function fnX() { },
		arg3: undefined,
		arg4: undefined,
		arg5: undefined
	}
	后续函数语句
	arg3 = 0;
	arg4 = function fnY() { };
	(function fnZ() { });
	arg5 = 1;

	Exercise:
		>>
			alert(x);//function
			var x = 10;
			alert(x);//10
			x = 20;
			function x() { }
			alert(x);//20
			if (true) {
				var a = 1;
			} else {
				var b = true;
			}
			alert(a);//1
			alert(b);//undefined
		>>
			var a = 2;
			function show() {
				window.setTimeout(function () { a = 22 }, 1000)
				var a = 4;
				window.setTimeout(function () { a = 222 }, 3000)
			}
			show();
			alert(a);//2
		>>
			if ("a" in window) {
				var a = 1;
			}
			alert(a);//1
		>>
			var a = 1;
			function a() { };
			alert(a);//1
		>>
			function a(x) {
				return x;
			}
			var a;
			alert(a);//function a(x){...
		>>
			var a = 1;
			function b(x, y, a) {
				arguments[2] = 10;
				alert(a);//10
			}
			b(1, 2, 3);
			alert(a)//1
		>>
			var a = 1;
			function x() {
				a = 2;
			}
			x();
			console.log(a);//2
		>>
			var a = 1;
			function x(a) {
				a = 2;
			}
			x(a);
			console.log(a);//1
		>>
			var a = 2;
			function show() {
				window.setTimeout(function () { alert(a) }, 1000)//4
				var a = 4;
			}
			show();
			alert(a);//2
		>>
			var z = 3;
			(function () {
				var x = 1, y = z = 0;
				console.log(x); console.log(y); console.log(z);//1 0 0
			})();
			console.log(z); console.log(y); console.log(x);//0 error error

#正则#
	1. 正则
		邮箱验证
			/^\w +@\w +.com(.cn) ? $ /
				URL验证
		贪婪匹配
		懒惰匹配

	2. javascript 正则相关方法
		exec【RegExp.exec(str) 】
			返回数组，数组第一项为匹配的字符串
			第二项往后是匹配的子字符串
			数组带有两个属性
			index 匹配到的索引
			input 被匹配的字符串
			/ pl(u)(s) /.exec("1 plus 2 equal 3")
			["plus", "u", "s", index: 2, input: "1 plus 2 equal 3"]

		test【RegExp.test(str) 】
			检测str是否匹配RegExp
			/ a /.test("abc")
			true

		match【str.match(RegExp) 】
			找到字符串中一个或多个（正则含有g时）匹配正则表达式的字符串
			没有找到会返回null
			demo: "1 plus 2 equal 3".match(/\d+/g)将返回['1', '2', '3']

		search 【string.search(RegExp) 】
			匹配string中符合RegExp的子字符串的位置，如果没找到返回 - 1
			'abc'.search(/b/)
			1

		replace 【string.search(RegExp) 】
			'1a2b3c4d'.replace(/\d/g, (item, index, all) => { return 'x' })
			"xaxbxcxd"

		split 【string.search(RegExp) 】
			'a b c d'.split(/\s/)
			["a", "b", "c", "d"]

#数据类型#
	1. 判断执行方向（自左向右）
		"a" == "a" == true
		返回true
		
		赋值执行方向（自右向左）

	2. javascript连续赋值问题：
		var a = { n: 1 }
		var b = a;
		a.x = a = { n: 2 }//全等于b.x = a = {n:2}
		a.x = a = { n: 2 }
		// 先划分出内存，再进行赋值；
		// 划分内存是先把a指向的内存开辟出一个x属性，值为undefined
		// 赋值运算自右向左
		// a = {n:2} 此时a已经指向其他地址
		// 再执行 b.x = a;
		console.log(a.x);//undefind
		console.log(b.x);//{n:2}
		console.log(b.x === a); // true

		a.x和a先被提出来，但是.运算符优先级高于赋值运算符，
		所以先创建a.x = undefined 然后连等赋值从右到左 先执行a= { n: 2 }，
		此时a的引用已经改变，
		但是内存里保存着的a还是之前和b引用相同地址的a，
		所以就变成了对b增添属性，即{n: 1, x:{ n: 2 } }

	3.	Javascript的数据类型都有什么？
		基本数据类型：String, Boolean, Number, Undefined, Null
		引用数据类型：Object(Array, Date, RegExp, Function)
			* 介绍js的基本数据类型。
		Undefined、Null、Boolean、Number、String
			* 介绍js有哪些内置对象？
		Object 是 JavaScript 中所有对象的父对象
		数据封装类对象：Object、Array、Boolean、Number 和 String
		其他对象：Function、Arguments、Math、Date、RegExp、Error

	4.	如何判断某变量是否为数组数据类型？
		方法一.判断其是否具有“数组性质”，如slice()方法。可自己给该变量定义slice方法，故有时会失效
		方法二.obj instanceof Array 在某些IE版本中不正确
		方法三.方法一二皆有漏洞，在ECMA Script5中定义了新方法Array.isArray(), 保证其兼容性，最好的方法如下：
		if(typeof Array.isArray==="undefined")
		{
		Array.isArray = function(arg){
				return Object.prototype.toString.call(arg)==="[object Array]"
			};
		}
	5.	javascript的typeof返回哪些数据类型
		Object number function boolean underfind
	6.	例举3种强制类型转换和2种隐式类型转换?
		强制（parseInt,parseFloat,number）
		隐式（== – ===）
	7.	* JavaScript有几种类型的值？，你能画一下他们的内存图吗？
		栈：原始数据类型（Undefined，Null，Boolean，Number、String）
		堆：引用数据类型（对象、数组和函数）

		两种类型的区别是：存储位置不同；
		原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
		引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其
		在栈中的地址，取得地址后从堆中获得实体
	
	8. * null，undefined 的区别？
		null表示一个对象被定义了，值为“空值”；
		undefined 表示不存在这个值。

		typeof undefined
		//"undefined"
		undefined: 是一个表示"无"的原始值或者说表示"缺少值"，就是此处应该有一个值，但是还没有定义。当尝试读取时会返回 undefined；
		例如变量被声明了，但没有赋值时，就等于undefined

		typeof null
		//"object"
		null : 是一个对象(空对象, 没有任何属性和方法) ；
		例如作为函数的参数，表示该函数的参数不是对象；

		注意：
		在验证null时，一定要使用 　=== ，因为 == 无法分别 null 和　undefined

		再来一个例子：

		null
		Q：有张三这个人么？
		A：有！
		Q：张三有房子么？
		A：没有！

		undefined
		Q：有张三这个人么？
		A：没有！
		
	9. "=="和"==="的不同
		前者会自动转换类型
		后者不会

	10. JavaScript中如何检测一个变量是一个String类型？请写出函数实现
		function isString(obj) {
			return typeof (obj) == 'string' && obj.constructor == String;
		}

#模块化#
	1.	规避javascript多人开发函数重名问题
		命名空间
		封闭空间
		js模块化mvc（数据层、表现层、控制层）
		seajs
		变量转换成对象的属性
		对象化

	2. * 模块化开发怎么做？
	立即执行函数, 不暴露私有成员
		var module1 = (function () {
			var _count = 0;
			var m1 = function () {
				//...
			};
			var m2 = function () {
				//...
			};
			return {
				m1: m1,
				m2: m2
			};
		})();

		（待完善）

	3. * AMD（Modules / Asynchronous - Definition）、CMD（Common Module Definition）规范区别？
		AMD 规范在这里：https://github.com/amdjs/amdjs-api/wiki/AMD
		CMD 规范在这里：https://github.com/seajs/seajs/issues/242
		Asynchronous Module Definition，异步模块定义，所有的模块将被异步加载，模块加载不影响后面语句运行。所有依赖某些模块的语句均放置在回调函数中。

		区别：
		amd: require	依赖前置	提前执行【不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）】
		cmd: import		依赖就近	延迟执行
		
		// CMD
		define(function (require, exports, module) {
			var a = require('./a')
			a.doSomething()
			// 此处略去 100 行
			var b = require('./b') // 依赖可以就近书写
			b.doSomething()
			// ...
		})

		// AMD 默认推荐
		define(['./a', './b'], function (a, b) { // 依赖必须一开始就写好
			a.doSomething()
			// 此处略去 100 行
			b.doSomething()
			// ...
		})
	
	4. MVC
		"Hello World" in MVC
		var M = {}, V = {}, C = {};
		M.data = "hello world";//米
		V.render = function (M) { alert(M.data); }//为炊
		C.handleOnload = function () { V.render(M); }//饭点
		window.onload = C.handleOnLoad;
		--------------------------------------a
		var M = {}, V = {}, C = {};
		M = {
			data: {
				userName: "Dummy Guy",
				userNumber: "000000000"
			},
			setData: function (d) {
				this.data.userName = d.userName;
				this.data.userNumber = d.userNumber;
			},
			getData: function () {
				return data;
			}
		};
		V = {
			userName: document.querySelector("#inputUserName"),
			userNumber: document.querySelector("#inputUserNumber"),
			update: function (M) {
				this.userName.value = M.data.userName;
				this.userNumber.value = M.data.userNumber;
			}
		};
		C = {
			model: M,
			view: V,
			handler: function () {
				this.view.update(this.model);
			}
		};

#DOM#
	1. 我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。
		会执行几次事件 ? 2
			会先执行冒泡还是捕获? 捕获
			父元素捕获
		子元素冒泡
		子元素捕获
		父元素冒泡
		var btn = document.querySelector('button');
		var div = document.querySelector('div');

		btn.addEventListener('click', function () {
			console.log('bubble', 'btn');
		}, false);
		btn.addEventListener('click', function () {
			console.log('capture', 'btn');
		}, true);

		div.addEventListener('click', function () {
			console.log('bubble', 'div');
		}, false);
		div.addEventListener('click', function () {
			console.log('capture', 'div');
		}, true);

	2. DOM操作（添加、移除、移动、复制、创建和查找结点）——基础题，一般不会问
		1）创建新节点
		createDocumentFragment()//创建一个DOM片段
		createElement() //创建一个具体的元素
		createTextNode() //创建一个文本节点
		2）添加、移除、替换、插入
		appendChild()//添加
		removeChild()//移除
		replaceChild()//替换
		insertBefore()//插入
		3）查找
		getElementsByTagName()//通过标签名称
		getElementsByName() //通过元素的Name属性的值
		getElementById()//通过元素Id，唯一性
			obj.appendChidl()
			obj.innersetBefore
			obj.replaceChild
			obj.removeChild

#事件#
	1.	事件
		1 >.Javascript的事件流模型都有什么？
		“事件冒泡”：事件开始由最具体的元素接受，然后逐级向上传播
		“事件捕捉”：事件由最不具体的节点先接收，然后逐级向下，一直到最具体的
		“DOM事件流”：三个阶段：事件捕捉，目标阶段，事件冒泡
		2 >.事件绑定和普通事件有什么区别
		3 >.IE和DOM事件流的区别
		1.执行顺序不一样
		2.参数不一样
		3.事件加不加on
		4.this指向问题
		4 >.	事件委托是什么
		让利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行！
		http://www.webasily.com/?p=78 例子可见此链接
		5 >.	如何阻止事件冒泡和默认事件
		canceBubble return false
		6 >.	事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
		1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。
		2. 事件处理机制：IE是事件冒泡、Firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件；
		3. ev.stopPropagation(); （旧ie的方法 ev.cancelBubble = true; ）

#常用方法#
	1.	Javascript中callee和caller的作用？
		答案：
		caller是返回一个对函数的引用，该函数调用了当前函数；
		callee是返回正在被执行的function函数，也就是所指定的function对象的正文。
		那么问题来了？如果一对兔子每月生一对兔子；一对新生兔，从第二个月起就开始生兔子；假定每对兔子都是一雌一雄，试问一对兔子，第n个月能繁殖成多少对兔子？（使用callee完成）
		var result = [];
		function fn(n) {//典型的斐波那契数列
			if (n == 1) {
				return 1;
			} else if (n == 2) {
				return 1;
			} else {
				if (result[n]) {
					return result[n];
				} else {
					//argument.callee()表示fn()
					result[n] = arguments.callee(n - 1) + arguments.callee(n - 2);
					return result[n];
				}
			}
		}

	2. call和apply的区别
		Object.call(this, obj1, obj2, obj3)
		Object.apply(this, arguments)
		例子中用 add 来替换 sub，add.call(sub, 3, 1) == add(3, 1) ，所以运行结果为：alert(4);

		注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。

		function add(a, b) {
			alert(a + b);
		}

		function sub(a, b) {
			alert(a - b);
		}

		add.call(sub, 3, 1);

	3. 基础方法
		1 >.	split() join() 的区别
		前者是切割成数组的形式，后者是将数组转换成字符串
		2 >.数组方法pop() push() unshift() shift()
		Push()尾部添加 pop()尾部删除
		Unshift()头部添加 shift()头部删除
		3 >.数组和对象有哪些原生方法，列举一下？

	4. new操作符具体干了什么呢?
			1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
		2、属性和方法被加入到 this 引用的对象中。
		3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。

		var obj = {};
		obj.__proto__ = Base.prototype;
		Base.call(obj);
	
	5. eval是做什么的？
		它的功能是把对应的字符串解析成JS代码并运行；
		应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
		由JSON字符串转换为JSON对象的时候可以用eval，var obj = eval('(' + str + ')');

	6. * Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
		hasOwnProperty
		javaScript中hasOwnProperty函数方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。
		使用方法：
		object.hasOwnProperty(proName)
		其中参数object是必选项。一个对象的实例。
		proName是必选项。一个属性名称的字符串值。
		如果 object具有指定名称的属性，那么JavaScript中hasOwnProperty函数方法返回true，反之则返回false。
	
	7. defineProperty, hasOwnProperty, isEnumerable都是做什么用的？
		参考答案：
		Object.defineProperty(obj, prop, descriptor)用来给对象定义属性, 有value, writable, configurable, enumerable, set / get等.
			hasOwnProerty用于检查某一属性是不是存在于对象本身，继承来的父亲的属性不算．
		isEnumerable用来检测某一属性是否可遍历，也就是能不能用for..in循环来取到.

#其他#
	1. Javascript是一门什么样的语言，它有哪些特点？
		没有标准答案

	2.	JSON
		JSON是一种轻量级的数据交换格式，ECMA的一个子集
		优点：轻量级、易于人的阅读和编写，便于机器（JavaScript）解析，支持复合数据类型（数组、对象、字符串、数字）
		JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
		它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小
		如：{"age":"12", "name":"back"}

		JSON字符串转换为JSON对象:
		var obj =eval('('+ str +')');
		var obj = str.parseJSON();
		var obj = JSON.parse(str);

		JSON对象转换为JSON字符串：
		var last=obj.toJSONString();
		var last=JSON.stringify(obj);

	3. javascript的本地对象，内置对象和宿主对象
		本地对象为array obj regexp等可以new实例化
		内置对象为gload Math 等不可以实例化的
		宿主为浏览器自带的document,window 等

	4. document load 和document ready的区别
		Document.onload 是在结构和样式加载完才执行js
		Document.ready原生种没有这个方法，jquery中有 $().ready(function)

	5.javascript的同源策略
		一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合

	6. 说几条写JavaScript的基本规范？
		1.不要在同一行声明多个变量。
		2.请使用 ===/!==来比较true/false或者数值
		3.使用对象字面量替代new Array这种形式
		4.不要使用全局函数。
		5.Switch语句必须带有default分支
		6.函数不应该有时候有返回值，有时候没有返回值。
		7.For循环必须使用大括号
		8.If语句必须使用大括号
		9.for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污染。

	7. * 什么是window对象? 什么是document对象?

	8. javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？
		use strict是一种ECMAscript 5 添加的（严格）运行模式,这种模式使得 Javascript 在更严格的条件下运行,

		使JS编码更加规范化的模式,消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为。
		默认支持的糟糕特性都会被禁用，比如不能用with，也不能在意外的情况下给全局变量赋值;
		全局变量的显示声明,函数必须声明在顶层，不允许在非函数代码块内声明函数,arguments.callee也不允许使用；
		消除代码运行的一些不安全之处，保证代码运行的安全,限制函数中的arguments修改，严格模式下的eval函数的行为和非严格模式的也不相同;

		提高编译器效率，增加运行速度；
		为未来新版本的Javascript标准化做铺垫。

	9. 如何判断一个对象是否属于某个类？
		使用instanceof （待完善）
		if(a instanceof Person){
			alert('yes');
		}

	10.* 用原生JavaScript的实现过什么功能吗？

	11.* js延迟加载的方式有哪些？
		defer和async、动态创建DOM方式（用得最多）、按需异步载入js
		(1) defer，只支持IE
		(2) async：
		(3) 创建script，插入到DOM中，加载完毕后callBack

	12. 如何解决跨域问题?
		jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面

	13. 页面编码和被请求的资源编码如果不一致如何处理？

	14. documen.write和 innerHTML的区别
		document.write只能重绘整个页面
		innerHTML可以重绘页面的一部分

	15. 如何判断当前脚本运行在浏览器还是node环境中？（阿里）
		通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中

	16. 移动端最小触控区域是多大？

	17. 那些操作会造成内存泄漏？
		内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
		垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。
		如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

		setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
		闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）