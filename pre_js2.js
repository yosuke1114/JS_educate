function listAllProperties(o) {
	var objectToInspect;
	var result = [];
	for(objectToInspect = o; objectToInspect !== null;
           objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(
            Object.getOwnPropertyNames(objectToInspect)
        );
    }
	return result;
}
let s = "aaa";
console.log( listAllProperties(s) );

/*
//PROMISE
 const promise = new Promise((resolve,reject) =>{
 

 });
 const onFulfilled = () => {
console.log("resolveされた時に呼ばれる");
 };

const onRejected = () => {
    console.log("rejectされた時に呼ばれる");
};
*/

//
//promise.then(onFulfilled,onRejected);

function countdown(seconds){
    return new Promise(function (onFulfilled , onRejected) {
        for (let i = seconds; i >= 0; i--){
        setTimeout(function() {
            if(i==13){return  onRejected (new Error("この数は不吉です"));}
            if (i >0) console.log(`${i}:...`);
            else onFulfilled(console.log("GO!!"));
        },(seconds - i ) * 1000);

        }

    });
}
countdown(2).then(
    function() {
        console.log("カウントダウン成功");
    },
    function(err) {
        console.log("カウントダウン失敗"　+ err.message);
    }

)
//async / await 




//method this -> that
const obj = {
    prefix : "pre",
    prefixArray(strings){
       // const that = this;
        return strings.map(function (str){
            return this.prefix + "-" + str;
        },this);
    }
};


const prefixStrings = obj.prefixArray(["aa","ss","dd"]);
console.log(prefixStrings);

//arrow functionにて実施
const obj2 = {
    prefix : "pre",
    prefixArray(strings){
        return strings.map((str) => this.prefix + "-" + str );
    }
};
const prefixStrings_ar = obj2.prefixArray(["zz","xx","cc"]);
console.log(prefixStrings_ar);


//class 

class My_Class  {
    constructor(x = 0,y = 0,z = 0 ){
        this.x = x;
        this.y = y;
        this.count = 0;
        this._z = z;
        this.preincre = () =>{
                this.count ++;
        };
        this.preincre();
        this._array = [];
    }
    add() {
        return this.x + this.y;
    } 
    increment(){
        this.count++;
    }
    get value(){
        console.log("getter");
        return this._z;
    };
    set value(new_z){
        console.log("setter");
        this._z = new_z;
    };
    get items() {
        console.log("get_items");
        return this._array;
    };
    set items(num){
        console.log("set_item");
        this._array.push(num);
    };
    static new_instance(...arg){
        console.log("生成しました");
        return new this(...arg);
    };
    method(){
        console.log("親クラスメソッド");
    };

}

const my_class = new My_Class(1,2);
console.log(my_class);
console.log(my_class.add());
my_class.increment();
console.log(my_class.count);
my_class.value = 30;
console.log(my_class.value);
my_class.items= [1,2];
my_class.items= [3,4];
console.log(my_class.items);
const gen_my_class = My_Class.new_instance(1,2,3);
console.log(gen_my_class);

class Ex_My_Class extends My_Class{
    constructor(...args) {
    //親クラスのコンストラクタ
    super(...args);
    console.log("継承クラスのコンストラクタ");
    }
    method(){
        console.log("子クラスメソッド");
        super.method();
    };    
}

const ex_my_class = new Ex_My_Class(1,2,3);
console.log(ex_my_class.increment());
console.log(ex_my_class.count); 
const static_ex_child = Ex_My_Class.new_instance(33,44,55);
ex_my_class.method();


//ビルトインオブジェクトを継承
class MyAllay extends Array{
    get first() {
        if (this.length === 0){
            return undefined
        }else {
            return this[0];
        }
    }
    get last() {
        if (this.length === 0){
            return undefined
        }else {
            return this[this.length - 1];
        }   
    }
}
const my_allay = new MyAllay(1,2,3);
const my_dummy_array = new MyAllay();
console.log(my_allay.first); 
console.log(my_allay.last); 



//例外処理
try {
    console.log("try開始");
    let x = false;
    if(!x){
        throw(new Error ("エラーですよ"));
    }
} catch (error) {
    console.log(error.message);

    
} finally{
    console.log("finally開始");
}

console.log(my_dummy_array.first); 

console.log( Object.getPrototypeOf(my_dummy_array));


class My_string extends String{
    constructor(x){
        super(x);
        this.x = x;
    }
    get value(){
        return this.x ;
    }

    set value(str){
        this.x = str;
        return this.x;
    }
    get_length(){
        return console.log(this.x.length);
    }
}
const my_string = new My_string("namae");

console.log( Object.getPrototypeOf(my_string));
my_string.value = "aaaa";

console.log(my_string.value);
my_string.get_length();

//map

//set

//date

//math

//json


