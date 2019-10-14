<!--
 * @Author: chenzh
 * @Date: 2019-10-11 10:37:31
 * @LastEditors: chenzh
 * @LastEditTime: 2019-10-11 11:12:14
 * @Description: 学习markdown
 -->

# MarkDown

## 段落

段落的换行是使用两个以上空格加上回车。

也可以使用空行
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___

## 分隔线

***

* * *

*****

- - -

----------

## 删除线

~~BAIDU.COM~~

## <u>带下划线文本</u>

## 脚注

创建脚注格式类似这样 [^RUNOOB]。

[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！

## 无序号列表

* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项

- 第一项
- 第二项
- 第三项

## 有序号列表

1. 第一项
2. 第二项
3. 第三项

## 嵌套列表加四个空格

1. 第一项：

    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素

2. 第二项：

    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素

## 区块引用

> 最外层
> > 第一层嵌套
> > > 第二层嵌套

## 代码

如果是段落上的一个函数或片段的代码可以用反引号把它包起来（`），例如：

`printf()` 函数

你也可以用 ``` 包裹一段代码，并指定一种语言（也可以不指定）：

```javascript
$(document).ready(function () {
    alert('RUNOOB');
});
```

## 链接

这是一个链接 [菜鸟教程](https://www.runoob.com)

<https://www.runoob.com>

链接也可以用变量来代替，文档末尾附带变量地址：
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [runoob]: http://www.runoob.com/

## 图片

开头一个感叹号 !
接着一个方括号，里面放上图片的替代文字
接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 'title' 属性的文字。

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")

这个链接用 1 作为网址变量 [RUNOOB][1].
然后在文档的结尾位变量赋值（网址）

[1]: http://static.runoob.com/images/runoob-logo.png

Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 <img> 标签。

<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">

## 表格

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

## 支持的HTML元素

不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。

目前支持的 HTML 元素有：`<kbd>` `<b>` `<i>` `<em>` `<sup>` `<sub>` `<br>`等 ，如：

使用 `<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>` 重启电脑
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

## 转义

\*\* 可以正常显示✳: \\*

## 公式

当你需要在编辑器中插入数学公式时，可以使用两个美元符 $$ 包裹 TeX 或 LaTeX 格式的数学公式来实现。提交后，问答和文章页会根据需要加载 Mathjax 对数学公式进行渲染。如：

$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$tep1}{\style{visibility:hidden}{(x+1)(x+1)}}
$$
