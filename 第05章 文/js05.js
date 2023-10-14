"use strict";

//////////////////////////////////////////////////////////////////////////////////////
// 5 文
//////////////////////////////////////////////////////////////////////////////////////

// 4章では、JavaScript言語のごくのようなものとして、式について解説した
// 同じように本章で解説する文は、JavaScript言語における文章やコマンドに相当するものである
// 英語の文がピリオドで終わるように、JavaScriptの文はセミコロン(2.6章)で終わる
// 式は評価されると値が生成される
// これに対して、文が実行されると何かを生じる

// 「何かを生じる」方法の1つが、副作用を持つ式を評価することである
// 代入や関数呼び出しなどの副作用を持つ式は単独で文になりえる
// このような文を式文と呼ぶ
// 同じような文としては、新たな変数を宣言したり、新たな関数を定義したりする宣言文がある

// JavaScriptプログラムは、実行する文の並び以外の何ものでもない
// デフォルトでは、JavaScriptインタプリタは、記述された順序で文を実行していく
// 「何かを生じる」ためのもう1つの方法は、デフォルトの実行順序を変更することである
// JavaScriptには、このような実行順序を変更するための文(制御文)も以下のようにいくつか用意されている

// 条件文
// if運やswitch文などの条件文では、JavaScriptインタプリタに対して、式の値に応じて文を実行させたり、文をスキップさせたりする

// ループ文 
// while文やfor文などのループ文では、文を繰り返し実行する

// ジャンプ文
// break文やreturn文、throw文などのジャンプ文は、インタプリタに対して、プログラムの別の部分にジャンプするように促す

// これからJavaScriptのさまざまな文について書式を含めて解説する
// 本章の最後の表5-1に構文をまとめておく
// JavaScriptでは、いくつかの文をセミコロンで区切ってまとめたものをプログラムと言う
// つまり、文の使い方を覚えれば、JavaScriptプログラムが書けるようになる

//////////////////////////////////////////////////////////////////////////////////////
// 5.1 式文
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptで最も簡単な文は副作用を伴う式である
// すでに4章でいくつか見てきたが、代入文がその典型例である

greeting = "Hello " + name;
i *= 3;

// インクリメント演算子(++)やデクリメント演算子(--)を使った式も副作用を持つ
// この2つの演算子は、代入処理と同じように、副作用として変数の値を変更する

counter++;

// delete演算子には、オブジェクトのプロパティを削除するという重要な副作用がある
// したがって、delete演算子は、長い式の一部で使われるというよりは、単独で式文として使われるのが普通である

delete o.x;

// 関数呼び出しも式文の仲間である

console.log(debugMessage);
displaySpinner();           // Webアプリでスピナーを表示するという架空の関数

// 上記の関数呼び出しは式だが、ホスト環境やプログラムの状況に影響を与えるという副作用があるので、これも文の仲間に入る
// 関数に副作用がない場合は、関数を長居式の一部として使ったり、代入文の中で使ったりしない限り、ただ呼び出すだけでは意味がない
// 例えば次に示すように、予言の計算だけをして、その結果を破棄することは、実際にはありえないはずである

Math.cos(x);

// 実際には、この式が単独で使われるのではなく、以下に示すように、求めた値を変数に代入するはずである

cs = Math.cos(x);

// もう一度注意すると、ここまでの例でも示したように、文の最後にはセミコロン(;)を記述するようにすること

//////////////////////////////////////////////////////////////////////////////////////
// 5.2 複合文と空文
//////////////////////////////////////////////////////////////////////////////////////

// カンマ演算子(4.13.7章)を使って複数の式を1つの式にまとめたように、文ブロックを使えば、複数の文を1つの複合文にまとめられる
// 文ブロックは、複数のブロックを中括弧で囲んだものである
// 次の例は、1つの文として扱われる
// JavaScriptにおいて、1つの文しか記述できない部分に文ブロックを記述しても問題ない

{
    x = Math.PI;
    cx = Math.cos(x);
    console.log("cos(π) = " + cx);
}

