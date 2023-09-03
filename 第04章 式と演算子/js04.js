"use strict";

//////////////////////////////////////////////////////////////////////////////////////
// 4.1 単項式
//////////////////////////////////////////////////////////////////////////////////////

// 最も単項な式は他の式を含まない式である
// このような式を単項式と呼ぶ
// JavaScriptでの単項式としてはリテラル（定数値）、JavaScriptのキーワード、変数参照がある

// リテラルとしてはプログラム中に直接埋め込まれた定数値である

1.23        // 数値リテラル
"hello"     // 文字列リテラル
/pattern/   // 正規表現リテラル

// JavaScriptでの数値リテラルは3.2章で解説済み
// 文字列リテラルについては3.3章で解説済み
// 正規表現リテラルについては3.3.5章で概要を解説済み
// 詳細については11.3章で解説する

// JavaScriptの予約語には単項式として使えるものがある

true        // 論理値のtrueの値に評価される
false       // 論理値のfalseの値に評価される
null        // null値に評価される
this        // 「現在の」オブジェクトに評価される

// true, false, nullについては3.4章と3.5章で解説済み
// 他のキーワードと異なり、thisは定数ではない
// プログラム中のさまざまな場所で、さまざまな値に評価される
// thisキーワードはオブジェクト指向プログラミングでよく使われるキーワードである
// メソッド本体でthisを使えば。メソッドが呼び出されたオブジェクトを参照できる
// thisについて詳しくは4.5章、8章(8.2.2章)、9章で解説する

// 最後に紹介する単項式は変数や定数、グローバルオブジェクトのプロパティ参照である

i           // 変数iの値に評価される
sum         // 変数sumの値に評価される
undefined   // グローバルオブジェクトの「undefined」プロパティの値に評価される

// プログラム中に識別子が現れた場合、JavaScriptは変数または定数、グローバルオブジェクトのプロパティと認識し、値を検索する
// 該当する名前の変数が存在しない場合、存在しない変数を評価するとReferenceErrorがスローされる

//////////////////////////////////////////////////////////////////////////////////////
// 4.2 オブジェクトと配列の初期化子
//////////////////////////////////////////////////////////////////////////////////////

// オブジェクトと配列の初期化子とは、新たに生成されるオブジェクトや配列の値となる式のことである
// このような初期化子は「オブジェクトリテラル」や「配列リテラル」と呼ばれることがある
// しかし、本当のリテラルとは異なり単項式ではない
// なぜならプロパティの値や要素の値を指定するために複数の式が含まれるからである
// 配列の初期化子のほうがいくぶん単純であるためこちらから解説する

// 配列初期化子とは、カンマで区切った式のリストを角括弧で囲んだものである
// 配列の初期化子の値は、新たに生成された配列になる
// この配列の要素は、カンマで区切られた式の値に初期化される

[]          // 空の配列 角括弧中に式がない場合、要素がないことを意味する
[1+2, 3+4]  // 要素を2つ持つ配列 1つ目の要素が3 2つ目の要素が7

// 配列初期化子中の要素として、配列初期化子を記述しても構わない
// この場合、入れ子になった配列が生成される

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// 配列初期化子が評価されるたびに、配列初期化子中の要素の式も評価される
// つまり、配列初期化子の値は、評価されるたびに異なる可能性がある

// 未定義の要素を配列リテラル中に含めたい場合、カンマの値を省略する
// 例えば、次の例は要素を5つもつが、3つの要素は未定義の要素になる

let sparseArray = [1,,,,5];

// 配列初期化子の最後の式の後にカンマを1つ記述しても構わない
// この場合、未定義要素は作成されない
// ただし、最後の式より後のインデックスに対して配列アクセスを行うと、未定義値と評価される

// オブジェクト初期化子は、配列初期化子と同じような書式だが、角括弧の代わりに中括弧を使い、
// 各式の前にはプロパティ名とコロンを記述する

let p = {x: 2.3, y: -1.2};     // 2つプロパティを持つオブジェクト
let q = {};                     // プロパティを持たない空のオブジェクト
q.x = 2.3; q.y = -1.2;          // これでqはpと同じプロパティを持つ

// ES6ではオブジェクトリテラルにもっと高機能な構文が使える
// 詳しくは6.10章で解説
// オブジェクトリテラルは次のように入れ子にできる

let rectangle = {
    upperLeft: {x: 2, y: 2},
    lowerRight: {x: 4, y: 5}
};

