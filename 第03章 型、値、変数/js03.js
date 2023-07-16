"use strict";

js3_1();

//////////////////////////////////////////////////////////////////////////////////////
// 3.1 概要と定義
//////////////////////////////////////////////////////////////////////////////////////

// 型は大きく分けて基本型とオブジェクト型がある
// 基本型には数値型、文字列、論理型
// nullとundefinedは基本型の値だが数値でも文字列でも論理値でもない特殊な型
// Symbolという特殊型はES6から追加された
// 上記以外の値がオブジェクトでプロパティの集合体
// 書くプロパティは名前と値を持ち、数値、文字列など基本型の値やオブジェクトを保持できる
// 特殊なオブジェクトとしてグローバルオブジェクトがある
// 配列という特殊なオブジェクトも定義されている
// 配列は通常のオブジェクトとは異なる振る舞いもする
// Setオブジェクトは値の集合を表す
// Mapオブジェクトはキーと値のペアを保持する
// バイトなどバイナリデータの配列を扱いやすい型付き配列が用意されている
// RegExp型はテキストパターンを表す
// このテキストパターンを使って文字列に対してマッチング、検索、置換の操作が行える
// Date型は日付と時刻を表し、基本的な日付の計算が出来る
// ErrorとErrorのサブタイプはJavaScriptコードを実行したときに発生したエラーを表す
// JavaScriptでは関数やクラスは単なる構文ではなく、JavaScriptプログラムから関数やクラスを操作できるようになっている
// 基本型値ではないほかの値と同じように、関数やクラスも特別なオブジェクトである
// JavaScriptインタプリタは自動的にガベージコレクションを行いメモリを管理する
// プログラマはオブジェクトなど破棄やメモリ解放について悩む必要はない
// ある値がプログラム中から参照できなくなったときにインタプリタはその値がもう使われないと判断し自動的にメモリを開放します
// つまり必要以上にメモリを使い続けたくない場合には必要ではなくなった値を参照できなくなるようにプログラムを記述する必要がある
// JavaScriptはオブジェクト指向プログラミングスタイルに対応している
// オブジェクト指向とはグローバルに定義された関数を使ってさまざまな型の値を処理するのではなく、その型で定義されたメソッドを使って値を処理するような考え方
// 例えば配列aの要素をソートするにはsort()関数に配列aを引数として渡すのではなく次のように配列aのsort()メソッドを呼び出すのがオブジェクト指向の考え方

a.sort();     // sort(a)のオブジェクト指向的な記述


// JavaScriptの場合メソッドが持てるのはオブジェクトだけである
// 数値や文字列、論理値、Symbol値もメソッドを持つような振る舞いをする
// JavaScriptではnullとundefinedだけはメソッドを呼び出すことができない

// JavaScriptのオブジェクト型は可変型である
// 基本型は不変型である
// オブジェクトのプロパティや配列の要素の値はJavaScriptプログラムから変更可能
// 一方で数値、論理型、Symbol値、null、undefinedは変更することができない
// 例えば、数値の値を変更すること自体意味がない
// 文字列は文字の配列として考えられるので、値を変更できる型と思うかもしれないが文字列は不変型である
// 文字列に対してインデックスを指定して文字を参照可能だが、既存の文字列を変更する方法は用意されていない

// JavaScriptは必要に応じてある方から別の型へ自動変換される
// ==等値演算子では型変換が行われる
// ===同値演算子は型変換が行われないためこちらを使うことが推奨されている

// 定数 const
// 変数 let
// 変数 var は古い
// 定数と変数を宣言するときに代入される値の型を指定しない


//////////////////////////////////////////////////////////////////////////////////////
// 3.2 数値
//////////////////////////////////////////////////////////////////////////////////////

// 数値型は整数とおおよその実数を表す
// JavaScriptではIEEE754標準で規定された64bit浮動小数点形式で数値を表す
// 最大値 ± 1.7976931348623157 × 10^308
// 最小値 ± 5 × 10^−324

