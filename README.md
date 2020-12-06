# JekyllBlog
这是窝原创的一只个人博客

##### **`有很多搭建教程`**

[安装jekyll及过程中遇到的一点问题_flysky_jay的博客-CSDN博客](https://blog.csdn.net/flysky_jay/article/details/106397264?utm_medium=distribute.pc_relevant.none-task-blog-title-3&spm=1001.2101.3001.4242)

[jekyll 根目录下 index 如果写成 .html 为什么不能解析 {{ ... }} {% ...%} ， 改成 .md 就能解析 - V2EX](https://www.v2ex.com/t/507598)

[jekyll-paginate使用失败_Monkey_D_Luffy的博客-CSDN博客](https://blog.csdn.net/qq_26508409/article/details/77927593?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.add_param_isCf&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.add_param_isCf)

[bootstrap之navbar - 小白的日常 - 博客园](https://www.cnblogs.com/jipinglong/p/9032640.html)

[Jekyll + Github Pages 搭建个人免费博客 - 知乎](https://zhuanlan.zhihu.com/p/87225594)

[在windows下安装jekyll（一个很好地博客系统） - 简书](https://www.jianshu.com/p/88e3474cef72)

[windows安装jekyll步骤及问题_彭世瑜的博客-CSDN博客_安装jekyll](https://blog.csdn.net/mouday/article/details/79300135)

[Github+Jekyll 搭建个人网站详细教程 - 简书](https://www.jianshu.com/p/9f71e260925d)

[Win10安装jekyll可能遇到的问题及解决办法_唐传林的博客-CSDN博客](https://nicktcl.blog.csdn.net/article/details/83546278?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.add_param_isCf&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.add_param_isCf)

有位大佬写了很多jekyll的使用文章在博客

https://gorpeln.com/

##### `可能的问题`

##### 1.本地调试失败不仅仅是代码问题，也可能是post文章的问题，总之出不来

```javascript
 done in 10.888 seconds.
 Auto-regeneration: enabled for 'F:/Blog/lianyiming.github.io'
    Server address: http://127.0.0.1:4000 /
  Server running... press ctrl-c to stop.
```

就算是本地运行失败，push到Github也会报错pagebuildfailed

##### 2.nav显示了但是不下滑显示，也就是class里设置了后不fix

```html
<nav class="navbar navbar-fixed-top" role="navigation"></nav>
```

可能是css里已经定义了position

css清除position，上图就好了

##### 3.圆角失败

>  也就是设置了圆角只显示一半，不完全,感觉overflowhidden了一样

Reason 1

`圆角是子元素`，父元素挡住了子元素的圆角，子元素的宽度超过了（因为父元素设置了边距）

解决 1

子元素设置margin，父元素背景透明

解决 2

父元素实现圆角，子元素fill父元素，之后overflow：hidden就可以了，相当于父元素是相框

Reason 2

`元素很不像正方形`

由于圆角是正方形，所以如果元素长宽差别很大就会圆角失败

解决 1

**圆角由百分之变成像素px**

> 也是正解，外面套一层透明的父元素，用px做圆角的值就不会显示出故障

```scss
.postbodyxuhua {
	border-radius: 30px;
}
```



# 待

1.给div设置font-style没用，给字体标签比如`<p>`才可以让字体生效

2.左右都留空隙，间隔大一点好看

3.多字体，单色彩好看