// オブジェクト初期化子（オブジェクトリテラル）と配列初期化子（配列リテラル）については6章、7章で解説

//////////////////////////////////////////////////////////////////////////////////////
// 4.3 関数定義式
//////////////////////////////////////////////////////////////////////////////////////

// 関数定義式は、JavaScriptの関数を定義する
// この式の値は新たに定義される関数になる
// オブジェクト初期化子が「オブジェクトリテラル」と呼ばれるのと同じように、関数定義式も「関数リテラル」と呼ぶ
// 関数定義式は、一般的にはfunctionキーワードに続いて、カンマで区切って0個以上の識別子（パラメータ名）を丸括弧中に記述し、
// 中括弧中にJavaScriptコードブロック（関数本体）を記述する

// この関数は引数として渡された値の自乗を返す
let square = function(x) {
    return x * x;
};

// 関数定義式には無名を記述できる
// 関数は、関数定義式のかわりに、関数分を使って定義することもできる
// また、ES6以降では「アロー関数」というコンパクトな構文を使うこともできる
// 関数定義の詳細については8章で解説

//////////////////////////////////////////////////////////////////////////////////////
// 4.4 プロパティアクセス式
//////////////////////////////////////////////////////////////////////////////////////

// プロパティアクセス式は、オブジェクトプロパティの値、または配列の要素の値に評価される
// JavaScriptにはプロパティ用に2つの構文が用意されている

式.識別子
式[式]

// 前者の方法では、式の後にピリオドと識別子を記述している
// 式がオブジェクトを指定し、識別子でアクセスしたいプロパティの名前を指定する
// 後者の方法では、最初の式（オブジェクトまたは配列になる）の後に、角括弧で囲んだ式が続く
// この2番目の式で、アクセスしたいプロパティ名や、アクセスしたい配列要素のインデックスを指定する

let o = {x: 2, y: {z: 3}};      // 例となるオブジェクト
let a = [o, 4, [5, 6]];         // オブジェクトを含む配列の例
o.x                             // 1: 式oのプロパティxの値
o.y.z                           // 3: 式0.yのプロパティzの値
o["x"]                          // 1: オブジェクトoのプロパティxの値
a[1]                            // 4: 式aのインデックス1の要素の値
a[2]["1"]                       // 6: 式a[2]のインデックス1の要素の値
a[0].x                          // 1: 式a[0]のプロパティxの値

// どちらのプロパティアクセス式を使っても、.や[の前の式がまず評価される
// 評価した値がnullやundefinedになった場合、TypeErrorがスローされる
// この2つの値はJavaScriptでプロパティを持てないからである
// オブジェクト式の後に、ドットと識別子が続く場合、識別子で指定されたプロパティ名が検索され、この値がプロパティアクセス式全体の値となる
// オブジェクト式の後に角括弧が続く場合、2番目の式を評価し文字列に変換する
// この文字列と同じ名前のプロパティの値が、プロパティアクセス式全体の値になる
// どちらの場合も、指定された名前のプロパティが存在しない場合は、プロパティアクセス式の値はundefinedになる

// 2つの方法を比べると、.識別子構文の方が簡単である
// ただし、この形式が使えるのは、アクセスしたいプロパティの名前が識別子として使え、またプロパティを書くときにその名前を知っているときだけである
// 例えば、プロパティ名が予約語であったり、空白や句読点文字を含んでいたりする場合や、
// （配列などで）数値の場合は、角括弧を使って記述しなければならない
// また、プロパティ名が静的に決まるのではなく、計算結果できまるような場合にも角括弧が使われる（6.3.1章参照）
// オブジェクトとプロパティについては6章で解説
// 配列と要素については7章で解説

//////////////////////////////////////////////////////////////////////////////////////
// 4.4.1 条件付きプロパティアクセス
//////////////////////////////////////////////////////////////////////////////////////

// ES2020では次に示すようなプロパティアクセス式が新たに2種類追加された

式?.識別子
式?.[式]

// JavaScriptではnullとundefinedだけがプロパティを持たない値である
// .や[]という通常のプロパティアクセス式を使った場合、左側の式がnullやundefinedに評価された場合、TypeErrorがスローされてしまう
// ?.や?.[]構文を使うとこのようなエラーを防ぐことができる

