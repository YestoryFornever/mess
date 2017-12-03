突击：

1. 前端模块化
    模块化思想
    amd: require	提前执行	依赖前置
    cmd: import		延迟执行	依赖就近

2. jquery
    见lib

3. 设计模式
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

4. css position float display
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

5. 变量提前
    jscode 51 执行上下文

6. 闭包
    javascript 6 闭包
    闭包这个术语，无论中文翻译还是英文解释都太２Ｂ了，我必须骂人，因为它什么其实都不是．
    非要讲它是什么的话，两个字函数，
    更多字嵌套函数的父子自我引用关系．
    所有函数都是闭包．通俗的说，闭包就是作用域范围，因为js是函数作用域，所以函数就是闭包．
    全局函数的作用域范围就是全局，所以无须讨论．
    更多的应用其实是在内嵌函数，这就会涉及到内嵌作用域，或者叫作用域链．
    说到内嵌，其实就是父子引用关系(父函数包含子函数，子函数因为函数作用域又引用父函数，这它妈不是死结吗？所以叫闭包），
    这就会带来另外一个问题，什么时候引用结束？如果不结束，就会一直占用内存，引起内存泄漏．
    好吧，不用的时候就引用设为空，死结就解开了．

7. Node相关

8. React/Redux相关
    

9. MVC
    let M={},V={},C={};
    M.data = 'hello world';
    V.render = function(x){alert(x.data);}
    C.action = function(obj){
        obj.render();
    }
    C.action(V);

10. replace

11. 正则

12. javascript 正则相关方法
    match、exec、test、search、replace、split

13. 说几个webpack常用插件

14. slice substr substring splice

15. get post 区别

16. javascript this

9. defineProperty, hasOwnProperty, isEnumerable都是做什么用的？
参考答案：
Object.defineProperty(obj, prop, descriptor)用来给对象定义属性,有value,writable,configurable,enumerable,set/get等.
hasOwnProerty用于检查某一属性是不是存在于对象本身，继承来的父亲的属性不算．
isEnumerable用来检测某一属性是否可遍历，也就是能不能用for..in循环来取到.


柯里化函数