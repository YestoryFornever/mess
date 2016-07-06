281
每天40题，一周搞定
HTML:14
jquery:26

CSS:58

js:46

代码题:45

node:3
其他:84
ES6:3
前端框架相关:2


	前端同学，来，说说es3，es5，es6的区别；
	各个浏览器内核的区别；
	页面具体的渲染流程；
	说说hybrid和h5的优缺点；
	在谈谈当下流行的react到底是个什么东东，解决了什么问题；
	amd，cmd是什么；
	mvc，mvp，mvvm等怎么区分，
	以及应用场景；谈谈你对其他前端框架或者前端库的了解，underscore，jquery，backbone，angular，requirejs，seajs，bootstrap，flux，knockout...；
	再来谈谈前端工程化打包工具，gunt，webpack啥的会用么，会写插件么；

	HTML>
		1.文档类型Doctype
			1>. <!DOCTYPE>标签的定义与用法;
				定义浏览器以什么文档标准渲染当前文档，
				没有结束标签，不区分大小写，
				如果没有的时候会导致文档以quick模式（怪异模式、兼容模式）渲染。
				/*DOCTYPE不是html标签（没有结束标签）。
				html5不区分大小写。
				<!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。
				DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。*/

			2>. 浏览器标准模式（严格模式）和混杂模式（怪异模式、兼容模式）之间的区别是什么？
				标准模式浏览器根据规范呈现页面
				混杂模式中浏览器以一种宽松的向后兼容的方式呈现页面，以防老站点无法工作。

				盒子模型渲染模式的不同
				盒子模型分两类：W3C标准盒子模型 和 IE盒子模型
				这两个的关键差别在于
				W3C标准盒子模型的宽高（width/height）不包含padding和border;
				IE盒子模型的宽高（width/height）包含padding和border。
				(offsetWidth=borderLeft+paddingLeft+contentWidth+paddingRight+borderRight)

				使用 window.top.document.compatMode 可显示为什么模式
				document.write(document.compatMode == "CSS1Compat" ? "标准模式" : "混杂模式");

			3>. 标准模式（严格模式）与混杂模式（怪异模式、兼容模式）:如何触发这两种模式
			　　通过声明doctype来触发，没有doctype或格式错误会导致页面以混杂模式呈现

			4>. XHTML和HTML有什么区别？
				HTML是一种基本的WEB网页设计语言，XHTML是一个基于XML的置标语言
				最主要的不同：
					XHTML 文档必须拥有根元素。
					XHTML 元素必须被正确地嵌套。
					XHTML 元素必须被关闭。
					标签名必须用小写字母。

			5>. HTML5 为什么只需要写 <!DOCTYPE HTML>？
				HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；
				而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

			6>. 你知道多少种文档类型？
				HTML 5
					<!DOCTYPE html>
				HTML 4.01 Strict
					<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
					该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
				HTML 4.01 Transitional
					<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
					该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
				HTML 4.01 Frameset
					<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
					该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容。
				XHTML 1.0 Strict
					<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
					该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。
				XHTML 1.0 Transitional
					<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
					该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。
				XHTML 1.0 Frameset
					<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
					该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容。
				XHTML 1.1
					<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
					该 DTD 等同于 XHTML 1.0 Strict，但允许添加模型（例如提供对东亚语系的 ruby 支持）。

		2.块级元素有哪些？行内元素有哪些？空(void)元素有那些？
			块级元素(block element)
				◎ address - 地址
				◎ blockquote - 块引用
				◎ center - 举中对齐块
				◎ dd - 定义列表中定义条目描述
				◎ dir - 目录列表
				◎ div - 常用块级容易，也是css layout的主要标签
				◎ dl - 定义列表
				◎ fieldset - form控制组
				◎ form - 交互表单
				◎ h1 - 大标题
				◎ h2 - 副标题
				◎ h3 - 3级标题
				◎ h4 - 4级标题
				◎ h5 - 5级标题
				◎ h6 - 6级标题
				◎ hr - 水平分隔线
				◎ isindex - input prompt
				◎ menu - 菜单列表
				◎ noframes - frames可选内容，（对于不支持frame的浏览器显示此区块内容
				◎ noscript - 可选脚本内容（不支持脚本或禁用脚本时显示的内容）
				◎ ol - 有序列表
				◎ p - 段落
				◎ pre - 格式化文本
				◎ table - 表格
				◎ tfoot - 表脚注
				◎ ul - 无序列表
				◎ article - 文章内容(HTML5)
				◎ aside - 伴随内容(HTML5)
				◎ audio - 音频播放(HTML5)
				◎ canvas - 绘制图形(HTML5)
				◎ figcaption - 图文信息组标题(HTML5)
				◎ fiture - 图文信息组(HTML5)
				◎ footer - 尾段或尾页(HTML5)
				◎ header - 区段头或页头(HTML5)
				◎ hgroup - 标题组(HTML5)
				◎ output - 表单输出(HTML5)
				◎ section - 页面区段(HTML5)
				◎ video - 视频(HTML5)

			行内元素(inline element)
				◎ a - 锚点
				◎ abbr - 缩写
				◎ acronym - 首字
				◎ b - 粗体(不推荐)
				◎ bdo - bidi override
				◎ big - 大字体
				◎ br - 换行
				◎ cite - 引用
				◎ code - 计算机代码(在引用源码的时候需要)
				◎ dfn - 定义字段
				◎ em - 强调
				◎ font - 字体设定(不推荐)
				◎ i - 斜体
				◎ img - 图片
				◎ input - 输入框
				◎ kbd - 定义键盘文本
				◎ label - 表格标签
				◎ q - 短引用
				◎ s - 中划线(不推荐)
				◎ samp - 定义范例计算机代码
				◎ select - 项目选择
				◎ small - 小字体文本
				◎ span - 常用内联容器，定义文本内区块
				◎ strike - 中划线
				◎ strong - 粗体强调
				◎ sub - 下标
				◎ sup - 上标
				◎ textarea - 多行文本输入框
				◎ tt - 电传文本
				◎ u - 下划线
				◎ var - 定义变量
				>>行内元素设置width、height、padding-top、padding-bottom、maring-top、margin-bottom是无效的

			可变元素(可变元素为根据上下文语境决定该元素为块元素或者内联元素)
				◎ applet - java applet
				◎ button - 按钮
				◎ del - 删除文本
				◎ iframe - inline frame
				◎ ins - 插入的文本
				◎ map - 图片区块(map)
				◎ object - object对象
				◎ script - 客户端脚本

			常见的空元素:
					<br> <hr> <img> <link> <meta> <input> <textarea> <select> <object>
					鲜为人知的有：
					<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>
			替换元素：
				浏览器根据元素的标签和属性，来决定元素的具体显示内容。
				例如浏览器会根据img标签的src属性的值来获取图片信心并显示出来，
				而如果查看html代码，则看不到图片的实际内容；又比如input标签的type属性来确定显示的是输入框还是单选按钮等。
				在(X)html中的<input> <textarea> <select> <object>都是替换元素。这些元素往往没有实际内容，即是一个空元素。
			不可替换元素：
				HTML中大部分元素都是不可替换元素，其内容直接表现在浏览器。

		3.你真的了解HTML么？（雅虎面试题）
			 有这么一段HTML，请挑毛病：
			 <P>哥写的不是HTML，是寂寞。<br><br>我说：<br>不要迷恋哥，哥只是一个传说

			 *考点1：html和 xhtml的区别
			 这行代码在html 4.01 strict下是完全正确的，在xhtml 1.0 strict下是错误一堆的。所以明显是一个考点。在xhtml下所有标签是闭合的，p,br需要闭合, 标签不允许大写，P要小写。同时nbsp和br必须包含在容器里。html下这些都不是错。p在html里是可选闭合标签，是可以不用闭合的。
			 这个考点告诉你xhtml是多么苛刻。这是基本考点，答对，你能拿到60分。
			 *考点2：考样式分离
			 用nbsp控制缩进是不合理的。应该用CSS干这事。所以应该删掉nbsp
			 *考点3：合理使用标签
			 br是强制折行标签，p是段落。原题用连续的br制造两个段落的效果，效果是达到了，但显然用的不合理，段落间距后期无法再控制。正确的做法是用两个p表现两个段落。“我说”后面是正常的文字折行用br是合理的。
			 上面全答对，你就能拿到100分。

			 对原题改进的结果：
			 html 4.01:
					<p>哥写的不是HTML，是寂寞。<p>我说：<br> 不要迷恋哥，哥只是一个传说
			 xhtml 1.0:
					<p>哥写的不是HTML，是寂寞。</p><p>我说：<br /> 不要迷恋哥，哥只是一个传说</p>
			 加分：合理的用语义化标签
			 在前面的基础上合理的用语义化标签，对内容进行必要的标记，是加分的。但过度的使用标签，就画蛇添足了。如“我说”的话，可以用q标签标注。
					<p>哥写的不是HTML，是寂寞。
					<p>我说：<br> <q>不要迷恋哥，哥只是一个传说</q>
			 我觉得这就够了，如果再进一步，“我”用cite标注，“HTML” 用abbr或acronym标注（至于再讨论abbr和acronym的区别就太较真了），也OK。再复杂就没必要了。
					<p> 哥写的不是<abbr title=”Hyper Text Markup Language”>HTML</abbr>，是寂寞。
					<p><cite> 我</cite>说：<br> <q>不要迷恋哥，哥只是一个传说</q>

		4.请解释一下什么是语义化的HTML。
			内容使用特定标签
			->通过标签就能大概了解整体页面的布局分布;
			->即使在没有样式CSS情况下也以一种文档格式显示;
			->搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
			页面结构清晰
			->便于维护。

		5.对WEB标准以及W3C的理解与认识？
			标签闭合
			标签小写
			不乱嵌套
			提高搜索机器人搜索几率
			使用外链css和js脚本
			结构行为表现的分离
			文件下载与页面速度更快
			内容能被更多的用户所访问
			内容能被更广泛的设备所访问
			更少的代码和组件，容易维护、改版方便，不需要变动页面内容
			提供打印版本而不需要复制内容
			提高网站易用性

		6. html5
			 1>. html5有哪些新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分HTML和HTML5？
					* HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
					绘画 canvas;
					用于媒介回放的 video 和 audio 元素;
					本地离线存储 (可对比cookie)
						localStorage 长期存储数据，浏览器关闭后数据不丢失;
						sessionStorage 的数据在浏览器关闭后自动删除;
					语意化更好的内容元素，比如 article、footer、header、nav、section;
					表单控件，calendar、date、time、email、url、search;
					新的技术webworker, websocket, Geolocation;

			2>. HTML5移除的元素：
			纯表现的元素：basefont，big，center，font, s, strike, tt, u;
			对可用性产生负面影响的元素：frame，frameset，noframes；

			3>. 支持HTML5新标签：
				 IE8/IE7/IE6支持通过document.createElement方法产生的标签，
				 可以利用这一特性让这些浏览器支持HTML5新标签，
				 浏览器支持新标签后，还需要添加标签默认的样式。

				 当然也可以直接使用成熟的框架、比如html5shim;
				 <!--[if lt IE 9]>
					<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
				 <![endif]-->

			4>. HTML5的离线储存怎么使用，工作原理能不能解释一下？
				在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
				原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。
				如何使用：
				1、页面头部像下面一样加入一个manifest的属性；
				2、在cache.manifest文件的编写离线存储的资源；
					CACHE MANIFEST
					#v 0.11
					CACHE:
					js/app.js
					css/style.css
					NETWORK:
					resourse/logo.png
					FALLBACK:
					/ /offline.html
				3、在离线状态时，操作window.applicationCache进行需求实现。
				详细的使用请参考：有趣的HTML5：离线存储

			5>. 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
				在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
				离线的情况下，浏览器就直接使用离线存储的资源。
				详细的使用请参考：有趣的HTML5：离线存储

			6>. HTML5的form如何关闭自动完成功能？
				给不想要提示的 form 或某个 input 设置为 autocomplete=off。

		7.	iframe有那些缺点？
			*iframe会阻塞主页面的Onload事件；
			*搜索引擎的检索程序无法解读这种页面，不利于SEO;
			*iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
			使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
			动态给iframe添加src属性值，这样可以绕开以上两个问题。

		8.	Label的作用是什么？是怎么用的？（加 for 或 包裹）
			label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
			<label for="Name">Number:</label>
			<input type=“text“name="Name" id="Name"/>
			<label>Date:<input type="text" name="B"/></label>

		9.	如何实现浏览器内多个标签页之间的通信? (阿里)
			WebSocket、SharedWorker;
			也可以调用localstorge、cookies等本地存储方式;
			localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，
			我们通过监听事件，控制它的值来进行页面信息通信;
			注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常;

		10.	webSocket如何兼容低浏览器？(阿里)
			Adobe Flash Socket 、
			ActiveX HTMLFile (IE) 、
			基于 multipart 编码发送 XHR 、
			基于长轮询的 XHR

		11. 页面可见性（Page Visibility）API 可以有哪些用途？
			通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
			在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；

		12. 如何在页面上实现一个圆形的可点击区域？
			1、map+area或者svg
			2、border-radius
			3、纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等

		13. 实现不使用 border 画出1px高的线，在不同浏览器的Quirksmode和CSSCompat模式下都能保持同一效果。
			<div style="height:1px;overflow:hidden;background:red"></div>

		14. title与h1的区别、b与strong的区别、i与em的区别？
			title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响:
			strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容。
			i内容展示为斜体，em表示强调的文本;
			Physical Style Elements -- 自然样式标签
			b, i, u, s, pre
			Semantic Style Elements -- 语义样式标签
			strong, em, ins, del, code
			应该准确使用语义样式标签, 但不能滥用, 如果不能确定时首选使用自然样式标签。

	CSS>
		1.	CSS的盒模型?
			介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？
			Css盒模型:内容，border ,margin，padding
			（1）有两种， IE 盒子模型、W3C 盒子模型;
			（2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border);
			（3）区别： IE的content部分把 border 和 padding计算了进去;

		2.	页面导入样式时，使用link和@import有什么区别？
			内联 内嵌 外链 导入
			区别 ：同时加载
		　　前者无兼容性，后者CSS 2.1 以下浏览器不支持
		　　Link 支持使用javascript改变样式，后者不可
			（1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
			（2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
			（3）import是CSS 2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;

		3.介绍所知道的CSS hack技巧（如：_, *, +, \9, !important）
				_marging \\IE 6
				+margin \\IE 7
				Marging:0 auto \9 所有Ie
				Margin \0 \\IE 8

		4.CSS层叠是什么？介绍一下
				层叠就是优先级，内联>内嵌>外链>导入

		5.CSS浏览器兼容问题
			*你做的页面在哪些流览器测试过?这些浏览器的内核（渲染引擎）分别是什么?
				Ie(Trident，即Ie内核) 火狐(Gecko) 谷歌(webkit) opera(Elektra 7.0 Presto 2013 年 Webkit) Safari(Webkit)
