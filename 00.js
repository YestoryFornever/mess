(function () { console.log("(" + arguments.callee.toString() + ")();") })();
-----------------------------------------------
function addEvent(dom, type, fn) {
	if (dom.addEventListener) {
		dom.addEventListener(type, fn);
	} else if (dom.attachEvent) {
		dom.attachEvent("on" + type, fn);
	} else {
		dom["on" + type] = fn;
	}
}
-----------------------------------------------
function fnStyle(dom, key, val) {
	if (!dom) return;
	if (val) {
		dom.style[key] = val;
	} else {
		if (dom.currentStyle) {//IE
			var _key = key == "float" ? "styleFloat" : key;
			return dom.currentStyle[_key.replace(/(-\w)/g, function (match) {
				return match[1].toUpperCase();
			})];
			/*return dom.currentStyle[_key.replace(/-[a-z]/g, function() { 
				return arguments[0].charAt(1).toUpperCase();//转为驼峰式
			})];*/
		} else {//其他
			return document.defaultView.getComputedStyle(dom, null)[key];
			//或return window.getComputedStyle(dom,null)[key];
			//或return window.getComputedStyle(dom,null).getPropertyValue(key);
		}
	}
}
-----------------------------------------------
if (!Object.prototype.clone) {//复制引用型数据
	Object.prototype.clone = function () {
		var o = this.constructor === Array ? [] : {};
		for (var e in this) {
			o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
		}
		return o;
	}
}
-----------------------------------------------
constructor
	let b = 2;
	b.constructor === Number

typeof(所有引用型的对象都返回"object",无法区分比如 Array、Object)
	"undefined"
	"boolean"
	"number"
	"string"
	"object"

instanceof(判断是否是某构造函数的实例)
	AMadDog instanceof Dog
	return true
-----------------------------------------------
/* function Dog() {
	this.wow = function () {
		console.log("wow");
	}
	this.yelp = function () {
		this.wow();
	}
}
function MadDog() {
	this.yelp = function () {
		var self = this;
		setInterval(function () {
			self.wow();
		}, 500);
	}
}
var ADog = new Dog();
MadDog.prototype = ADog;
var AMadDog = new MadDog();
AMadDog.yelp(); */

function Dog() { }
Dog.prototype.wow = function () {
	console.log("wow");
}
Dog.prototype.yelp = function () {
	this.wow();
}
var ADog = new Dog();
function MadDog() { }
MadDog.prototype = ADog;
MadDog.prototype.yelp = function () {
	var self = this;
	setInterval(function () {
		self.wow();
	}, 500);
}

var AMadDog = new MadDog();
AMadDog.yelp();
-----------------------------------------------
	排序
		function(arr) {
			return arr.sort((a, b) => a - b);
		}
		冒泡
			function(arr) {
				for (let i = 0; i < arr.length; i++) {
					for (let j = 0; j < arr.length - 1 - i; j++) {
						if (arr[j] > arr[j + 1]) {
							let tmp = arr[j];
							arr[j] = arr[j + 1];
							arr[j + 1] = tmp;
						}
					}
				}
			}
		快速排序
			Array.prototype.quick = function () {
				var len = this.length;
				if (len <= 1)
					return this.slice(0);
				var left = [];
				var right = [];
				var mid = [this[0]];
				for (var i = 1; i < len; i++)
					if (this[i] < mid[0])
						left.push(this[i]);
					else
						right.push(this[i]);
				return left.quick().concat(mid.concat(right.quick()));
			};

			var arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];
			arr = arr.quick();
			for (i = 0; i < arr.length; i++)
				document.body.innerHTML += arr[i] + " ";
			document.body.innerHTML += "<br>";

	
		if(!Array.prototype.q){
			Array.prototype.q = function(){
				if(this.length<=1)
					return this.slice(0);
				let left = [],right = [];
				let mid = this[0];
				let i=1;
				while(i<this.length){
					if(this[i]<mid){
						left.push(this[i]);
					}else{
						right.push(this[i]);
					}
					i++;
				}
				return left.q().concat([mid].concat(right.q()));
			}
		}
-----------------------------------------------
如何使 fn() 相当于 new fn()
	var x = function () {// 01定义x方法，此时x的prototype已创建
		return new x.fn.init();// 06 x() 相当于 new x()
	}
	x.fn = x.prototype = { a: 1 };// 02设置x的prototype指向另一对象M 03将x的fn属性指向x的prototype指向的对象M
	x.fn.init = function () {// 04设置x的prototype新增方法init
		this.b = 2;
	}
	x.fn.init.prototype = x.fn; // 05设置x.fn.init的prototype也指向对象M
	/* 此时 x.fn.init.prototype === x.prototype, 因此new x.fn.init()相当于new x() */

	var y = function () {
		return new y.init();
	}
	y.prototype = { a: 1 };
	y.init = function () {
		this.b = 2;
	}
	y.init.prototype = y.prototype;
========================================================================================================

1. 前端模块化
	模块化思想
	amd: require	提前执行	依赖前置
	cmd: import		延迟执行	依赖就近

2. MVC
	let M={},V={},C={};
	M.data = 'hello world';
	V.render = function(){alert(M.data);}
	C.click = function(){
		V.render();
	}
	C.click();

3. css position float display
	if(display==none){
		position = 无效
		float = 无效
	}else{
		if(position==absolute||position==fixed){
			float = none;
			display(inline => block);//这是由于position(absolute/fixed)、float!=none、元素为根元素时需要块布局
		}else{
			if(float!=none){
				display(inline => block);//这是由于position(absolute/fixed)、float!=none、元素为根元素时需要块布局
			}else{
				if(元素为根元素){
					display(inline => block);//这是由于position(absolute/fixed)、float!=none、元素为根元素时需要块布局
				}else{
					display不变
				}
			}
		}
	}

