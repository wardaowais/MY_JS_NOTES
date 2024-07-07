function loadscript(src,callback){
    var script = document.createElement("script")
    script.src = src;
    script.onload = function(){
        console.log("Script Append: "+src)
        callback(null,src);
    }
    script.onerror= function(){
        console.log(" error loading Script : "+src)
        callback(new Error("Src got some error"))
        
    }
    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error);
        return
    }
}


function Goodmorning(){
    alert('good morning ');
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)
