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

9.IE和FireFox的兼容性都知道哪些？
	1>.IE与FF脚本兼容性问题
		obj.addEventListener(sEv, fn, false);
		obj.attachEvent('on'+sEv,fn);
		detachevet
		removeEventListener
		DOMContentLoaded
		onreadystatechangecomplete
		DOMMouseScroll FF
		onmousewheel 非FF
		event.wheelDelta 上滚120 下-120
		event.detail 上滚-3 下3
		obj.getCurrentStyle[attr]
		getComputedStyle(obj,false)[attr]
		XMLHttpRequest
		ActiveXObject('Mircorsoft.XMLHttp')
		FF本地能设置读取cookie 其他不行
		eventev
		事件源
		srcElement||target
		toElement||relatedTarget
		obj.setCapture();只有ie认
		obj.releaseCapture();
	2>.IE和标准下有哪些兼容性的写法
		Var ev = ev || window.event
		document.documentElement.clientWidth || document.body.clientWidth
		Var target = ev.srcElement||ev.target

#css兼容相关#
		1. position:fixed;在android下无效怎么处理?
			header添加
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
	
		2. Chrome中文界面下默认会将小于12px的文本强制按照12px显示,
			// -webkit-text-size-adjust: none; 已经不生效了
			display: inline-block; /* Or block */
			font - size: 12.5px;
			-webkit - transform: scale(0.8);
			transform: scale(0.8);
	
		3. 各个浏览器盒模型表现不同
			*{margin:0;padding:0;}
	
		4. z-index不生效
			给父级添加position:relative
	
		5. IE下,even对象有x,y属性,但是没有pageX,pageY属性;
			Firefox下,event对象有pageX,pageY属性,但是没有x,y属性。
	
		6. 写出几种IEBUG的解决方法
			1)双倍边距BUG float引起的 使用 {_display:inline;}
				将其转化为行内属性。(_这个符号只有ie6会识别)
	
			2)超链接hover
				被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:
				L-V-H-A :a:link {} a:visited {} a:hover {} a:active {}
	
			3）渐进识别的方式，从总体中逐渐排除局部。
				.xxx{
					background-color:#f1ee18;/*所有识别*/
					.background-color:#00deff\9; /*IE6、7、8识别*/
					+background-color:#a200ff;/*IE6、7识别*/
					_background-color:#1e0bd1;/*IE6识别*/
				}
			4)png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8
	
			5)min-height 最小高度 !Important 解决
	
			6)为什么没有办法定义 1 px 左右的宽度容器
	
			(IE6默认的行高造成的，使用{over:hidden,zoom:0.08;line-height:1px})
	
			7)ie 6 不支持!important
		
		7. 介绍所知道的CSS hack技巧（如：_, *, +, \9, !important）
			_marging //IE 6
			+margin //IE 7
			margin:0 auto \9 //所有Ie
			margin \0 //IE 8