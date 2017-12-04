#浏览器兼容相关见browser#

#文档流相关（display / float / position）#
	1. display有哪些值？说明他们的作用。
		none			不显示。
		block			块。
		inline			行内。
		inline-block	行内，但可以设置宽高。
		list			item 象块类型元素一样显示，并添加样式列表标记。
		table			此元素会作为块级表格来显示。
		inherit			规定应该从父元素继承 display 属性的值。

	2. position的值relative和absolute定位原点是?
		absolute
			生成绝对定位的元素，相对于值不为 static的第一个父元素进行定位。
		fixed （老IE不支持）
			生成绝对定位的元素，相对于浏览器窗口进行定位。
		relative
			生成相对定位的元素，相对于其正常位置进行定位。
		static
			默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。
		inherit
			规定从父元素继承 position 属性的值。

	3. 清除浮动的几种方式，各自的优缺点。
	请解释一下为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式
	　　1> 新增空标签清除浮动 clear:both；
	　　2> 父元素添加overflow:hidden；
	　　3> 是用afert伪元素清除浮动
			.clearfix:after{
				content: "";//设置内容为空
				height: 0;//高度为0
				line-height:0;//行高为0
				display: block;//将文本转为块级元素
				visibility: hidden;//将元素隐藏
				clear: both//清除浮动
			}
			.clearfix{
				zoom: 1; //为了兼容IE
			}
	
	* 4. position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？
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

#盒模型相关#
	1.	CSS的盒模型?
		介绍一下标准的CSS的盒子模型?
		有两种， IE 盒子模型、W3C 盒子模型;
		盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border);

	2. 低版本IE的盒子模型有什么不同的？
		IE的content部分把 border 和 padding计算了进去;
		W3C标准盒子模型的宽高（width / height）不包含padding和border;
		IE盒子模型的宽高（width / height）包含padding和border。

#选择器相关#

	1. 浏览器是怎样解析CSS选择器的?
		由子至父依次过滤

	2 .CSS的基本语句构成是?
	　　选择器{
			属性1:值1;
			属性2:值2;
			……
		}

	3. CSS层叠是什么？介绍一下
		层叠就是优先级，!important>内联>内嵌>外链>导入

	4. CSS选择符有哪些?
		1 .id选择器（ # myid）
		2 .类选择器（.myclassname）
		3 .标签选择器（div, h1, p）
		4 .相邻选择器（h1 + p）
		5 .子选择器（ul > li）
		6 .后代选择器（li a）
		7 .通配符选择器（ * ）
		8 .属性选择器（a[rel = "external"]）
		9 .伪类选择器（a:hover, li:nth-child）

	5. css定义的权重
		以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下例子是演示各种定义的权重值：//经验证11个class并不能覆盖id的样式
		/*权重为1*/
		div{
		}
		/*权重为10*/
		.class1{
		}
		/*权重为100*/
		#id1{
		}
		/*权重为100+1=101*/
		#id1 div{
		}
		/*权重为10+1=11*/
		.class1 div{
		}
		/*权重为10+10+1=21*/
		.class1 .class2 div{
		}
	如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现

	6. CSS哪些属性可以继承？
		可继承的样式：font-size font-family color, ul li dl dd dt;
		不可继承的样式：border padding margin width height ;

#css3相关#
	1. @Font-face 
		加载服务器端的字体文件，让客户端显示客户端所没有安装的字体

	2. word-wrap & text-overflow
		word-wrap 是否允许在单词内断句
		word-break 决定使用何种方式来进行单词内断句

	3. 文字特效(text-decoration text-shadow)

	4. 多列布局(multi-column layout)
		olumn-count：表示布局几列。
		olumn-rule：表示列与列之间的间隔条的样式
		olumn-gap：表示列于列之间的间隔

	5. 边框和颜色（color, border）
		透明度
		渐变效果（Gradient）
		阴影和反射（Shadow/Reflect）

	6. 背景影响范围效果
		* background-clip: border-box; 背景从 border 开始显示;
		* background-clip: padding-box; 背景从 padding 开始显示;
		* background-clip: content-box; 背景显 content 区域开始显示;
		* background-clip: no-clip; 默认属性，等同于 border-box;

	7. flex

	8. 动画
		Transitions
		Transforms
		Animation

	9. 新增各种CSS选择器:not(.xxx)

	10. 新增伪类
		p:first-of-type选择属于其父元素的首个<p>元素的每个<p>元素
		p:last-of-type选择属于其父元素的最后<p>元素的每个<p>元素
		p:only-of-type选择属于其父元素唯一的<p>元素的每个<p>元素
		p:only-child选择属于其父元素的唯一子元素的每个<p>元素
		p:nth-child(2)选择属于其父元素的第二个子元素的每个<p>元素

		:after在元素之前添加内容,也可以用来做清除浮动
		:before 在元素之后添加内容
		:enabled
		:disabled 控制表单控件的禁用状态
		:checked单选框或复选框被选中

