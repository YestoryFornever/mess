0. 介绍一下你对浏览器内核的理解？
主要分成两部分:
	渲染引擎(layout engineer或Rendering Engine)和JS引擎。
渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、
	整理讯息（例如加入CSS等），
	以及计算网页的显示方式，然后会输出至显示器或打印机。
	浏览器的内核的不同对于网页的语法解释会有不同，
	所以渲染的效果也不相同。
	所有网页浏览器、电子邮件客户端以及其它需要编辑、
	显示网络内容的应用程序都需要内核。
JS引擎：解析和执行javascript来实现网页的动态效果。
最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

1. 都知道哪些浏览器内核？
常见的浏览器内核有哪些？
开发过的项目都兼容哪些浏览器？
你做的页面在哪些流览器测试过?
	Trident内核: IE,360,搜狗浏览器等[又称MSHTML]
	Gecko内核: Netscape,FF
	Webkit内核: Safari,Chrome,opera等
	Blink:（WebKit的分支）

2. 这些浏览器的内核（渲染引擎）分别是什么?
	js引擎
	Chakra
	OdinMonkey
	V8
	Carakan

3. 列举IE与其他浏览器不一样的特性？
	1、事件不同之处：
	触发事件的元素被认为是目标（target）。
	而在 IE 中，目标包含在 event 对象的 srcElement 属性；
	获取字符代码、如果按键代表一个字符（shift、ctrl、alt除外），
	IE 的 keyCode 会返回字符代码（Unicode），
	DOM 中按键的代码和字符是分离的，要获取字符代码，
	需要使用 charCode 属性；

	阻止某个事件的默认行为:
	IE return false
	Mozilla e.preventDefault()

	停止事件冒泡，IE 中阻止事件进一步冒泡，
	需要设置 cancelBubble 为 true，
	Mozzilla 中，需要调用 stopPropagation();

4. 把 Script 标签放在页面的最底部的body封闭之前和封闭之后有什么区别？浏览器会如何解析它们？
	执行顺序

5. 我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。
	会执行几次事件?2
	会先执行冒泡还是捕获?捕获
	父元素捕获
	子元素冒泡
	子元素捕获
	父元素冒泡
	var btn = document.querySelector('button');
	var div = document.querySelector('div');

	btn.addEventListener('click', function(){
		console.log('bubble','btn');
	},false);
	btn.addEventListener('click', function(){
		console.log('capture','btn');
	},true);

	div.addEventListener('click', function(){
		console.log('bubble','div');
	},false);
	div.addEventListener('click', function(){
		console.log('capture','div');
	},true);