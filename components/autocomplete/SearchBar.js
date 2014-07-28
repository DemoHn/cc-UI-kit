//with jQuery
/*
 * HTML的准备：
 * 1.一个有ID的input框
 * 2.作为input的有ID的父元素
 * 3.输入的数据
 * 4.ID用“xxx”表示*/
var SearchBar = function (parent_id, input_id) {
    /*parent_id 表示要添加的搜索下拉框的父元素 */
    /*input_id 表示输入框的元素ID */
    this.input_id = input_id;
    this.parent_id = parent_id;
    this.CreateSearchBar();
};

SearchBar.prototype.CreateSearchBar = function () {
    var isFocus = 0;
    var FocusNum = -1;
    $("#" + this.parent_id).append("<div id=sch_" + this.parent_id + "></div>")
        .css("z-index", "999").css("height", "20px");
    var csch = $("#sch_" + this.parent_id);
    var cinput = $("#" + this.input_id);
    //输入条的所有样式
    cinput.css({"margin": "0"});
    //显示框的所有样式
    csch.css(
        {"width": "200px",
            "position": "relative",
            "top": "0",
            "left": "0",
            "background-color": "#ffffff",
            "border": "1px #000000 solid",
            "display": "none",
            "z-index": "1000",
            "margin": "0",
            "overflowX": "hidden",
            "overflowY": "hidden"})
        .css("width", cinput.css("width"));
    SearchBarEvents(this.parent_id, this.input_id);

    function SearchBarEvents(parent_id, input_id) {
        var cdiv = $("#sch_" + parent_id);

        //div出现事件
        $("#" + input_id).bind("keyup", function () {
            if (this.value != "" && cdiv.css("display") == "none") {
                cdiv.slideDown(100);
                cdiv.css("display", "block");

            } else if (this.value == "" && cdiv.css("display") == "block") {
                cdiv.slideUp(100, function () {
                    cdiv.css("display", "none");
                });
                isFocus = 0;
                FocusNum = -1;
            }
        });
    }
};

//当标签数太多时将自动切换为scroll模式
SearchBar.prototype.AdjustDivHeight = function (div_id) {
    var csch = $("#" + div_id);
    var len = csch.contents().length;
    if (len > 10) {
        csch.css("height", "10em")
            .css("overflowY", "scroll");
    }
};

//清除所有div内的标签
SearchBar.prototype.Empty = function (parent_id) {
    $("#sch_" + parent_id).empty().css("height", "auto").css("overflowY", "hidden");
};

//添加dl标签
SearchBar.prototype.AddLabels_DL = function (parent_id, input_id, text) {
    var csch = $("#sch_" + parent_id);
    var len = csch.contents().length;
    var c = len + 1;
    csch.append("<dl class='SB_label_dl' id=label_" + c + ">" + text + "</dl>");
    $(".SB_label_dl").css(
        {"line-height": "1.2em",
            "font-size": "15px",
            "margin": "0",
            "cursor": "default",
            "font-family": "Microsoft YaHei,monospace"}
    );
    //鼠标移入事件
    $("#label_" + c).bind("mousemove", function () {
        $("#label_" + c).css("background-color", "blue")
            .css("color", "white");
    })
        //鼠标移出事件
        .bind("mouseout", function () {
            $("#label_" + c).css("background-color", "white")
                .css("color", "black");
        })
        //点击输入参数事件
        .bind("click", function () {
            var csch = $("#sch_" + parent_id);
            var val = $("#label_" + c).text();
            csch.slideUp(100, function () {
                csch.css("display", "none");
                $("#" + input_id).val(val);
            });
        });
};

//添加"无搜索结果"标签
SearchBar.prototype.AddLabels_NotFound = function (parent_id, input_id, text) {
    var csch = $("#sch_" + parent_id);
    var len = csch.contents().length;
    var c = len + 1;
    csch.append("<dl class='SB_label_NotFound' id=label_" + c + ">" + text + "</dl>");
    $(".SB_label_NotFound").css(
        {"line-height": "1.2em",
            "font-size": "15px",
            "margin": "0",
            "cursor": "default",
            "font-family": "Microsoft YaHei,monospace",
            "color": "grey"}
    );
};

//添加div标签
//这里的obj指的是要加入这个div的对象，obj_text_id表示它所代表的文字
SearchBar.prototype.AddLabels_DIV = function (parent_id, input_id, obj, obj_text) {
    var csch = $("#sch_" + parent_id);
    var len = csch.contents().length;
    var c = len + 1;
    csch.append("<div class='SB_label_div' id=label_" + c + "></div>");
    $(".SB_label_div").css(
        {
            "margin": "0",
            "cursor": "default",
            "font-family": "Microsoft YaHei,monospace",
            "width": "100%",
            "height": "auto",
            "overflowX": "hidden",
            "overflowY": "hidden"}
    );
    //鼠标移入事件
    $("#label_" + c)
        .append(obj)
        .bind("mousemove", function () {
            $("#label_" + c).css("background-color", "blue")
        })
        //鼠标移出事件
        .bind("mouseout", function () {
            $("#label_" + c).css("background-color", "white");
        })
        //点击输入参数事件
        .bind("click", function () {
            var csch = $("#sch_" + parent_id);
            var val = obj_text;
            csch.slideUp(100, function () {
                csch.css("display", "none");
                $("#" + input_id).val(val);
            });
        });
};

SearchBar.prototype.ChangeStyle=function(style_class_label,style_json){
    if(style_class_label=="dl"){
        $(".SB_label_dl").css(style_json);
    }else if(style_class_label=="NotFound"){
        $(".SB_label_NotFound").css(style_json);
    }else if(style_class_label=="div"){
        $(".SB_label_div").css(style_json);
    }
};