// 数値形式は −9,007,199,254,740,992(−2^53) ～ 9,007,199,254,740,992(2^53) までの整数は正確に表せる
// この範囲外の整数を使う場合、下位の制度は損なわれる

// 直接数字を記述する場合、数値リテラルという
// 数値リテラルの前にマイナス記号「-」を記述すると符号を反転できる


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.1 整数リテラル
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptプログラム中では10進整数は数字を続けて記述できる

0
3
10000000

// 整数を16進数で記述することもできる
// 16進リテラルは先頭が 0x または 0X その後に一連の16進数値が続く
// 16進数値は0から9までの数字とaからf(またはAからF)までの英字
// 英字は10進の10から15に対応

0xff          // 255: (15*16 + 15)
0xBADCAFE     // 195939070

// ES6以降は2進数と8進数も指定可能
// 2進数 0b または 0B
// 8進数 0o または 0O

0b10101       // 21 : (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
0o377         // 255: (3*64 + 7*8 + 7*1)


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.2 浮動小数点リテラル
//////////////////////////////////////////////////////////////////////////////////////

// JavaScript内では浮動小数点リテラルを使って実数を記述する
// 浮動小数点リテラルは小数部や指数も使用可能
// 浮動小数点リテラルは先頭が整数部、次に小数点、その次に小数部という形式
// 指数は先頭が英文字 e または E 、その次に + または - （あってもなくてもよい）、その次に整数指数という形式 小数部を後ろに記述する
// 浮動小数点リテラルの値は選考する整数部と小数部の数値に10を指数部で指定された回数だけ掛けた値になる

[10進数値][.10進数値][(E | e)[(+| -)]10進数値]

// 実例

3.14
2345.6789
.333333333333333333
6.02e23             // 6.02 × 10²³
1.4738223E-32       // 1.4738223 × 10-³²


// 数値リテラルの区切り文字
// 数値リテラル中ではアンダースコアが使用可能
// 長い数値リテラルをアンダースコアで区切って読みやすくできる

let billion = 1_000_000_000;    // アンダースコアで3 桁ごとに区切る
let bytes = 0x89_AB_CD_EF;      // バイト単位で区切る
let bits = 0b0001_1101_0111;    // ニブル単位で区切る
let fraction = 0.123_456_789;   // 小数部でも使用できる


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.3 JavaScriptでの算術演算
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptでの基本的な算術演算子 + - * / %
// ES6から ** べき乗も使用可能

// 算術演算子以外にも複雑な数学演算を行う関数や定数がたくさん用意されている
// 関数と定数は Math という名前のオブジェクトのプロパティとして定義されている

Math.pow(2, 53)              // 9007199254740992: 2 の 53乗
Math.round(.6)               // 1.0: 最近傍の整数に変換
Math.ceil(.6)                // 1.0: 整数に切り上げ
Math.floor(.6)               // 0.0: 整数に切り捨て
Math.abs(-5)                 // 5: 絶対値
Math.max(x, y, z)            // 引数の中から最大値を返す
Math.min(x, y, z)            // 引数の中から最小値を返す
Math.random()                // 0 以上 1.0 未満の擬似乱数を返す
Math.PI                      // π: 円周率
Math.E                       // e: 自然対数の底
Math.sqrt(3)                 // 3**0.5: 3の平方根
Math.pow(3, 1 / 3)           // 3**(1/3): 3の立方根
Math.sin(0)                  // 三角関数 Math.cos やMath.atan なども
Math.log(10)                 // 10 の自然対数
Math.log(100) / Math.LN10    // 底が 10 の 100 の対数（100 の常用対数）
Math.log(512) / Math.LN2     // 底が 2 の512 の対数
Math.exp(3)                  // Math.E の3 乗

// ES6 から下記の関数も使用可能

