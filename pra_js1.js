// 変数宣言
let hensuu1 = 1;
var hensuu2 = "qq";
const hensuu3 = "const";
console.log(`変数宣言：${hensuu1},${hensuu2},${hensuu3}`);

//データ型
console.log(typeof ture);
console.log(typeof 123);
console.log(typeof "string");
console.log(typeof Symbol("しんぼる"));
console.log(typeof undefined);
console.log(typeof null); // => "object"
console.log(typeof ["配列"]); // => "object"
console.log(typeof { "key": "value" }); // => "object"
console.log(typeof function() {}); // => "function"
//オブジェクトリテラル
const keyZ = "constKey";
const obj = {
    key:"ob1",
    key1:"obj2",
    [keyZ]:"constobj",
    keyX:{
        subkey1:"sub1",
    },
}
console.log(obj.key);
//ブラケット記法
console.log(obj["key1"]);
//変数を使用してブラケット記法
let v1 = "key";
console.log(obj[v1]);
//オブジェクトへの追加
obj.key2 = "obj3";
console.log(obj["key2"]);
//
console.log(obj[keyZ]);
// ?.を使用-> プロパティが存在しないとき、TypeError でなくundefinedになる
console.log(obj?.keyX?.subkey1);
console.log(obj?.keyX?.subkey2);
//オブジェクトの参照方法
console.log(Object.keys(obj));//key を表示
console.log(Object.values(obj)); //value　を表示
console.log(Object.entries(obj));//key,valueの配列を返す
//foreach
const keys = Object.keys(obj);
keys.forEach(key => {console.log(key);});
const vals = Object.values(obj);
vals.forEach(val => {console.log(val);});

//objectのmerge
const objA = {
    "test1":123,
    "key":345,
}
const merged_Obj = Object.assign({},obj,objA);
console.log(merged_Obj);

//object の複製
const copied_Obj = Object.assign({},merged_Obj);
console.log(copied_Obj);


//if文

if (true){
    console.log("ここはtrue")
}
else{
    console.log("ここはfalse")
}
//三項演算子
console.log(true?"ok":"no");

//while
let num=3
while(num<3){

    console.log(`while回数：${num}`)
    num += 1;
}
//do-while

 num =3;
do {
    console.log(`do-while回数：${num}`)
    num += 1;
}while(num <3);

//for
for(let i = 0; i<10; i++){
    console.log(`for回数:${i}`);
} 


//配列
//配列内配列
let arraryInarray = [
    [1,2],
    [3,4],
]
arraryInarray.forEach(
    ar => {
        //return console.log(ar);
        ar.forEach(
            a => {
                return console.log(a);
            }
        );
    }
);

//配列 OR Object
console.log(Array.isArray(arraryInarray));
console.log(Array.isArray(objA));

//someを使用した
let array = [1,11,21];
function isEven(num) {
    return num % 2 === 0;
}
console.log(array.some(isEven));
//配列操作
let array2 = []; 
let inputarray = [10,13,15,16];
for (const input of inputarray){
    if(input % 2 == 0){

        array2.push(input);
    }
}
console.log(`${array2}`);
//indexOf 配列ない検索インデックスを戻り値に
console.log(inputarray.indexOf(15));
//配列をスライス
console.log(inputarray.slice(1,3));

// colorプロパティを持つオブジェクトの配列
const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];
// `color`プロパティが"blue"のオブジェクトのインデックスを取得
const indexOfBlue = colors.findIndex((obj) => {
    console.log(obj);
    return obj.color === "blue";
});
console.log(indexOfBlue); // => 2
console.log(colors[indexOfBlue]); // => { "color": "blue" }
console.log(Object.keys(colors[indexOfBlue])); // => { "blue" }
console.log(Object.values(colors[indexOfBlue])); // => { "blue" }
//includesを使うほうがいい
const array_includes =["red","blue","yellow"];
console.log(array_includes.includes("blue"));//true

//push ,pop , concat ,unshift,shift 
console.log(array_includes.push("black")); //push
console.log(array_includes)
console.log(array_includes.pop("black"));//pop
console.log(array_includes);
console.log(array_includes.concat(colors));//concat
console.log(array_includes);
console.log(array_includes.unshift("UNSHIFT"));//unshift
console.log(array_includes);
console.log(array_includes.shift());//shift
console.log(array_includes);
//spred
const sp_array = ["X",...array_includes]
console.log(sp_array);
//
function reducer(total, value){
    return total += value;
}
const array1 =[1,10,100];

let reduce_test = (array1.reduce(reducer,0));
console.log(reduce_test);


//文字列操作
let string_A ="文・字・列・操・作".split("・");
console.log(string_A);
