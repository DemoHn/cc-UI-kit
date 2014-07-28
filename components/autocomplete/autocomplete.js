/*with jQuery
  create by DemoHn
  on 6.6.2014
*/

var AutoComplete = function(obj,input_obj,config){
  config = config || {};
  var cfg = {
      maxItems: config.maxItems || 10,
      showNotFoundItem:config.showNotFoundItem || false
  };
  this.parent_obj = obj;
  this.input_obj = input_obj;

  this.config = cfg;
  this.init();
  this.onkeyup();
};

/*initializaion*/
AutoComplete.prototype.init = function(){
  $(this.parent_obj).addClass("ui-autocomplete");
  $(this.input_obj).addClass("ui-input");
  $(this.parent_obj).append("<div class='ui-label'></div>");

  //set parent_obj height
  $(this.parent_obj).height($(this.input_obj).height()+"px");
};

/*input event*/
AutoComplete.prototype.onkeyup = function(){
  var that = this;
  var iin = $(this.input_obj);

  iin.bind("keyup",function(){
    if(iin.val() != ""){
      that.toggleStatus(1);
    } else if(iin.val() == ""){
      that.toggleStatus(0);
    }
  });
};

//status : 1 = show, 0 = hide, null = toggle
AutoComplete.prototype.toggleStatus = function(status){
  var label_obj = $(this.parent_obj).find(".ui-label");

  if(status != undefined){
    if(status){
      _show();
    }else{
      _hide();
    }
  }else{
    if(label_obj.css("display") == "none"){
      _show();
    }else{
      _hide();
    }
  }

  function _hide(){
    label_obj.css("display","none");
  }

  function _show(){
    label_obj.css("display","block");
  }
};


AutoComplete.prototype.Empty = function(){
  $(this.parent_obj).find(".ui-label").html("");
};

/*text must be arranged in array*/
AutoComplete.prototype.appendDL = function(text_array){
  var self = this;
  text_array = text_array || [];

  var final_tag = "";
  text_array.forEach(function(text,index){
    var tag = "<dl class='ui-item'>"+text+"</dl>";
    final_tag += tag;
  });

  $(this.parent_obj).find(".ui-label").append(final_tag);

  $(this.parent_obj).find(".ui-item").each(function(index,elem){
    $(this).bind("click",function(){
      var val = $(this).text();
      $(self.input_obj).val(val);
      self.toggleStatus(0);
    });
  });
};

AutoComplete.prototype.appendNotFoundLabel = function(){
  $(this.parent_obj).find("dl.ui-item").append("<dl class='ui-not-found'>未找到元素</dl>");
};
