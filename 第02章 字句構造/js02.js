"use strict";

js2_1();

//////////////////////////////////////////////////////////////////////////////////////
// 2.1 JavaScriptプログラムのテキスト
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptは大文字小文字を区別する
// キーワード、変数、関数名、識別子で大文字と小文字は厳密に区別される
// whileキーワード WhileやWHILEは無効
// online Online OnLine ONLINE はそれぞれ異なる変数となる
//
// JavaScriptはプログラム内のトークンを区切る空白を無視する
// 一般的に開業も無視される
// 例外でプログラム内に空白や改行を自由に挿入できる
// インデントを使用してコードを読みやすくすることも出来る
//
// 通常のスペース文字(\u0020)、タブ(\u0009)やASCII制御文字、Unicodeのさまざまな空白文字はJavaScriptでは空白として扱われる
// 改行文字、復帰文字、復帰文字と改行文字が連続する場合もすべて行末記号として扱われる

//////////////////////////////////////////////////////////////////////////////////////
// 2.2 コメント
//////////////////////////////////////////////////////////////////////////////////////

// 単一行コメント
/* 単一行コメント */

/*
 * 複数行コメント
 */

//////////////////////////////////////////////////////////////////////////////////////
// 2.3 リテラル
//////////////////////////////////////////////////////////////////////////////////////

// リテラル 直接記述するデータ値のこと
12             // 数値12
1.2            // 数値1.2
"hello world"  // テキスト文字列
'Hi'           // これも文字列
true           // 論理値
false          // もう1つの論理値
null           // オブジェクトがないことを表す

//////////////////////////////////////////////////////////////////////////////////////
// 2.4 識別子と予約語
//////////////////////////////////////////////////////////////////////////////////////

// 識別子 名前のこと
// JavaScriptでは識別子を使って定数や変数、プロパティ、関数、クラスを指定する
// 特定のループのラベルとして使うこともある
// 識別子の戦闘の文字はUnicode文字、アンダースコア(_)、ドル記号($)のいずれかである必要がある
// 識別子の先頭に数字は使えない
// 予約後は識別子として使えない

my_variable_name
v13
_dummy
$str

// 予約語
// from、set、targetは識別子として使用可能
// as const export get null target void
// async continue extends if of this while
// await debugger false import return throw with
// break default finally in set true yield
// case delete for instanceof static try
// catch do from let super typeof
// class else function new switch var

// 将来的な予約語
// 歴史的な理由でargumentsとevalは識別子として使えない
// enum implements interface package private protected public


//////////////////////////////////////////////////////////////////////////////////////
// 2.5 Unicode
//////////////////////////////////////////////////////////////////////////////////////

// 文字列やコメントにUnicode文字コードを使用可能
// 識別子には一般的にASCII文字と数字を使うのが一般的だが
// JavaScriptにはUnicode文字集合の文字や数字、表意文字を識別子に設定可能（絵文字は使用不可）
// 定数や変数に数学記号や英語以外の言語の名前も使用できる

const π = 3.14;
const sí = true;


//////////////////////////////////////////////////////////////////////////////////////
// 2.5.1 Unicodeエスケープシーケンス
//////////////////////////////////////////////////////////////////////////////////////

// ハードウェアやソフトウェアの都合によりすべてのコンピュータがすべてのUnicode文字を表示・入力ができる訳では無い
// JavaScriptではASCII文字を使ってUnicode文字を記述できるようにしている
// ASCII文字の並びをエスケープシーケンスと呼ぶ
// \uという文字から始まりその後4文字の16進数(A〜F、A〜fを使用)
// または中括弧に挟んで1〜6文字までの16進数を記述する
// JavaScriptの場合、文字列リテラルや正規表現リテラル、識別子中に記述できる
// ただしJavaScript言語のキーワードには記述できない
// é という文字のUnicodeエスケープシーケンスは\u00E9でこの文字を含む変数名は下記の3通りの方法で記述できる

let café = 1;     // Unicode文字を使って変数を定義する
caf\u00e9         // 1 エスケープシーケンスを使って変数をアクセス
caf\u{E9}         // 1 別の方法で記述する

