//不用jQuery写的代码
var data = ["DJJ", "C程", "C程", "工图","fefa","13123","DJJ", "C程", "C程", "工图","fefa","13123","DJJ", "C程", "C程", "工图","fefa","13123","DJJ", "C程", "C程", "工图","fefa","13123"];

function search_reg(input,data) {
    var sch_div = document.getElementById("sch_div");
    var isFocus = 0;
    var FocusNum = -1;
    var dtlength;
    var wheight;
    //实验用data
    sch_div.style.display = "none";
    sch_div.style.overflowY = "auto";
    if (input != "" && sch_div.style.display == "none") {
        //创建div层
        sch_div.style.display = "block";
    } else if (input == "" && sch_div.style.display == "block") {
        sch_div.style.display = "none";
        isFocus = 0;
        FocusNum = -1;
    }
    removeLines(sch_div);
    wheight = createLines(sch_div, data);
    if (wheight > 7) {
        sch_div.style.height = "8em";
        sch_div.style.overflowY = "scroll";
    }
    //生成选项标签
    function createLines(obj, dt) {
        var sch_p;
        var i;
        for (i = 0; i < dt.length; i++) {
            sch_p = document.createElement("dl");
            sch_p.setAttribute("class", "sch_a");
            sch_p.setAttribute("id", i + "sch_a");
            sch_p.style.cursor = "default";
            sch_p.onmouseover = function () {
                for(j=0;j<dt.length;j++){
                    clearStyle(document.getElementById(j.toString()+"sch_a"));
                }
                dlMouseOver(this);
            };
            sch_p.onmouseout = function () {
                dlMouseOut(this);
            };
            sch_p.onclick = function () {
                dlClick(this);
            };
            sch_p.style.fontSize = "14px";
            sch_p.style.fontFamily = "'微软雅黑',Courier New,monospace";
            sch_p.style.lineHeight = "1.2em";
            sch_p.style.margin = "0";
            sch_p.innerHTML = dt[i];
            obj.appendChild(sch_p);
        }
        dtlength = dt.length;
        return dt.length;
    }

    document.onkeyup = function (e) {
        var keyc;
        if (window.event) { //IE
            keyc = window.event.keyCode;
            KeyFocus(keyc);
        } else {           //Firefox,Chrome
            keyc = e.which;
            KeyFocus(keyc);
        }

    };
    //键盘事件
    function KeyFocus(keyc) {
        var dh, dpre, daft;
        var fn;
        if (keyc == 40 && isFocus == 0) {
            dh = document.getElementById("0sch_a");
            dlMouseOver(dh);
        } else if (keyc == 40 && isFocus == 1 && FocusNum < dtlength && FocusNum >= 0) {
            fn = parseInt(FocusNum) + 1;
            dpre = document.getElementById(FocusNum + "sch_a");
            FocusNum = fn;
            daft = document.getElementById(FocusNum + "sch_a");
            dlMouseOut(dpre);
            dlMouseOver(daft);
        } else if (keyc == 38 && isFocus == 1 && FocusNum < dtlength && FocusNum >= 0) {
            fn = parseInt(FocusNum) - 1;
            dpre = document.getElementById(FocusNum + "sch_a");
            FocusNum = fn;
            daft = document.getElementById(FocusNum + "sch_a");
            dlMouseOut(dpre);
            dlMouseOver(daft);
        } else if(keyc==13 &&isFocus==1){
            addToWord(document.getElementById(FocusNum+"sch_a").innerHTML);
        }
    }


//移除选项标签
    function removeLines(obj) {
        var if_p = document.getElementsByTagName("dl");
        var j;
        var k = if_p.length;
        if (if_p != undefined) {
            for (j = k - 1; j >= 0; j--) {
                if (if_p.getAttribute("class") == "sch_a") {
                    obj.removeChild(if_p[j]);
                }
            }
        }
    }

//dl的各种样式（mousemove,select）
    function dlMouseOver(obj) {
        var regNum = /[0-9]+/;
        obj.style.backgroundColor = "#666666";
        obj.style.color = "white";
        obj.focus();
        isFocus = 1;
        FocusNum = regNum.exec(obj.getAttribute("id").toString());
    }

    function dlMouseOut(obj) {
        clearStyle(obj);
        isFocus = 0;
        FocusNum = -1;
    }

    function dlClick(obj) {
        addToWord(obj.textContent||obj.innerText);
    }
    function clearStyle(obj){
        obj.style.backgroundColor = "white";
        obj.style.color = "black";
    }
//选定
    function addToWord(str) {
        document.getElementById("inputer").value = str;
        sch_div.style.display = "none";
    }
}