4. 变量提前
	jscode 51 执行上下文

5. 闭包
	javascript 6 闭包
	闭包这个术语，无论中文翻译还是英文解释都太２Ｂ了，我必须骂人，因为它什么其实都不是．
	非要讲它是什么的话，两个字函数，
	更多字,嵌套函数的父子自我引用关系．
	所有函数都是闭包．通俗的说，闭包就是作用域范围，因为js是函数作用域，所以函数就是闭包．
	全局函数的作用域范围就是全局，所以无须讨论．
	更多的应用其实是在内嵌函数，这就会涉及到内嵌作用域，或者叫作用域链．
	说到内嵌，其实就是父子引用关系(父函数包含子函数，子函数因为函数作用域又引用父函数，这它妈不是死结吗？所以叫闭包），
	这就会带来另外一个问题，什么时候引用结束？如果不结束，就会一直占用内存，引起内存泄漏．
	好吧，不用的时候就引用设为空，死结就解开了．

6. 说几个webpack常用插件
	HtmlWebpackPlugin 设置项目起始页面【包括title、favicon等】
	CopyWebpackPlugin 复制
	CommonsChunkPlugin 公共部分打包
	HotModuleReplacementPlugin 热部署
	less-loader postcss-loader css-loader style-loader
	url-loader
	babel-loader
	
7. 	Array 
		slice 根据某数组创建一个新数组，原数组不变
			数据起止点即可：arr.slice(2,4);不包含结尾项
		splice 增删改
			arr.splice(其实操作位置，删除数目，新增项1，新增项2...);
	String
		slice 根据某字符串创建一个新字符串，原字符串不变，负数为从后向前
			string.slice(2,4);不包含结尾项
		substring 根据某字符串创建一个新字符串，原字符串不变，负数被忽略
		substr 从某下标开始取指定数目的字符

8. get post 区别

14. 柯里化函数
	function five(x){
		return arguments.length>0?x(5):5
	}
	function seven(x){
		return arguments.length>0?x(7):7;
	}
	function minus(x) {
		return function (y) {
			return y - x;
		}
	}
	seven(minus(five()))

15. jquery
	见lib

16. 设计模式
	Constructor 构造器【创建对象并初始化方法和属性】
	Module 模块 【利用闭包封装私有成员】
	Singleton 单例 【如果存在返回当前对象，如果不存在则创建一个】
	Observer 观察者 【一个或多个观察者对目标的状态感兴趣，目标状态发生变动时会给观察者发送通知，观察者可以取消对目标的关注】
	Mediator 中介者 【每个观察者都关注当前共享目标即可】
	Prototype 原型 【克隆改造而非新建】
	Commond 命令 【指责分离，所有命令封装到同一个对象上，再将指责委托给不同对象】
	Facade 外观 【将对外api简化为统一的样子】
	Factory 工厂 【不显示地要求我们使用一个constructor函数】
	Mixin 模式 【函数复用，sass/less里用过】
	Decrator 装饰者 【为对象打补丁，补充可复用功能】
	1) 单例：　任意对象都是单例，无须特别处理
	var obj = {name: 'michaelqin', age: 30};

	2) 工厂: 就是同样形式参数返回不同的实例
	function Person() { this.name = 'Person1'; }
	function Animal() { this.name = 'Animal1'; }

	function Factory() {}
	Factory.prototype.getInstance = function(className) {
		return eval('new ' + className + '()');
	}

	var factory = new Factory();
	var obj1 = factory.getInstance('Person');
	var obj2 = factory.getInstance('Animal');
	console.log(obj1.name); // Person1
	console.log(obj2.name); // Animal1

	3) 代理: 就是新建个类调用老类的接口,包一下
	function Person() { }
	Person.prototype.sayName = function() { console.log('michaelqin'); }
	Person.prototype.sayAge = function() { console.log(30); }

	function PersonProxy() { 
		this.person = new Person();
		var that = this;
		this.callMethod = function(functionName) {
			console.log('before proxy:', functionName);
			that.person[functionName](); // 代理
			console.log('after proxy:', functionName);
		}
	}

	var pp = new PersonProxy();
	pp.callMethod('sayName'); // 代理调用Person的方法sayName()
	pp.callMethod('sayAge'); // 代理调用Person的方法sayAge() 

	4) 观察者: 就是事件模式，比如按钮的onclick这样的应用.
	function Publisher() {
		this.listeners = [];
	}
	Publisher.prototype = {
		'addListener': function(listener) {
			this.listeners.push(listener);
		},

		'removeListener': function(listener) {
			delete this.listeners[listener];
		},

		'notify': function(obj) {
			for(var i = 0; i < this.listeners.length; i++) {
				var listener = this.listeners[i];
				if (typeof listener !== 'undefined') {
					listener.process(obj);
				}
			}
		}
	}; // 发布者

	function Subscriber() {

	}
	Subscriber.prototype = {
		'process': function(obj) {
			console.log(obj);
		}
	};　// 订阅者


	var publisher = new Publisher();
	publisher.addListener(new Subscriber());
	publisher.addListener(new Subscriber());
	publisher.notify({name: 'michaelqin', ageo: 30}); // 发布一个对象到所有订阅者
	publisher.notify('2 subscribers will both perform process'); // 发布一个字符串到所有订阅者

17. Node相关

18. React/Redux相关
	store 状态仓储
	state 状态
	action view发出的动作
	dispatch view通过dispatch方法派发action
	reducer 状态转换器，收到action变更状态
	container 