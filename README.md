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



Way1：