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
const md2html = require("./md2html");
//markedモジュールをmarkedオブジェクトとしてインポート
//const marked = require("marked");

// gfmオプションを定義する
program.option("--gfm", "GFMを有効にする");

// コマンドライン引数からファイルパスを取得する
program.parse(process.argv);
const filePath = program.args[0];

// コマンドライン引数のオプションを取得し、デフォルトのオプションを上書きする
const cliOptions = {
    gfm: false,
    ...program.opts(),
};

// ファイルをUTF-8として非同期で読み込む
fs.readFile(filePath, { encoding: "utf8"},(err, file) => {
   if (err) {
       console.error(err.message);
       process.exit(1);
       return;
   }
//    //gfmオプションを無効にする
//    const html = marked(file, {
//        gfm: cliOptions.gfm,
//    });
//     console.log(html);
    const html = md2html(file, cliOptions);
    console.log(html);
});