// a?.bを例にとって説明する
// もしもaがnullまたはundefinedの場合、この式はundefinedと評価され、プロパティbをアクセスしない
// もしもaが何らかの値を保つ場合、a?.bはa.bを評価したのと同じ値に評価される
// （もしも、aがbという名前のプロパティを持たない場合、この値はundefinedになる）

// この形式のプロパティアクセス式は「オプショナルチェイニング」と呼ばれることもある
// 次のように長く連結（チェイン）されたプロパティアクセス式で使えるものだからである

let a = { b: null };
a.b?.c.d                // undefined

// aはオブジェクトなので、a.bは正当なプロパティアクセス式である
// しかし、a.bの値はnullなので、a.b.cはTypeErrorをスローする
// .の代わりに?.を使うことでTypeErrorがスローされないようになり、a.b?.cはundefinedと評価される
// また、(a.b?.c).dという式は、undefined値のプロパティにアクセスすることになるので、TypeErrorがスローされる
// ただし、丸括弧をつけないでa.b?.c.dと記述した場合は、単純にundefinedと評価され、TypeErrorはスローされない
// これが「オプショナルチェイニング」の非常に重要な機能である
// ?.の左辺にある式がnullまたはundefinedの場合、式全体が即座にundefinedと評価される
// 以降のプロパティアクセスは行われない

// もちろんa.bがオブジェクトでこのオブジェクトがcという名前のプロパティを持っていない場合、a.b?.c.dはTypeErrorをスローする
// この場合は、次のように条件付きプロパティアクセスをもう1つ追加する

let a = { b: {} };
a.b?.c?.d           // undefined

// []の代わりに?.[]と記述しても条件付きプロパティアクセスが行われる
// a?.[b][c]という式では、aの値がnullまたはundefinedの場合、式全体が即座にundefinedと評価される
// この場合、bやcという式は評価されない
// どちらかの式が副作用を持つような式の場合も、その副作用は実行されない

let a;          // この変数を初期化し忘れている
let index = 0;
try {
    a[index++]; // TypeErrorをスローする
} catch(e) {
    index       // 1: TypeErrorがスローされる前にインクリメントが実行される
}
a?.[index++]    // undefined: aがundefinedなので
index           // 1: ?.[]は即座に値を評価するのでインクリメントは行われない
a[index++]      // !TypeError: 未定義値にインデックスは指定できない

// 条件付きプロパティアクセス(?.と?.[])はJavaScriptの最新機能の1つである
// 2020年初頭段階では、この構文は主要ブラウザの最新バージョンまたはβバージョンでサポートされている

//////////////////////////////////////////////////////////////////////////////////////
// 4.5 呼び出し式
//////////////////////////////////////////////////////////////////////////////////////

// 呼び出し式は、JavaScriptにおいて関数やメソッドを呼び出す（実行する）ための構文である
// まず、呼び出される関数を指定するための関数式を記述する
// この関数式の後に、開き丸括弧を記述し、カンマで区切って0個以上の引数式を記述し、最後に閉じ丸括弧を記述する

f(0)                // fは関数式、0は引数式
Math.max(x, y, z)   // Math.maxは関数、 x、ｙ，ｚは引数
a.sort()            // a.sortは関数、引数はない

// 引き出し式が評価されるときは、まず関数式が評価され、続いて引数式が評価され、引数の値のリストが生成される
// 関数式の値が関数にならない場合、TypeErrorがスローされる
// 続いて、引数値が関数定義時に指定されたパラメータに代入され、関数本体が実行される
// 関数は、return文を使うことで値を返すことができる
// この値が呼び出し式の値となる
// return文がない場合には、呼び出し式の値はundefinedになる
// 関数呼び出しの詳細については8章で解説する
// 8章では引数式の数が関数定義時のパラメータの数と一致しなかった場合の挙動についても解説する

// 呼び出し式は一対の丸括弧と、引き丸括弧の前の式から構成される
// この式がプロパティアクセス式の場合には、メソッド呼び出しになる
// メソッド呼び出しの場合は、プロパティアクセスの対象となるオブジェクトや配列がthisキーワードの値となる
// そして、このthisの値を関数本体で利用できるようになる
// このような構造により、オブジェクト指向プログラミング風に関数（オブジェクト指向には「メソッド」）から、
// オブジェクトを操作できるようになる
// 詳しくは9章で解説する

//////////////////////////////////////////////////////////////////////////////////////
// 4.5.1 条件付き呼び出し
//////////////////////////////////////////////////////////////////////////////////////

