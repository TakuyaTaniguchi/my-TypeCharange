// 01. インデックス型の基礎
// 段階1: まずはシンプルなインデックス型から

/**
 * 問題1: 基本のインデックス型
 *
 * 任意の文字列をキーとして、数値を値に持つオブジェクトの型を作ってください
 *
 * ヒント: [key: キーの型]: 値の型 という書き方を使います
 */

// ここに型を定義してください
type NumberDictionary = {[key:string]:number} // あなたの答えをここに

// テスト用のデータ（エラーが出ないようにしてください）
const scores: NumberDictionary = {
  math: 85,
  english: 92,
  science: 78
};

/**
 * 問題2: 型を使ってみる
 *
 * 上で作った型を使って、以下の変数にも型をつけてください
 */

type Price = any

const prices: Price {
  apple: 100,
  banana: 80,
  orange: 120
};

// prices変数に NumberDictionary 型をつけてください


export {};
