1.
var a=2;
function show(){
window.setTimeout(function(){a=22},1000)
var a=4;
window.setTimeout(function(){ a=222},3000)
}
show();
alert(a);
==================================
2.
if ("a" in window) {
var a = 1;
}
alert(a);
=================================
3.
var a = 1;
function a() {

};
alert(a);
=================================
4.
function a(x) {
    return x ;
}
var a;
alert(a);
================================
5.
var a=3222;
function b(x, y, a) {
arguments[2] = 10;
alert(a);
}
b(1, 2, 3);
alert(a)
===================================
var a=1;
function x(){
  a=2;
}
x();
console.log(a);//2

var a=1;
function x(a){
  a=2;
}
x(a);
console.log(a);//1
==================================
var a=2;
function show(){
window.setTimeout(function(){alert(a)},1000)
var a=4;
}
show();
alert(a);
==================================
var z=3;
(function(){
var x = 1, y = z = 0;
console.log(x);console.log(y);console.log(z);
})();
console.log(z);console.log(y);console.log(x);

<script>
   var x = 1, y = z = 0;
   function add(n) {
      return n = n+1;
　 }

   y = add(x);

   function add(n) {
      return n = n + 3;
   }

   z = add(x);
</script>

<script>
   function add(n) {
      return n = n+1;
　 }
   alert(add(1));
</script>

<script>
   function add(n) {
      return n = n+3;
　 }
   alert(add(1));
</script>

1>.	已知ID的input输入框，希望获取这个输入框的输入值，怎么做？（不使用第三方框架）
	document.getElementById("id").value

2>.	希望获取页面中所有的checkbox怎么做？(不使用第三方框架)
	var domList = document.getElementsByTagName('input')
	var checkBoxList = [];
	var len = domList.length;　　//缓存到局部变量
	while (len--) {　　//使用while的效率会比for循环更高
	　　if (domList[len].type == 'checkbox') { //用.type获取dom的property,而不是用getAttribute("type")获取dom的attribute
		　　checkBoxList.push(domList[len]);
	　　}
	}

3>.	设置一个已知id的div的html内容为xxx，字体颜色设置为黑色（不使用第三方框架）
	var dom = document.getElementById('ID');
	dom.innerHTML = 'xxxx';
	dom.style.color = '#000';

4>.	当一个DOM节点被点击时，我们希望执行一个函数，应该怎么做？
	*直接在DOM里绑定事件：<div onclick='test()'><div>
	*在JS里通过onclick绑定：xxx.onclick = test
	*通过事件添加进行绑定：
		addEvent: function(element, type, handle){
			try{ // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
				element.addEventListener(type,handle,false);
			}catch(e){
				try{ // IE8.0及其以下版本
					element.attachEvent('on' + type,handle);
				}catch(e){ // 早期浏览器
					element['on' + type] = handle;
				}
			}
		}
	那么问题来了，Javascript的事件流模型都有什么？
	“事件冒泡”：事件开始由最具体的元素接受，然后逐级向上传播
	“事件捕捉”：事件由最不具体的节点先接收，然后逐级向下，一直到最具体的
	“DOM事件流”：三个阶段：事件捕捉，目标阶段，事件冒泡

5>. 看下列代码输出为何？解释原因
	*	var a;
		alert(typeof a); // undefined
		alert(b); // 报错
	解释：Undefined是一个只有一个值的数据类型，这个值就是“undefined”，
	在使用var声明变量但并未对其赋值进行初始化时，这个变量的值就是undefined。
	而b由于未声明将报错。注意未申明的变量和声明了未赋值的是不一样的。

6	*	var a = null;
		alert(typeof a); //object
	解释：null是一个只有一个值的数据类型，这个值就是null。
	表示一个空指针对象，所以用typeof检测会返回”object”。

7	*	var undefined;
		undefined == null; // true
		1 == true;   // true
		2 == true;   // false
		!2 == false; // true
		0 == false;  // true
		0 == '';     // true
		NaN == NaN;  // false
		[] == false; // true
		[] == ![] == false;   // true

	* undefined与null相等，但不恒等（===）
	* 一个是number一个是string时，会尝试将string转换为number
	* 尝试将boolean转换为number，0或1
	* 尝试将Object转换成number或string，取决于另外一个对比量的类型
	* 所以，对于0、空字符串的判断，建议使用 “===” 。“===”会先判断两边的值类型，类型不匹配时为false。

8	*	var foo = "11"+2-"1";
		console.log(foo);//111
		console.log(typeof foo); //string
	+转字符串; - == 转Number类型

9	*	var a = new Object();
		a.value = 1;
		b = a;
		b.value = 2;
		alert(a.value);
	答案：2(考察引用数据类型细节)

10	*	foo = foo||bar ，这行代码是什么意思？为什么要这样写？
	答案：if(!foo) foo = bar; //如果foo存在，值不变，否则把bar的值赋给foo。
	短路表达式：作为"&&"和"||"操作符的操作数表达式，这些表达式在进行求值时，
	只要最终的结果已经可以确定是真或假，求值过程便告终止，这称之为短路求值。

11	*	var foo = 1;
		function(){
			console.log(foo);
			var foo = 2;
			console.log(foo);
		}
		答案：输出undefined 和 2。上面代码相当于：
			var foo = 1;
			function(){
				var foo;
				console.log(foo); //undefined
				foo = 2;
				console.log(foo); // 2;
			}
		函数声明与变量声明会被JavaScript引擎隐式地提升到当前作用域的顶部，但是只提升名称不会提升赋值部分。