Math.cbrt(27)                // 3: 立方根
Math.hypot(3, 4)             // 5: 引数を自乗したものの総和の平方根
Math.log10(100)              // 2: 常用対数
Math.log2(1024)              // 10: 底が 2 の対数
Math.log1p(x)                // (1+x) の自然対数 x が小さい値の場合、こちらが正確
Math.expm1(x)                // Math.exp(x)-1; Math.log1p() の逆関数
Math.sign(x)                 // 引数が0より小さいで0 0より大きいで-1 0、1を返す
Math.imul(2, 3)              // 6: 32 ビット整数の高速乗算
Math.clz32(0xf)              // 28: 32 ビットバイナリ表現での先頭の0 の数
Math.trunc(3.9)              // 3: 小数部を削除して整数に変換する
Math.fround(x)               // 最近傍の32 ビット浮動小数点を返す
Math.sinh(x)                 // 双曲線正弦関数 Math.cosh()、Math.tanh() も
Math.asinh(x)                // 逆双曲線正弦関数 Math.acosh()、Math.atanh() も

// JavaScriptでは算術演算中にオーバーフローやアンダーフローが発生した場合や、0除算を行った場合でもエラーが発生しない
// 算術演算の結果が表現可能な最大値より大きくなった場合（オーバーフロー）、算術演算の結果は無限大（Infinity）という特殊な値になる
// 同様にある負数の絶対値が表現可能な負数の絶対値の最大値を超えた場合、演算結果は特殊な無限大負値（-Infinity）になる
// 無限大にどんな値を加算、減算、乗算、除算しても無限大のまま（符号は変わる場合はある）

// 算術演算の結果の絶対値が表現可能な最小よりも0に近づいた場合、アンダーフローが発生する
// この場合、JavaScriptは0を返す
// 負の値に対してアンダーフローが発生した場合、JavaScriptは「負の0」という特殊な値を返す
// 「負の0」は通常の0と区別がつかないので気にする必要はない

// 0除算もJavaScriptではエラーにならない
// 無限大や負の無限大が返されるだけであるが例外がある
// それは0を0で割ったときで計算結果が不定となり、特殊な値NaN（not-a-number）になる
// 無限大を無限大で割った場合や、負数の平方根を求めた場合、数値に変換できないオペランドに対して算術演算を行った場合にもNaNという結果になる

// JavaScriptにはInfinityとNaNというグローバル変数が予め定義されている
// それぞれ正の無限大と不定値（not-a-number）が格納されている
// Numberオブジェクトにも同様のプロパティが存在する

Infinity                      // 表現できないくらい大きな正数（無限大）
Number.POSITIVE_INFINITY      // 同じく無限大
1 / 0                         // Infinity
Number.MAX_VALUE * 2          // Infinity; オーバーフローが発生
-Infinity                     // 絶対値が表現できないくらい大きな負数（負の無限大）
Number.NEGATIVE_INFINITY      // 同じく負の無限大
-1 / 0                        // -Infinity
-Number.MAX_VALUE * 2         // -Infinity

NaN                           // 不定値
Number.NaN                    // 同じ値の別の表記方法
0 / 0                         // NaN
Infinity / Infinity           // NaN

Number.MIN_VALUE / 2          // 0: アンダーフローが発生
-Number.MIN_VALUE / 2         // -0: 負の0
-1 / Infinity                 // -0: これも負の0
-0

// ES6 のNumber には、以下のようなプロパティも定義されている。

Number.parseInt()             // グローバルなparseInt()関数と同じ
Number.parseFloat()           // グローバルなparseFloat()関数と同じ
Number.isNaN(x)               // xがNaN値かどうかを返す
Number.isFinite(x)            // xが有限な数値かどうかを返す
Number.isInteger(x)           // xが整数かどうかを返す
Number.isSafeInteger(x)       // xが -(2**53) から 2**53 までの整数かどうかを返す
Number.MIN_SAFE_INTEGER       // -( 2 ** 53 -1)
Number.MAX_SAFE_INTEGER       // 2 ** 53 -1
Number.EPSILON                // 2 ** -52: 数値間の差異の中で、最小の差異