// この文ブロックについては注意すべき点がいくつかある
// まず、末尾にセミコロンを記述しない
// ブロック内にある個々の文はすべて末尾にセミコロンを記述するが、ブロック自身の末尾にはセミコロンは記述しない
// 次に、ブロック中の行は、中括弧に対してインデント(字下げ)されている
// 必ずしもインデントしなければならないわけではないが、インデントしておけばコードは読みやすく、また理解しやすくなる

// 式の中にほかの式が含まれるのが普通であるのと同じように、文の中にほかの文が含まれるのも普通である
// このような場合、一般的にJavaScriptの文法では1つの文しか記述できないようになっている
// 例えば、whileループの構文では、ループの本体には1つの文しか記述できない
// しかし、文ブロックを使って複合文を記述すれば、任意の数の文を記述できる

// このように複合文を使うことで、JavaScriptの文法は1つの文しか記述できない場所にも、複数の文を記述できるようになる
// 空文は、この反対である
// 1つの文を記述する必要がある場所に、1うも文を記述しないようにするものである
// 空文の書式は次のとおりである

;

// JavaScriptインタプリタは、空文を実行しても何もしない
// 空文は、本体が何もないループなどで役立つことがある
// 次のforループの例を見る(forループについては、5.4.3章参照)

// 配列aを初期化する
for (let i = 0; i < addEventListener.length; a[i++] = 0) ;

// このループでは、すべての処理はa[i++] = 0で行われるため、ループの本体は必要ない
// しかし、JavaScriptの構文では、ループの本体として文が1つ必要なため空文(セミコロンを単独で記述したもの)が使われる

// forループ(またはwhileループやif文)の閉じ丸括弧)の後ろにうっかりセミコロン;を記述すると、原因をなかなか見つけにくいバグになる
// 次の例を見る

if ((a == 0) || (b == 0));      // あれ！この行は何もしていないのに
o = null;                       // この行は正常に実行される

// 意図的に空文を使用する場合は、その旨をコメントしておくことをお勧めする
// 例えば、次のようにコメントする

for (let i = 0; i < a.length; a[i++] = 0) /* 空文 */ ;

//////////////////////////////////////////////////////////////////////////////////////
// 5.3 条件文
//////////////////////////////////////////////////////////////////////////////////////

// 条件文は、指定された式の値に応じて、ほかの文字を実行したり、文を飛ばしたりできる
// 条件分はコードの流れの分かれ目であり、「分岐」と呼ばれることもある
// ここで、コードの流れをJavaScriptインタプリタが追っているところを想像してみる
// この中で条件文は、コードの流れが2つ以上に分岐する部分にあたる
// そして、ここではインタプリタはどの分岐を選ぶかを決定しなければならない

// この跡、項を分けて、JavaScriptの基本的な条件文であるif/else文を説明する
// さらにもっと複雑な分岐文であるswitchについても解説する

//////////////////////////////////////////////////////////////////////////////////////
// 5.3.1 if文
//////////////////////////////////////////////////////////////////////////////////////

// if文は、JavaScriptが条件を判定し、条件付きで文を実行するための基本的な制御文である
// if文には2つの書式がある
// if文の第一の書式は次のとおりである

if (expression)
    statement

// この書式では、まずexpressionを評価し、その結果がtrueに変換できる場合にstatementを実行する
// 式の評価脚気がfalseに変換できる場合にはstatementを実行しない
// (trueに変換できる値と、falseに変換できる値については3.4章を参照)

if (username == null)       // usernameがnullまたは未定義の場合
    username = "John Doe";  // usernameを定義する

// あるいは次のように記述することもできる

// usernameがnull、undefined、false、0、""、NaNの場合、新たに値を設定する
if (!username) username = "John Doe";

// expressionで囲んでいる丸括弧は、if文の書式の一部として必ず記述しなければならないことに注意する

// JavaScriptの構文では、ifキーワードの後に、式を丸括弧で囲んで記述し、その後に文を1つだけ記述する
// しかし、文ブロックを使って複数の文を1つにまとめることで、複数の文を記述できる

if (!address) {
    address = "";
    message = "Please specify a mailing address.";
}

// if文のもう1つの書式は、else節を含むものである
// expressionの評価結果がfalseの場合に、else節が実行される
// 第2の書式は次のとおりである

