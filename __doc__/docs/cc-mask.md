## cc-mask

_version_ __1__

2014.7.27

[TODO: 添加背景渐变及开关遮罩事件控制]

----------------

#### 简介
`cc-mask` 提供了一个类似于`window.alert`一样的全局遮罩，以用来显示消息等。

#### 参数

有一个属性：`status`。  
其中：  
当`status` = 0 时，表明关闭遮罩。  
当`status` = 1 时，打开遮罩。  
默认状态为0。

按下`ESC`键把遮罩关闭。  

#### 示例
__source:__   
`<cc-mask id="mask" status="1">Bangalore is the IT city in India.</cc-mask>`  
__result:__   
<cc-mask id="mask" status="1">Bangalore is the IT city in India.Yes</cc-mask>