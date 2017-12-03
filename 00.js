突击：

1. 前端模块化
    模块化思想
    amd: require	提前执行	依赖前置
    cmd: import		延迟执行	依赖就近

2. jquery
    见lib

3. 设计模式
    singleton单例模式
    factory工厂模式
    strategy策略模式
    decrator装饰者模式

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
    jscode51执行上下文
    
6. 闭包

7. Node相关

8. React/Redux相关

9. jslib

10. replace

11. 正则

12. javascript 正则相关方法

13. 说几个webpack常用插件

14. slice substr substring splice