12	* ["1", "2", "3"].map(parseInt) 答案是多少？
		 [1, NaN, NaN] 因为 parseInt 需要两个参数 (val, radix)，
		 其中 radix 表示解析时用的基数。
		 map 传了 3 个 (element, index, array)，对应的 radix 不合法导致解析失败。

13>. 根据要求写代码。
	* 用js实现千位分隔符?(来源：前端农民工，提示：正则+replace)
	function commafy(num) {//仅给最后三个字符前加逗号
	    num = num + '';
	    var reg = /(-?\d+)(\d{3})/g;
	    if(reg.test(num)){
	        num = num.replace(reg, '$1,$2');
	    }
	    return num;
	}
14	*写一个获取非行间样式的函数
	function getStyle(obj,attr,value)
	{
	    if(!obj)return;
	    if(!value)
	    {
	        if(obj.currentStyle){
	            return obj.currentStyle(attr)
	        }else{
	            return document.defaultView.getComputedStyle(obj,null)[attr];//或 window.getComputedStyle(obj,null)[attr];
	        }
	    }else{
	        obj.style[attr]=value
	    }
	}

	function getStyle(obj, style) {
		var _style = (style == "float") ? "styleFloat" : style;
		return document.defaultView
			? document.defaultView.getComputedStyle(obj, null).getPropertyValue(style)
			: obj.currentStyle[_style.replace(/-[a-z]/g, function() { return arguments[0].charAt(1).toUpperCase(); })];
	}
15	*已知数组var stringArray = ["a", "b", "c", "d"]，Alert出"a b c d"。
	var stringArray = ["a", "b", "c", "d"];
	console.log(stringArray.join(" "));

(考察基础API)
16	*var numberArray = [3,6,2,4,1,5];
		1) 实现对该数组的倒排，输出[5,1,4,2,6,3]
			numberArray.reverse();//倒排
			function reverse(arr){
				var rsltArr = [];
				while(arr.length>0){
					rsltArr.push(arr.pop());
				}
				return rsltArr;
			}
		2) 实现对该数组的降序排列，输出[6,5,4,3,2,1]
			numberArray.sort(function(pre,nex){return pre-nex;});//正序排序
			numberArray.sort(function(pre,nex){return nex-pre;});//倒序排序

17	*输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26
		var d = new Date();
		// 获取年，getFullYear()返回4位的数字
		var year = d.getFullYear();
		// 获取月，月份比较特殊，0是1月，11是12月
		var month = d.getMonth() + 1;
		// 变成两位
		month = month < 10 ? '0' + month : month;
		// 获取日
		var day = d.getDate();
		day = day < 10 ? '0' + day : day;
		alert(year + '-' + month + '-' + day);
18	*将字符串"<tr><td>{$id}</td><td>{$name}</td></tr>"中的{$id}替换成10，{$name}替换成Tony （使用正则表达式）
		答案："<tr><td>{$id}</td><td>{$id}_{$name}</td></tr>".replace(/{\$id}/g, ’10’).replace(/{\$name}/g, ‘Tony’);
19	*为了保证页面输出安全，我们经常需要对一些特殊的字符进行转义，请写一个函数escapeHtml，将<, >, &, “进行转义
		function escapeHtml(str) {
			return str.replace(/[<>”&]/g, function(match) {
				switch (match) {
					case “<”:
						return “&lt;”;
					case “>”:
						return “&gt;”;
					case “&”:
						return “&amp;”;
					case “\””:
						return “&quot;”;
				  }
			  });
		}