if (expression)
    statement1
else
    statement2

// この書式の場合、expressionの評価結果がtrueに変換される場合はstatement1を実行し、それ以外の場合はstatement2を実行する

if (n === 1)
    console.log("You have 1 new message.");
else
    console.log(`You have ${n} new messages.`);

// else節を伴うif文を入れ子にする場合は、else節とif文の対応関係に十分気を配る必要がある

i = j = 1;
k = 2;
if (i === j)
    if (j === k)
        console.log("i equals k");
else
    console.log("i doesn't equal j"); // これは変だ！

// この例にはif文が2つある
// どちらのif文がelse節に対応するでしょうか
// インデントを見れは、先頭(外側)のif文であるつもりであることが分かるが、実はJavaScriptは次のように解釈する

if (i === j) {
    if (j === k)
        console.log("i equals k");
    else
        console.log("i doesn't equal j"); // これは変だ！
}

// JavaScriptの場合、else節は直近のif文に対応する
// この規則は、ほかのプログラミング言語でもだいたい同じである
// 中括弧{}を使って次のように記述すれば、対応関係が明確になる
// これなら誤解もないし、コードの保守やデバッグも容易である

if (i === j) {
    if ( j === k) {
        console.log("i equals k");
    }
} else {
    console.log("i doesn't equal j");
}

// if文とelse節の本体や、whileループで、1つの文しかない場合でも、あえて中括弧で囲むプログラマがたくさんいる
// 一貫してこのような表記方法を使うようにすれば、上記のような問題を予防することができる
// 本書では、例となるコードをコンパクトに記述することに重きを置いているため、このような表記方法を使わない場合もある

//////////////////////////////////////////////////////////////////////////////////////
// 5.3.2 else if文
//////////////////////////////////////////////////////////////////////////////////////

// 条件の判定結果に基づいて2つのコードのどちらか一方を実行するには、if/else文が便利なことが分かった
// しかし、実行するコードが3個以上ある場合はどうしたらようだろうか
// 1つのやり方は、else if文を使用することである
// else if文は厳密にはJavaScriptの文とは言えないが、if/elseを繰り返し使用するときに、else ifもよく使われる

if (n === 1) {
    // コードブロック#1を実行する
} else if (n === 2) {
    // コードブロック#2を実行する
} else if (n === 3) {
    // コードブロック#3を実行する
} else {
    // すべてのelseが成立しないときには、コードブロック#4を実行する
}

// このコードには、特別なものは何もない
// 一連のif文があり、それぞれのif文が前の文のelse節の一部になっているだけである
// 入れ子を利用した従来のコードを以下に紹介するが、このやり方よりelse if文のほうがすっきりする