// javaScriptのNaN値にはどの値と比較しても等しいと判定されない
// NaN値同士でも等しく判定されない
// x === NaN と記述してもNaN値であるか判定できない
// x != x と記述するか、 Number.isNaN(x) を使う（この式はxがNaNのときにtrueになる）

// グローバル関数の isNaN() は Number.isNaN() と同じ動きをする
// 引数がNaN値か引数が数値に変換できない場合にこの関数はtrueを返す
// 同様に Number.isFinite() は引数がNaN、無限大、負の無限大ではない数値の場合trueを返す
// グローバル関数の isFinite() 関数は引数が有限の数値か、有限の数値に変換出来る場合にtrueを返す

// 負の0は少し特徴がある
// 負の0は通常の0と等しいと判定される
// JavaScriptの同値演算子でも等しいと判定されるため、事実上区別できない
// 除算を使ったときのみ違いが生じる

let zero = 0;         // 通常の0
let negz = -0;        // 負の0
zero === negz         // true: 通常の0 と負の0 は等しい
1 / zero === 1 / negz // false: 無限大と負の無限大は等しくない


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.4 2進浮動小数点と丸め誤差
//////////////////////////////////////////////////////////////////////////////////////

// 実数は無限に存在する
// JavaScriptの浮動小数点形式では有限個（正確には18,437,736,874,454,810,627 個）しか表現できない
// つまりJavaScriptで実数を処理する場合、殆どの場合で実数を近似表現することになる

// JavaScriptを始めとする言語はIEEE-754浮動小数点表現形式は2進数表記
// このため 1/2 1/8 1/ 1024 などの小数は正確表現できる
// しかし金融計算など 1/10 1/100 など10進数は2進浮動小数点表現形式では0.1のような値も正確に表現できない

// JavaScriptの数値は制度が重ブウに高いので0.1をほぼ近似表現が出来る
// しかし数値を正確に表現できないため問題が生じる場合がある

let x = .3 - .2;        // 30セントから20セントを減算する
let y = .2 - .2;        // 20セントから10セントを減算する
x === y                 // false: 2つの値は同じではない
x === .1                // false: .3-.2は.1と等しくない

// 丸め誤差のため、.3と.2の差分の近似表現と.2と.1の差分の近似表現には同じ値にならない
// この問題はJavaScript特有の問題ではないため、2進浮動小数点数値を扱う言語なら同じ問題が発生する
// xとyの値はほぼ同じで両方とも正しい値に非常に近い値になっている
// 計算結果が問題となる場合はほぼないが、等しいかどうかを比較したときにだけ問題がある

// 浮動小数点近似がプログラム上問題となる場合は、スケールを調整して整数を使うようにすること
// 上記例だとドル単位で計算する代わりにセント単位で計算するようにする


//////////////////////////////////////////////////////////////////////////////////////
// 3.2.5 BigIntによる任意精度整数
//////////////////////////////////////////////////////////////////////////////////////

// BigInt ES2020で追加されたJavaScriptの最新機能の1つに新しい数値型
// BigIntは値が整数である数値型である
// 64ビット整数を表せるようにするため追加された
// 64ビット整数は他のプログラミング言語やAPIで使用されている型であるためJavaScriptでも使えるようにしなければならなかった
// 64ビット整数だけでなく必要であればBigInt値には数千桁や数百万桁の数字を格納可能
// ただしBigIntの実装はタイミング攻撃に耐性がないため暗号に使うのは避ける

// BigIntリテラルは数字文字列の最後に小文字のnを記述する
// 数字文字列の前にも記述しない場合は10進数になる
// 先頭に 0b 0o 0x を記述するとそれぞれ 2進数 8進数 16進数になる

1234n                 // それほど大きくないBigIntリテラル
0b111111n             // 2進数のBigIntリテラル
0o7777n               // 8進数のBigIntリテラル
0x8000000000000000n   // 2n**63n: 64ビット整数


// test
// test


function js3_1() {

}