20	*用js实现随机选取10–100之间的10个数字，存入一个数组，并排序。
	var iArray = [];
	funtion getRandom(istart, iend){
			var iChoice = istart - iend +1;
			return Math.floor(Math.random() * iChoice + istart;
	}
	for(var i=0; i<10; i++){
			iArray.push(getRandom(10,100));
	}
	iArray.sort();
21	*把两个数组合并，并删除第二个元素。
	var array1 = ['a','b','c'];
	var bArray = ['d','e','f'];
	var cArray = array1.concat(bArray);
	cArray.splice(1,1);

22	*有这样一个URL：http:\/\/item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，将其按key-value形式返回到一个json结构中，如{a:’1′, b:’2′, c:”, d:’xxx’, e:undefined}。
	答案：
		function serilizeUrl(url) {
			var result = {};
			url = url.split("?")[1];
			var map = url.split("&");
			for(var i = 0, len = map.length; i < len; i++) {
				result[map[i].split("=")[0]] = map[i].split("=")[1];
			}
			return result;
		}

23	*正则表达式构造函数var reg=new RegExp(“xxx”)与正则表达字面量var reg=/ / 有什么不同？匹配邮箱的正则表达式？
	答案：当使用RegExp()构造函数的时候，不仅需要转义引号（即\”表示”），并且还需要双反斜杠（即\\表示一个\）。使用正则表达字面量的效率更高。
	邮箱的正则匹配：
	var regMail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;

24	*看下面代码，给出输出结果。
		for(var i=1;i<=3;i++){
		  setTimeout(function(){
			  console.log(i);
		  },0);
		};
	答案：4 4 4。
	原因：Javascript事件处理器在线程空闲之前不会运行。追问，如何让上述代码输出1 2 3？
	for(var i=1;i<=3;i++){
	   setTimeout((function(a){  //改成立即执行函数
		   console.log(a);
	   })(i),0);
	};

25	*写一个function，清除字符串前后的空格。（兼容所有浏览器）
	使用自带接口trim()，考虑兼容性：
	if (!String.prototype.trim) {
		String.prototype.trim = function() {
		return this.replace(/^\s+/, "").replace(/\s+$/,"");
		}
	}
	// test the function
	var str = " \t\n test string ".trim();
	alert(str == "test string"); // alerts "true"

	***中级Javascript：
26	*实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制

		* 考察点1：对于基本数据类型和引用数据类型在内存中存放的是值还是指针这一区别是否清楚
		* 考察点2：是否知道如何判断一个变量是什么类型的
		* 考察点3：递归算法的设计
	// 方法一：
	Object.prototype.clone = function(){
		var o = this.constructor === Array ? [] : {};
		for(var e in this){
				o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
		}
		return o;
	}

	//方法二：
	  /**
		 * 克隆一个对象
		 * @param Obj
		 * @returns
		 */
	function clone(Obj) {
		var buf;
		if (Obj instanceof Array) {
			buf = [];                    //创建一个空的数组
			var i = Obj.length;
			while (i--) {
				buf[i] = clone(Obj[i]);
			}
			return buf;
		}else if (Obj instanceof Object){
			buf = {};                   //创建一个空对象
			for (var k in Obj) {           //为这个对象添加新的属性
				buf[k] = clone(Obj[k]);
			}
			return buf;
		}else{                         //普通变量直接赋值
			return Obj;
		}
	}

	*如何深度克隆
	var arr = [1,2,43];
	var json = {a:6,b:4,c:[1,2,3]};
	var str = 'sdfsdf';

	var json2 = clone(json);

	alert(json['c'])
	function clone(obj){
			var oNew = new obj.constructor(obj.valueOf());
			if(obj.constructor == Object){
					for(var i in obj){
							oNew[i] = obj[i];
							if(typeof(oNew[i]) == 'object'){
									clone(oNew[i]);
							}
					}
			}
			return oNew;
	}

27	*如何消除一个数组里面重复的元素？
	var arr=[1,2,3,3,4,4,5,5,6,1,9,3,25,4];
	function deRepeat(){
		var newArr=[];
		var obj={};
		var index=0;
		var l=arr.length;
		for(var i=0;i<l;i++){
			if(obj[arr[i]]==undefined)
			  {
				obj[arr[i]]=1;
				newArr[index++]=arr[i];
			  }
			else if(obj[arr[i]]==1)
			  continue;
		}
		return newArr;

	}
	var newArr2=deRepeat(arr);
	alert(newArr2); //输出1,2,3,4,5,6,9,25
	========================================
	var arr = [1,2,3,1,43,12,12,1];
	var json = {};
	var arr2 = [];
	for (var i = 0; i < arr.length; i++) {
			if(!json[arr[i]]){
					json[arr[i]] = true;
			}else{
					json[arr[i]] = false;
			}

			if(json[arr[i]]){
					arr2.push(arr[i]);
			}
	};

	for (var i = 0; i < arr.length; i++) {
			if(!aa(arr[i], arr2)){
					arr2.push(arr[i])
			}
	};
	function aa(obj, arr){
			for (var i = 0; i < arr.length; i++) {
					if(arr[i] == obj) return true;
					else return false;
			};
	}
	alert(arr2)
	==========================
	function oSort(arr)
	{
	　　var result ={};
	　　var newArr=[];
	　　for(var i=0;i++)
		{
		　　if(!result[arr])
		　　{
			　　newArr.push(arr)
			　　result[arr]=1
		　　}
	　　}
	　　return newArr
　　}
28	*小贤是一条可爱的小狗(Dog)，它的叫声很好听(wow)，每次看到主人的时候就会乖乖叫一声(yelp)。从这段描述可以得到以下对象：
		function Dog() {
		   this.wow = function() {
				   alert(’Wow’);
		  }
		   this.yelp = function() {
				  this.wow();
		  }
		}
	小芒和小贤一样，原来也是一条可爱的小狗，可是突然有一天疯了(MadDog)，一看到人就会每隔半秒叫一声(wow)地不停叫唤(yelp)。请根据描述，按示例的形式用代码来实。（继承，原型，setInterval）
	答案：
	function MadDog() {
		this.yelp = function() {
			  var self = this;
			  setInterval(function() {
					self.wow();
			  }, 500);
		  }
	}
	MadDog.prototype = new Dog();

	//for test
	var dog = new Dog();
	dog.yelp();
	var madDog = new MadDog();
	madDog.yelp();
	*下面这个ul，如何点击每一列的时候alert其index?（闭包）
	XHTML
	<ul id=”test”>
	<li>这是第一条</li>
	<li>这是第二条</li>
	<li>这是第三条</li>
	</ul>
	答案：
	// 方法一：
	var lis=document.getElementById('2223').getElementsByTagName('li');
	for(var i=0;i<3;i++)
	{
		lis[i].index=i;
		lis[i].onclick=function(){
			alert(this.index);
		};
	}

	//方法二：
	var lis=document.getElementById('2223').getElementsByTagName('li');
	for(var i=0;i<3;i++)
	{
		lis[i].index=i;
		lis[i].onclick=(function(a){
			return function() {
				alert(a);
			}
		})(i);
	}
29	*编写一个JavaScript函数，输入指定类型的选择器(仅需支持id，class，tagName三种简单CSS选择器，无需兼容组合选择器)可以返回匹配的DOM节点，需考虑浏览器兼容性和性能。
	/*** @param selector {String} 传入的CSS选择器。* @return {Array}*/
	答案：
	var query = function(selector) {
		var reg = /^(#)?(\.)?(\w+)$/img;
		var regResult = reg.exec(selector);
		var result = [];
		//如果是id选择器
		if(regResult[1]) {
			if(regResult[3]) {
				if(typeof document.querySelector === "function") {
					result.push(document.querySelector(regResult[3]));
				}
				else {
					result.push(document.getElementById(regResult[3]));
				}
			}
		}
		//如果是class选择器
		else if(regResult[2]) {
			if(regResult[3]) {
				if(typeof document.getElementsByClassName === 'function') {
					var doms = document.getElementsByClassName(regResult[3]);
					if(doms) {
						result = converToArray(doms);
					}
				}
				//如果不支持getElementsByClassName函数
				else {
					var allDoms = document.getElementsByTagName("*") ;
					for(var i = 0, len = allDoms.length; i < len; i++) {
						if(allDoms[i].className.search(new RegExp(regResult[2])) > -1) {
							result.push(allDoms[i]);
						}
					}
				}
			}
		}
		//如果是标签选择器
		else if(regResult[3]) {
			var doms = document.getElementsByTagName(regResult[3].toLowerCase());
			if(doms) {
				result = converToArray(doms);
			}
		}
		return result;
	}

	function converToArray(nodes){
		  var array = null;
		  try{
				array = Array.prototype.slice.call(nodes,0);//针对非IE浏览器
		  }catch(ex){
			  array = new Array();
			  for( var i = 0 ,len = nodes.length; i < len ; i++ ) {
				  array.push(nodes[i])
			  }
		  }
		  return array;
	}
30	*请评价以下代码并给出改进意见。
	if(window.addEventListener){
		var addListener = function(el,type,listener,useCapture){
			el.addEventListener(type,listener,useCapture);
	  };
	}
	else if(document.all){
		addListener = function(el,type,listener){
			el.attachEvent("on"+type,function(){
			  listener.apply(el);
		  });
	   }
	}
	评价：

		* 　不应该在if和else语句中声明addListener函数，应该先声明；
		* 　不需要使用window.addEventListener或document.all来进行检测浏览器，应该使用能力检测；
		* 　由于attachEvent在IE中有this指向问题，所以调用它时需要处理一下

	改进如下：
	function addEvent(elem, type, handler){
	　　if(elem.addEventListener){
		elem.addEventListener(type, handler, false);
	　　}else if(elem.attachEvent){
		elem['temp' + type + handler] = handler;
		elem[type + handler] = function(){
		elem['temp' + type + handler].apply(elem);
	　　};
	　　elem.attachEvent('on' + type, elem[type + handler]);　
	  }else{
	　　elem['on' + type] = handler;
	　　}
	}
31	*给String对象添加一个方法，传入一个string类型的参数，然后将string的每个字符间价格空格返回，例如：
	addSpace(“hello world”) // -> ‘h e l l o  w o r l d’
	String.prototype.spacify = function(){
		return this.split('').join(' ');
	};
	接着上述问题答案提问，1）直接在对象的原型上添加方法是否安全？尤其是在Object对象上。(这个我没能答出？希望知道的说一下。)　2）函数声明与函数表达式的区别？
	答案：在js中，解析器在向执行环境中加载数据时，对函数声明和函数表达式并非是一视同仁的，解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问），至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解析执行。
32	* 定义一个log方法，让它可以代理console.log的方法。
	可行的方法一：
		function log(msg)　{
			console.log(msg);
		}
		log("hello world!") // hello world!
	如果要传入多个参数呢？显然上面的方法不能满足要求，所以更好的方法是：
		function log(){
			console.log.apply(console, arguments);
		};
	到此，追问apply和call方法的异同。
	答案：
	对于apply和call两者在作用上是相同的，即是调用一个对象的一个方法，以另一个对象替换当前对象。将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。
	但两者在参数上有区别的。对于第一个参数意义都一样，但对第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。
	如 func.call(func1,var1,var2,var3)对应的apply写法为：func.apply(func1,[var1,var2,var3]) 。

33	*在Javascript中什么是伪数组？如何将伪数组转化为标准数组？
	答案：
	伪数组（类数组）：无法直接调用数组方法或期望length属性有什么特殊的行为，但仍可以对真正数组遍历方法来遍历它们。典型的是函数的argument参数，还有像调用getElementsByTagName,document.childNodes之类的,它们都返回NodeList对象都属于伪数组。可以使用Array.prototype.slice.call(fakeArray)将数组转化为真正的Array对象。
	假设接第八题题干，我们要给每个log方法添加一个”(app)”前缀，比如’hello world!’ ->'(app)hello world!'。方法如下：
	function log(){
		var args = Array.prototype.slice.call(arguments);  //为了使用unshift数组方法，将argument转化为真正的数组
		args.unshift('(app)');
		console.log.apply(console, args);
	};
34	*对作用域上下文和this的理解，看下列代码：
		var User = {
		  count: 1,

		  getCount: function() {
			return this.count;
		  }
		};
		console.log(User.getCount());  // what?
		var func = User.getCount;
		console.log(func());  // what?
	问两处console输出什么？为什么？
	答案是1和undefined。
	func是在winodw的上下文中被执行的，所以会访问不到count属性。
	继续追问，那么如何确保Uesr总是能访问到func的上下文，即正确返回1。正确的方法是使用Function.prototype.bind。兼容各个浏览器完整代码如下：
	Function.prototype.bind = Function.prototype.bind || function(context){
	   var self = this;

	   return function(){
		  return self.apply(context, arguments);
	   };
	}
	var func = User.getCount.bind(User);
	console.log(func());
35	*原生JS的window.onload与Jquery的$(document).ready(function(){})有什么不同？如何用原生JS实现Jq的ready方法？
	window.onload()方法是必须等到页面内包括图片的所有元素加载完毕后才能执行。
	$(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕。
	/*
	* 传递函数给whenReady()
	* 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
	*/
	var whenReady = (function() {               //这个函数返回whenReady()函数
		var funcs = [];             //当获得事件时，要运行的函数
		var ready = false;          //当触发事件处理程序时,切换为true

		//当文档就绪时,调用事件处理程序
		function handler(e) {
			if(ready) return;       //确保事件处理程序只完整运行一次

			//如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
			if(e.type === 'onreadystatechange' && document.readyState !== 'complete') {
				return;
			}

			//运行所有注册函数
			//注意每次都要计算funcs.length
			//以防这些函数的调用可能会导致注册更多的函数
			for(var i=0; i<funcs.length; i++) {
				funcs[i].call(document);
			}
			//事件处理函数完整执行,切换ready状态, 并移除所有函数
			ready = true;
			funcs = null;
		}
		//为接收到的任何事件注册处理程序
		if(document.addEventListener) {
			document.addEventListener('DOMContentLoaded', handler, false);
			document.addEventListener('readystatechange', handler, false);            //IE9+
			window.addEventListener('load', handler, false);
		}else if(document.attachEvent) {
			document.attachEvent('onreadystatechange', handler);
			window.attachEvent('onload', handler);
		}
		//返回whenReady()函数
		return function whenReady(fn) {
			if(ready) { fn.call(document); }
			else { funcs.push(fn); }
		}
	})();
	如果上述代码十分难懂，下面这个简化版：
	function ready(fn){
		if(document.addEventListener) {        //标准浏览器
			document.addEventListener('DOMContentLoaded', function() {
				//注销事件, 避免反复触发
				document.removeEventListener('DOMContentLoaded',arguments.callee, false);
				fn();            //执行函数
			}, false);
		}else if(document.attachEvent) {        //IE
			document.attachEvent('onreadystatechange', function() {
				if(document.readyState == 'complete') {
					document.detachEvent('onreadystatechange', arguments.callee);
					fn();        //函数执行
				}
			});
		}
	};
36	*（设计题）想实现一个对页面某个节点的拖曳？如何做？（使用原生JS）
	回答出概念即可，下面是几个要点

		1. 给需要拖拽的节点绑定mousedown, mousemove, mouseup事件
		2. mousedown事件触发后，开始拖拽
		3. mousemove时，需要通过event.clientX和clientY获取拖拽位置，并实时更新位置
		4. mouseup时，拖拽结束
		5. 需要注意浏览器边界的情况

	*
	function setcookie(name,value,days){  //给cookie增加一个时间变量
	　　var exp = new Date();
	　　exp.setTime(exp.getTime() + days*24*60*60*1000); //设置过期时间为days天
	　　document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	}
	function getCookie(name){
	　　var result = "";
	　　var myCookie = ""+document.cookie+";";
	　　var searchName = ""+name+"=";
	　　var startOfCookie = myCookie.indexOf(searchName);
	　　var endOfCookie;
	　　if(satrtOfCookie != -1){
		startOfcookie += searchName.length;
		endOfCookie = myCookie.indexOf(";",startOfCookie);
		result = (myCookie.substring(startOfCookie,endOfCookie));
	　　}
	　　return result;
	}
	(function(){
	　　var oTips = document.getElementById('tips');//假设tips的id为tips
	　　var page = {
		　　check: function(){//检查tips的cookie是否存在并且允许显示
			var tips = getCookie('tips');
			if(!tips || tips == 'show') return true;//tips的cookie不存在
			if(tips == "never_show_again") return false;
		　　},
		　　hideTip: function(bNever){
			if(bNever) setcookie('tips', 'never_show_again', 365);
			oTips.style.display = "none";//隐藏
		　　},
		　　showTip: function(){
		　　oTips.style.display = "inline";//显示，假设tips为行级元素
		　　},
		　　init: function(){
			var _this = this;
			if(this.check()){
				_this.showTip();
				setcookie('tips', 'show', 1);
			　　}
			　　oTips.onclick = function(){
				_this.hideTip(true);
			　　};
		　　}
	　};
	  page.init();
	})();
37	*说出以下函数的作用是？空白区域应该填写什么？
	//define
	(function(window){
		function fn(str){
			this.str=str;
		}

		fn.prototype.format = function(){
			var arg = ______;
			return this.str.replace(_____,function(a,b){
				 return arg[b]||"";
		  });
		}
		window.fn = fn;
	})(window);
	//use
	(function(){
		var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
		console.log(t.format('http://www.alibaba.com','Alibaba','Welcome'));
	})();
	答案：访函数的作用是使用format函数将函数的参数替换掉{0}这样的内容，返回一个格式化后的结果：
	第一个空是：arguments
	第二个空是：/\{(\d+)\}/ig
38	*用面向对象的Javascript来介绍一下自己。（没答案哦亲，自己试试吧）
	答案： 对象或者Json都是不错的选择哦

39	*截取字符串abcdefg的efg
	slice、substr、substring之间的主要区别如下：

		* 三个方法的参数1都代表子串开始位置，参数2在slice和substring中表示结束位置，而在substr中代表的则是子串长度；
		* 对于负数态度，当出现在参数1的位置时，slice和substr从末尾开始计算，而substring不支持末尾计数法直接视为0；当出现在参数2位置时，slice和substring的处理同参数1：前者从末尾开始计算，后者转换成0，而substr则视负数长度为0返回空串；
		* 对于参数1小于参数2的情况，substring最大的不同在于它会交换两个参数再截取子串，substr因第二参数表示的是长度因此并无异常，slice曽依然正常搜寻子串始末位置，若开始位置在结尾后边则返回空串。


40	*判断一个字符串中出现次数最多的字符，统计这个次数
	var str = 'asdfssaaasasasasaa';
	var json = {};

	for (var i = 0; i < str.length; i++) {
			if(!json[str.charAt(i)]){
					json[str.charAt(i)] = 1;
			}else{
					json[str.charAt(i)]++;
			}
	};
	var iMax = 0;
	var iIndex = '';
	for(var i in json){
			if(json[i]>iMax){
					iMax = json[i];
					iIndex = i;
			}
	}
	alert('出现次数最多的是:'+iIndex+'出现'+iMax+'次');


41	*FF下面实现outerHTML
	var oDiv = document.createElement('div');
	var oDiv1 = document.getElementById('div1');
	var oWarp = document.getElementById('warp');

	oWarp.insertBefore(oDiv, oDiv1);
	oDiv.appendChild(oDiv1);
	var sOut = oDiv.innerHTML;
	oWarp.insertBefore(oDiv1, oDiv);
	oWarp.removeChild(oDiv);
	alert(sOut);


42	*编写一个方法 求一个字符串的字节长度;
	//假设一个中文占两个字节
	var str = '22两是';

	alert(getStrlen(str))

	function getStrlen(str){
			var json = {len:0};
			var re = /[\u4e00-\u9fa5]/;
			for (var i = 0; i < str.length; i++) {
					if(re.test(str.charAt(i))){
							json['len']++;
					}
			};
			return json['len']+str.length;
	}

43	*JavaScript中如何检测一个变量是一个String类型？请写出函数实现
		typeof(obj) == 'string'
		obj.constructor == String;

44	*网页中实现一个计算当年还剩多少时间的倒数计时程序，要求网页上实时动态显示“××年还剩××天××时××分××秒”
		var oDate = new Date();
		var oYear = oDate.getFullYear();

		var oNewDate = new Date();
		oNewDate.setFullYear(oYear, 11, 31, 23, 59, 59);
		var iTime = oNewDate.getTime()-oDate.getTime();

		var iS = iTime/1000;
		var iM = oNewDate.getMonth()-oDate.getMonth();
		var iDate =iS
45	* 写一个通用的事件侦听器函数。
		// event(事件)工具集，来源：github.com/markyun
		markyun.Event = {
			// 页面加载完成后
			readyEvent : function(fn) {
				if (fn==null) {
					fn=document;
				}
				var oldonload = window.onload;
				if (typeof window.onload != 'function') {
					window.onload = fn;
				} else {
					window.onload = function() {
						oldonload();
						fn();
					};
				}
			},
			// 视能力分别使用dom0||dom2||IE方式 来绑定事件
			// 参数： 操作的元素,事件名称 ,事件处理程序
			addEvent : function(element, type, handler) {
				if (element.addEventListener) {
					//事件类型、需要执行的函数、是否捕捉
					element.addEventListener(type, handler, false);
				} else if (element.attachEvent) {
					element.attachEvent('on' + type, function() {
						handler.call(element);
					});
				} else {
					element['on' + type] = handler;
				}
			},
			// 移除事件
			removeEvent : function(element, type, handler) {
				if (element.removeEventListener) {
					element.removeEventListener(type, handler, false);
				} else if (element.datachEvent) {
					element.detachEvent('on' + type, handler);
				} else {
					element['on' + type] = null;
				}
			},
			// 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
			stopPropagation : function(ev) {
				if (ev.stopPropagation) {
					ev.stopPropagation();
				} else {
					ev.cancelBubble = true;
				}
			},
			// 取消事件的默认行为
			preventDefault : function(event) {
				if (event.preventDefault) {
					event.preventDefault();
				} else {
					event.returnValue = false;
				}
			},
			// 获取事件目标
			getTarget : function(event) {
				return event.target || event.srcElement;
			},
			// 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
			getEvent : function(e) {
				var ev = e || window.event;
				if (!ev) {
					var c = this.getEvent.caller;
					while (c) {
						ev = c.arguments[0];
						if (ev && Event == ev.constructor) {
							break;
						}
						c = c.caller;
					}
				}
				return ev;
			}
		};
46.	*[].forEach.call($$("*"),function(a){ a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) })
	能解释一下这段代码的意思吗？
	$$("*")===document.querySelectorAll("*");
	(function() {
	    [].forEach.call(document.querySelectorAll("*"), function(a){
	        a.style.outline = "1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
	    });
	})();

47.	已知有字符串foo=”get-element-by-id”,写一个function将其转化成驼峰表示法”getElementById”。
	function combo(msg){
		var arr=msg.split("-");
		for(var i=1;i<arr.length;i++){
		   arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);
		}
		msg=arr.join("");
		return msg;
	}

	var foo="get-element-by-id";
	foo.replace(/(-\w)/g,function(item){
		return item[1].toUpperCase();
	});
========================================================================================================
markyun.Event = {
    // 页面加载完成后
    readyEvent : function(fn) {
        if (fn==null) {
            fn=document;
        }
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = fn;
        } else {
            window.onload = function() {
                 oldonload();
                 fn();
            };
        }
    },
    // 视能力分别使用dom0||dom2||IE方式 来绑定事件
    // 参数： 操作的元素,事件名称 ,事件处理程序
    addEvent1 : function(element, type, handler) {
        if (element.addEventListener) {
            //事件类型、需要执行的函数、是否捕捉
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, function() {
                 handler.call(element);
            });
        } else {
            element['on' + type] = handler;
        }
    },
    addEvent2: function(element, type, handle){
        try{ // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
            element.addEventListener(type,handle,false);
        }catch(e){
            try{ // IE8.0及其以下版本
                element.attachEvent('on' + type,handle);
            }catch(e){ // 早期浏览器
                element['on' + type] = handle;
            }
        }
    },
    // 移除事件
    removeEvent : function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.datachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
    stopPropagation : function(ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        } else {
            ev.cancelBubble = true;
        }
    },
    // 取消事件的默认行为
    preventDefault : function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 获取事件目标
    getTarget : function(event) {
       return event.target || event.srcElement;
    },
    // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
    getEvent : function(e) {
       var ev = e || window.event;
       if (!ev) {
            var c = this.getEvent.caller;
            while (c) {
                 ev = c.arguments[0];
                 if (ev && Event == ev.constructor) {
                      break;
                 }
                 c = c.caller;
            }
       }
       return ev;
    }
};

