var a=[1,[2,3],[4,5,[6,7,8]],9]
var b=new Array
function fun(c){
    for(let item of c){
    if(Array.isArray(item)){
       fun(item)
    }
    else{
        b.push(item)
    }
}
}
fun(a)
console.log(b)