// JavaScriptの古いバージョンでは16進数4文字形式のエスケープシーケンスしかサポートされていないため、絵文字など16ビットより長くなるUnicode符号位置をサポートするため中括弧を使う表記方法が導入された

console.log("\u{1F600}");   // 笑顔の絵文字を表示する

// コメントにUnicodeエスケープシーケンスを記述できる
// コメントは無視されるためUnicode文字として解釈されている訳ではないため


//////////////////////////////////////////////////////////////////////////////////////
// 2.5.1 Unicode正規化
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptで非ASCII文字を使う場合、Unicodeでは同じ文字を複数の方法で記述できるため注意
// é は Unicode文字で \u00E9 として表記
// 通常のASCII文字 eの後ろに鋭アクセント結合マーク \0301 を続ける表記もある
// どちらも画面上表記は同じだが、JavaScriptのデータとしては異なる文字として認識される

const café = 1;     // この定数の名前は caf\u{e9}
const café = 2;     // この定数の名前は異なっていて cafe\u{301}
café                //  1 この定数の値は1
café                //  2 見た目では区別できないこの変数は異なる値を持つ

// Unicode標準では全ての文字に対して推奨する表記方法が定義されている
// テキストを標準形式に正規化する手続きも規定されているが、JavaScriptではソースコードですでに正規化されていると想定している
// よってJavaScript側では正規化処理は行われない
// JavaScriptでUnicode文字を使う場合、エディタなどツールを使って正規化すること


//////////////////////////////////////////////////////////////////////////////////////
// 2.6 省略可能なセミコロン
//////////////////////////////////////////////////////////////////////////////////////

// セミコロン 文と文の区切り
// 文を別々の行に記述する場合、セミコロンは省略可能
// プログラムの最後、文の直後の閉じ中括弧（}）の場合も省略可能

// 下記は省略可能
a = 3;
b = 4;

// 下記は同じ行のためセミコロンが必要
a = 3; b = 4;


// すべての改行がセミコロンとして扱われるわけではない
// コードを解釈するときにセミコロンがないと解釈できないときだけ改行をセミコロンと解釈する
// JavaScriptでは次の行の先頭の文字（空白以外）が現在の文の続きと解釈しない場合に改行をセミコロンとして扱います

let a
a
  =
  3
console.log(a)

// 上記コードの場合、JavaScriptインタプリタは下記のように解釈する
// 最初の行の改行をJavaScriptはセミコロンとして処理する
// セミコロンなしでは let a a となり解釈できないため
// 2行目の文は a; と解釈されるが、JavaScriptインタプリタは解釈を次の行まで進めて a = 3;という文として解釈する
// 結果として2行目の改行はセミコロンとして処理されない

let a; a = 3; console.log(a);


// 2つの異なる文が改行で区切られている場合

let y = x + f
(a + b).toString()

// 上記コードの2行目のカッコは最初の行の「f」という関数を呼び出していると解釈される
// この場合、明示的にセミコロンを記述する必要がある

let y = x + f(a + b).toString();


// 一般的に( { / + - で始まる場合、直前の文の続きとして解釈される可能性がある(滅多にない)
// 下記のように文の先頭に念のためセミコロンを記述する人もいる
// 直前の文が修正されて末尾のセミコロンが削除されてしまっても問題なく動作するため

let x = 0;
;[x, x + 1, x + 2].forEach(console.log)   // 念のため;を記述し文が分割されないようにする


// 以上のJavaScriptインタプリタが改行をセミコロンとして処理する規則には例外が3つある
// 1つ目 return throw yield break continue 文に関するもの
// これらは単独でも記述し、識別子や式があとに続くこともある
// これらの文の直後に（途中に他の単語なし）改行があった場合JavaScriptインタプリタは改行を常にセミコロンとして処理する

return
true;

// 上記コードは下記のように解釈される

return; true;

// しかし期待通りのコードは下記の通り
// return break continue キーワードと直後の式には改行を挿入しないこと

return true;


// 2つ目 ++ -- 演算子に関するもの
// これらの演算子は式の前に記述することも式の後に記述することもできる
// これらの演算子を後置演算子として使いたい場合、式と同じ行に記述すること

// 3つ目 アロー関数に関するもの
// => 矢印はパラメータリストと同じ行に記述するようにすること

function js2_1() {

}