#性能相关#
	1，减少css嵌套，最好不要套三层以上，一般情况下块级元素加上类，里面的内联元素不用加，css写的时候块级class套内联tag，这样不仅可以减少css文件大小，还能减少性能浪费。
	
	2，不要在ID选择器前面进行嵌套，ID本来就是唯一的而且人家权值那么大，前方嵌套完全是浪费性能。
	
	3，建立公共样式类，把长段相同样式提取出来作为公共类使用，比如我们常用的清除浮动，单行超出显示省略号等等等，当然如果你使用sass，继承会让你更加方便，同时我是比较提倡使用sass的，之后肯定也会写一篇sass的博客。
	
	4，缩写css，其中包括缩写maigin，padding，颜色值等等，要是有两个或者两个以上的margin-****，写成margin: * * * *有助于文件大小。
	
	5，减少通配符*或者类似[hidden="true"]这类选择器的使用，挨个查找所有...这性能能好吗？当然重置样式这些必须的东西是不能少的。
	
	6，有些人喜欢在类名前面加上标签名：p.ty_p 来进行更加精确的定位，但是这样往往效率更差，类名应该在全局范围除非公用是唯一的，所以这种做法是应该便面的。
	
	7，巧妙运用css的继承机制，在css中很多属性是可以继承的比如颜色字体等等，父节点定义了，子节点就无需定义。
	
	8，拆分出公共css文件，对于比较大的项目我们可以将大部分页面的公共结构的样式提取出来放到单独css文件里，这样一次下载后就放到缓存里，当然这种做法会增加请求，具体做法应以实际情况而定。
	
	9，不用css表达式，可能大家接触比较少，但是要记住的是无论我们怎么炫酷，到了最后都是静态的，所以表达式只是让你的代码显得更加炫酷，但是他对性能的浪费可能是超乎你的想象的，因为它并不只是计算一次，一些小的事件可能都会增加它为了有效准确而进行计算求值的次数。
	
	10，少用css rest，可能你会觉得重置样式是规范，但是其实其中有很多的操作是不必要不友好的，有需求有兴趣的朋友可以选择normolize.css
	
	11，cssSprite，合成所有icon图片，用宽高加上bacgroud-position的背景图方式显现出我们要的icon图，这是一种十分实用的技巧，极大减少了http请求。
	修复解析错误（Parsing errors should be fixed）
		避免使用多类选择符（Don't use adjoining classes）
			IE6以及更古老的浏览器对类似.foo.bar的多类选择符解析不正确，
			参考IE6下的多类选择符一文。
		移除空的css规则（Remove empty rules）
			这个规则不包含任何属性，类似：.foo { }空规则的产生原因一般来说是为了预留样式。
			去除这些空规则无疑能减少css文档体积。
		正确使用display的属性（Use correct properties for a display）
			由于display的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。
			CSS Lint会检查一下几点：display:inline后不应该再使用width、height、margin、padding以及float。
			display:inline-block后不应该再使用float。
			display:block后不应该再使用vertical-align。
			display:table-*后不应该再使用margin或者float。
		不滥用浮动（Don't use too many floats）
			虽然浮动不可避免，但不可否认很多css bug是由于浮动而引起。
			CSS Lint一旦检测出样式文件中有超过10次的浮动便会提示警告。
		不滥用web字体（Don't use too many web fonts）
			对于中文网站来说Web Fonts可能很陌生，国外却很流行。
			web fonts通常体积庞大，
			而且一些浏览器在下载web fonts时会阻塞页面渲染损伤性能。
		不声明过多的font-size（Don't use too may font- size declarations）
			这是设计层面的问题，设计精良的页面不会有过多的font - size声明。
		不在选择符中使用ID标识符（Don't use IDs in selectors）
			主要考虑到样式重用性以及与页面的耦合性。
		不给h1~h6元素定义过多的样式（Don't qualify headings）
			全站统一定义一遍heading元素即可，若需额外定制样式，可使用其他选择符作为代替。
		不重复定义h1~h6元素（Heading styles should only be defined once）
		值为0时不需要任何单位（Zero values don't need units）
		标准化各种浏览器前缀（Vendor prefixed properties should also have the standard）
			通常将浏览器前缀置于前面，将标准样式属性置于最后，
			类似：.foo {-moz-border-radius: 5px;border-radius: 5px; }
		使用CSS渐变等高级特性，需指定所有浏览器的前缀（CSS gradients require all browser prefixes）
		避免让选择符看起来像正则表达式（Avoid selectors that look like regular expressions）
			CSS3添加了一些类似~=等复杂属性，也不是所有浏览器都支持，需谨慎使用。
		遵守盒模型规则（Beware of broken box models）

