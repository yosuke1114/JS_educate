// console.log("Hello World!");
// //コンソールにコマンドライン引数を出力する
// console.log(process.argv);

// const myModule = require("./my-module");
// console.log(myModule.foo);

// // commanderモジュールをprogramとしてインポートする
// const program = require("commander");
// // コマンドライン引数をcommanderでパースする
// program.parse(process.argv);

// // ファイルパスをprogram.args配列から取り出す
// const filePath = program.args[0];
// console.log(filePath);

const program = require("commander");
// fsモジュールをfsオブジェクトとしてインポートする
const fs = require("fs");

// コマンドライン引数からファイルパスを取得する
program.parse(process.argv);
const filePath = program.args[0];

// ファイルをUTF-8として非同期で読み込む
fs.readFile(filePath, { encoding: "utf8"},(err, file) => {
    console.log(file);
})