if (n === 1) {
    // コードブロック#1を実行する
}
else {
    if (n === 2) {
        // コードブロック#2を実行する
    }
    else {
        if (n === 3) {
            // コードブロック#3を実行する
        }
        else {
            // すべてのelseが成立しないときには、コードブロック#4を実行する
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////
// 5.3.3 switch文
//////////////////////////////////////////////////////////////////////////////////////

// if文は、プログラムの実行の流れを分岐させるものである
// また、else if文を使って多重分岐させることもできる
// しかし分岐条件で使用する式が1つだけの場合、このやり方は必ずしもベストだと言えない
// 複数のif文で同じ式を何回も評価するのは無駄である

// このような問題を解決するためにswitch文が用意されている
// 先頭にキーワードswitchを記述し、その後ろに丸括弧で囲んで式(expression)を、
// そして中括弧に囲んで一連の文(statements)からなるコードブロックを記述する

switch (expression) {
    statements
}

// しかし、switch文の完全な書式を示すとなると、もっと複雑になる
// コードブロック内のさまざまな場所に、caseキーワードの後に式とコロンを記述する、という書式のcaseラベルを記述する
// switch文が実行されると、expressionの値を求め、その値に一致するcaseラベルを探す
// (一致するかどうかの判定は、===演算子と同じ比較で判定する)
// 一致するcaseラベルがあれば、そのcaseラベルの後ろに続く最初の文からコードブロックを実行する
// 一致するcaseラベルがなければ、default:という特別なラベルを探し、もしあれば、このdefault:ラベルの後ろに続く最初の文からコードブロックを実行する
// 一致するcaseラベルもなく、default:ラベルもなければ、そのコードブロックをスキップする

// switch文を言葉で説明するのはかなり大変である
// むしろ実例で説明するほうがわかりやすいでしょう
// 前の項で紹介した入れ子型のif/else文をswitch文で記述すると次のようになる

switch (n) {
    case 1:                             // n === 1の場合、ここから開始する
        // コードブロック#1を実行する
        break;                          // ここで中断する
    case 2:                             // n === 2の場合、ここから開始する
        // コードブロック#2を実行する
        break;                          // ここで中断する
    case 3:                             // n === 3の場合、ここから開始する
        // コードブロック#3を実行する
        break;                          // ここで中断する
    default:                            // すべてのelseが成立しない場合
        // コードブロック#4を実行する
        break;                          // ここで中断する
}

// 上記のコードで、それぞれのcaseの最後にキーワードbreakがあることに注意すること
// break文が実行されると、switch文の最後に処理が移動し、その次の文から実行を再開する
// switch文のcaseラベルは、実行すべきコードの「開始点」を示すだけで「終了点」は示していない
// したがって、break文を省略すると、expressionの値に一致したcaseラベルの後ろにあるコードブロックから処理を開始し、
// コードブロックの終わりまで一連の文を処理していく
// このようにcaseラベルを次々に処理していく方がより場合もまれにあるが、通常はswitch文の各caseの最後にbreak文を記述することをお勧めする
// なお、関数内に、switch文を記述する場合は、breakの代わりにreturn文が使える
// どちらでもswitch文を終了できる

// さてここで、もう少し実践的なコード例を解説する
// 値の型に応じて値を文字列に変換する例である

function covert(x) {
    switch(typeof x) {
        case "number":              // 数値を16進数に変換して返す
            return x.toString(16)
        case "string":
            return '"' + x + '"';
        default:                    // 上記以外の型の場合、通常の方法で置換する
            return String(x);
    }
}

// ここで紹介した2つの例では、caseキーワードの後ろに、数値リテラルと文字列リテラルを記述した
// 実際、このような使い方をする場合がほとんどである
// ただし、ECMAScript標準では、caseラベルに任意の式が記述できるようになっている

// switch文は、switchキーワード直後の式を評価した後に、caseラベルの式を評価する
// 値が一致するcaseラベルが見つかるまで、コードに記述された順位caseラベルの式を評価していく
// 値は、等価演算子(==)ではなく、同値演算子(===)を使って比較される
// つまり型変換は行われない

// switch文が実行されるときに、すべてのcase式が評価されるわけではないので、
// case式に関数呼び出しや代入のような副作用を持つような式を書くのは避けたほうがよい
// case式には、できるだけ定数を書くようにする

// 前述したように、switch文のexpressionに一致するcase式が存在しない場合、switch文はdefault:ラベルから実行を行う
// もしもdefault:ラベルが存在しない場合は、switch文のブロック全体を実行しない
// 先ほどの例では、default:ラベルはswitch文の最後に記述していた
// 論理的には、最後に記述するべきである
// また、最後に記述するのが一般的でもない
// ただし、実際にはswitch文のコードブロック中であれば、どこに記述しても構わない

//////////////////////////////////////////////////////////////////////////////////////
// 5.4 ループ文
//////////////////////////////////////////////////////////////////////////////////////

// 条件文を理解しやすくするために、JavaScriptのインタプリタがソースコード中の分岐をたどる、という風にたとえた
// これに対して、ループ文は、道を戻ってソースコード中のある部分を繰り返すということになる
// JavaScriptには5つのループ文がある
// while文、do/while文、for文、for/of文(その変形版のfor/await文)、for/in文の5つである
// これから、項を分けてそれぞれの文について解説する
// ループ文がよく使われるのは、配列の要素を巡回するときである
// 7.6章では、このようなループの使い方について詳しく説明する
// また、Arrayクラスに定義されているループメソッドについても学習する

//////////////////////////////////////////////////////////////////////////////////////
// 5.4.1 while文
//////////////////////////////////////////////////////////////////////////////////////

// JavaScriptが条件判定するための基本的な制御文がif文があるとすれば、
// JavaScriptが繰り返し処理をするための基本的な制御文がwhile文である
// while文の書式は次のとおりである

while (expression)
    statement

// while文を実行すると、JavaScriptインタプリタは、まずexpressionを評価する
// その結果がfalseに変換される値である場合は、インタプリタはループ本体の文を飛ばし次の文の処理へ進む
// 評価結果がtrueに変換される値である場合は、statementを実行し、それから元のexpressionの評価に戻る
// つまり、expressionがtrueに変換できる値である間は、インタプリタはstatementを繰り返し実行する
// なお、while(true)とすると、無限ループになる

// 一般的に、まったく同じ処理を何度もJavaScriptにさせる人はいない
// そのような無駄なことをさせないために、ループを「繰り返す」たびに変化する変数を利用する
// 変数の値が変化すれば、実行する内容も毎回変わる
// この変数がexpressionに含まれていれば、ループを繰り返す度にexpressionの値も変わる
// これは非常に重要なことである
// もしexpressionがtrueに変換されている値で始まり、そのまま何も変わらなければループも終わらなくなってしまう
// 次の例を見る
// この例では0から9までの数値を出力する

let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

// このコードでは、変数countの値は0から始まる
// ループの本体を実行するたびに、countの値が1増える
// ループを10回繰り返すと、countの値は10になるため、while文の式の評価結果はfalseになる
// その時点でwhile文の処理は終了し、JavaScriptインタプリタはプログラムを次の文へと処理を進める
// このようにほとんどのループでは、countのようなカウンタ変数を使用する
// ループカウンタの変数にはどのような名前をつけてもかまわないが、一般的にはi、j、kがよく使われる
// ただし、プログラムをわかりやすくするためにも、もう少し意味のある名前を使うことをお勧めする

//////////////////////////////////////////////////////////////////////////////////////
// 5.4.2 do/while文
//////////////////////////////////////////////////////////////////////////////////////

// do/whileループはwhileループとよく似ているが、expressionがループの先頭ではなく、最後にある点が異なる
// つまり、do/while文の場合、ループの本体が少なくとも1回は常に実行される
// do/while文の書式は次のとおりである

do
    statement
while (expression);

// do/whileループがwhileループほど使われないのは、少なくとも1回は実行するループを必要とする状況があまり多くないためである
// 次の例を見る

function printArray(a) {
    let len = a.length, i = 0;
    if (len === 0) {
        console.log("Empty Array");
    } else {
        do {
            console.log(a[i]);
        } while (++i <len);
    }
}

// do/whileループがwhileループとはいくつかの点で異なっている
// まず。doループはループの開始を示すキーワードdoと、ループの終了を示しループ条件を記述するwhileが必要である
// また、whileループとは異なり、doループの最後にセミコロンを書かなければならない
// whileループではループ本体を中括弧で囲んだ場合は、セミコロンは必要ない

//////////////////////////////////////////////////////////////////////////////////////
// 5.4.3 for文
//////////////////////////////////////////////////////////////////////////////////////

// for文もループである
// たいていの場合、while文より便利である
// 先ほどのwhileループの例もそうだが、一般的にループには共通となるパターンがある
// そのパターンとは次のとおりである
// ループには何らかのカウンタ変数があり、ループを開始する前にこの変数を初期化する
// 次に、この変数をテストしてから、ループの繰り返し処理を行う
// 最後にループ本体の末尾でカウンタ変数を更新してから、再び変数をテストする
// for文では、初期化、テスト、更新というループ変数の重要な要素を明示的にまとめて記述する

for (initialize ; test ; increment)
    statement

// initialize、test、incrementはそれぞれ初期化、テスト、更新を行う式である
// これらの3つの式はセミコロンで区切る
// for文では、この3つの処理をまとめて、ループの先頭に明示的に記述する
// このやり方なら、ループで何をしているのかがよく分かり、ループ変数の初期化や更新を忘れるなどの誤りを妨げる

// for文の働きは、for文と同じ処理を行う次のwhile文と比較するとよく分かる

initialize;
while (test) {
    statement
    increment
}

// ループ開始する前に、initialize式を1回だけ評価する
// 通常、initialize式は代入などの副作用を伴う
// JavaScriptでは、変数を宣言することもできる
// ループカウンタ変数の宣言と初期化が同時にできて便利である
// 繰り返しの前にtestを実行し、その結果に基づいてループ本体を実行するかを決める
// testの評価結果がtrueに変換される値の場合は、ループ本体のstatementを実行する
// 最後にincrement式は代入式か、あるいはインクリメント演算子(++)またはデクリメント演算子(--)を使った式になる

// 先ほどwhileループを使って0から9を出力するコードを説明した
// 同じコードを、for文を使って書き直したものを紹介する

for (let count = 0; count < 10; count++) {
    console.log(count);
}

// もちろん、ここで紹介した簡単なループよりもっとも複雑なループもたくさんある
// このような複雑なループでは、ループの繰り返し処理で変化する変数が複数個ある場合もある
// そこでカンマ演算子(,)が登場する
// カンマ演算子が使われるのは、ほぼこの場合だけである
// カンマ演算子をつかうと、initializeやincrementなどで複数の式を1つにまとめ、forループで複数の式を記述できるようになる

let i, j, sum = 0;
for (i = 0, j = 10; i < 10; i++, j--) {
    sum += i * j;
}

// ここまで紹介したループの例では、ループ変数はすべて数値だった
// ループ変数として数値は使われることは非常に多いが、数値でなければならないわけではない
// 例えば、次に紹介するコードでは、forループを使ってリンクリスト型のデータ構造をたどって、リストの最後のオブジェクト（つまり、nextプロパティを持たない最初のオブジェクト）を返す

function tail(o) {                          // リンクリストo の末尾を返す。
    for (; o.next; o = o.next) /* 空文*/;    // o.next がtrue と評価される間たどる。
    return o;
}

// このコードにはinitialize式はない
// 3つの式はどれも省略しても構わない
// ただし、式を省略しても2つのセミコロンは必ず記述する
// test式を省略した場合は、ループは永久に繰り返される
// for(;;)と記述すると、while(true)と同じように、無限ループになる

//////////////////////////////////////////////////////////////////////////////////////
// 5.4.4 for/of文
//////////////////////////////////////////////////////////////////////////////////////

// ES6から新たにfor/of文というループ文が追加された
// このループ文でもforというキーワードを使っているが、動作は通常のループと大きく異なっている
// また、5.4.5章で紹介するfor/inループ文ともまったく違う

// for/ofループ分は、反復可能なオブジェクトに対して使う
// あるオブジェクトが反復可能であるということの正確な説明は12章で解説する
// ここでは、配列や文字列、セット、マップに対してfor/of文を使うと、各要素に対してループ(反復)することができる

// ここで例を解説する
// この例では数値の配列に対して、for/of文を使って各要素をループし、要素の合計を計算する

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for (let element of data) {
    sum += element;
}
sum // 45

// この構文は、見た目は通常のループのように見える
// forキーワードの後に丸括弧が続いて、丸括弧の中にはループで何をするかについて記述する
// この例では丸括弧の中には変数宣言(変数が宣言済みであれば単純に変数名だけ記述)の後ろにofキーワードを記述し、
// その後に反復可能なオブジェクトに評価される式を記述する
// 先ほどの例ではこのオブジェクトは配列である
// ほかのループ文と同じように、for/ofループ文の本体は丸括弧の後に中括弧で記述する

// 先ほどの例では、data配列の要素ごとに、ループ本体が1回実行される
// ループ本体の各実行前に、配列の次の要素がelement変数に代入される
// 配列の要素は、先頭から末尾までの順序で反復される

// 配列は「活きた」状態で反復される
// 反復中に配列を変更すると、反復処理の結果に影響を与える場合がある
// 先ほどの例のループ本体中にdata.push(sum);という行を追加した場合、反復処理が配列の最後に到達できなくなるため、永久ループになる

