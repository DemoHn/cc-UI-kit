Polymer('cc-scroll',{
  ready:function(){
    var lock = 0;
    var that = this;
    this.$["scroll-frame"].style.top = "0";
    this.$["scroll-bar"].style.top = "0";
    this.$["scroll-bar"].style.height = "10";

    loop(this);

    window.onresize = function(){
      loop(that);
    };

    this.$["scroll-line"].onmousewheel = function(e){

      var move = -1 * (e.wheelDeltaY / that.$["scroll-frame"].clientHeight * that.clientHeight);

       //when out of border,stop draging and changing
        var tp = Number(that.$["scroll-bar"].style.top.replace("px",""));
        var sp = that.clientHeight - 
                 Number(that.$["scroll-bar"].style.height.replace("px",""));          
        
          if(!(tp+move<0 || tp+move>sp)){
            that.$["scroll-bar"].style.top = (Number(that.$["scroll-bar"].style.top.replace("px","")) + move+"px");
            loop(that);
          }else{
            //scroll to top
            if(tp+move<=0){
              console.log("f");
              that.$["scroll-bar"].style.top = "0px";
              loop(that);
            }else{
              that.$["scroll-bar"].style.top= sp+"px";
              loop(that);              
            }            
          }  
    }

    //window mouse click event
    window.onmousemove = function(e){


        //to ensure that mouse is dragging.
        if(lock == 1){
          var move = e.webkitMovementY;
        //when out of border,stop draging and changing
        var tp = Number(that.$["scroll-bar"].style.top.replace("px",""));
        var sp = that.clientHeight - 
                 Number(that.$["scroll-bar"].style.height.replace("px",""));          
        
          if(!(tp+move<0 || tp+move>sp)){
            that.$["scroll-bar"].style.top = (Number(that.$["scroll-bar"].style.top.replace("px",""))+move)+"px";
            loop(that);
          }else{

          }
        }

    };

    window.onmouseup = function(e){
      lock = 0;
    };

    this.$["scroll-bar"].onmousedown = function(){
      lock = 1;
    };
  }
});

function loop(obj){


  var Frame = obj.$["scroll-frame"];
  /*obj = (this).$ */
  var totalHeight = Frame.clientHeight;

  var screenHeight = obj.clientHeight;

  var scrollOffset = Number(Frame.style.top.replace("px",""));

  //hide or show
  if(totalHeight <= screenHeight){
    obj.$["scroll-line"].style.display ="none";
  }else{
    obj.$["scroll-line"].style.display ="block";
  }

  /*the height of scroll bar*/
  var percentHeight = Number(obj.$["scroll-bar"].style.height.replace("px",""));
  var percentOffset = Number(obj.$["scroll-bar"].style.top.replace("px",""));

  if(screenHeight / totalHeight * screenHeight > 10){
    percentHeight = screenHeight / totalHeight * screenHeight;
    obj.$["scroll-bar"].style.height = percentHeight +"px";
  }else{
    percentHeight = "10px";
  };

  var percent = ( totalHeight - screenHeight) / (screenHeight - percentHeight);

  if(screenHeight - percentHeight > 0){
    scrollOffset = percentOffset * percent;

    obj.$["scroll-frame"].style.top = (-1* scrollOffset+"px");
  }
}