// ES2020では()の代わりに?.()を使って関数を呼び出すこともできる
// 通常の関数呼び出しでは、丸括弧の左側がnullまたはundefined、関数ではない値であった場合、TypeErrorがスローされる
// ?.()呼び出し構文を使った場合、?.の左側の式がnullやundefinedに評価された場合、関数呼び出し式全体がundefinedと評価される
// 例外はスローされない

// 配列オブジェクトのsort()メソッドには、オプションの引数として関数を渡すことができる
// この関数で、配列要素をソートする順序を定義する
// ES2020より前の使用では、sort()のように関数オプションの引数として受け取るメソッドを記述したい場合は、次の例のように、
// if文を使って関数引数が定義されているかどうかを確認した後に、if文の本体で関数を呼び出すようにしていた

function square(x, log) {       // 第2引数はオプションの関数

    if(log) {                   // オプションの関数が渡されていれば
        log(x);                 // その関数を呼び出す
    }
    return x * x;               // 引数の自乗を返す

}

// しかし、ES2020の条件付き呼び出し構文を使えば、実際に呼びさせる値がある場合にのみ呼び出しが行われるので、
// ?.()を使って単純に関数を呼び出すだけで住む

function square(x, log) {       // 第2引数はオプションの関数

    log?.(x);                   // 関数が渡されていればその関数を呼び出す
    return x * x;               // 引数の自乗を返す

}

// なお、?.()が確認するのは左側の式がnullまたはundefinedかどうかだけである
// 関数かどうかは確認しない
// 先ほどの例のsquare()関数も引数として数値を2つ渡せば例外がスローされる

// ?.()を使った関数呼び出しは条件付きプロパティアクセス式(4.4.1章)と同じような動きをする
// ?.の左側がnullまたはundefinedの場合、丸括弧の中の引数式はすべて消化されない

let f = null, x = 0;
 try {
    f(x++);         // fはnullなのでTypeErrorをスローする
 } catch(e) {
    x               // 1: 例外がスローされる前にxがインクリメントされる
 }
 f?.(x++)           // undefined: fがnullの場合、例外はスローされない
 x                  // 1: 引数は評価されないので、インクリメントは行われない

// 条件付き呼び出し式は、関数と同じようにメソッドを使える
// ただしメソッド呼び出しについてはプロパティアクセスを伴うため、次の式の違いを理解すること

o.m()               // 通常のプロパティアクセス、通常の呼び出し
o?.m()              // 条件付きプロパティアクセス、通常の呼び出し
o.m?.()             // 通常のプロパティアクセス、条件付き呼び出し

// 最初の式では、oはプロパティmを持つオブジェクトでなければならない
// また、プロパティmは関数でなければならない
// 2つ目の式は、oがnullやundefinedの場合、この式全体はundefinedに評価される
// しかし、oが何らかの値を持つ場合、プロパティmの値は関数でなければならない
// そして、3つ目の式ではoはnullやundefinedであってはならない
// oがプロパティmを持たなかったり、プロパティmの値がnullであったりした場合、この式全体はundefinedに評価される

// ?.()を使った条件付き呼び出しはJavaScriptの最新機能の1つである
// 2020年初頭の段階では、この構文は多くの主要なブラウザの最新バージョンやβバージョンで実装されている

//////////////////////////////////////////////////////////////////////////////////////
// 4.6 オブジェクトの生成
//////////////////////////////////////////////////////////////////////////////////////

// オブジェクト生成式は新たにオブジェクトを生成し、コンストラクタと呼ばれる関数を呼び出して、
// オブジェクトのプロパティを初期化する
// オブジェクト生成式は呼び出し式と非常に似ている
// ただし式の前にnewキーワードを記述する点が異なる

new Object()
new PointerEvent(2, 3)

// オブジェクト生成式中のコンストラクタ関数に引数を渡さない場合は、丸括弧を省略しても構わない

new Object
new Date

// オブジェクト生成式の値は、新たに生成されたオブジェクトになる
// コンストラクタについては9章で詳しく解説する

//////////////////////////////////////////////////////////////////////////////////////
// 4.7 演算子の概要
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptにおいて、演算子は算術式や比較式、論理式、代入式なので使われる
// 演算子の一覧表を表4-1に示す

// ほとんどの演算子は+や=などの記号で表せる 
// しかし、deleteやinstanceofのようにキーワードで表される演算子もある
// キーワードで表される演算子も、記号で表せる演算子と同じく普通の演算子である
// 単に読みやすい表記になっているだけである

