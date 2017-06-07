# React-Native 样式指南

`React-Native` 的样式基本上是实现了 `CSS` 的一个子集，并且属性名不完全一致，所以当你开始在编写 `React-Native` 之前，可以先简要了解一下。

## 当前对应 RN 版本

0.44

## <a name="top"></a>目录

* [组件列表](#user-content-widget_list)
    * [Text 文本](#user-content-widget_text)
    * [Image](#user-content-widget_image)
    * [TextInput](#user-content-widget_text_input)
    * [ScrollView](#user-content-widget_scroll_view)
    * [ListView](#use-contnet-widget_list_view)
* [Properties 属性](#user-content-properties)
    * [Dimension 尺寸](#user-content-dimension)
    * [Positioning 定位](#user-content-positioning)
    * [Margin 外部白](#user-content-margin)
    * [Padding 内补白](#user-content-padding)
    * [Border 边框](#user-content-border)
    * [Background 背景](#user-content-background)
    * [Transform 转换](#user-content-transform)
    * [Flexbox 弹性盒](#user-content-flexbox)
    * [Other 其他](#user-content-other)
* [Values 取值](#user-content-values)
    * [Color 颜色](#user-content-color)
    * [Number 数值](#user-content-number)
* [Units 单位](#user-content-units)
    * [Pt 点](#user-content-pt)
* [PixelRatio 像素密度](#user-content-pixelratio)


<a name="widget_list"></a>

## Widget List
<a name="widget_text"></a>

### Text 文本（18）[目录](#user-content-top)

| 属性名                                      | 取值                                       | 描述                                       |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| color                                    | [<color>](#user-content-color)           | 对应 `CSS` [color](http://css.doyoe.com/properties/color/color.htm) 属性 |
| fontFamily                               | string                                   | 对应 `CSS` [font-family](http://css.doyoe.com/properties/font/font-family.htm) 属性 |
| fontSize                                 | [<number>](#user-content-number)         | 对应 `CSS` [font-size](http://css.doyoe.com/properties/font/font-size.htm) 属性 |
| fontStyle                                | `normal`, `italic`                       | 对应 `CSS` [font-style](http://css.doyoe.com/properties/font/font-style.htm) 属性，但阉割了 `oblique` 取值 |
| fontWeight                               | `normal`, `bold` `100~900`               | 对应 `CSS` [font-weight](http://css.doyoe.com/properties/font/font-weight.htm) 属性，但阉割了 `bolder, lighter` 取值 |
| lineHeight                               | [<number>](#user-content-number)         | 对应 `CSS` [line-height](http://css.doyoe.com/properties/text/line-height.htm) 属性 |
| textAlign                                | `auto`, `left`, `right`, `center`, `justify`<sup>`iOS`</sup> | 对应 `CSS` [text-align](http://css.doyoe.com/properties/text/text-align.htm) 属性，但增加了 `auto` 取值。当取值为 `justify` 时，在 `Android` 上会变为 `left` |
| textDecorationLine                       | `none`, `underline`, `line-through`, `underline line-through` | 对应 `CSS` [text-decoration-line](http://css.doyoe.com/properties/text-decoration/text-decoration-line.htm) 属性，但阉割了 `overline`, `blink` 取值 |
| textShadowColor                          | [&lt;color&gt;](#user-content-color)     | 对应 `CSS` [text-shadow](http://css.doyoe.com/properties/text-decoration/text-shadow.htm) 属性中的颜色定义 |
| textShadowOffset                         | {<br>width:[&lt;number&gt;](#user-content-number),<br>height:[&lt;number&gt;](#user-content-number)<br>} | 对应 `CSS` [text-shadow](http://css.doyoe.com/properties/text-decoration/text-shadow.htm) 属性中的阴影偏移定义 |
| textShadowRadius                         | [&lt;number&gt;](#user-content-number)   | 在 `CSS` 中，阴影的圆角大小取决于元素的圆角定义，不需要额外定义      |
| includeFontPadding<br /><sup>`Android`</sup> | [&lt;bool&gt;](#user-content-bool)       | Android在默认情况下会为文字额外保留一些padding，以便留出空间摆放上标或是下标的文字。对于某些字体来说，这些额外的padding可能会导致文字难以垂直居中。如果你把textAlignVertical设置为center之后，文字看起来依然不在正中间，那么可以尝试将本属性设置为false |
| textAlignVertical<br /><sup>`Android`</sup> | `auto`, `top`, `bottom`, `center`        | 对应 `CSS` [vertical-align](http://css.doyoe.com/properties/text/vertical-align.htm) 属性，增加了 `auto` 取值，`center` 取代了 `middle`，并阉割了 `baseline, sub` 等值 |
| fontVariant<br /><sup>`iOS`</sup>        | `small-caps`, `oldstyle-nums`, `lining-nums`, `tabular-nums`, `proportional-nums` | 对应 `CSS` [font-variant](http://css.doyoe.com/properties/font/font-variant.htm) 属性，但取值更丰富 |
| letterSpacing<br /><sup>`iOS`</sup>      | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` [letter-spacing](http://css.doyoe.com/properties/text/letter-spacing.htm) 属性 |
| textDecorationColor<br /><sup>`iOS`</sup> | [&lt;color&gt;](#user-content-color)     | 对应 `CSS` [text-decoration-color](http://css.doyoe.com/properties/text-decoration/text-decoration-color.htm) 属性 |
| textDecorationStyle<br /><sup>`iOS`</sup> | `solid`, `double`, `dotted`, `dashed`    | 对应 `CSS` [text-decoration-style](http://css.doyoe.com/properties/text-decoration/text-decoration-style.htm) 属性，但阉割了 `wavy` 取值 |
| writingDirection<br /><sup>`iOS`</sup>   | `auto`, `ltr`, `rtl`                     | 对应 `CSS` [direction](http://css.doyoe.com/properties/writing-modes/direction.htm) 属性，增加了 `auto` 取值 |
| numberOfLines                            |                                          | 文本行数限制，添加后超过限制行数文本会在末尾默认以...的形式省略。       |
| ellipsizeMode                            | `tail`,`clip`,`head`,`middle` ...在文本中的位置 | 设置文本缩略格式，配合numberOfLines使用               |

<a name="widget_image"></a>
Image[目录](#user-content-top)

| resizeMode : 枚举类型                    | cover，contain，stretch center             | 表示图片适应的模式。   <br>1.cover模式只求在显示比例不失真的情况下填充整个显示区域。可以对图片进行放大或者缩小，超出显示区域的部分不显示， 也就是说，图片可能部分会显示不了。  <br>2 contain模式是要求显示整张图片, 可以对它进行等比缩小, 图片会显示完整,可能会露出Image控件的底色。 如果图片宽高都小于控件宽高，则不会对图片进行放大。<br>3  stretch模式不考虑保持图片原来的宽,高比.填充整个Image定义的显示区域,这种模式显示的图片可能会畸形和失真。 <br>4 center模式, 9月11号的0.33版本才支持，contain模式基础上支持等比放大。 |
| ------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| source                               | 值为：｛uri： string｝ require（｀image！name｀）   | source={require('./img/icon.jpg')}<br> source={{uri:'https://img.alicdn.com/tps/TB1OvT9NVXXXXXdaFXXXXXXXXXX-520-280.jpg'}}<br> source={require('image!lufei')}></Image> |
| defaultSource <br /><sup>`iOS`</sup> | {uri:string}                             |                                          |
| onLoad<br /><sup>`iOS`</sup>         |                                          | 加载成功时触发该事件。                              |
| onLoadStart<br /><sup>`iOS`</sup>    |                                          | 加载开始时触发该事件。                              |
| onLoadEnd<br /><sup>`iOS`</sup>      |                                          | 不管是加载成功还是失败，都会触发该事件。                     |
| onError<br /><sup>`iOS`</sup>        | {nativeEvent: {error}}                   | 该属性要赋值一个function，当加载出错执行赋值的这个方法          |
| onProgress<br /><sup>`iOS`</sup>     | {nativeEvent: {loaded, total}}           | 加载过程中的进度事件。                              |
| onLayout                             | 值格式为 {nativeEvent:{layout:{x,y,width,height}}} | 当Image布局发生变化时会调用该方法                      |
| blurRadius<br /><sup>`iOS`</sup>     | number                                   | 添加一个模糊效果到图片上                             |
| capInsets<br /><sup>`iOS`</sup>      | {top: number, left: number, bottom: number, right: number} | 当图片改变大小时，四个角的尺寸将被保持一个确定大小通过指定capInsets，但是图片内容和边框将被拉伸，这是非常有用的对于创建一个可改变圆角大小的按钮、阴影和其他一些可改变大小的资源。更多信息请看[Apple documentation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/index.html#//apple_ref/occ/instm/UIImage/resizableImageWithCapInsets) |

<a name="widget_text_input"></a>

### TextInput[目录](#user-content-top)

| autoCapitalize        | 'none', 'sentences', 'words', 'characters' | characters: 所有的字符。  words: 每个单词的第一个字符。  sentences: 每句话的第一个字符（默认）。  none: 不自动切换任何字符为大写。 |
| --------------------- | ---------------------------------------- | ---------------------------------------- |
| maxLength             | number                                   | 可以限制文本输入框最大的输入字符长度                       |
| autoCorrect           | bool                                     | 如果为false，会关闭拼写自动修正。默认值是true。             |
| autoFocus             | bool                                     | 如果为true，在componentDidMount后会获得焦点。默认值为false。 |
| blurOnSubmit          | bool                                     | 如果为true，文本框会在提交的时候失焦。对于单行输入框默认值为true，多行则为false。注意：对于多行输入框来说，如果将blurOnSubmit设为true，则在按下回车键时就会失去焦点同时触发onSubmitEditing事件，而不会换行。 |
| onSubmitEditing       | function                                 | 此回调函数当软键盘的确定/提交按钮被按下的时候调用此函数。如果multiline={true}，此属性不可用。 |
| defaultValue          | string                                   | 提供一个文本框中的初始值。当用户开始输入的时候，值就可以改变。在一些简单的使用情形下，如果你不想用监听消息然后更新value属性的方法来保持属性和状态同步的时候，就可以用defaultValue来代替。 |
| editable              | bool                                     | 如果为false，文本框是不可编辑的。默认值为true。             |
| keyboardType          | :"default", 'email-address','numeric', 'phone-pad', "ascii-capable", 'numbers-and-punctuation','url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search' |                                          |
| multiline             | bool                                     | 如果为true，文本框中可以输入多行文字。默认值为false。          |
| onBlur                | function                                 | 当文本框失去焦点的时候调用此回调函数。                      |
| onChange              | function                                 | 当文本框内容变化时调用此回调函数。                        |
| onChangeText          | function                                 | 当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递。        |
| onEndEditing          | function                                 | 当文本输入结束后调用此回调函数。                         |
| onFocus               | function                                 | 当文本框获得焦点的时候调用此回调函数。                      |
| onLayout              | function                                 | 当组件挂载或者布局变化的时候调用，参数为{x, y, width, height}。 |
| placeholder           | string                                   | 如果没有任何文字输入，会显示此字符串。                      |
| placeholderTextColor  | color                                    | 占位字符串显示的文字颜色。                            |
| secureTextEntry       | bool                                     | 如果为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认值为false |
| selectTextOnFocus     | bool                                     | 如果为true，当获得焦点的时候，所有的文字都会被选中。             |
| selectionColor        | color                                    | 设置输入框高亮时的颜色（在iOS上还包括光标）占位字符串显示的文字颜色。     |
| value                 | string                                   |                                          |
| underlineColorAndroid | color                                    | 默认是带一条横线的，如果想去掉输入框下面的横线，需要给<TextInput>指定一个underlineColorAndroid='transparent'，这样就可以去掉输入框下面的横线了； |
|                       |                                          |                                          |



<a name="widget_scroll_view"/>

### ScrollView [目录](#user-content-top)

1. contentContainerStyle 这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内。例子：
2. horizontal bool

当此属性为true的时候，所有的的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列。默认值为false。

3. ：keyboardDismissMode enum(‘none’, “interactive”, ‘on-drag’)

用户拖拽滚动视图的时候，是否要隐藏软键盘。

4. ：none（默认值），拖拽时不隐藏软键盘。
5. ：on-drag 当拖拽开始的时候隐藏软键盘。
6. ：interactive 软键盘伴随拖拽操作同步地消失，并且如果往上滑动会恢复键盘。[安卓](http://lib.csdn.net/base/android)设备上不支持这个选项，会表现的和none一样。
7. ：keyboardShouldPersistTaps bool

当此属性为false的时候，在软键盘激活之后，点击焦点文本输入框以外的地方，键盘就会隐藏。如果为true，滚动视图不会响应点击操作，并且键盘不会自动消失。默认值为false。

8. ：onContentSizeChange function

此函数会在ScrollView内部可滚动内容的视图发生变化时调用。

调用参数为内容视图的宽和高: (contentWidth, contentHeight)

此方法是通过绑定在内容容器上的onLayout来实现的。

9. ：onScroll function

在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。

10. ：refreshControl element

指定RefreshControl组件，用于为ScrollView提供下拉刷新功能。

11. ：removeClippedSubviews bool

（实验特性）：当此属性为true时，屏幕之外的子视图（子视图的overflow样式需要设为hidden）会被移除。这个可以提升大列表的滚动性能。默认值为true。

12. ：showsHorizontalScrollIndicator bool

当此属性为true的时候，显示一个水平方向的滚动条。

13. ：showsVerticalScrollIndicator bool

当此属性为true的时候，显示一个垂直方向的滚动条。

有时候滚动视图会占据比实际内容更多的空间。这种情况下可以使用此属性，指定以某种颜色来填充多余的空间，以避免设置背景和创建不必要的绘制开销。一般情况下并不需要这种高级优化技巧。

14. ：（ios）alwaysBounceHorizontal bool

当此属性为true时，水平方向即使内容比滚动视图本身还要小，也可以弹性地拉动一截。当horizontal={true}时默认值为true，否则为false。

15. ：（ios）alwaysBounceVertical bool

当此属性为true时，垂直方向即使内容比滚动视图本身还要小，也可以弹性地拉动一截。当horizontal={true}时默认值为false，否则为true。

16. ：（ios）automaticallyAdjustContentInsets bool

如果滚动视图放在一个导航条或者工具条后面的时候，iOS系统是否要自动调整内容的范围。默认值为true。（译注：如果你的ScrollView或ListView的头部出现莫名其妙的空白，尝试将此属性置为false）

18. ：（ios）bounces bool

当值为true时，如果内容范围比滚动视图本身大，在到达内容末尾的时候，可以弹性地拉动一截。如果为false，尾部的所有弹性都会被禁用，即使alwaysBounce*属性为true。默认值为true。

19. ：（ios）bouncesZoom bool

当值为true时，使用手势缩放内容可以超过min/max的限制，然后在手指抬起之后弹回min/max的缩放比例。否则的话，缩放不能超过限制。

20. ：（ios）canCancelContentTouches bool

当值为false时，一旦有子节点响应触摸操作，即使手指开始移动也不会拖动滚动视图。默认值为true（在以上情况下可以拖动滚动视图。）

21. ：（ios）centerContent bool

当值为true时，如果滚动视图的内容比视图本身小，则会自动把内容居中放置。当内容比滚动视图大的时候，此属性没有作用。默认值为false。

22. ：（ios）contentInset {top: number, left: number, bottom: number, right: number}

内容范围相对滚动视图边缘的坐标。默认为{0, 0, 0, 0}。

23. ：（ios）contentOffset PointPropType

用来手动设置初始的滚动坐标。默认值为{x: 0, y: 0}。

24. ：（ios）decelerationRate number

一个浮点数，用于决定当用户抬起手指之后，滚动视图减速停下的速度。常见的选项有：

Normal: 0.998 (默认值)

Fast: 0.9

25. ：（ios）directionalLockEnabled bool

当值为真时，滚动视图在拖拽的时候会锁定只有垂直或水平方向可以滚动。默认值为false。

26. ：（ios）maximumZoomScale number

允许的最大缩放比例。默认值为1.0。

27. ：（ios）minimumZoomScale number

允许的最小缩放比例。默认值为1.0。

28. ：（ios）onRefreshStart function

已过期

请使用refreshControl 属性代替。

29. ：（ios）onScrollAnimationEnd function

当滚动动画结束之后调用此回调。

30. ：pagingEnabled bool

当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上。默认值为false。

31. ：（ios）scrollEnabled bool

当值为false的时候，内容不能滚动，默认值为true。

32. ：（ios）scrollEventThrottle number

这个属性控制在滚动过程中，scroll事件被调用的频率（单位是每秒事件数量）。更大的数值能够更及时的跟踪滚动位置，不过可能会带来性能问题，因为更多的信息会通过bridge传递。默认值为0，意味着每次视图被滚动，scroll事件只会被调用一次。

33. ：（ios）scrollIndicatorInsets {top: number, left: number, bottom: number, right: number}

决定滚动条距离视图边缘的坐标。这个值应该和contentInset一样。默认值为{0, 0, 0, 0}。

34. ：（ios）scrollsToTop bool

当此值为true时，点击状态栏的时候视图会滚动到顶部。默认值为true。

35. ：（ios）snapToAlignment enum(‘start’, “center”, ‘end’)

当设置了snapToInterval，snapToAlignment会定义停驻点与滚动视图之间的关系。

36. ：start (默认) 会将停驻点对齐在左侧（水平）或顶部（垂直）

37：center 会将停驻点对齐到中间

38. ：end 会将停驻点对齐到右侧（水平）或底部（垂直）
39. ：（ios）snapToInterval number

当设置了此属性时，会让滚动视图滚动停止后，停止在snapToInterval的倍数的位置。这可以在一些子视图比滚动视图本身小的时候用于实现分页显示。与snapToAlignment组合使用。

40. ：（ios）stickyHeaderIndices [number]

一个子视图下标的数组，用于决定哪些成员会在滚动之后固定在屏幕顶端。举个例子，传递stickyHeaderIndices={[0]}会让第一个成员固定在滚动视图顶端。这个属性不能和horizontal={true}一起使用。

41. ：（ios）zoomScale number





<a name="widget_list_view"></a>

### ListView [目录](#user-content-top)

- ScrollView相关属性样式全部继承

  - refreshControl：指定RefreshControl组件，用于为ScrollView提供下拉刷新功能。(该属性是继承与ScrollView)

  - contentContainerStyle:该属性是继承于ScrollView，主要作用于该组件的内容容器上。

    ​

- dataSource   ListViewDataSource  设置ListView的数据源

- initialListSize  number  进行设置ListView组件刚刚加载的时候渲染的列表行数，用这个属性确定首屏或者首页加载的数量，而不是花大量的时间渲染加载很多页面数据，提供性能哦

- onChangeVisibleRows  function  (visibleRows,changedRows)=>void。当可见的行发生变化的时候回调该方法。visibleRows参数对所有可见的行为{selectionID:{rowId:true}}的形式，changedRow参数对已经改变可见的行为{selectionID:{rowID:true|false}}。该值true代表可见，false代表在视图之外不可见的行。

- onEndReachedThreshold  number 当偏移量达到设置的临界值调用onEndReached

- onEndReached function 方法，当所有的数据项行被渲染之后，并且列表往下进行滚动。一直滚动到距离底部onEndReachedThredshold设置的值进行回调该方法。原生的滚动事件进行传递(通过参数的形式)。

- pageSize   number 每一次事件的循环渲染的行数

- removeClippedSubviews  bool  该属性用于提供大数据列表的滚动性能。该使用的时候需要给每一行(row)的布局添加over:'hidden'样式。该属性默认是开启状态。

- renderFooter function 方法  ()=>renderable ，在每次渲染过程中头和尾总会重新进行渲染。如果发现该重新绘制的性能开销比较大的时候，可以使用StaticContainer容器或者其他合适的组件。在每一次渲染过程中Footer(尾)该会一直在列表的底部，header(头)该会一直在列表的头部

- renderHeader  function 方法 使用情况和上面的renderFooter差不多

- renderRow function 方法   (rowData,sectionID,rowID,highlightRow)=>renderable   该方法有四个参数，其中分别为数据源中一条数据，分组的ID，行的ID，以及标记是否是高亮选中的状态信息。

- renderScrollComponent function 方法 (props)=>renderable  该方法可以返回一个可以滚动的组件。默认该会返回一个ScrollView

- renderSectionHeader function (sectionData,sectionID)=>renderable   如果设置了该方法，这样会为每一个section渲染一个粘性的header视图。该视图粘性的效果是当刚刚被渲染开始的时候，该会处于对应的内容的顶部，然后开始滑动的时候，该会跑到屏幕的顶端。直到滑动到下一个section的header(头)视图，然后被替代为止。

- renderSeparator function  (sectionID,rowID,adjacentRowHighlighted)=>renderable 如果设置该方法，会在被每一行的下面渲染一个组件作为分隔。除了每一个section分组的头部视图前面的最后一行。

- scrollRenderAheadDistance number  进行设置当该行进入屏幕多少像素以内之后就开始渲染该行

  实现宫格效果

  flexDirection:‘row’其次，ListView在同一行显示，而且通过flexWrap:’wrap’设置自动换行。



































































<a name="properties"></a>
## Properties 属性
<a name="dimension"></a>
### Dimension 尺寸（6）[目录](#user-content-top)
| 属性名       | 取值                                     | 描述                                       |
| --------- | -------------------------------------- | ---------------------------------------- |
| width     | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [width](http://css.doyoe.com/properties/dimension/width.htm) 属性 |
| minWidth  | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [min-width](http://css.doyoe.com/properties/dimension/min-width.htm) 属性 |
| maxWidth  | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [max-width](http://css.doyoe.com/properties/dimension/max-width.htm) 属性 |
| height    | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [height](http://css.doyoe.com/properties/dimension/height.htm) 属性 |
| minHeight | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [min-height](http://css.doyoe.com/properties/dimension/min-height.htm) 属性 |
| maxHeight | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [max-height](http://css.doyoe.com/properties/dimension/max-height.htm) 属性 |

<a name="positioning"></a>
### Positioning 定位（6）[目录](#user-content-top)
| 属性名      | 取值                                     | 描述                                       |
| -------- | -------------------------------------- | ---------------------------------------- |
| position | `absolute`, `relative`                 | 对应 `CSS` [position](http://css.doyoe.com/properties/positioning/position.htm) 属性，但阉割了 `static, fixed` 取值 |
| top      | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [top](http://css.doyoe.com/properties/positioning/top.htm) 属性 |
| right    | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [right](http://css.doyoe.com/properties/positioning/right.htm) 属性 |
| bottom   | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [bottom](http://css.doyoe.com/properties/positioning/bottom.htm) 属性 |
| left     | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [left](http://css.doyoe.com/properties/positioning/left.htm) 属性 |
| zIndex   | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [z-index](http://css.doyoe.com/properties/positioning/z-index.htm) 属性 |

<a name="margin"></a>
### Margin 外部白（7）[目录](#user-content-top)
| 属性名              | 取值                                     | 描述                                       |
| ---------------- | -------------------------------------- | ---------------------------------------- |
| margin           | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [margin](http://css.doyoe.com/properties/margin/margin.htm) 属性，不同的是，它只能定义一个参数，如需分别定义`上、右、下、左`4个方位的外补白，可以通过下面的单向外部白属性 |
| marginHorizontal | [&lt;number&gt;](#user-content-number) | 无对应的 `CSS` 属性。其效果相当于同时设置 `marginRight` 和 `marginLeft` |
| marginVertical   | [&lt;number&gt;](#user-content-number) | 无对应的 `CSS` 属性。其效果相当于同时设置 `marginTop` 和 `marginBottom` |
| marginTop        | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [margin-top](http://css.doyoe.com/properties/margin/margin-top.htm) 属性 |
| marginRight      | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [margin-right](http://css.doyoe.com/properties/margin/margin-right.htm) 属性 |
| marginBottom     | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [margin-bottom](http://css.doyoe.com/properties/margin/margin-bottom.htm) 属性 |
| marginLeft       | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [margin-left](http://css.doyoe.com/properties/margin/margin-left.htm) 属性 |

<a name="padding"></a>
### Padding 内部白（7）[目录](#user-content-top)
| 属性名               | 取值                                     | 描述                                       |
| ----------------- | -------------------------------------- | ---------------------------------------- |
| padding           | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [padding](http://css.doyoe.com/properties/padding/padding.htm) 属性，不同的是，它只能定义一个参数，如需分别定义`上、右、下、左`4个方位的内补白，可以通过下面的单向内部白属性 |
| paddingHorizontal | [&lt;number&gt;](#user-content-number) | 无对应的 `CSS` 属性。其效果相当于同时设置 `paddingRight` 和 `paddingLeft` |
| paddingVertical   | [&lt;number&gt;](#user-content-number) | 无对应的 `CSS` 属性。其效果相当于同时设置 `paddingTop` 和 `paddingBottom` |
| paddingTop        | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [padding-top](http://css.doyoe.com/properties/padding/padding-top.htm) 属性 |
| paddingRight      | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [padding-right](http://css.doyoe.com/properties/padding/padding-right.htm) 属性 |
| paddingBottom     | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [padding-bottom](http://css.doyoe.com/properties/padding/padding-bottom.htm) 属性 |
| paddingLeft       | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [padding-left](http://css.doyoe.com/properties/padding/padding-left.htm) 属性 |

<a name="border"></a>
### Border 边框（20）[目录](#user-content-top)
| 属性名                     | 取值                                       | 描述                                       |
| ----------------------- | ---------------------------------------- | ---------------------------------------- |
| borderStyle             | `solid`, `dotted`, `dashed`              | 对应 `CSS` `border-style` 属性，但阉割了 `none, hidden, double, groove, ridge, inset, outset` 取值，且无方向分拆属性 |
| borderWidth             | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `border-width` 属性               |
| borderTopWidth          | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `border-top-width` 属性           |
| borderRightWidth        | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `border-right-width` 属性         |
| borderBottomWidth       | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `border-bottom-width` 属性        |
| borderLeftWidth         | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `border-left-width` 属性          |
| borderColor             | [&lt;color&gt;](#user-content-color)     | 对应 `CSS` `border-color` 属性               |
| borderTopColor          | [&lt;color&gt;](#user-content-color)     | 对应 `CSS` `border-top-color` 属性           |
| borderRightColor        | [&lt;color&gt;](#user-content-color)     | 对应 `CSS` `border-right-color` 属性         |
| borderBottomColor       | [&lt;color&gt;](#user-content-color)     | 对应 `CSS` `border-bottom-color` 属性        |
| borderLeftColor         | [&lt;color&gt;](#user-content-color)     | 对应 `CSS` `border-left-color` 属性          |
| borderRadius            | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `border-radius` 属性              |
| borderTopLeftRadius     | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `border-top-left-radius` 属性     |
| borderTopRightRadius    | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `border-top-right-radius` 属性    |
| borderBottomLeftRadius  | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `border-bottom-left-radius` 属性  |
| borderBottomRightRadius | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `border-bottom-right-radius` 属性 |
| shadowColor             | [&lt;color&gt;](#user-content-color)     | 对应 `CSS` [box-shadow](http://css.doyoe.com/properties/border/box-shadow.htm) 属性中的颜色定义 |
| shadowOffset            | {<br>width: [&lt;number&gt;](#user-content-number), <br>height: [&lt;number&gt;](#user-content-number)<br>} | 对应 `CSS` [box-shadow](http://css.doyoe.com/properties/border/box-shadow.htm) 属性中的阴影偏移定义 |
| shadowRadius            | [&lt;number&gt;](#user-content-number)   | 在 `CSS` 中，阴影的圆角大小取决于元素的圆角定义，不需要额外定义      |
| shadowOpacity           | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` [box-shadow](http://css.doyoe.com/properties/border/box-shadow.htm) 属性中的阴影透明度定义 |

<a name="background"></a>
### Background 背景（1）[目录](#user-content-top)
| 属性名             | 取值                                   | 描述                             |
| --------------- | ------------------------------------ | ------------------------------ |
| backgroundColor | [&lt;color&gt;](#user-content-color) | 对应 `CSS` `background-color` 属性 |

<a name="transform"></a>
### Transform 转换（3）[目录](#user-content-top)
| 属性名                | 取值                                       | 描述                                       |
| ------------------ | ---------------------------------------- | ---------------------------------------- |
| transform          | `[{perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}]` | 对应 `CSS` `transform` 属性                  |
| transformMatrix    | `TransformMatrixPropType`                | 类似于 `CSS` 中 `transform` 属性的 `matrix()` 和 `matrix3d()` 函数 |
| backfaceVisibility | `visible`, `hidden`                      | 对应 `CSS` `backface-visibility` 属性        |

<a name="flexbox"></a>
### Flexbox 弹性盒（9）[目录](#user-content-top)
| 属性名            | 取值                                       | 描述                                       |
| -------------- | ---------------------------------------- | ---------------------------------------- |
| flex           | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `flex` 属性，但只能为整数值               |
| flexGrow       | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `flex-grow` 属性                  |
| flexShrink     | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `flex-shrink` 属性                |
| flexBasis      | [&lt;number&gt;](#user-content-number)   | 对应 `CSS` `flex-basis` 属性                 |
| flexDirection  | `row`, `row-reverse`, `column`, `column-reverse` | 对应 `CSS` `flex-direction` 属性             |
| flexWrap       | `wrap`, `nowrap`                         | 对应 `CSS` `flex-wrap` 属性，但阉割了 `wrap-reverse` 取值 |
| justifyContent | `flex-start`, `flex-end`, `center`, `space-between`, `space-around` | 对应 `CSS` `justify-content` 属性，但阉割了 `stretch` 取值。 |
| alignItems     | `flex-start`, `flex-end`, `center`, `stretch` | 对应 `CSS` `align-items` 属性，但阉割了 `baseline` 取值。 |
| alignSelf      | `auto`, `flex-start`, `flex-end`, `center`, `stretch` | 对应 `CSS` `align-self` 属性，但阉割了 `baseline` 取值 |

<a name="other"></a>
### Other 其他[目录](#user-content-top)
| 属性名                                    | 取值                                     | 描述                                      |
| -------------------------------------- | -------------------------------------- | --------------------------------------- |
| opacity                                | [&lt;number&gt;](#user-content-number) | 对应 `CSS` `opacity` 属性                   |
| overflow                               | `visible`, `hidden`, `scroll`          | 对应 `CSS` `overflow` 属性，但阉割了 `auto` 取值   |
| elevation<br /><sup>`Android`</sup>    | [&lt;number&gt;](#user-content-number) | `CSS`中没有对应的属性，只在 `Android5.0+` 上有效      |
| resizeMode                             | `cover`, `contain`, `stretch`          | `CSS`中没有对应的属性，可以参考 `background-size` 属性 |
| overlayColor<br /><sup>`Android`</sup> | string                                 | `CSS`中没有对应的属性，当图像有圆角时，将角落都充满一种颜色        |
| tintColor<br /><sup>`iOS`</sup>        | [&lt;color&gt;](#user-content-color)   | `CSS`中没有对应的属性，`iOS` 图像上特殊的色彩，改变不透明像素的颜色 |


<a name="values"></a>
## Valuse 取值[目录](#user-content-top)

<a name="color"></a>
### Color 颜色

`React Native` 支持了 `CSS` 中大部分的颜色类型：

* `#f00` (#rgb)
* `#f00c` (#rgba)：`CSS` 中无对应的值
* `#ff0000` (#rrggbb)
* `#ff0000cc` (#rrggbbaa)：`CSS` 中无对应的值
* `rgb(255, 0, 0)`
* `rgba(255, 0, 0, 0.9)`
* `hsl(360, 100%, 100%)`
* `hsla(360, 100%, 100%, 0.9)`
* `transparent`
* `0xff00ff00` (0xrrggbbaa)：`CSS` 中无对应的值
* `Color Name`：支持了 [基本颜色关键字](http://css.doyoe.com/appendix/color-keywords.htm#basic) 和 [拓展颜色关键字](http://css.doyoe.com/appendix/color-keywords.htm#extended)，但不支持 [28个系统颜色](http://css.doyoe.com/appendix/color-keywords.htm#system)；

<a name="number"></a>
### Number 数值

在 `React-Native` 中，目前仅支持 `Number` 这一种长度取值。默认缺省了 `pt` 单位，详细请看 [Units 单位](#user-content-units) 部分。

<a name="units"></a>
## Units 单位

<a name="pt"></a>
### Pt 点

在 `React-Native` 中，并不支持百分比单位，目前只支持一种单位，即 `pt` 绝对长度单位，同时，你在定义时不需要加单位，例如：

```
<View style={{width: 100, height: 50}}></View>
```

```
var styles = StyleSheet.create({
    box: {
        width: 100,
        height: 50
    }
});
```

<a name="pixelratio"></a>
## PixelRatio 像素密度[目录](#user-content-top)

在 `React-Native` 中，访问设备像素密度的方法由 `PixelRatio` 类提供。

我们的应用通常都会运行在不同的设备上，并且这些设备的像素密度很有可能各不相同。这会造成一个现象就是：

* 定义了元素的边框为 `1像素`，而实际上在不同像素密度的设备上结果不一样，比如：iPhone6 显示为 `2像素`，iPhone6 Plus 显示为 `3像素`；
* 对于一个图片来讲，因为设备的像素密度不同，它也需要对应不同尺寸的规则，以防止图片过小变得模糊；

### 根据像素密度指定边框厚度

出于对产品体验的一致性，我们会要求不论是在哪种设备上，其边框厚度都应该是相同的。一个取得物理上的相同边框厚度的好方法就是用逻辑尺寸除以像素密度比：

```
var styles = StyleSheet.create({
    box: {
        borderWidth: 1 / PixelRatio.get(),
        borderStyle: solid
    }
});
```

上述代码将保证你的应用在所有的设备上（像素密度），都获得 `1像素` 的边框厚度。`PixelRatio` 通过 `get()` 方法来返回设备的像素密度。

未完待续。。。