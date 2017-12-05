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
		
	3.	说说基本架构或者
		Jquery.fn.init中都做了哪些判断
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

React
	25 react-router 路由系统的实现原理？
	26 React中如何解决第三方类库的问题?
	5. 在谈谈当下流行的react到底是个什么东东，解决了什么问题；
	组件化
	虚拟dom，性能
	配合单向数据流易于维护
	本文有一定概率为水文，怕湿身者勿看。
    React 常用面试题目与分析翻译自React Interview Questions，从属于笔者的Web 前端入门与工程实践，更多前端思考借鉴2016-我的前端之路:工具化与工程化
    调用 setState 之后发生了什么？
    在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。
    React 中 Element 与 Component 的区别是？
    简单而言，React Element 是描述屏幕上所见内容的数据结构，是对于 UI 的对象表述。典型的 React Element 就是利用 JSX 构建的声明式代码片然后被转化为createElement的调用组合。而 React Component 则是可以接收参数输入并且返回某个 React Element 的函数或者类。更多介绍可以参考React Elements vs React Components。
    在什么情况下你会优先选择使用 Class Component 而不是 Functional Component？
    在组件需要包含内部状态或者使用到生命周期函数的时候使用 Class Component ，否则使用函数式组件。
    React 中 refs 的作用是什么？
    注意，根据React最新文档，下面这种用法已经被弃用了，统一改为回调函数模式
    this.refs.textInput
    Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄。我们可以为元素添加ref属性然后在回调函数中接受该元素在 DOM 树中的句柄，该值会作为回调函数的第一个参数返回：
    class CustomForm extends Component {
    handleSubmit = () => {
        console.log("Input Value: ", this.input.value)
    }
    render () {
        return (
        <form onSubmit={this.handleSubmit}>
            <input
            type='text'
            ref={(input) => this.input = input} />
            <button type='submit'>Submit</button>
        </form>
        )
    }
    }
    上述代码中的input域包含了一个ref属性，该属性声明的回调函数会接收input对应的 DOM 元素，我们将其绑定到this指针以便在其他的类函数中使用。另外值得一提的是，refs 并不是类组件的专属，函数式组件同样能够利用闭包暂存其值：
    function CustomForm ({handleSubmit}) {
    let inputElement
    return (
        <form onSubmit={() => handleSubmit(inputElement.value)}>
        <input
            type='text'
            ref={(input) => inputElement = input} />
        <button type='submit'>Submit</button>
        </form>
    )
    }
    React 中 keys 的作用是什么？
    Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。
    render () {
    return (
        <ul>
        {this.state.todoItems.map(({task, uid}) => {
            return <li key={uid}>{task}</li>
        })}
        </ul>
    )
    }
    在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 Key 的重要性。
    如果你创建了类似于下面的Twitter元素，那么它相关的类定义是啥样子的？
    <Twitter username='tylermcginnis33'>
    {(user) => user === null
        ? <Loading />
        : <Badge info={user} />}
    </Twitter>
    import React, { Component, PropTypes } from 'react'
    import fetchUser from 'twitter'
    // fetchUser take in a username returns a promise
    // which will resolve with that username's data.
    class Twitter extends Component {
    // finish this
    }
    如果你还不熟悉回调渲染模式（Render Callback Pattern），这个代码可能看起来有点怪。这种模式中，组件会接收某个函数作为其子组件，然后在渲染函数中以props.children进行调用：
    import React, { Component, PropTypes } from 'react'
    import fetchUser from 'twitter'
    class Twitter extends Component {
    state = {
        user: null,
    }
    static propTypes = {
        username: PropTypes.string.isRequired,
    }
    componentDidMount () {
        fetchUser(this.props.username)
        .then((user) => this.setState({user}))
    }
    render () {
        return this.props.children(this.state.user)
    }
    }
    这种模式的优势在于将父组件与子组件解耦和，父组件可以直接访问子组件的内部状态而不需要再通过Props传递，这样父组件能够更为方便地控制子组件展示的UI界面。譬如产品经理让我们将原本展示的Badge替换为Profile，我们可以轻易地修改下回调函数即可：
    <Twitter username='tylermcginnis33'>
    {(user) => user === null
        ? <Loading />
        : <Profile info={user} />}
    </Twitter>
    Controlled Component 与 Uncontrolled Component 之间的区别是什么？
    React 的核心组成之一就是能够维持内部状态的自治组件，不过当我们引入原生的HTML表单元素时（input,select,textarea 等），我们是否应该将所有的数据托管到 React 组件中还是将其仍然保留在 DOM 元素中呢？这个问题的答案就是受控组件与非受控组件的定义分割。受控组件（Controlled Component）代指那些交由 React 控制并且所有的表单数据统一存放的组件。譬如下面这段代码中username变量值并没有存放到DOM元素中，而是存放在组件状态数据中。任何时候我们需要改变username变量值时，我们应当调用setState函数进行修改。
    class ControlledForm extends Component {
    state = {
        username: ''
    }
    updateUsername = (e) => {
        this.setState({
        username: e.target.value,
        })
    }
    handleSubmit = () => {}
    render () {
        return (
        <form onSubmit={this.handleSubmit}>
            <input
            type='text'
            value={this.state.username}
            onChange={this.updateUsername} />
            <button type='submit'>Submit</button>
        </form>
        )
    }
    }
    而非受控组件（Uncontrolled Component）则是由DOM存放表单数据，并非存放在 React 组件中。我们可以使用 refs 来操控DOM元素：
    class UnControlledForm extends Component {
    handleSubmit = () => {
        console.log("Input Value: ", this.input.value)
    }
    render () {
        return (
        <form onSubmit={this.handleSubmit}>
            <input
            type='text'
            ref={(input) => this.input = input} />
            <button type='submit'>Submit</button>
        </form>
        )
    }
    }
    竟然非受控组件看上去更好实现，我们可以直接从 DOM 中抓取数据，而不需要添加额外的代码。不过实际开发中我们并不提倡使用非受控组件，因为实际情况下我们需要更多的考虑表单验证、选择性的开启或者关闭按钮点击、强制输入格式等功能支持，而此时我们将数据托管到 React 中有助于我们更好地以声明式的方式完成这些功能。引入 React 或者其他 MVVM 框架最初的原因就是为了将我们从繁重的直接操作 DOM 中解放出来。
    在生命周期中的哪一步你应该发起 AJAX 请求？
    我们应当将AJAX 请求放到 componentDidMount 函数中执行，主要原因有下：
    React 下一代调和算法 Fiber 会通过开始或停止渲染的方式优化应用性能，其会影响到 componentWillMount 的触发次数。对于 componentWillMount 这个生命周期函数的调用次数会变得不确定，React 可能会多次频繁调用 componentWillMount。如果我们将 AJAX 请求放到 componentWillMount 函数中，那么显而易见其会被触发多次，自然也就不是好的选择。
    如果我们将 AJAX 请求放置在生命周期的其他函数中，我们并不能保证请求仅在组件挂载完毕后才会要求响应。如果我们的数据请求在组件挂载之前就完成，并且调用了setState函数将数据添加到组件状态中，对于未挂载的组件则会报错。而在 componentDidMount 函数中进行 AJAX 请求则能有效避免这个问题。
    shouldComponentUpdate 的作用是啥以及为何它这么重要？
    shouldComponentUpdate 允许我们手动地判断是否要进行组件更新，根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新。
    如何告诉 React 它应该编译生产环境版本？
    通常情况下我们会使用 Webpack 的 DefinePlugin 方法来将 NODE_ENV 变量值设置为 production。编译版本中 React 会忽略 propType 验证以及其他的告警信息，同时还会降低代码库的大小，React 使用了 Uglify 插件来移除生产环境下不必要的注释等信息。
    为什么我们需要使用 React 提供的 Children API 而不是 JavaScript 的 map？
    React.Children.map(props.children, () => ) instead of props.children.map(() => )
    props.children并不一定是数组类型，譬如下面这个元素：
    <Parent>
    <h1>Welcome.</h1>
    </Parent>
    如果我们使用props.children.map函数来遍历时会受到异常提示，因为在这种情况下props.children是对象（object）而不是数组（array）。React 当且仅当超过一个子元素的情况下会将props.children设置为数组，就像下面这个代码片：
    <Parent>
    <h1>Welcome.</h1>
    <h2>props.children will now be an array</h2>
    </Parent>
    这也就是我们优先选择使用React.Children.map函数的原因，其已经将props.children不同类型的情况考虑在内了。
    概述下 React 中的事件处理逻辑
    为了解决跨浏览器兼容性问题，React 会将浏览器原生事件（Browser Native Event）封装为合成事件（SyntheticEvent）传入设置的事件处理器中。这里的合成事件提供了与原生事件相同的接口，不过它们屏蔽了底层浏览器的细节差异，保证了行为的一致性。另外有意思的是，React 并没有直接将事件附着到子元素上，而是以单一事件监听器的方式将所有的事件发送到顶层进行处理。这样 React 在更新 DOM 的时候就不需要考虑如何去处理附着在 DOM 上的事件监听器，最终达到优化性能的目的。
    createElement 与 cloneElement 的区别是什么？
    createElement 函数是 JSX 编译之后使用的创建 React Element 的函数，而 cloneElement 则是用于复制某个元素并传入新的 Props。
    传入 setState 函数的第二个参数的作用是什么？
    该函数会在setState函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成：
    this.setState(
    { username: 'tylermcginnis33' },
    () => console.log('setState has finished and the component has re-rendered.')
    )
    下述代码有错吗？
    this.setState((prevState, props) => {
    return {
        streak: prevState.streak + props.count
    }
    })
    这段代码没啥问题，不过只是不太常用罢了，详细可以参考React中setState同步更新策略