// 表4-1は演算子の優先順位順にまとめている
// 初めの方に記述している演算子のほうが、後ろに記述している演算子より優先順位が高い
// 表中の横線で、演算子の優先順位が変わる
// A(associativity)は式の結合性を記す
// Lは左から右の順(left-to-right)で評価する、Rは右から左の順(right-to-left)で評価するという意味
// Nという列はオペランドの数を表す
// 型という名前の列には、想定するオペランドの方と、→の後に演算子の結果の型を列挙している
// 以下の項では、優先順位や結合性、オペランドの型という概念について説明する
// その後に各演算子について説明する

// 表4-1 JavaScript演算子.png 参照

//////////////////////////////////////////////////////////////////////////////////////
// 4.7.1 オペランドの数
//////////////////////////////////////////////////////////////////////////////////////

// 演算子はオペランドの数で3種類に大別できる
// 1つは二項演算子である
// 蒸散演算子（*）などがそうで、2つの式を組み合わせて、より複雑な1つの式を作る
// 操作対象となる終えpランド（被演算子）が2つ必要なので、二項演算子と呼ばれる
// 2つ目は単項演算子である
// 1つの式をもっと複雑な別の式に変換する
// 例えば-xという式の-がそうで、この演算子はオペランドxに対して符号反転を実行する
// 最後の1つは三項演算子である
// JavaScriptで使用できる演算子は、条件演算子（?:）だけである
// ?:は3つの式を組み合わせて1つの式を作れる演算子である

//////////////////////////////////////////////////////////////////////////////////////
// 4.7.2 オペランドと演算結果の型
//////////////////////////////////////////////////////////////////////////////////////

// 任意の型の値を処理できる演算子もあるが、多くの演算子はオペランドとして特定の型を必要としている
// また、同じように多くの演算子はある特定の型の値を返す
// 表4-1の「型」列にオペランドの型と、演算子の演算結果の型を示す
// 矢印の前がオペランドの方で、矢印の後が演算結果の型である

// JavaScriptの演算子は必要に応じてオペランドの型を変換する（3.9章）
// 乗算演算子（*）はオペランドとして数値を必要とする
// しかし、"3" * "5"という式は全く問題ない
// JavaScriptがオペランドを数値に変換するためである
// この式の値は15になり、文字列の"15"ではない
// また、JavaScriptでは値は「trueに変換されるもの」または「falseに変換されるもの」のどちらかになる
// したがって、オペランドとして論理値が必要な演算子でも任意の型のオペランドに対して問題なく動作する

// オペランドの型によって動きが変わる演算子もいくつかある
// 例えば、+演算子の場合、オペランドの型が数値なら加算を実行するが、オペランドの型が文字列であれば連結処理を行う
// 同じように、<などの比較演算子はオペランドの型によって、数値の大小で比較したり、アルファベット順で比較したりする
// 個々の演算子についての説明の中で必要とする型やどのような型変換が行われるかについても解説する

// 表4-1を見ると、代入演算子などいくつかの演算子で、オペランドの型として「左辺値」を必要とするものがある
// 左辺値とは、昔から使われている用語で「代入演算子の左辺に記述して問題ない式」という意味である
// JavaScriptの場合、変数やオブジェクトのプロパティ、配列の要素が左辺値になる

//////////////////////////////////////////////////////////////////////////////////////
// 4.7.3 演算子の副作用
//////////////////////////////////////////////////////////////////////////////////////

// 2 * 3のような単純な式を評価したとしても、プログラムの状態は何も変化しない
// また、今後行う計算にも、この式の評価は何も影響しない
// しかし、式の中には副作用を持つものがあり、その後の評価結果を変えてしまう場合がある
// 代入演算子が最もわかりやすい例で、変数やプロパティに値を代入すれば、今後その値やプロパティを使う式の値が変化する
// 同じように、インクリメント演算子（++）やデクリメント演算子（--）も暗黙的に代入を行うので副作用が生じる
// delete演算子も副作用があり、プロパティを削除することは、プロパティにundefinedを代入するのとほぼ同じ意味になるからである

// JavaScriptではこのほかの演算子には副作用はない
// ただし、関数呼び出し式やオブジェクト生成式は、関数中やコンストラクタ本体で前述したような演算子が使われた場合に副作用を持つことになる