setInterval(function(){
    var oDate = new Date();
    var oYear = oDate.getFullYear();
    var oNewDate = new Date();
    oNewDate.setFullYear(oYear, 11, 31, 23, 59, 59);
    var oMonth = oDate.getMonth();
    function MD(n){
        switch (n) {
            case "2":return 28;
                break;
            case "4":
            case "6":
            case "9":
            case "11":return 30;

            default:return 31;
        }
    }
    console.log((oNewDate.getMonth()-oDate.getMonth())+"月"+(MD(oDate.getMonth())-oDate.getDate())+"日"+(23-oDate.getHours())+"时"+(59-oDate.getMinutes())+"分"+(60-oDate.getSeconds())+"秒");
},1000);

function isString(obj) {
    return typeof(obj) == 'string' && obj.constructor == String;
}

var str = '2two两二';
console.log(getStrlen(str))
function getStrlen(str){
    var json = {len:0};
    var re = /[\u4e00-\u9fa5]/;
    for (var i = 0; i < str.length; i++) {
        if(re.test(str.charAt(i))){
            json['len']++;
        }
    };
    return json['len']+str.length;
}

var str = 'asdfssaaasasasasaa';
var obj = {};
for (var i = 0; i < str.length; i++) {
    if(!obj[str[i]]){
        obj[str[i]]=1;
    }else{
        obj[str[i]]+=1;
    }
}
var max = 0;
var itemname = "";
for (var item in obj) {
    if (obj.hasOwnProperty(item)) {
        obj[item]>max &&(
            itemname=item,
            max=obj[item]
        );
        console.log(itemname);
    }
}