Underscore 
	27对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？

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
	1. Nodejs是否了解过？到什么程度？说说个人的理解和看法

	8. 谈谈你对其他前端框架或者前端库的了解，
		underscore，jquery，backbone，angular，requirejs，seajs，bootstrap，flux，knockout...；

	16. 你使用过那些Javascript库？
		jquery seajs yui

	36. 常使用的库有哪些？常用的前端开发工具？开发过什么应用或组件？

	起源
	node正风生火起，很多介绍却停留在入门阶段，无法投入生产
	node相关的高质量面试题更是少之又少，很难全面考查应聘者的node能力
	许多文章在讲第三方类库，可是这些库质量差距较大，一旦遇到问题怎么办
	必需的，全面了解node核心才能成为一名合格的node开发人员
	目标与原则
	前后端兼顾，更侧重后端
	理论实战兼顾，侧重考察对实战中应用较多的理论的理解
	参考答案简单明了，一针见血，不为追求严谨而浪费口舌，绕弯子
	尽量用代码讲清理论的应用与区别，以接地气
	终极目标是让大家对node有一个快速完整的认识
	内容大纲
	javascript高级话题(面向对象，作用域，闭包，设计模式等)
	node核心内置类库(事件，流，文件，网络等)
	node高级话题(异步，部署，性能调优，异常调试等)
	常用知名第三方类库(Async, Express等)
	其它相关后端常用技术(MongoDB, Redis, Apache, Nginx等)
	常用前端技术(Html5, CSS3, JQuery等)
	javascript高级话题(面向对象，作用域，闭包，设计模式等)
	
	1. 常用js类定义的方法有哪些？
	参考答案：主要有构造函数原型和对象创建两种方法。原型法是通用老方法，对象创建是ES5推荐使用的方法.目前来看，原型法更普遍.
	
	代码演示
	1) 构造函数方法定义类
	
		function Person(){
			this.name = 'michaelqin';
		}
		Person.prototype.sayName = function(){
			alert(this.name);
		}
	
		var person = new Person();
		person.sayName();
	2) 对象创建方法定义类
	
		var Person = {
			name: 'michaelqin',
			sayName: function(){ alert(this.name); }
		};
	
		var person = Object.create(Person);
		person.sayName();
	2. js类继承的方法有哪些
	参考答案：原型链法，属性复制法和构造器应用法. 另外，由于每个对象可以是一个类，这些方法也可以用于对象类的继承．
	
	代码演示
	1) 原型链法
	
		function Animal() {
			this.name = 'animal';
		}
		Animal.prototype.sayName = {
			alert(this.name);
		};
	
		function Person() {}
		Person.prototype = Animal.prototype; // 人继承自动物
		Person.prototype.constructor = 'Person'; // 更新构造函数为人
	2) 属性自制法
	
		function Animal() {
			this.name = 'animal';
		}
		Animal.prototype.sayName = {
			alert(this.name);
		};
	
		function Person() {}
	
		for(prop in Animal.prototype) {
			Person.prototype[prop] = Animal.prototype[prop];
		} // 复制动物的所有属性到人量边
		Person.prototype.constructor = 'Person'; // 更新构造函数为人
	3) 构造器应用法
	
		function Animal() {
			this.name = 'animal';
		}
		Animal.prototype.sayName = {
			alert(this.name);
		};
	
		function Person() {
			Animal.call(this); // apply, call, bind方法都可以．细微区别，后面会提到．
		}
	3. js类多重继承的实现方法是怎么样的?
	参考答案：就是类继承里边的属性复制法来实现．因为当所有父类的prototype属性被复制后，子类自然拥有类似行为和属性．
	
	4. js里的作用域是什么样子的？
	参考答案：大多数语言里边都是块作作用域，以{}进行限定，js里边不是．js里边叫函数作用域，就是一个变量在全函数里有效．比如有个变量p1在函数最后一行定义，第一行也有效，但是值是undefined.
	
	代码演示
	
		var globalVar = 'global var';
	
		function test() {
			alert(globalVar); // undefined, 因为globalVar在本函数内被重定义了，导致全局失效，这里使用函数内的变量值，可是此时还没定义
			var globalVar = 'overrided var'; //　globalVar在本函数内被重定义
			alert(globalVar);　// overrided var
		}
		alert(globalVar); // global var，使用全局变量
	5. js里边的this指的是什么?
	参考答案: this指的是对象本身，而不是构造函数．
	
	代码演示
	
		function Person() {
		}
		Person.prototype.sayName() { alert(this.name); }
	
		var person1 = new Person();
		person1.name = 'michaelqin';
		person1.sayName(); // michaelqin
	6. apply, call和bind有什么区别?
	参考答案：三者都可以把一个函数应用到其他对象上，注意不是自身对象．apply,call是直接执行函数调用，bind是绑定，执行需要再次调用．apply和call的区别是apply接受数组作为参数，而call是接受逗号分隔的无限多个参数列表，
	
	代码演示
	
		function Person() {
		}
		Person.prototype.sayName() { alert(this.name); }
	
		var obj = {name: 'michaelqin'}; // 注意这是一个普通对象，它不是Person的实例
		1) apply
		Person.prototype.sayName.apply(obj, [param1, param2, param3]);
	
		2) call
		Person.prototype.sayName.call(obj, param1, param2, param3);
	
		3) bind
		var sn = Person.prototype.sayName.bind(obj);    
		sn([param1, param2, param3]); // bind需要先绑定，再执行 
		sn(param1, param2, param3); // bind需要先绑定，再执行
	7. caller, callee和arguments分别是什么?
	参考答案: caller,callee之间的关系就像是employer和employee之间的关系，就是调用与被调用的关系，二者返回的都是函数对象引用．arguments是函数的所有参数列表，它是一个类数组的变量．
	
	代码演示
	
		function parent(param1, param2, param3) {
			child(param1, param2, param3);
		}
	
		function child() {
			console.log(arguments); // { '0': 'mqin1', '1': 'mqin2', '2': 'mqin3' }
			console.log(arguments.callee); // [Function: child]
			console.log(child.caller); // [Function: parent]
		}
	
		parent('mqin1', 'mqin2', 'mqin3');
	8. 什么是闭包，闭包有哪些用处?
	参考答案: 闭包这个术语，无论中文翻译还是英文解释都太２Ｂ了，我必须骂人，因为它什么其实都不是．非要讲它是什么的话，两个字函数，更多字嵌套函数的父子自我引用关系．所有函数都是闭包．通俗的说，闭包就是作用域范围，因为js是函数作用域，所以函数就是闭包．全局函数的作用域范围就是全局，所以无须讨论．更多的应用其实是在内嵌函数，这就会涉及到内嵌作用域，或者叫作用域链．说到内嵌，其实就是父子引用关系(父函数包含子函数，子函数因为函数作用域又引用父函数，这它妈不是死结吗？所以叫闭包），这就会带来另外一个问题，什么时候引用结束？如果不结束，就会一直占用内存，引起内存泄漏．好吧，不用的时候就引用设为空，死结就解开了．
	
	9. defineProperty, hasOwnProperty, isEnumerable都是做什么用的？
	参考答案：Object.defineProperty(obj, prop, descriptor)用来给对象定义属性,有value,writable,configurable,enumerable,set/get等.hasOwnProerty用于检查某一属性是不是存在于对象本身，继承来的父亲的属性不算．isEnumerable用来检测某一属性是否可遍历，也就是能不能用for..in循环来取到.
	
	10. js常用设计模式的实现思路，单例，工厂，代理，装饰，观察者模式等
	参考答案：
	
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
	11. 列举数组相关的常用方法
	参考答案: push/pop, shift/unshift, split/join, slice/splice/concat, sort/reverse, map/reduce, forEach, filter
	
	12. 列举字符串相关的常用方法
	参考答案: indexOf/lastIndexOf/charAt, split/match/test, slice/substring/substr, toLowerCase/toUpperCase
	
	node核心内置类库(事件，流，文件，网络等)
	
	node概览
	
	1. 为什么要用node?
	参考答案: 总结起来node有以下几个特点:简单强大，轻量可扩展．简单体现在node使用的是javascript,json来进行编码，人人都会；强大体现在非阻塞IO,可以适应分块传输数据，较慢的网络环境，尤其擅长高并发访问；轻量体现在node本身既是代码，又是服务器，前后端使用统一语言;可扩展体现在可以轻松应对多实例，多服务器架构，同时有海量的第三方应用组件．
	
	2. node的构架是什么样子的?
	参考答案: 主要分为三层，应用app >> V8及node内置架构 >> 操作系统. V8是node运行的环境，可以理解为node虚拟机．node内置架构又可分为三层: 核心模块(javascript实现) >> c++绑定 >> libuv + CAes + http.
	
	
	
	3. node有哪些核心模块?
	参考答案: EventEmitter, Stream, FS, Net和全局对象
	
	node全局对象
	
	1. node有哪些全局对象?
	参考答案: process, console, Buffer和exports
	
	2. process有哪些常用方法?
	参考答案: process.stdin, process.stdout, process.stderr, process.on, process.env, process.argv, process.arch, process.platform, process.exit
	
	3. console有哪些常用方法?
	参考答案: console.log/console.info, console.error/console.warning, console.time/console.timeEnd, console.trace, console.table
	
	4. node有哪些定时功能?
	参考答案: setTimeout/clearTimeout, setInterval/clearInterval, setImmediate/clearImmediate, process.nextTick
	
	5. node中的事件循环是什么样子的?
	参考答案: event loop其实就是一个事件队列，先加入先执行，执行完一次队列，再次循环遍历看有没有新事件加入队列．执行中的叫IO events, setImmediate是在当前队列立即执行,setTimout/setInterval是把执行定时到下一个队列，process.nextTick是在当前执行完，下次遍历前执行．所以总体顺序是: IO events >> setImmediate >> setTimeout/setInterval >> process.nextTick
	
	6. node中的Buffer如何应用?
	参考答案: Buffer是用来处理二进制数据的，比如图片，mp3,数据库文件等.Buffer支持各种编码解码，二进制字符串互转．
	
	EventEmitter
	
	1. 什么是EventEmitter?
	参考答案: EventEmitter是node中一个实现观察者模式的类，主要功能是监听和发射消息，用于处理多模块交互问题.
	
	2. 如何实现一个EventEmitter?
	参考答案: 主要分三步：定义一个子类，调用构造函数，继承EventEmitter
	
	代码演示
	
		var util = require('util');
		var EventEmitter = require('events').EventEmitter;
	
		function MyEmitter() {
			EventEmitter.call(this);
		} // 构造函数
	
		util.inherits(MyEmitter, EventEmitter); // 继承
	
		var em = new MyEmitter();
		em.on('hello', function(data) {
			console.log('收到事件hello的数据:', data);
		}); // 接收事件，并打印到控制台
		em.emit('hello', 'EventEmitter传递消息真方便!');
	3. EventEmitter有哪些典型应用?
	参考答案: 1) 模块间传递消息 2) 回调函数内外传递消息 3) 处理流数据，因为流是在EventEmitter基础上实现的. 4) 观察者模式发射触发机制相关应用
	
	4. 怎么捕获EventEmitter的错误事件?
	参考答案: 监听error事件即可．如果有多个EventEmitter,也可以用domain来统一处理错误事件.
	
	代码演示
	
		var domain = require('domain');
		var myDomain = domain.create();
		myDomain.on('error', function(err){
			console.log('domain接收到的错误事件:', err);
		}); // 接收事件并打印
		myDomain.run(function(){
			var emitter1 = new MyEmitter();
			emitter1.emit('error', '错误事件来自emitter1');
			emitter2 = new MyEmitter();
			emitter2.emit('error', '错误事件来自emitter2');
		});
	5. EventEmitter中的newListenser事件有什么用处?
	参考答案: newListener可以用来做事件机制的反射，特殊应用，事件管理等．当任何on事件添加到EventEmitter时，就会触发newListener事件，基于这种模式，我们可以做很多自定义处理.
	
	代码演示
	
	var emitter3 = new MyEmitter();
	emitter3.on('newListener', function(name, listener) {
		console.log("新事件的名字:", name);
		console.log("新事件的代码:", listener);
		setTimeout(function(){ console.log("我是自定义延时处理机制"); }, 1000);
	});
	emitter3.on('hello', function(){
		console.log('hello　node');
	});
	Stream
	
	1. 什么是Stream?
	参考答案: stream是基于事件EventEmitter的数据管理模式．由各种不同的抽象接口组成，主要包括可写，可读，可读写，可转换等几种类型．
	
	2. Stream有什么好处?
	参考答案: 非阻塞式数据处理提升效率，片断处理节省内存，管道处理方便可扩展等.
	
	3. Stream有哪些典型应用?
	参考答案: 文件，网络，数据转换，音频视频等.
	
	4. 怎么捕获Stream的错误事件?
	参考答案: 监听error事件，方法同EventEmitter.
	
	5. 有哪些常用Stream,分别什么时候使用?
	参考答案: Readable为可被读流，在作为输入数据源时使用；Writable为可被写流,在作为输出源时使用；Duplex为可读写流,它作为输出源接受被写入，同时又作为输入源被后面的流读出．Transform机制和Duplex一样，都是双向流，区别时Transfrom只需要实现一个函数_transfrom(chunk, encoding, callback);而Duplex需要分别实现_read(size)函数和_write(chunk, encoding, callback)函数.
	
	6. 实现一个Writable Stream?
	参考答案: 三步走:1)构造函数call Writable 2)　继承Writable 3) 实现_write(chunk, encoding, callback)函数
	
	代码演示
	
	var Writable = require('stream').Writable;
	var util = require('util');
	
	function MyWritable(options) {
		Writable.call(this, options);
	} // 构造函数
	util.inherits(MyWritable, Writable); // 继承自Writable
	MyWritable.prototype._write = function(chunk, encoding, callback) {
		console.log("被写入的数据是:", chunk.toString()); // 此处可对写入的数据进行处理
		callback();
	};
	
	process.stdin.pipe(new MyWritable()); // stdin作为输入源，MyWritable作为输出源   
	文件系统
	
	1. 内置的fs模块架构是什么样子的?
	参考答案: fs模块主要由下面几部分组成: 1) POSIX文件Wrapper,对应于操作系统的原生文件操作 2) 文件流 fs.createReadStream和fs.createWriteStream 3) 同步文件读写,fs.readFileSync和fs.writeFileSync 4) 异步文件读写, fs.readFile和fs.writeFile
	
	2. 读写一个文件有多少种方法?
	参考答案: 总体来说有四种: 1) POSIX式低层读写 2) 流式读写 3) 同步文件读写 4) 异步文件读写
	
	3. 怎么读取json配置文件?
	参考答案: 主要有两种方式，第一种是利用node内置的require('data.json')机制，直接得到js对象; 第二种是读入文件入内容，然后用JSON.parse(content)转换成js对象．二者的区别是require机制情况下，如果多个模块都加载了同一个json文件，那么其中一个改变了js对象，其它跟着改变，这是由node模块的缓存机制造成的，只有一个js模块对象; 第二种方式则可以随意改变加载后的js变量，而且各模块互不影响，因为他们都是独立的，是多个js对象.
	
	4. fs.watch和fs.watchFile有什么区别，怎么应用?
	参考答案: 二者主要用来监听文件变动．fs.watch利用操作系统原生机制来监听，可能不适用网络文件系统; fs.watchFile则是定期检查文件状态变更，适用于网络文件系统，但是相比fs.watch有些慢，因为不是实时机制．
	
	网络
	
	1. node的网络模块架构是什么样子的?
	参考答案: node全面支持各种网络服务器和客户端，包括tcp, http/https, tcp, udp, dns, tls/ssl等.
	
	2. node是怎样支持https,tls的?
	参考答案: 主要实现以下几个步骤即可: 1) openssl生成公钥私钥 2) 服务器或客户端使用https替代http 3) 服务器或客户端加载公钥私钥证书
	
	3. 实现一个简单的http服务器?
	参考答案: 经典又很没毛意义的一个题目．思路是加载http模块，创建服务器，监听端口.
	
	代码演示
	
		var http = require('http'); // 加载http模块
	
		http.createServer(function(req, res) {
			res.writeHead(200, {'Content-Type': 'text/html'}); // 200代表状态成功, 文档类型是给浏览器识别用的
			res.write('<meta charset="UTF-8"> <h1>我是标题啊！</h1> <font color="red">这么原生，初级的服务器，下辈子能用着吗?!</font>'); // 返回给客户端的html数据
			res.end(); // 结束输出流
		}).listen(3000); // 绑定3ooo, 查看效果请访问 http://localhost:3000 
	child-process
	
	1. 为什么需要child-process?
	参考答案: node是异步非阻塞的，这对高并发非常有效．可是我们还有其它一些常用需求，比如和操作系统shell命令交互，调用可执行文件，创建子进程进行阻塞式访问或高CPU计算等，child-process就是为满足这些需求而生的．child-process顾名思义，就是把node阻塞的工作交给子进程去做．
	
	2. exec,execFile,spawn和fork都是做什么用的?
	参考答案: exec可以用操作系统原生的方式执行各种命令，如管道 cat ab.txt | grep hello; execFile是执行一个文件; spawn是流式和操作系统进行交互; fork是两个node程序(javascript)之间时行交互.
	
	3. 实现一个简单的命令行交互程序?
	参考答案: 那就用spawn吧.
	
	代码演示
	
		var cp = require('child_process');
	
		var child = cp.spawn('echo', ['你好', "钩子"]); // 执行命令
		child.stdout.pipe(process.stdout); // child.stdout是输入流，process.stdout是输出流
		// 这句的意思是将子进程的输出作为当前程序的输入流，然后重定向到当前程序的标准输出，即控制台
	4. 两个node程序之间怎样交互?
	参考答案: 用fork嘛，上面讲过了．原理是子程序用process.on, process.send，父程序里用child.on,child.send进行交互.
	代码演示
	
		1) fork-parent.js
		var cp = require('child_process');
		var child = cp.fork('./fork-child.js');
		child.on('message', function(msg){
			console.log('老爸从儿子接受到数据:', msg);
		});
		child.send('我是你爸爸，送关怀来了!');
	
		2) fork-child.js
		process.on('message', function(msg){
			console.log("儿子从老爸接收到的数据:", msg);
			process.send("我不要关怀，我要银民币！");
		});
	5. 怎样让一个js文件变得像linux命令一样可执行?
	参考答案: 1) 在myCommand.js文件头部加入 #!/usr/bin/env node 2) chmod命令把js文件改为可执行即可 3) 进入文件目录，命令行输入myComand就是相当于node myComand.js了
	
	6. child-process和process的stdin,stdout,stderror是一样的吗?
	参考答案: 概念都是一样的，输入，输出，错误，都是流．区别是在父程序眼里，子程序的stdout是输入流，stdin是输出流．
	
	node高级话题(异步，部署，性能调优，异常调试等)
	
	1. node中的异步和同步怎么理解
	参考答案: node是单线程的，异步是通过一次次的循环事件队列来实现的．同步则是说阻塞式的IO,这在高并发环境会是一个很大的性能问题，所以同步一般只在基础框架的启动时使用，用来加载配置文件，初始化程序什么的．
	
	2. 有哪些方法可以进行异步流程的控制?
	参考答案: 1) 多层嵌套回调 2)　为每一个回调写单独的函数，函数里边再回调 3) 用第三方框架比方async, q, promise等
	
	3. 怎样绑定node程序到80端口?
	参考答案: 多种方式 1) sudo 2) apache/nginx代理 3) 用操作系统的firewall iptables进行端口重定向
	
	4. 有哪些方法可以让node程序遇到错误后自动重启?
	参考答案: 1) runit 2) forever 3) nohup npm start &
	
	5. 怎样充分利用多个CPU?
	参考答案: 一个CPU运行一个node实例
	
	6. 怎样调节node执行单元的内存大小?
	参考答案: 用--max-old-space-size 和 --max-new-space-size 来设置 v8 使用内存的上限
	
	7. 程序总是崩溃，怎样找出问题在哪里?
	参考答案: 1) node --prof 查看哪些函数调用次数多 2) memwatch和heapdump获得内存快照进行对比，查找内存溢出
	
	8. 有哪些常用方法可以防止程序崩溃?
	参考答案: 1) try-catch-finally 2) EventEmitter/Stream error事件处理 3) domain统一控制 4) jshint静态检查 5) jasmine/mocha进行单元测试
	
	9. 怎样调试node程序?
	参考答案: node --debug app.js 和node-inspector
	
	常用知名第三方类库(Async, Express等)
	
	1. async都有哪些常用方法，分别是怎么用?
	参考答案: async是一个js类库，它的目的是解决js中异常流程难以控制的问题．async不仅适用在node.js里，浏览器中也可以使用． 1) async.parallel并行执行完多个函数后，调用结束函数
	
		async.parallel([
			function(){ ... },
			function(){ ... }
		], callback);
	2) async.series串行执行完多个函数后，调用结束函数
	
		async.series([
			function(){ ... },
			function(){ ... }
		]);
	3) async.waterfall依次执行多个函数，后一个函数以前面函数的结果作为输入参数
	
		async.waterfall([
			function(callback) {
				callback(null, 'one', 'two');
			},
			function(arg1, arg2, callback) {
			  // arg1 now equals 'one' and arg2 now equals 'two' 
				callback(null, 'three');
			},
			function(arg1, callback) {
				// arg1 now equals 'three' 
				callback(null, 'done');
			}
		], function (err, result) {
			// result now equals 'done' 
		});
	4) async.map异步执行多个数组，返回结果数组
	
		async.map(['file1','file2','file3'], fs.stat, function(err, results){
			// results is now an array of stats for each file 
		});
	5) async.filter异步过滤多个数组，返回结果数组
	
		async.filter(['file1','file2','file3'], fs.exists, function(results){
			// results now equals an array of the existing files 
		});
	2. express项目的目录大致是什么样子的
	参考答案: app.js, package.json, bin/www, public, routes, views.
	
	3. express常用函数
	参考答案: express.Router路由组件,app.get路由定向，app.configure配置，app.set设定参数,app.use使用中间件
	
	4. express中如何获取路由的参数
	参考答案: /users/:name使用req.params.name来获取; req.body.username则是获得表单传入参数username; express路由支持常用通配符 ?, +, *, and ()
	
	5. express response有哪些常用方法
	参考答案: res.download() 弹出文件下载
	res.end() 结束response
	res.json() 返回json
	res.jsonp() 返回jsonp
	res.redirect() 重定向请求
	res.render() 渲染模板
	res.send() 返回多种形式数据
	res.sendFile 返回文件
	res.sendStatus() 返回状态
	
	其它相关后端常用技术(MongoDB, Redis, Apache, Nginx等)
	
	1. mongodb有哪些常用优化措施
	参考答案: 类似传统数据库，索引和分区．
	
	2. redis支持哪些功能
	参考答案: set/get, hset/hget, publish/subscribe, expire
	
	3. redis最简单的应用
	参考答案:
	
		var redis = require("redis"),
			client = redis.createClient();
	
		client.set("foo_rand000000000000", "some fantastic value");
		client.get("foo_rand000000000000", function (err, reply) {
			console.log(reply.toString());
		});
		client.end();
	4. apache,nginx有什么区别?
	参考答案: 二者都是代理服务器，功能类似．apache应用简单，相当广泛．nginx在分布式，静态转发方面比较有优势．