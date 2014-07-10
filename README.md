## cc-UI-Kit 项目文档

Written by _DemoHn_  
Revised 1  
2014.7.4  
-------------------------

##### 1. 简介
`cc-UI-kit`是我个人自己制作的一些Web元件库，可用于各种node-webkit应用当中。  
它基于[Polymer](http://www.polymer-project.org)框架来制作。  
  
  
##### 2. 开始
  
(1) 请检查自己有没有`node-webkit`。  
由于Polymer框架是在Chrome 34里才完全成熟的，因此这里推荐`v.0.10.0`版本。  
`node-webkit v0.10.0`下载地址:

* Linux: [32bit](http://dl.node-webkit.org/v0.10.0-rc1/node-webkit-v0.10.0-rc1-linux-ia32.tar.gz) / [64bit](http://dl.node-webkit.org/v0.10.0-rc1/node-webkit-v0.10.0-rc1-linux-x64.tar.gz)
* Windows: [win32](http://dl.node-webkit.org/v0.10.0-rc1/node-webkit-v0.10.0-rc1-win-ia32.zip)
* Mac: [32bit, 10.7+](http://dl.node-webkit.org/v0.10.0-rc1/node-webkit-v0.10.0-rc1-osx-ia32.zip)
  
(2) 新建一个node-webkit应用  
这里就不再赘述了。相信大家都会。    
如果真不会的话，[这里](https://github.com/rogerwang/node-webkit/wiki/Getting-Started-with-node-webkit)是用node-webkit作一个小程序的简单教程。

(3) 编写`index.html`

首先将本目录下的`c/polymer/`及`c/platform/`文件夹复制到自己的node-webkit项目的目录下。  

然后导入`platform.js`:  
在`<head>`标签里加上这么一句：  
`<script src="./components/platform/platform.js"></script>`
   
如果要想用某一个元件库的话，请首先把对应的文件夹给复制到自己项目的根目录下，然后再引用此元件库:  
`<link rel="import" href="./components/[component_name]/[component_name].html">`
   
比如，如果想要使用`cc-markdown`这个元件的话，  
在`<head>`标签中写入这么一句话：  
`<link rel="import" href="./components/cc-markdown/cc-markdown.html">`

e.g:
```html
    <!DOCTYPE html>  
    <html lang="en">  
    <head>  
      <meta charset="UTF-8">  
      <script src="./components/platform/ platform.js"></script>  
      <link rel="import" href="./components/cc-markdown/cc-markdown.html">  
      <title>demo</title>  
    </head>  
    <body>  
    </body>  
    </html>  
```

##### 文档
在下载了此份拷贝以后，请直接使用`nw cc-UI-kit`来运行。
里面就自带关于各个元件的文档。