//define
(function(window){
    function fn(str){
      this.str=str;
    }
    fn.prototype.format = function(){
        var arg = arguments;
        return this.str.replace(/\{(\d+)()\}/ig,function(a,b/*第一个括号*/,c/*第二个括号*/,d){
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
            return arg[b]||"";
        });
    }
    window.fn = fn;
})(window);
//use
(function(){
    var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
    console.log(t.format('http://www.xxxxx.com','YYYYY','Welcome'));
})();

var whenReady = (function() {               //这个函数返回whenReady()函数
    var funcs = [];             //当获得事件时，要运行的函数
    var ready = false;          //当触发事件处理程序时,切换为true

    //当文档就绪时,调用事件处理程序
    function handler(e) {
      if(ready) return;       //确保事件处理程序只完整运行一次

      //如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
      if(e.type === 'onreadystatechange' && document.readyState !== 'complete') {
           return;
      }

      //运行所有注册函数
      //注意每次都要计算funcs.length
      //以防这些函数的调用可能会导致注册更多的函数
      for(var i=0; i<funcs.length; i++) {
           funcs[i].call(document);
      }
      //事件处理函数完整执行,切换ready状态, 并移除所有函数
      ready = true;
      funcs = null;
    }
    //为接收到的任何事件注册处理程序
    if(document.addEventListener) {
      document.addEventListener('DOMContentLoaded', handler, false);
      document.addEventListener('readystatechange', handler, false);            //IE9+
      window.addEventListener('load', handler, false);
    }else if(document.attachEvent) {
      document.attachEvent('onreadystatechange', handler);
      window.attachEvent('onload', handler);
    }
    //返回whenReady()函数
    return function whenReady(fn) {
      if(ready) { fn.call(document); }
      else { funcs.push(fn); }
    }
})();

