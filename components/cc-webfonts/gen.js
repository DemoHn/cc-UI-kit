/* gen.js
    to generate demo fonts page.
    To update the final file,please run: node gen.js
*/
var demo_text = "0123456789 the quick brown fox jumps out the door"; 
 // generating webfont preview
    var fs = require("fs");
    var final_txt = "";
    fs.readdir("fonts",function(err,files){
        if(err){
            throw err;
        }else{
            for(var i=0;i<files.length;i++){
                final_txt += "<cc-webfonts font=\""+files[i].replace(".woff","")+"\">"+files[i].replace(".woff","")+": "+demo_text+"</cc-webfonts><br>\n"
            }
            fs.writeFile("generate_txt.md",final_txt,{"encoding":"utf-8"},function(){});
        }
    });