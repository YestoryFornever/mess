知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?
jQuery>
	1.	JQuery的源码看过吗？能不能简单概况一下它的实现原理？
		var jquery = function(){
			return new jquery.fn.init();
		}
		jquery.fn = jquery.prototype;
		jquery.fn.init = function(){}
		jquery.fn.init.prototype = jquery.fn;

		jquery.extend 		=>		$.fn();
		jquery.fn.extend 	=>		$("x").fn();

	2.	jquery.extend 与 jquery.fn.extend的区别？
		jquery.extend 		=>		$.fn();
		jquery.fn.extend 	=>		$("x").fn();
	3.	说说基本架构或者Jquery.fn.init中都做了哪些判断
		if ( !selector ) {
			//处理 $(""), $(null), $(undefined), $(false)
		}

		// 处理 strings
		if ( typeof selector === "string" ) {
			// 处理$("< />")
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// 处理$(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// 处理$(function)
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

	4.	jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？
	5.	Sizzle是否读过
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
	8.	都知道哪些不好的jquery书写方式
	9.	jQuery 的队列是如何实现的？队列可以用在哪些地方？
	10.	谈一下Jquery中的bind(),live(),delegate(),on()的区别？
	11.	JQuery一个对象可以同时绑定多个事件，这是如何实现的？
	12.	是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？
	13.	jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）
		jQuery.find = Sizzle;
		jQuery.fn.extend({
			find: function( selector ) {
				var i,
					len = this.length,
					ret = [],
					self = this;

				if ( typeof selector !== "string" ) {
					return this.pushStack( jQuery( selector ).filter(function() {
						for ( i = 0; i < len; i++ ) {
							if ( jQuery.contains( self[ i ], this ) ) {
								return true;
							}
						}
					}) );
				}

				for ( i = 0; i < len; i++ ) {
					jQuery.find( selector, self[ i ], ret );
				}

				// Needed because $( selector, context ) becomes $( context ).find( selector )
				ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
				ret.selector = this.selector ? this.selector + " " + selector : selector;
				return ret;
			},
		});
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
	20.	谈一下Jquery中的bind(),live(),delegate(),on()的区别？
		全部都可以用on来实现，
		bind灵活，直接绑定事件，
		delegate是用父级节点去代理，
		live类似delegate，但是父节点固定为document，不推荐使用，貌似有bug

	21.	是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？

Angular>
Nodejs>
	22.Node.js的适用场景？
	23.	知道route, middleware, cluster, nodemon, pm2, server-side rendering么?
	24.	对Node的优点和缺点提出了自己的看法？
		*（优点）因为Node是基于事件驱动和无阻塞的，所以非常适合处理并发请求，
		因此构建在Node上的代理服务器相比其他技术实现（如Ruby）的服务器表现要好得多。
		此外，与Node代理服务器交互的客户端代码是由javascript语言编写的，
		因此客户端和服务器端都用同一种语言编写，这是非常美妙的事情。
		*（缺点）Node是一个相对新的开源项目，所以不太稳定，它总是一直在变，
		而且缺少足够多的第三方库支持。看起来，就像是Ruby/Rails当年的样子。
React
	25 react-router 路由系统的实现原理？
	26 React中如何解决第三方类库的问题?

Underscore 
	27对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？

8. 谈谈你对其他前端框架或者前端库的了解，
	underscore，jquery，backbone，angular，requirejs，seajs，bootstrap，flux，knockout...；