#预处理器/后处理器#
	1. 使用 CSS 预处理器吗？喜欢那个？
	SASS (SASS、LESS没有本质区别，只因为团队前端都是用的SASS)
	- 预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less，增强了css代码的复用性，
	还有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。

	2. 什么是CSS 预处理器/后处理器？
	- 后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的
	是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。

#常用技巧#	
	1.	页面导入样式时，使用link和@import有什么区别？
		1）前者无兼容性，后者CSS 2.1 （只在IE5以上才能被识别）
		2）Link 支持使用javascript改变样式，后者不可
		3）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
		4）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;

	2. 什么是FOUC？你如何来避免FOUC？
		文档样式短暂失效(Flash of Unstyled Content),简称为FOUC
		使得css文件加载在html之后导致页面闪烁、花屏
		1. 由于css引入使用了@import
		2. 或者存在多个style标签
		3. 以及css文件在页面底部引入
		
		用link加载css文件，放在head标签里面

	3 .描述css reset的作用和用途。
		Reset重置浏览器的css默认属性
		* 为什么要初始化CSS样式。
		- 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
		- 当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。

		最简单的初始化方法： * {padding: 0; margin: 0;} （强烈不建议）

		淘宝的样式初始化代码：
		body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
		body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
		h1, h2, h3, h4, h5, h6{ font-size:100%; }
		address, cite, dfn, em, var { font-style:normal; }
		code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
		small{ font-size:12px; }
		ul, ol { list-style:none; }
		a { text-decoration:none; }
		a:hover { text-decoration:underline; }
		sup { vertical-align:text-top; }
		sub{ vertical-align:text-bottom; }
		legend { color:#000; }
		fieldset, img { border:0; }
		button, input, select, textarea { font-size:100%; }
		table { border-collapse:collapse; border-spacing:0; }

	4. 解释 css sprites 如何使用。
	　　css 精灵 把一堆小的图片整合到一张大的图片上，减轻服务器对图片的请求数量

	5. 你如何对网站的文件和资源进行优化?期待的解决方案包括：
	　　文件合并
	　　文件最小化/文件压缩
	　　使用CDN托管
	　　缓存的使用

	6. li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
	display:inline-block 什么时候会显示间隙？(携程)
		原因：
		行框的排列会受到中间空白（回车\空格）等的影响，因为空格也属于字符,
		这些空白也会被应用样式，占据空间，所以会有间隔，
		解决办法：
		1)使用font-size:0；
		2)移除空格、
		3)使用margin负值、
		4)letter-spacing、word-spacing

	7. 用纯CSS创建一个三角形的原理是什么？
	把上、左、右三条边隐藏掉（颜色设为 transparent）
	#demo {
		width: 0;
		height: 0;
		border-width: 20px;
		border-style: solid;/*double有惊喜*/
		border-color: transparent transparent red transparent;
	}

	8. 一个满屏 品 字布局 如何设计?
	简单的方式：
		上面的div宽100%，
		下面的两个div分别宽50%，
		然后用float或者inline使其不换行即可

	9. 如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？
		* 给div设置一个宽度，然后添加margin:0 auto属性
		div{
			width:200px;
			margin:0 auto;
		}
		* 居中一个浮动元素
		确定容器的宽高 宽500 高 300 的层
		设置层的外边距
		.div {
			width:500px ; height:300px;//高度可以不设
			margin: -150px 0 0 -250px;
			position:relative; //相对定位
			background-color:pink; //方便看效果
			left:50%;
			top:50%;
		}
		* 让绝对定位的div居中
		position: absolute;
		width: 1200px;
		background: none;
		margin: 0 auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;

	10. CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下有什么区别？
		当一个元素的visibility属性被设置成collapse值后，对于一般的元素，它的表现跟hidden是一样的。
		但例外的是，如果这个元素是table相关的元素，例如table行，table group，table列，table column group，它的表现却跟display: none一样，
		也就是说，它们占用的空间也会释放。
		（实际测试不好用）
	
	11. 移动端的布局用过媒体查询吗？
	
	12. 在网页中的应该使用奇数还是偶数的字体？为什么呢？
	
	13. margin和padding分别适合什么场景使用？
	
	14. 元素竖向的百分比设定是相对于容器的高度吗？
	
	15. 全屏滚动的原理是什么？用到了CSS的那些属性？

	16. 视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）

	17. ::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。

	18. 如何修改chrome记住密码后自动填充表单的黄色背景 ？

	19. 你对line-height是如何理解的？

	20. 设置元素浮动后，该元素的display值是多少？（自动变成display:block）

	21. 让页面里的字体变清晰，变细用CSS怎么做？（-webkit-font-smoothing: antialiased;）

	22. font-style属性可以让它赋值为“oblique” oblique是什么意思？

	23. overflow: scroll时不能平滑滚动的问题怎么处理？

	24. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。

	4. 瀑布流或者流式布局是否有了解？（是否是css相关）