js引擎	 Chakra								OdinMonkey V8					 Carakan
			*写出几种IE6 BUG的解决方法
			　　1 .双边距BUG float引起的 使用display
			　　2 .3 像素问题 使用float引起的 使用dislpay:inline -3 px
			　　3 .超链接hover 点击后失效 使用正确的书写顺序 link visited hover active
			　　4 .Ie z-index问题 给父级添加position:relative
			　　5 .Png 透明 使用js代码 改
			　　6 .Min-height 最小高度 !Important 解决’
			　　7 .select 在ie6下遮盖 使用iframe嵌套
			　　8 .为什么没有办法定义 1 px 左右的宽度容器(IE6默认的行高造成的，使用over:hidden,zoom:0.08 line-height:1 px)
			　　9 .ie 6 不支持!important
			*常见兼容性问题？
				* 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？
				* png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.
				* 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。
				* IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。
				浮动ie产生的双倍距离 #box{ float:left; width:10px; margin:0 0 0 100px;}
				这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)
				渐进识别的方式，从总体中逐渐排除局部。
				首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。
				接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
				css
					.bb{
						background-color:#f1ee18;/*所有识别*/
						.background-color:#00deff\9; /*IE6、7、8识别*/
						+background-color:#a200ff;/*IE6、7识别*/
						_background-color:#1e0bd1;/*IE6识别*/
					}
				*IE下,可以使用获取常规属性的方法来获取自定义属性,
				 也可以使用getAttribute()获取自定义属性;
				 Firefox下,只能使用getAttribute()获取自定义属性。
				 解决方法:统一通过getAttribute()获取自定义属性。
				*IE下,even对象有x,y属性,但是没有pageX,pageY属性;
				 Firefox下,event对象有pageX,pageY属性,但是没有x,y属性。
				*解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。
				*Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,
				 可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。
				超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:
				L-V-H-A :a:link {} a:visited {} a:hover {} a:active {}

		6.position的值relative和absolute定位原点是？
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

		7.CSS3的新内容
			@Font-face 特性
			Word-wrap & Text-overflow 样式
			文字渲染（Text-decoration）
			CSS3 的多列布局（multi-column layout）
			边框和颜色（color, border）
			CSS3 的渐变效果（Gradient）
			CSS3 的阴影（Shadow）和反射（Reflect）效果
			CSS3 的背景效果
			CSS3 的盒子模型
			CSS3 的 Transitions, Transforms 和 Animation

		8.什么是FOUC？你如何来避免FOUC？
			1. 由于css引入使用了@import
			2. 或者存在多个style标签
			3. 以及css文件在页面底部引入
			使得css文件加载在html之后导致页面闪烁、花屏
			用link加载css文件，放在head标签里面

		9. CSS选择符有哪些?
			1 .id选择器（ # myid）
			2 .类选择器（.myclassname）
			3 .标签选择器（div, h1, p）
			4 .相邻选择器（h1 + p）
			5 .子选择器（ul > li）
			6 .后代选择器（li a）
			7 .通配符选择器（ * ）
			8 .属性选择器（a[rel = "external"]）
			9 .伪类选择器（a:hover, li:nth-child）

		10 .前端页面由哪三层构成，分别是什么?作用是什么?
			结构层 HTML 表示层 CSS 行为层 js

		11 .CSS的基本语句构成是?
		　　选择器{属性1:值1;属性2:值2;……}

		12 .img标签上title与alt属性的区别是什么?
		　　Alt 当图片不显示是 用文字代表。
		　　Title 为该属性提供信息

		13 .描述css reset的作用和用途。
			Reset重置浏览器的css默认属性 浏览器的品种不同，样式不同，然后重置，让他们统一
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

		14. 解释css sprites，如何使用。
		　　Css 精灵 把一堆小的图片整合到一张大的图片上，减轻服务器对图片的请求数量

		15. 你如何对网站的文件和资源进行优化?期待的解决方案包括：
		　　文件合并
		　　文件最小化/文件压缩
		　　使用CDN托管
		　　缓存的使用

		17. 清除浮动的几种方式，各自的优缺点
		　　1.使用空标签清除浮动 clear:both(理论上能清楚任何标签，增加无意义的标签)
		　　2.使用overflow:auto(空标签元素清除浮动而不得不增加无意代码的弊端,使用zoom:1用于兼容IE)
		　　3.是用afert伪元素清除浮动(用于非IE浏览器)

		18. CSS哪些属性可以继承？
			可继承的样式： font-size font-family color, UL LI DL DD DT;
			不可继承的样式：border padding margin width height ;

		19. CSS优先级算法如何计算？内联和important哪个优先级高?
			优先级就近原则，同权重情况下样式定义最近者为准;
			载入样式以最后载入的定位为准;
			优先级为:
			 !important >id > class > tag
				important 比 内联优先级高

		20. CSS3
			*新增伪类有那些？
				举例：
				p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
				p:last-of-type选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
				p:only-of-type选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
				p:only-child选择属于其父元素的唯一子元素的每个 <p> 元素。
				p:nth-child(2)选择属于其父元素的第二个子元素的每个 <p> 元素。

				:after在元素之前添加内容,也可以用来做清除浮动。
				:before 在元素之后添加内容
				:enabled
				:disabled 控制表单控件的禁用状态。
				:checked单选框或复选框被选中。
			*CSS3有哪些新特性？
				新增各种CSS选择器（: not(.input)：所有 class 不是“input”的节点）
				圆角 （border-radius:8px）
				多列布局（multi-column layout）
				阴影和反射（Shadow\Reflect）
				文字特效（text-shadow、）
				文字渲染（Text-decoration）
				线性渐变（gradient）
				旋转（transform）
				增加了旋转,缩放,定位,倾斜,动画，多背景
				transform:\scale(0.85,0.90)\ translate(0px,-30px)\ skew(-9deg,0deg)\Animation:
			*请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？


		21. 如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？
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

		22. display有哪些值？说明他们的作用。
			block 象块类型元素一样显示。
			none缺省值。象行内元素类型一样显示。
			inline-block象行内元素一样显示，但其内容象块类型元素一样显示。
			list-item 象块类型元素一样显示，并添加样式列表标记。
			table 此元素会作为块级表格来显示
			inherit 规定应该从父元素继承 display 属性的值

		23. li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
			行框的排列会受到中间空白（回车\空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。

		24. 用纯CSS创建一个三角形的原理是什么？
			把上、左、右三条边隐藏掉（颜色设为 transparent）
			#demo {
			width: 0;
			height: 0;
			border-width: 20px;
			border-style: solid;/*double有惊喜*/
			border-color: transparent transparent red transparent;
			}

		25. 一个满屏 品 字布局 如何设计?
			简单的方式：
				上面的div宽100%，
				下面的两个div分别宽50%，
				然后用float或者inline使其不换行即可

		26. absolute的containing block计算方式跟正常流有什么不同？
			无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：
			1、若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；
			2、否则,则由这个祖先元素的 padding box 构成。
			如果都找不到，则为 initial containing block。
			补充：
			1. static(默认的)/relative：简单说就是它的父元素的内容框（即去掉padding的部分）
			2. absolute: 向上找最近的定位为absolute/relative的元素
			3. fixed: 它的containing block一律为根元素(html/body)，根元素也是initial containing block

		27. CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下有什么区别？
			当一个元素的visibility属性被设置成collapse值后，对于一般的元素，它的表现跟hidden是一样的。
			但例外的是，如果这个元素是table相关的元素，例如table行，table group，table列，table column group，它的表现却跟display: none一样，
			也就是说，它们占用的空间也会释放。
			（实际测试不好用）

		28. position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？
				（skill > css 有文章解释）
				css有三种定位体系:常规流 浮动 绝对定位。
				所谓常规流就是元素没有浮动和绝对定位时在页面上的正常布局显示，即是块级元素就独占一行，是内联元素(行内元素)就可以和其它内联元素并排一行。元素是块级元素还是内联元素取决于display的值。
				在有关css的定位体系中，position float display这三个值相互影响，总体上来看，有一个优先级的关系:
				1 若position值为absolute或者fixed，float的计算值为none，display的计算值要进行转换。
				2 若postion为static或者relative，float不为none，对于根元素，display的值要进行转化，对于非根元素，用display的特性值。
				3 若postion的值不是absolute或者fixed，float的值为none，则按照display的设定值显示
				因此，可以看成postion的优先级最高，float其次 display的最低。

			追问：normal flow、containing block、bfc、margin collapse，base line，writing mode，bidi


		29. 对BFC规范(块级格式化上下文：block formatting context)的理解？
		（W3C CSS 2.1 规范中的一个概念,它是一个独立容器，决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用。）
		 一个页面是由很多个 Box 组成的,元素的类型和 display 属性,决定了这个 Box 的类型。
		 不同类型的 Box,会参与不同的 Formatting Context（决定如何渲染文档的容器）,因此Box内的元素会以不同的方式渲染,也就是说BFC内部的元素和外部的元素不会互相影响。


		30. css定义的权重
		CSS权重优先级是如何计算的
		以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下例子是演示各种定义的权重值：
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


		31.请解释一下为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式

		32.移动端的布局用过媒体查询吗？

		33.使用 CSS 预处理器吗？喜欢那个？
		SASS (SASS、LESS没有本质区别，只因为团队前端都是用的SASS)


		34.CSS优化、提高性能的方法有哪些？

		35.浏览器是怎样解析CSS选择器的？

		36.在网页中的应该使用奇数还是偶数的字体？为什么呢？

		37.margin和padding分别适合什么场景使用？

		38.抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]

		39.元素竖向的百分比设定是相对于容器的高度吗？

		40.全屏滚动的原理是什么？用到了CSS的那些属性？

		41. 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？

		42. 视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）

		43. ::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。

		44. 如何修改chrome记住密码后自动填充表单的黄色背景 ？

		45. 你对line-height是如何理解的？

		46. 设置元素浮动后，该元素的display值是多少？（自动变成display:block）

		47. 怎么让Chrome支持小于12px 的文字？

		48. 让页面里的字体变清晰，变细用CSS怎么做？（-webkit-font-smoothing: antialiased;）

		49. font-style属性可以让它赋值为“oblique” oblique是什么意思？

		50. position:fixed;在android下无效怎么处理？

		51. 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）
		多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms

		52. display:inline-block 什么时候会显示间隙？(携程)
		移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing

		53. overflow: scroll时不能平滑滚动的问题怎么处理？

		54. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。

		55. png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？

		56. 什么是Cookie 隔离？（或者说：请求资源的时候不要让它带cookie怎么做）
		如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，
		所以不如隔离开。

		因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，
		这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。

		同时这种方式不会将cookie传入Web Server，也减少了Web Server对cookie的处理分析环节，
		提高了webserver的http请求的解析速度。


		57. style标签写在body后与body前有什么区别？

		58. 什么是CSS 预处理器 / 后处理器？
		- 预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less，增强了css代码的复用性，
		还有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。
		- 后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的
		是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。

	Javascript>
		1.HTTP协议的状态消息码（有哪些？代表什么意义？）
		2.AJAX
			1>. AJAX是什么？
				Ajax是异步JavaScript和XML，用于在Web页面中实现异步数据交互。
				优点：
					* 　可以使得页面不重载全部内容的情况下加载局部内容，降低数据传输量
					* 　避免用户不断刷新或者跳转页面，提高用户体验
				缺点：

					* 　对搜索引擎不友好（
					* 　要实现ajax下的前后退功能成本较大
					* 　可能造成请求数的增加
					* 　跨域问题限制
			2>. AJAX的交互模型（流程），AJAX跨域的解决办法。
			3>.	请尽可能详尽的解释AJAX的工作原理。
				创建ajax对象（XMLHttpRequest/ActiveXObject(Microsoft.XMLHttp)）
				判断数据传输方式(GET/POST)
				打开链接 open()
				发送 send()
				当ajax对象完成第四步（onreadystatechange）数据接收完成，判断http响应状态（status）200-300之间或者304（缓存）执行回调函数
			4>.	同步和异步的区别
				同步的概念应该是来自于OS中关于同步的概念:不同进程为协同完成某项工作而在先后次序上调整(通过阻塞,唤醒等方式).同步强调的是顺序性.谁先谁后.异步则不存在这种顺序性.
				同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作。
				异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。
				（待完善）
			5>.	ajax请求的时候get 和post方式的区别
				一个在url后面 一个放在虚拟载体里面
				有大小限制
				安全问题
				应用不同 一个是论坛等只需要请求的，一个是类似修改密码的
			6>.	ajax请求时，如何解释json数据
				使用eval parse 鉴于安全性考虑 使用parse更靠谱
			7>.	解释jsonp的原理，以及为什么不是真正的ajax
				动态创建script标签，回调函数
				Ajax是页面无刷新请求数据操作
			8>.	Ajax 是什么? 如何创建一个Ajax？
				ajax的全称：Asynchronous Javascript And XML。
				异步传输+js+xml。
				所谓异步，在这里简单地解释就是：向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，提高了用户体验。

				(1)创建XMLHttpRequest对象,也就是创建一个异步调用对象
				(2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
				(3)设置响应HTTP请求状态变化的函数
				(4)发送HTTP请求
				(5)获取异步调用返回的数据
				(6)使用JavaScript和DOM实现局部刷新
		3.继承
			1>.	Javascript继承有哪两种形式？
				你能解释一下JavaScript中的继承是如何工作的吗？
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
						Person.apply(this,arguments)
						this.job = job;
				}
				for(var i in Person.prototype){
						Worker.prototype = Person.prototype;
				}
				new Worker('sl', 'coders').showName();
			3>.	b继承a的方法
			4>.	Javascript如何实现继承？
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
				}
				* JavaScript继承的几种实现方式？
				* 参考：构造函数的继承，非构造函数的继承；

		4.封装
			1>. 简述javascript封装
		5.this
			1>.this关键字的使用场合和用法（如在构造函数中、setTimeout中）
			2>.写出3个使用this的典型应用
				事件： 如onclickthis->发生事件的对象
				构造函数this->new 出来的object
				call/apply改变this
			3>.对this的理解
				* this总是指向函数的直接调用者（而非间接调用者）；
				* 如果有new关键字，this指向new出来的那个对象；
				* 在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window;

		6.闭包
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
				http://blog.csdn.net/gaoshanwudi/article/details/7355794 此链接可查看（问这个问题的不是一个公司）
			3>.	什么是闭包（closure），为什么要用它？
				闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。
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
						nodes[i].onclick = function(){
							console.log(i+1);//不用闭包的话，值每次都是4
						}(i);
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
		7.数据类型
			1>.	Javascript的数据类型都有什么？
				基本数据类型：String, Boolean, Number, Undefined, Null
				引用数据类型：Object(Array, Date, RegExp, Function)
					* 介绍js的基本数据类型。
				Undefined、Null、Boolean、Number、String
					* 介绍js有哪些内置对象？
				Object 是 JavaScript 中所有对象的父对象
				数据封装类对象：Object、Array、Boolean、Number 和 String
				其他对象：Function、Arguments、Math、Date、RegExp、Error

			2>.	如何判断某变量是否为数组数据类型？
				方法一.判断其是否具有“数组性质”，如slice()方法。可自己给该变量定义slice方法，故有时会失效
				方法二.obj instanceof Array 在某些IE版本中不正确
				方法三.方法一二皆有漏洞，在ECMA Script5中定义了新方法Array.isArray(), 保证其兼容性，最好的方法如下：
				if(typeof Array.isArray==="undefined")
				{
				Array.isArray = function(arg){
						return Object.prototype.toString.call(arg)==="[object Array]"
					};
				}
			2>.	javascript的typeof返回哪些数据类型
				Object number function boolean underfind
		　　3>.	例举3种强制类型转换和2种隐式类型转换?
			　　强制（parseInt,parseFloat,number）
			　　隐式（== – ===）
			4>.	* JavaScript有几种类型的值？，你能画一下他们的内存图吗？
				栈：原始数据类型（Undefined，Null，Boolean，Number、String）
				堆：引用数据类型（对象、数组和函数）

				两种类型的区别是：存储位置不同；
				原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
				引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其
				在栈中的地址，取得地址后从堆中获得实体
		8.cookie
			1>. 简述cookie操作以及cookie的属性
			2>.	请描述一下 cookies，sessionStorage 和 localStorage 的区别？
				cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
				cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
				sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

				存储大小：
					cookie数据大小不能超过4k。
					sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

				有期时间：
					localStorage存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
					sessionStorage数据在当前浏览器窗口关闭后自动删除。
					cookie设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
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
		10. DOM操作（添加、移除、移动、复制、创建和查找结点）——基础题，一般不会问
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
		11. Javascript是一门什么样的语言，它有哪些特点？
			没有标准答案
		12.	事件
			1>.Javascript的事件流模型都有什么？
				“事件冒泡”：事件开始由最具体的元素接受，然后逐级向上传播
				“事件捕捉”：事件由最不具体的节点先接收，然后逐级向下，一直到最具体的
				“DOM事件流”：三个阶段：事件捕捉，目标阶段，事件冒泡
			2>.事件绑定和普通事件有什么区别
			3>.IE和DOM事件流的区别
				1.执行顺序不一样
				2.参数不一样
				3.事件加不加on
				4.this指向问题
			4>.	事件委托是什么
				让利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行！
				http://www.webasily.com/?p=78 例子可见此链接
			5>.	如何阻止事件冒泡和默认事件
				canceBubble return false
			6>.	事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
				 1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。
				 2. 事件处理机制：IE是事件冒泡、Firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件；
				 3. ev.stopPropagation();（旧ie的方法 ev.cancelBubble = true;）

		13.	JSON
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
		14.	Javascript中callee和caller的作用？
			答案：
			caller是返回一个对函数的引用，该函数调用了当前函数；
			callee是返回正在被执行的function函数，也就是所指定的function对象的正文。
			那么问题来了？如果一对兔子每月生一对兔子；一对新生兔，从第二个月起就开始生兔子；假定每对兔子都是一雌一雄，试问一对兔子，第n个月能繁殖成多少对兔子？（使用callee完成）
			var result=[];
			function fn(n){//典型的斐波那契数列
			 if(n==1){
					return 1;
			 }else if(n==2){
					 return 1;
			 }else{
					if(result[n]){
							return result[n];
					}else{
							//argument.callee()表示fn()
							result[n]=arguments.callee(n-1)+arguments.callee(n-2);
							return result[n];
					}
			 }
			}
		15.	规避javascript多人开发函数重名问题
				命名空间
				封闭空间
				js模块化mvc（数据层、表现层、控制层）
				seajs
				变量转换成对象的属性
				对象化
		16.基础方法
			1>.	split() join() 的区别
				前者是切割成数组的形式，后者是将数组转换成字符串
			2>.数组方法pop() push() unshift() shift()
				Push()尾部添加 pop()尾部删除
				Unshift()头部添加 shift()头部删除
			3>.数组和对象有哪些原生方法，列举一下？
		　
		17.call和apply的区别
			Object.call(this,obj1,obj2,obj3)
			Object.apply(this,arguments)
			例子中用 add 来替换 sub，add.call(sub,3,1) == add(3,1) ，所以运行结果为：alert(4);

			注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。

				function add(a,b)
				{
					alert(a+b);
				}

				function sub(a,b)
				{
					alert(a-b);
				}

				add.call(sub,3,1);

		18.javascript的本地对象，内置对象和宿主对象
			本地对象为array obj regexp等可以new实例化
			内置对象为gload Math 等不可以实例化的
			宿主为浏览器自带的document,window 等

		19.document load 和document ready的区别
			Document.onload 是在结构和样式加载完才执行js
			Document.ready原生种没有这个方法，jquery中有 $().ready(function)

		20."=="和"==="的不同
			前者会自动转换类型
			后者不会

		21.javascript的同源策略
			一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合

		22.说几条写JavaScript的基本规范？
			1.不要在同一行声明多个变量。
			2.请使用 ===/!==来比较true/false或者数值
			3.使用对象字面量替代new Array这种形式
			4.不要使用全局函数。
			5.Switch语句必须带有default分支
			6.函数不应该有时候有返回值，有时候没有返回值。
			7.For循环必须使用大括号
			8.If语句必须使用大括号
			9.for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污染。

		23.* JavaScript原型，原型链 ? 有什么特点？
			每个对象都会在其内部初始化一个属性，就是prototype(原型)，当我们访问一个对象的属性时，
			如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，
			于是就这样一直找下去，也就是我们平时所说的原型链的概念。
			关系：instance.constructor.prototype = instance.__proto__

			特点：
			JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。


			 当我们需要一个属性的时，Javascript引擎会先看当前对象中是否有这个属性， 如果没有的话，
			 就会查找他的Prototype对象是否有这个属性，如此递推下去，一直检索到 Object 内建对象。
				function Func(){}
				Func.prototype.name = "Sean";
				Func.prototype.getInfo = function() {
				return this.name;
				}
				var person = new Func();//现在可以参考var person = Object.create(oldObject);
				console.log(person.getInfo());//它拥有了Func的属性和方法
				//"Sean"
				console.log(Func.prototype);
				// Func { name="Sean", getInfo=function()}

		24.	* javascript创建对象的几种方式？
				javascript创建对象简单的说,无非就是使用内置对象或各种自定义对象，当然还可以用JSON；但写法有很多种，也能混合使用。


				1、对象字面量的方式

					person={firstname:"Mark",lastname:"Yun",age:25,eyecolor:"black"};

				2、用function来模拟无参的构造函数

					function Person(){}
					var person=new Person();//定义一个function，如果使用new"实例化",该function可以看作是一个Class
					person.name="Mark";
					person.age="25";
					person.work=function(){
					alert(person.name+" hello...");
					}
					person.work();

				3、用function来模拟参构造函数来实现（用this关键字定义构造的上下文属性）

					function Pet(name,age,hobby){
					 this.name=name;//this作用域：当前对象
					 this.age=age;
					 this.hobby=hobby;
					 this.eat=function(){
						alert("我叫"+this.name+",我喜欢"+this.hobby+",是个程序员");
					 }
					}
					var maidou =new Pet("麦兜",25,"coding");//实例化、创建对象
					maidou.eat();//调用eat方法


				4、用工厂方式来创建（内置对象）

					 var wcDog =new Object();
					 wcDog.name="旺财";
					 wcDog.age=3;
					 wcDog.work=function(){
					 alert("我是"+wcDog.name+",汪汪汪......");
					 }
					 wcDog.work();


				5、用原型方式来创建

					function Dog(){

					 }
					 Dog.prototype.name="旺财";
					 Dog.prototype.eat=function(){
					 alert(this.name+"是个吃货");
					 }
					 var wangcai =new Dog();
					 wangcai.eat();


				5、用混合方式来创建

					function Car(name,price){
					this.name=name;
					this.price=price;
					}
					 Car.prototype.sell=function(){
					 alert("我是"+this.name+"，我现在卖"+this.price+"万元");
					}
					var camry =new Car("凯美瑞",27);
					camry.sell();

		25. Javascript作用链域?
			全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。
			当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找，
			直至全局函数，这种组织形式就是作用域链。

		26.eval是做什么的？
		它的功能是把对应的字符串解析成JS代码并运行；
		应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
		由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')');

		27.* 什么是window对象? 什么是document对象?

		28.* null，undefined 的区别？
			null表示一个对象被定义了，值为“空值”；
			undefined 表示不存在这个值。


			typeof undefined
				//"undefined"
				undefined :是一个表示"无"的原始值或者说表示"缺少值"，就是此处应该有一个值，但是还没有定义。当尝试读取时会返回 undefined；
				例如变量被声明了，但没有赋值时，就等于undefined

			typeof null
				//"object"
				null : 是一个对象(空对象, 没有任何属性和方法)；
				例如作为函数的参数，表示该函数的参数不是对象；

			注意：
				在验证null时，一定要使用　=== ，因为 == 无法分别 null 和　undefined


			再来一个例子：

				null
				Q：有张三这个人么？
				A：有！
				Q：张三有房子么？
				A：没有！

				undefined
				Q：有张三这个人么？
				A：没有！

			参考阅读：undefined与null的区别

		29.javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？
			use strict是一种ECMAscript 5 添加的（严格）运行模式,这种模式使得 Javascript 在更严格的条件下运行,

			使JS编码更加规范化的模式,消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为。
			默认支持的糟糕特性都会被禁用，比如不能用with，也不能在意外的情况下给全局变量赋值;
			全局变量的显示声明,函数必须声明在顶层，不允许在非函数代码块内声明函数,arguments.callee也不允许使用；
			消除代码运行的一些不安全之处，保证代码运行的安全,限制函数中的arguments修改，严格模式下的eval函数的行为和非严格模式的也不相同;

			提高编译器效率，增加运行速度；
			为未来新版本的Javascript标准化做铺垫。

		30.如何判断一个对象是否属于某个类？
		使用instanceof （待完善）
		 if(a instanceof Person){
			 alert('yes');
		 }

		31.new操作符具体干了什么呢?
			 1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
			 2、属性和方法被加入到 this 引用的对象中。
			 3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。

			var obj= {};
			obj.__proto__ = Base.prototype;
			Base.call(obj);

		32.* 用原生JavaScript的实现过什么功能吗？

		33.* Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
			hasOwnProperty
			javaScript中hasOwnProperty函数方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。
			使用方法：
			object.hasOwnProperty(proName)
			其中参数object是必选项。一个对象的实例。
			proName是必选项。一个属性名称的字符串值。
			如果 object具有指定名称的属性，那么JavaScript中hasOwnProperty函数方法返回true，反之则返回false。

		34.* js延迟加载的方式有哪些？
		defer和async、动态创建DOM方式（用得最多）、按需异步载入js

		35.如何解决跨域问题?
		jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面

		36.* 页面编码和被请求的资源编码如果不一致如何处理？

		37.* 模块化开发怎么做？
			立即执行函数,不暴露私有成员
				var module1 = (function(){
					var _count = 0;
					var m1 = function(){
					　　//...
					};
					var m2 = function(){
					　　//...
					};
					return {
					　　m1 : m1,
					　　m2 : m2
					};
				　　})();

			（待完善）

		38.* AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？
				AMD 规范在这里：https://github.com/amdjs/amdjs-api/wiki/AMD
				CMD 规范在这里：https://github.com/seajs/seajs/issues/242
				Asynchronous Module Definition，异步模块定义，所有的模块将被异步加载，模块加载不影响后面语句运行。所有依赖某些模块的语句均放置在回调函数中。

				 区别：

					1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
					2. CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：

				// CMD
				define(function(require, exports, module) {
					var a = require('./a')
					a.doSomething()
					// 此处略去 100 行
					var b = require('./b') // 依赖可以就近书写
					b.doSomething()
					// ...
				})

				// AMD 默认推荐
				define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
					a.doSomething()
					// 此处略去 100 行
					b.doSomething()
					// ...
				})
		39.异步加载JS的方式有哪些？
		(1) defer，只支持IE
		(2) async：
		(3) 创建script，插入到DOM中，加载完毕后callBack

		40.documen.write和 innerHTML的区别
			document.write只能重绘整个页面
			innerHTML可以重绘页面的一部分

		41.需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？

		42.* 如何判断当前脚本运行在浏览器还是node环境中？（阿里）
		通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中

		43* 移动端最小触控区域是多大？

		44.解释JavaScript中的作用域与变量声明提升？

		45.那些操作会造成内存泄漏？
			内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
			垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

			setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
			闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）

		46.把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？

	jQuery>
		1.Jquery源码是否读过？
			JQuery的源码看过吗？能不能简单概况一下它的实现原理？
		2.	说说基本架构或者Jquery.fn.init中都做了哪些判断
		3.	jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？
		4.都知道哪些不好的jquery书写方式
		5.Sizzle是否读过
		6.	jquery中如何将数组转化为json字符串，然后再转化回来？
			jQuery中没有提供这个功能，所以你需要先编写两个jQuery的扩展：
			$.fn.stringifyArray = function(array) {
				return JSON.stringify(array)
			}

			$.fn.parseArray = function(array) {
				return JSON.parse(array)
			}

			然后调用：
			$("").stringifyArray(array)
		7.	jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？
		8.	jquery.extend 与 jquery.fn.extend的区别？
		9.	jQuery 的队列是如何实现的？队列可以用在哪些地方？
		10.	谈一下Jquery中的bind(),live(),delegate(),on()的区别？
		11.	JQuery一个对象可以同时绑定多个事件，这是如何实现的？
		12.	是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？
		13.	jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）
		14.	针对 jQuery性能的优化方法？
			*基于Class的选择性的性能相对于Id选择器开销很大，因为需遍历所有DOM元素。
			*频繁操作的DOM，先缓存起来再操作。用Jquery的链式调用更好。
			 比如：var str=$("a").attr("href");

			*for (var i = size; i < arr.length; i++) {}
			 for 循环每一次循环都查找了数组 (arr) 的.length 属性，在开始循环的时候设置一个变量来存储这个数字，可以让循环跑得更快：
			 for (var i = size, length = arr.length; i < length; i++) {}
		15.	Jquery与jQuery UI 有啥区别？
				jQuery是一个js库，主要提供的功能是选择器，属性修改和事件绑定等等。
				jQuery UI则是在jQuery的基础上，利用jQuery的扩展性，设计的插件。
				提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等
		16.	jQuery和Zepto的区别？各自的使用场景？
		17.	Zepto的点透问题如何解决？
		18.	jQueryUI如何自定义组件?
		19.	jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?

		20.	把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？

		21.	移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）

		22.	知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?

		23.	Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？

		24.	谈一下Jquery中的bind(),live(),delegate(),on()的区别？

		25.	是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？

		26.	jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）

	Angular>
	Nodejs>
		1.Node.js的适用场景？
		2.	知道route, middleware, cluster, nodemon, pm2, server-side rendering么?
		3.	对Node的优点和缺点提出了自己的看法？
			*（优点）因为Node是基于事件驱动和无阻塞的，所以非常适合处理并发请求，
			因此构建在Node上的代理服务器相比其他技术实现（如Ruby）的服务器表现要好得多。
			此外，与Node代理服务器交互的客户端代码是由javascript语言编写的，
			因此客户端和服务器端都用同一种语言编写，这是非常美妙的事情。
			*（缺点）Node是一个相对新的开源项目，所以不太稳定，它总是一直在变，
			而且缺少足够多的第三方库支持。看起来，就像是Ruby/Rails当年的样子。
	其他>
		1.都使用和了解过哪些编辑器？都使用和了解过哪些日常工具？
		2.都知道哪些浏览器内核？开发过的项目都兼容哪些浏览器？
		3.国内外的js牛人都知道哪些？
		4.瀑布流或者流式布局是否有了解？（是否是css相关）
		5.正则表达式有系统的学习过么？（邮箱验证、URL验证、贪婪匹配、懒惰匹配）
		6.Nodejs是否了解过？到什么程度？说说个人的理解和看法
		7.HTML5都有哪些新的JS API？
		8.前端优化的知识都知道哪些？
		9.基础算法题(如快读排序，能否一两句说说重要的核心原理或者数组消重)
		10. 是否有接触或了解过重构
		11. 你能描述一下你制作一个网页的工作流程吗？
		12. 你能描述一下渐进增强和优雅降级之间的不同吗?
		13. 你如何对网站的文件和资源进行优化？

		14. 为什么利用多个域名来存储网站资源会更有效？
			//确保用户在不同地区能用最快的速度打开网站，其中某个域名崩溃用户也能通过其他郁闷访问网站

		15. 请说出三种减低页面加载时间的方法
			1、压缩css、js文件
			2、合并js、css文件，减少http请求
			3、外部js、css文件放在最底下
			4、减少dom操作，尽可能用变量替代不必要的dom操作


		16. 你使用过那些Javascript库？
			jquery seajs yui

		17. 哈希表
		//具有散列（映射）特性的数据模型

		18. 请解释什么是Javascript的模块模式，并举出实用实例。
		js模块化mvc（数据层、表现层、控制层）
		seajs
		命名空间

		19.你如何组织自己的代码？是使用模块模式，还是使用经典继承的方法？
		对内：模块模式
		对外：继承

		20. 你如何优化自己的代码？
		代码重用
		避免全局变量（命名空间，封闭空间，模块化mvc..）
		拆分函数避免函数过于臃肿
		注释

		21.useraget.nav

		22. 介绍一下你对浏览器内核的理解？常见的浏览器内核有哪些？
			主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。
			渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

			JS引擎则：解析和执行javascript来实现网页的动态效果。

			最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。
		23.常见的浏览器内核有哪些？
			Trident内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]
			Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等
			Presto内核：Opera7及以上。[Opera内核原为：Presto，现为：Blink;]
			Webkit内核：Safari,Chrome等。 [ Chrome的：Blink（WebKit的分支）]

		24.	解释一下 Backbone 的 MVC 实现方式？

		25.	什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?

		26.	知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?

		27.	如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?

		28.	前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?

		29.	简述一下 Handlebars 的基本用法？

		30.	简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？

		31.	检测浏览器版本版本有哪些方式？

		32.	我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡，你来说下会执行几次事件，然后会先执行冒泡还是捕获

		33.	原来公司工作流程是怎么样的，如何与其他人协作的？如何夸部门合作的？

		34. 你遇到过比较难的技术问题是？你是如何解决的？

		35. 设计模式 知道什么是singleton, factory, strategy, decrator么?

		36. 常使用的库有哪些？常用的前端开发工具？开发过什么应用或组件？

		37. 页面重构怎么操作？
			网站重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。
			也就是说是在不改变UI的情况下，对网站进行优化，在扩展的同时保持一致的UI。

			对于传统的网站来说重构通常是：

			表格(table)布局改为DIV+CSS
			使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对IE6有效的)
			对于移动平台的优化
			针对于SEO进行优化
			深层次的网站重构应该考虑的方面

			减少代码间的耦合
			让代码保持弹性
			严格按规范编写代码
			设计可扩展的API
			代替旧有的框架、语言(如VB)
			增强用户体验
			通常来说对于速度的优化也包含在重构中

			压缩JS、CSS、image等前端资源(通常是由服务器来解决)
			程序的性能优化(如数据读写)
			采用CDN来加速资源加载
			对于JS DOM的优化
			HTTP服务器的文件缓存

		38. 列举IE与其他浏览器不一样的特性？
			1、事件不同之处：
			触发事件的元素被认为是目标（target）。而在 IE 中，目标包含在 event 对象的 srcElement 属性；
			获取字符代码、如果按键代表一个字符（shift、ctrl、alt除外），IE 的 keyCode 会返回字符代码（Unicode），DOM 中按键的代码和字符是分离的，要获取字符代码，需要使用 charCode 属性；
			阻止某个事件的默认行为，IE 中阻止某个事件的默认行为，必须将 returnValue 属性设置为 false，Mozilla 中，需要调用 preventDefault() 方法；
			停止事件冒泡，IE 中阻止事件进一步冒泡，需要设置 cancelBubble 为 true，Mozzilla 中，需要调用 stopPropagation();

		39. 99%的网站都需要被重构是那本书上写的？
			网站重构：应用web标准进行设计（第2版）

		40. 什么叫优雅降级和渐进增强？
			优雅降级：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会针对旧版本的IE进行降级处理了,使之在旧式浏览器上以某种形式降级体验却不至于完全不能用。
			如：border-shadow

			渐进增强：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新版本浏览器才支持的功能,向页面增加不影响基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。
			如：默认使用flash上传，但如果浏览器支持 HTML5 的文件上传功能，则使用HTML5实现更好的体验；

		41. 是否了解公钥加密和私钥加密。
			一般情况下是指私钥用于对数据进行签名，公钥用于对签名进行验证;
			HTTP网站在浏览器端用公钥加密敏感数据，然后在服务器端再用私钥解密。

		42. WEB应用从服务器主动推送Data到客户端有那些方式？
			html5提供的Websocket
			不可见的iframe
			WebSocket通过Flash
			XHR长时间连接
			XHR Multipart Streaming
			<script>标签的长时间连接(可跨域)

		43. 你有用过哪些前端性能优化的方法？
			如何编写高性能的Javascript？
			部分地区用户反应网站很卡，请问有哪些可能性的原因，以及解决方法？
			从打开app到刷新出内容，整个过程中都发生了什么，如果感觉慢，怎么定位问题，怎么解决?

			（1） 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。

			（2） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数

			（3） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。

			（4） 当需要设置的样式很多时设置className而不是直接操作style。

			（5） 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。

			（6） 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。

			（7） 图片预加载，将样式表放在顶部，将脚本放在底部加上时间戳。

			（8） 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。
			对普通的网站有一个统一的思路，就是尽量向前端优化、减少数据库操作、减少磁盘IO。向前端优化指的是，在不影响功能和体验的情况下，能在浏览器执行的不要在服务端执行，能在缓存服务器上直接返回的不要到应用服务器，程序能直接取得的结果不要到外部取得，本机内能取得的数据不要到远程取，内存能取到的不要到磁盘取，缓存中有的不要去数据库查询。减少数据库操作指减少更新次数、缓存结果减少查询次数、将数据库执行的操作尽可能的让你的程序完成（例如join查询），减少磁盘IO指尽量不使用文件系统作为缓存、减少读写文件次数等。程序优化永远要优化慢的部分，换语言是无法“优化”的。

		44 http状态码有那些？分别代表是什么意思？
			* http状态码有那些？分别代表是什么意思？
			简单版
			[
				100Continue 继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
				200OK 正常返回信息
				201Created请求成功并且服务器创建了新的资源
				202Accepted 服务器已接受请求，但尚未处理
				301Moved Permanently请求的网页已永久移动到新位置。
				302 Found 临时性重定向。
				303 See Other 临时性重定向，且总是使用 GET 请求新的 URI。
				304Not Modified 自从上次请求后，请求的网页未修改过。

				400 Bad Request服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
				401 Unauthorized 请求未授权。
				403 Forbidden 禁止访问。
				404 Not Found 找不到如何与 URI 相匹配的资源。

				500 Internal Server Error最常见的服务器端错误。
				503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
			]

		完整版
		1**(信息类)：表示接收到请求并且继续处理
			100——客户必须继续发出请求
			101——客户要求服务器根据请求转换HTTP协议版本

		2**(响应成功)：表示动作被成功接收、理解和接受
			200——表明该请求被成功地完成，所请求的资源发送回客户端
			201——提示知道新文件的URL
			202——接受和处理、但处理未完成
			203——返回信息不确定或不完整
			204——请求收到，但返回信息为空
			205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件
			206——服务器已经完成了部分用户的GET请求

		3**(重定向类)：为了完成指定的动作，必须接受进一步处理
			300——请求的资源可在多处得到
			301——本网页被永久性转移到另一个URL
			302——请求的网页被转移到一个新的地址，但客户访问仍继续通过原始URL地址，重定向，新的URL会在response中的Location中返回，浏览器将会使用新的URL发出新的Request。
			303——建议客户访问其他URL或访问方式
			304——自从上次请求后，请求的网页未修改过，服务器返回此响应时，不会返回网页内容，代表上次的文档已经被缓存了，还可以继续使用
			305——请求的资源必须从服务器指定的地址得到
			306——前一版本HTTP中使用的代码，现行版本中不再使用
			307——申明请求的资源临时性删除

		4**(客户端错误类)：请求包含错误语法或不能正确执行
			400——客户端请求有语法错误，不能被服务器所理解
			401——请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
			HTTP 401.1 - 未授权：登录失败
			　　HTTP 401.2 - 未授权：服务器配置问题导致登录失败
			　　HTTP 401.3 - ACL 禁止访问资源
			　　HTTP 401.4 - 未授权：授权被筛选器拒绝
			HTTP 401.5 - 未授权：ISAPI 或 CGI 授权失败
			402——保留有效ChargeTo头响应
			403——禁止访问，服务器收到请求，但是拒绝提供服务
			HTTP 403.1 禁止访问：禁止可执行访问
			　　HTTP 403.2 - 禁止访问：禁止读访问
			　　HTTP 403.3 - 禁止访问：禁止写访问
			　　HTTP 403.4 - 禁止访问：要求 SSL
			　　HTTP 403.5 - 禁止访问：要求 SSL 128
			　　HTTP 403.6 - 禁止访问：IP 地址被拒绝
			　　HTTP 403.7 - 禁止访问：要求客户证书
			　　HTTP 403.8 - 禁止访问：禁止站点访问
			　　HTTP 403.9 - 禁止访问：连接的用户过多
			　　HTTP 403.10 - 禁止访问：配置无效
			　　HTTP 403.11 - 禁止访问：密码更改
			　　HTTP 403.12 - 禁止访问：映射器拒绝访问
			　　HTTP 403.13 - 禁止访问：客户证书已被吊销
			　　HTTP 403.15 - 禁止访问：客户访问许可过多
			　　HTTP 403.16 - 禁止访问：客户证书不可信或者无效
			HTTP 403.17 - 禁止访问：客户证书已经到期或者尚未生效
			404——一个404错误表明可连接服务器，但服务器无法取得所请求的网页，请求资源不存在。eg：输入了错误的URL
			405——用户在Request-Line字段定义的方法不允许
			406——根据用户发送的Accept拖，请求资源不可访问
			407——类似401，用户必须首先在代理服务器上得到授权
			408——客户端没有在用户指定的饿时间内完成请求
			409——对当前资源状态，请求不能完成
			410——服务器上不再有此资源且无进一步的参考地址
			411——服务器拒绝用户定义的Content-Length属性请求
			412——一个或多个请求头字段在当前请求中错误
			413——请求的资源大于服务器允许的大小
			414——请求的资源URL长于服务器允许的长度
			415——请求资源不支持请求项目格式
			416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段
			417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求长。

		5**(服务端错误类)：服务器不能正确执行一个正确的请求
			HTTP 500 - 服务器遇到错误，无法完成请求
			　　HTTP 500.100 - 内部服务器错误 - ASP 错误
			　　HTTP 500-11 服务器关闭
			　　HTTP 500-12 应用程序重新启动
			　　HTTP 500-13 - 服务器太忙
			　　HTTP 500-14 - 应用程序无效
			　　HTTP 500-15 - 不允许请求 global.asa
			　　Error 501 - 未实现
		HTTP 502 - 网关错误
		HTTP 503：由于超载或停机维护，服务器目前无法使用，一段时间后可能恢复正常


		45 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好）
		注：这题胜在区分度高，知识点覆盖广，再不懂的人，也能答出几句，
		而高手可以根据自己擅长的领域自由发挥，从URL规范、HTTP协议、DNS、CDN、数据库查询、
		到浏览器流式解析、CSS规则构建、layout、paint、onload/domready、JS执行、JS API绑定等等；

		详细版：
			1、浏览器会开启一个线程来处理这个请求，对 URL 分析判断如果是 http 协议就按照 Web 方式来处理;
			2、调用浏览器内核中的对应方法，比如 WebView 中的 loadUrl 方法;
			3、通过DNS解析获取网址的IP地址，设置 UA 等信息发出第二个GET请求;
			4、进行HTTP协议会话，客户端发送报头(请求报头);
			5、进入到web服务器上的 Web Server，如 Apache、Tomcat、Node.JS 等服务器;
			6、进入部署好的后端应用，如 PHP、Java、JavaScript、Python 等，找到对应的请求处理;
			7、处理结束回馈报头，此处如果浏览器访问过，缓存上有对应资源，会与服务器最后修改时间对比，一致则返回304;
			8、浏览器开始下载html文档(响应报头，状态码200)，同时使用缓存;
			9、文档树建立，根据标记请求所需指定MIME类型的文件（比如css、js）,同时设置了cookie;
			10、页面开始渲染DOM，JS根据DOM API操作DOM,执行事件绑定等，页面显示完成。

		简洁版：
			浏览器根据请求的URL交给DNS域名解析，找到真实IP，向服务器发起请求；
			服务器交给后台处理完成后返回数据，浏览器接收文件（HTML、JS、CSS、图象等）；
			浏览器对加载到的资源（HTML、JS、CSS等）进行语法解析，建立相应的内部数据结构（如HTML的DOM）；
			载入解析到的资源文件，渲染页面，完成。

		46 除了前端以外还了解什么其它技术么？你最最厉害的技能是什么？

		47 你用的得心应手用的熟练地编辑器&开发环境是什么样子？
			Sublime Text 3 + 相关插件编写前端代码
			Google chrome 、Mozilla Firefox浏览器 +firebug 兼容测试和预览页面UI、动画效果和交互功能
			Node.js+Gulp
			git 用于版本控制和Code Review

		48 对前端工程师这个职位是怎么样理解的？它的前景会怎么样？
			前端是最贴近用户的程序员，比后端、数据库、产品经理、运营、安全都近。
			1、实现界面交互
			2、提升用户体验
			3、有了Node.js，前端可以实现服务端的一些事情

			前端是最贴近用户的程序员，前端的能力就是能让产品从 90分进化到 100 分，甚至更好，

			参与项目，快速高质量完成实现效果图，精确到1px；

			与团队成员，UI设计，产品经理的沟通；

			做好的页面结构，页面重构和用户体验；

			处理hack，兼容、写出优美的代码格式；

			针对服务器的优化、拥抱最新前端技术。

		49 你怎么看待Web App 、hybrid App、Native App？

		50* 你移动端前端开发的理解？（和 Web 前端开发的主要区别是什么？）

		51* 你对加班的看法？
			加班就像借钱，原则应当是----救急不救穷

		52* 平时如何管理你的项目？
			先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等；
			编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）；
			标注样式编写人，各模块都及时标注（标注关键样式调用的地方）；
			页面进行标注（例如 页面 模块 开始和结束）；
			CSS跟HTML 分文件夹并行存放，命名都得统一（例如style.css）；
			JS 分文件夹存放 命名以该JS功能为准的英文翻译。
			图片采用整合的 images.png png8 格式文件使用 尽量整合在一起使用方便将来的管理

		53* 如何设计突发大规模并发架构？

		54* 当团队人手不足，把功能代码写完已经需要加班的情况下，你会做前端代码的测试吗？

		55* 说说最近最流行的一些东西吧？常去哪些网站？
			ES6\WebAssembly\Node\MVVM\Web Components\React\React Native\Webpack 组件化

		56* 知道什么是SEO并且怎么优化么? 知道各种meta data的含义么?

		57* 移动端（Android IOS）怎么做好用户体验?
			清晰的视觉纵线、
			信息的分组、极致的减法、
			利用选择代替输入、
			标签及文字的排布方式、
			依靠明文确认密码、
			合理的键盘利用

		58* 简单描述一下你做过的移动APP项目研发流程？

		59* 你在现在的团队处于什么样的角色，起到了什么明显的作用？

		60* 你认为怎样才是全端工程师（Full Stack developer）？

		61* 介绍一个你最得意的作品吧？

		62* 你有自己的技术博客吗，用了哪些技术？

		63* 对前端安全有什么看法？

		64* 是否了解Web注入攻击，说下原理，最常见的两种攻击（XSS 和 CSRF）了解到什么程度？

		65* 项目中遇到过哪些印象深刻的技术难题，具体是什么问题，怎么解决？。

		66* 最近在学什么东西？

		67* 你的优点是什么？缺点是什么？

		68* 如何管理前端团队?

		69* 最近在学什么？能谈谈你未来3，5年给自己的规划吗？

		70* 对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样？

		71* requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）

		72* JS 怎么实现一个类。怎么实例化这个类

		73* 解释一下 Backbone 的 MVC 实现方式？

		74* 什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?

		75* 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?

		76* 如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?

		77* 前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?

		78* 简述一下 Handlebars 的基本用法？

		79* 简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？

		80* 网页验证码是干嘛的，是为了解决什么安全问题？
			区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水；
			有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试。
		81* 检测浏览器版本版本有哪些方式？
			功能检测、userAgent特征检测

			比如：navigator.userAgent
			//"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36
			(KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36

		82* What is a Polyfill?
			polyfill 是“在旧版浏览器上复制标准 API 的 JavaScript 补充”,可以动态地加载 JavaScript 代码或库，在不支持这些标准 API 的浏览器中模拟它们。
			例如，geolocation（地理位置）polyfill 可以在 navigator 对象上添加全局的 geolocation 对象，还能添加 getCurrentPosition 函数以及“坐标”回调对象，
			所有这些都是 W3C 地理位置 API 定义的对象和函数。因为 polyfill 模拟标准 API，所以能够以一种面向所有浏览器未来的方式针对这些 API 进行开发，
			一旦对这些 API 的支持变成绝对大多数，则可以方便地去掉 polyfill，无需做任何额外工作。

		83* 做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？
			比如： html5shiv、Geolocation、Placeholder

		84* 我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？

	ECMAScript6 相关
		* Object.is() 与原来的比较操作符“ ===”、“ ==”的区别？
			两等号判等，会在比较时进行类型转换；
			三等号判等(判断严格)，比较时不进行隐式类型转换,（类型不同则会返回false）；
			Object.is 在三等号判等的基础上特别处理了 NaN 、-0 和 +0 ，保证 -0 和 +0 不再相同，
			但 Object.is(NaN, NaN) 会返回 true.
			Object.is 应被认为有其特殊的用途，而不能用它认为它比其它的相等对比更宽松或严格。

		* 谈一谈你对ECMAScript6的了解？

		* ECMAScript6 怎么写class么，为什么会出现class这种东西?

	前端框架相关
		* react-router 路由系统的实现原理？
		* React中如何解决第三方类库的问题?