if(!Function.prototype.bind){
    Function.prototype.bind = function(context) {
        var that = this;
        return function () {
            return that.apply(context,arguments);
        }
    }
}
var User = {
    count: 1,
    getCount: function(){
        return this.count;
    }
};
//console.log(User.getCount());  // what?
var func = User.getCount.bind(User);
//console.log(func());  // what?

function log(){
    console.log.call(console,arguments);
}

String.prototype.spacify = function(){
    return this.split("").filter(function(item,index){return item!==" "}).join(" ")
};

// 检测
//     some every
// 处理数组
//     map(return item) filter(return true/false 过滤)
// 执行操作
//     forEach

if(window.addEventListener){
    var addListener = function(el,type,listener,useCapture){
        el.addEventListener(type,listener,useCapture);
    };
}else if(document.all){
    addListener = function(el,type,listener){
        el.attachEvent("on"+type,function(){
            listener.apply(el);
        });
    }
}
//
function addEvent(elem, type, handler){
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);
    }else if(elem.attachEvent){
        elem['temp' + type + handler] = handler;
        elem[type + handler] = function(){
            elem['temp' + type + handler].apply(elem);
        };
        elem.attachEvent('on' + type, elem[type + handler]);
    }else{
        elem['on' + type] = handler;
    }
}

