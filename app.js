function getnum(num){
    var result = document.getElementById("result");
    result.value += num;
    
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}

function result(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}