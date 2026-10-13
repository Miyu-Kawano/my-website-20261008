/* =========================
   変数（電卓の状態を覚える箱）
   ========================= */
let firstNumber = 0;    /* 1つ目の数字を保存する */
let secondNumber = 0;   /* 2つ目の数字を保存する */
let isSecondNumber = false; /* 今は2つ目の数字を入力中ですか？ */
let isResultDisplayed = false;  /* 計算結果を表示中ですか？ */
let operator = '';  /* 選択された演算子（+ - * /）を保存する */


/* =========================
   数字ボタン（0～9）
   ========================= */
function addNumber(number) {
    /* 計算結果表示直後なら新しい入力を開始する */
    if (isResultDisplayed) {
        document.getElementById('display').textContent = number;
        isResultDisplayed = false;
    }
    /* 演算子を押した直後なら2つ目の数字入力を開始する */
    else if (isSecondNumber) {
        document.getElementById('display').textContent = number;
        isSecondNumber = false;
    }
    /* 表示が0なら置き換える */
    else if (document.getElementById('display').textContent == '0') {
        document.getElementById('display').textContent = number;
    }
    /* それ以外は数字を後ろに追加する */
    else {
        document.getElementById('display').textContent =
            document.getElementById('display').textContent + number;
    }
}


/* =========================
   Cボタン
   ========================= */
function clearDisplay() {
    /* 表示を0に戻す */
    document.getElementById('display').textContent = '0';
}


/* =========================
   演算子ボタン (+ - × ÷)
   ========================= */
function setOperator(operatorSymbol) {
    /* 現在の表示を1つ目の数字として保存 */
    firstNumber =
        document.getElementById('display').textContent;
    /* 押された演算子を保存 */
    operator = operatorSymbol;
    /* 次は2つ目の数字入力モード */
    isSecondNumber = true;
}


/* =========================
   =ボタン
   ========================= */
function equal() {
    /* 現在の表示を2つ目の数字として保存 */
    secondNumber =
        document.getElementById('display').textContent;
    /* 足し算 */
    if (operator == '+') {
        document.getElementById('display').textContent =
            Number(firstNumber) + Number(secondNumber);
    }
    /* 引き算 */
    else if (operator == '-') {
        document.getElementById('display').textContent =
            Number(firstNumber) - Number(secondNumber);
    }
    /* 掛け算 */
    else if (operator == '*') {
        document.getElementById('display').textContent =
            Number(firstNumber) * Number(secondNumber);
    }
    /* 割り算 */
    else if (operator == '/') {
        document.getElementById('display').textContent =
            Number(firstNumber) / Number(secondNumber);
    }
    /* 計算結果を次回の計算でも使えるよう保存 */
    firstNumber =
        document.getElementById('display').textContent;
    /* 2つ目の数字入力モード終了 */
    isSecondNumber = false;
    /* 計算結果表示中 */
    isResultDisplayed = true;
}