function queryDom(str) {
    var rslt = [];
    switch(str[0]){
        case "#":
            return document.getElementById(str);
            break;
        case ".":
            if(document.getElementsByClassName){
                rslt = document.getElementsByClassName(str);
            }else{
                var allDoms = document.getElementsByTagName("*") ;
                for(var i = 0, len = allDoms.length; i < len; i++) {
                     if(allDoms[i].className.search(new RegExp(regResult[2])) > -1) {
                          result.push(allDoms[i]);
                     }
                }
            }
            return rslt;
            break;
        default:
            return document.getElementsByTagName(str);
    }
}

$(function(){
    var lis = document.getElementById("test").children;
    for(var i=0;i<lis.length;i++){
        (function(a){
            lis[a].onclick = function(){
                alert(a);
            };
        })(i);
    }
});

function Dog() {
    this.wow = function() {
        console.log("wow");
    }
    this.yelp = function() {
        this.wow();
    }
}
function MadDog() {
    this.yelp = function () {
        var self = this;
        setInterval(function() {
            self.wow();
        },500);
    }
}
var ADog = new Dog();
MadDog.prototype = ADog;
var AMadDog = new MadDog();
AMadDog.yelp();

if(!Array.prototype.trim){
    Array.prototype.trim = function () {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            arr.indexOf(this[i])===-1 && arr.push(this[i]);
        }
        return arr;
    }
}

