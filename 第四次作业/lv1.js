let obj=new Object();

obj.name="cxk";
obj.age=16;
console.log(obj);

let obj1={
    name:"dj",
    age:18,
}

console.log(obj1);

function newObject(name,age){
    this.name=name;
    this.age=age;
    this.say=()=>{
        console.log(this);
    }   
}

let obj2=new newObject("ll",19);
obj2.say();
