#AJAX相关#
    1.http状态码有那些？分别代表是什么意思？
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

    2.AJAX
    1>. AJAX是什么？
        ajax的全称：Asynchronous Javascript And XML。
        Ajax是异步JavaScript和XML，用于在Web页面中实现异步数据交互。

        优点：
            * 　可以使得页面不重载全部内容的情况下加载局部内容，降低数据传输量
            * 　避免用户不断刷新或者跳转页面，提高用户体验
        缺点：
            * 　对搜索引擎不友好（
            * 　要实现ajax下的前后退功能成本较大
            * 　可能造成请求数的增加
            * 　跨域问题限制

    2>. AJAX跨域的解决办法。
        document.domain+iframe 解决跨子域问题
        使用 html5的postMessage
        动态创建script

    3>.	请尽可能详尽的解释AJAX的工作原理(AJAX的交互模型)。
        (1)创建ajax对象（XMLHttpRequest/ActiveXObject(Microsoft.XMLHttp)）
            也就是创建一个异步调用对象
        (2)判断数据传输方式(GET/POST)
            创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
        (3)打开链接 open()
            设置响应HTTP请求状态变化的函数
        (4)发送 send()
            发送HTTP请求
        (5)获取异步调用返回的数据
        (6)使用JavaScript和DOM实现局部刷新
            判断http响应状态（status）200-300之间或者304（缓存）执行回调函数

    4>.	同步和异步的区别
        同步：脚本停止执行，等服务器返回信息后继续执行
        异步：脚本继续执行，并提供相应代码处理可能的回复
            向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，
            等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，
            提高了用户体验。

    5>.	ajax请求的时候get和post方式的区别
        参数:一个在url后面 一个放在虚拟载体里面
        有大小限制(get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制。但理论上，因服务器的不同而异。)
        安全问题(get安全性非常低，post安全性较高。)
        应用不同 一个是论坛等只需要请求的，一个是类似修改密码的

    6>.	ajax请求时，如何解释json数据
        使用eval parse鉴于安全性考虑 使用parse更靠谱

    7>.	解释jsonp的原理，以及为什么不是真正的ajax
        动态创建script标签，回调函数
            1、一个众所周知的问题，Ajax直接请求普通文件存在跨域无权限访问的问题，甭管你是静态页面、动态网页、web服务、WCF，只要是跨域请求，一律不准；
            2、不过我们又发现，Web页面上调用js文件时则不受是否跨域的影响（不仅如此，我们还发现凡是拥有"src"这个属性的标签都拥有跨域的能力，比如<script>、<img>、<iframe>）；
            3、于是可以判断，当前阶段如果想通过纯web端（ActiveX控件、服务端代理、属于未来的HTML5之Websocket等方式不算）跨域访问数据就只有一种可能，那就是在远程服务器上设法把数据装进js格式的文件里，供客户端调用和进一步处理；
            4、恰巧我们已经知道有一种叫做JSON的纯字符数据格式可以简洁的描述复杂数据，更妙的是JSON还被js原生支持，所以在客户端几乎可以随心所欲的处理这种格式的数据；
            5、这样子解决方案就呼之欲出了，web客户端通过与调用脚本一模一样的方式，来调用跨域服务器上动态生成的js格式文件（一般以JSON为后缀），显而易见，服务器之所以要动态生成JSON文件，目的就在于把客户端需要的数据装入进去。
            6、客户端在对JSON文件调用成功之后，也就获得了自己所需的数据，剩下的就是按照自己需求进行处理和展现了，这种获取远程数据的方式看起来非常像AJAX，但其实并不一样。
            7、为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。
        Ajax是页面无刷新请求数据操作

#前端存储相关#
    1、请描述一下 cookies，sessionStorage 和 localStorage 的区别？
    
    cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
    cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
    sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
    
    2. 什么是Cookie 隔离？（或者说：请求资源的时候不要让它带cookie怎么做）
        如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，
        所以不如隔离开。
    
        因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，
        这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。
    
        同时这种方式不会将cookie传入Web Server，也减少了Web Server对cookie的处理分析环节，
        提高了webserver的http请求的解析速度。
    
    #9.	如何实现浏览器内多个标签页之间的通信?(阿里)
    WebSocket、SharedWorker;
    也可以调用localstorge、cookies等本地存储方式;
        localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，
        我们通过监听事件，控制它的值来进行页面信息通信;
    注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常;
    
    #10. webSocket如何兼容低浏览器？(阿里)
    Adobe Flash Socket 、
    ActiveX HTMLFile (IE) 、
    基于 multipart 编码发送 XHR 、
    基于长轮询的 XHR

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
    