if(!Object.prototype.clone){//复制引用型数据
    Object.prototype.clone = function() {
        var o = this.constructor === Array ? [] : {};
        for(var e in this){
               o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
        }
        return o;
    }
}
function clone(obj){
    var oNew = new obj.constructor(obj.valueOf());
    if(obj.constructor == Object){
        for(var i in obj){
            oNew[i] = obj[i];
            if(typeof(oNew[i]) == 'object'){
                clone(oNew[i]);
            }
        }
    }
    return oNew;
}

// function trimSpace(str) {
//     return str.replace(/(^\s+|\s+$)/g,"");
// }
if(!String.prototype.trimSpace){
    String.prototype.trimSpace = function(){
        return this.replace(/(^\s+|\s+$)/g,"");
    }
}

for(var i=1;i<=3;i++){//<=最后i是n+1;<最后i是<;
    setTimeout((function(){
        console.log(i);
    })(i),0);
};

var regMail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;

var urlstr = "http:\/\/item.xxx.com/item.htm?a=1&b=2&c=&d=xxx&e";
function serilizeUrl(url) {
    var result = {};
    url = url.split("?")[1];
    var map = url.split("&");
    for(var i = 0, len = map.length; i < len; i++) {
       result[map[i].split("=")[0]] = map[i].split("=")[1];
    }
    return result;
}

var array1 = ['a','b','c'];
var array2 = ['d','e','f'];
var newArr = array1.concat(array2);
newArr.splice(1,1);

var iArray = [];
function getRandom(istart, iend){
    var iChoice = iend - istart +1;
    return Math.floor(Math.random() * iChoice + istart);
}
for(var i=0; i<10; i++){
    iArray.push(getRandom(10,100));
}
iArray.sort();

function escapeHtml(str) {
    return str.replace(/[<>"&]/g, function(match) {
        switch (match) {
            case "<":
                 return "&lt;";
            case ">":
                 return "&gt;";
            case "&":
                 return "&amp;";
            case "\"":
                 return "&quot;";
        }
    });
}

var tmpstr = "<tr><td>{$id}</td><td>{$name}</td></tr>";
tmpstr.replace(/\{\$id\}/,"10").replace(/\{\$name\}/,"Tony");

var d = new Date();
// 获取年，getFullYear()返回4位的数字
var year = d.getFullYear();
// 获取月，月份比较特殊，0是1月，11是12月
var month = d.getMonth() + 1;
// 变成两位
month = month < 10 ? '0' + month : month;
// 获取日
var day = d.getDate();
day = day < 10 ? '0' + day : day;
console.log(year + '-' + month + '-' + day);
