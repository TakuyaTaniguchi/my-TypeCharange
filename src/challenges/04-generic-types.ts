// 04. ジェネリクス型の基礎
// 段階4: 汎用的な型を作る - TypeScriptの最重要概念

/**
 * 問題1: 基本のジェネリクス
 * 
 * 任意の型の値を受け取って、そのまま返す関数の型を作ってください
 * 文字列を渡せば文字列が返り、数値を渡せば数値が返る汎用的な関数です
 * 
 * ヒント: <T> を使います。Tは型の変数のようなものです
 */

// ここに型を定義してください
type Identity<T> = (value:T) => T// あなたの答えをここに

// テスト用の関数（どちらもエラーが出ないようにしてください）
const identityString: Identity<string> = (value) => value;
const identityNumber: Identity<number> = (value) => value;

/**
 * 問題2: ジェネリクスの理解チェック
 * 
 * 上で作ったIdentity型を使って、以下の関数を作ってください
 */

const getValue: Identity<boolean> = (boolean) => boolean// ここに関数を書いてください

// getValue(true) が true を返せば正解です！

/**
 * 問題3: 配列を扱うジェネリクス
 * 
 * 任意の型の配列を受け取って、最初の要素を返す関数の型を作ってください
 * 配列が空の場合はundefinedを返します
 * 
 * ヒント: 戻り値は T | undefined になります
 */

type GetFirst<T> = (arr:T[]) => T | undefined// あなたの答えをここに

const getFirstString: GetFirst<string> = (arr) => arr[0];
const getFirstNumber: GetFirst<number> = (arr) => arr[0];

/**
 * 問題4: オブジェクトのプロパティを扱うジェネリクス
 * 
 * オブジェクトとプロパティ名を受け取って、そのプロパティの値を返す関数の型を作ってください
 * 
 * ヒント: keyof T を使います。これは「Tのプロパティ名の型」を表します
 */

type GetProperty<T, K extends keyof T> = (obj:T,key:K) => T[K]// あなたの答えをここに

const getName: GetProperty<{name: string, age: number}, 'name'> = (obj, key) => obj[key];

/**
 * 問題5: 複数の型パラメータを持つジェネリクス
 * 
 * 2つの異なる型の値を受け取って、ペアを作る関数の型を作ってください
 * 
 * ヒント: <T, U> のように複数の型パラメータを使えます
 */

type CreatePair<T, U> = (first:T,second:U) => [T,U]// あなたの答えをここに

const makePair: CreatePair<string, number> = (first, second) => [first, second];

export {};
