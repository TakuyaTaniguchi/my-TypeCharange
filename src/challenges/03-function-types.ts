// 03. 関数型の基礎
// 段階3: 関数の入力と出力の型を定義する

import Func = jest.Func;

/**
 * 問題1: 基本の関数型
 * 
 * 数値を2つ受け取って、数値を返す関数の型を作ってください
 * 
 * ヒント: (引数名: 型, 引数名: 型) => 戻り値の型
 */

// ここに型を定義してください
type AddFunction = (a:number,b:number) => number// あなたの答えをここに

// テスト用の関数（エラーが出ないようにしてください）
const add: AddFunction = (a:number, b:number) => a + b;

/**
 * 問題2: 文字列処理関数
 * 
 * 文字列を受け取って、文字列を返す関数の型を作ってください
 */

type StringProcessor =  (text:string) => string// あなたの答えをここに

const toUpperCase: StringProcessor = (text) => text.toUpperCase();

/**
 * 問題3: 戻り値がない関数
 * 
 * 文字列を受け取って、何も返さない（コンソールに出力する）関数の型を作ってください
 * 
 * ヒント: 戻り値がない場合は void を使います
 */

type Logger = (T:string) => void// あなたの答えをここに

const log: Logger = (message) => {
  console.log(message);
};

/**
 * 問題4: オプション引数を持つ関数
 * 
 * 名前（必須）と年齢（オプション）を受け取って、挨拶文字列を返す関数の型を作ってください
 * 
 * ヒント: オプション引数は ? を使います
 */

type Greeter = (name:string,age?:number ) => string// あなたの答えをここに

const greet: Greeter = (name, age) => {
  return age ? `こんにちは、${name}さん（${age}歳）` : `こんにちは、${name}さん`;
};

/**
 * 問題5: 高階関数（関数を引数に取る関数）
 * 
 * 数値の配列と、数値を受け取って何かを行う関数を受け取る関数の型を作ってください
 * 
 * ヒント: 引数として関数型を書きます
 */

type ArrayProcessor = (numbers: number[],processor: (number:number)=>void) => void// あなたの答えをここに

const processNumbers: ArrayProcessor = (numbers, processor) => {
  numbers.forEach(processor);
};

export {};
