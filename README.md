# JekyllBlog
这是窝原创的一只个人博客

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