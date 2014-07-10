var fs = require("fs");

fs.readdir("__doc__/docs",function(err,files){
    if(err){
        throw err;
    }else{
        for(var i=0;i<files.length;i++){
            $("#left-list").append("<div class='item'>"+files[i].replace(/\.md$/,"")+"</div>");
        }

        $("div.item").each(function(item,elem){
            $(elem).click(function(e){
                 var content = $(this).html();
                $("#doc").html("")
                .append("<cc-markdown style='height:100%;' file='__doc__/docs/"+content+".md' allow_html=true></cc-markdown>");
            })
        });
    }
});