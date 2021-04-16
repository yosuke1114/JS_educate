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

const merged_Obj_sp = {...obj,...objA};
console.log(merged_Obj_sp);


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
//spread
const sp_array = ["X",...array_includes]
console.log(sp_array);
//reduce
function reducer(total, value){
    return total += value;
}
const array1 =[1,10,100];

let reduce_test = (array1.reduce(reducer,0));
console.log(reduce_test);

//map
const  array_M =[1,2,3,4,5] ;
const newArray = array_M.map((currentValue, index, array) => {
    return currentValue * 10;
});
console.log(newArray);

//filter 
const  array_F =[1,2,3,4,5] ;
const newArray_F = array_F.filter((currentValue ) => {return currentValue % 2 == 0;} );
console.log(newArray_F);

//文字列操作_split
let string_A ="文・字・列・操・作".split("・");
console.log(string_A);
//文字列操作_join
console.log(string_A.join(","));
let string_B="A B  C   D    E"
console.log(string_B.split(/\s+/));


//文字列検索
const str = "ABC あいう DE えお";
const alphabetPattern = /[a-zA-Z]+/g;
const resultsWithG = str.match(alphabetPattern);
console.log(resultsWithG);
const resultsWithGALL = str.matchAll(alphabetPattern);
for (const match of resultsWithGALL) {
    // マッチした要素ごとの情報を含んでいる
    console.log(`match: "${match[0]}", index: ${match.index}, input: "${match.input}"`);
}
// "ECMAScript (数字+)"にマッチするが、欲しい文字列は数字の部分のみ
const pattern = /ECMAScript (\d+) (\d+)/;
// 返り値は0番目がマッチした全体、1番目がキャプチャの1番目というように対応している
// [マッチした全部の文字列, キャプチャの1番目, キャプチャの2番目 ....]
const [all, capture1, capture2] = "ECMAScript 6 4".match(pattern);
console.log(all); // => "ECMAScript 6"
console.log(capture1); // => "6"
console.log(capture2); 

const pattern_a = /ES(\d+)/g;
// iteratorを返す
const matchesIterator = "ES2015、ES2016、ES2017".matchAll(pattern_a);
console.log(matchesIterator);
for (const match of matchesIterator) {
    // マッチした要素ごとの情報を含んでいる
    // 0番目はマッチした文字列全体、1番目がキャプチャの1番目である数字
    console.log(`match: "${match[0]}", capture1: ${match[1]}, index: ${match.index}, input: "${match.input}"`);
}
//exec
const alphabetsPattern = /[a-zA-Z]+/g;
let matches;
while (matches = alphabetsPattern.exec(str)) {
    // `RegExp#exec`メソッドの返り値は`index`プロパティなどを含む特殊な配列
    console.log(`match: ${matches[0]}, index: ${matches.index}, lastIndex: ${alphabetsPattern.lastIndex}`);
}

//正規表現
const A_pattern = /A+/;
const a_pattern = /a+/;
console.log(A_pattern.exec(str));
console.log((str.search(A_pattern)));
console.log((str.match(A_pattern)));

const strLC = str.toLowerCase();
console.log(strLC);
console.log(a_pattern.exec(strLC));


console.trace();
console.error();


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


console.log(listAllProperties(strLC) ); 