// 02. タプル型の基礎
// 段階2: 配列の発展形 - 順序と型が決まっている配列

import {read} from "node:fs";

/**
 * 問題1: 基本のタプル型
 * 
 * 1番目が文字列、2番目が数値のタプル型を作ってください
 * 
 * ヒント: [型1, 型2] という書き方を使います
 */

// ここに型を定義してください
type NameAge = [string,number]// あなたの答えをここに

// テスト用のデータ（エラーが出ないようにしてください）
const person: NameAge = ["田中", 25];

/**
 * 問題2: より複雑なタプル
 * 
 * 座標を表すタプル型を作ってください
 * 1番目: x座標（数値）
 * 2番目: y座標（数値）
 * 3番目: z座標（数値）
 */

type Coordinate3D =[number,number,number] // あなたの答えをここに

const point: Coordinate3D = [10, 20, 30];

/**
 * 問題3: タプルと通常の配列の違い
 * 
 * 以下のコードで何が違うか考えてみてください
 */

const normalArray: number[] = [1, 2, 3];
const tupleArray: [number, number, number] = [1, 2, 3];


// この違いを理解できましたか？

// タプルは各配列にある値の要素数も固定できる

/**
 * 問題4: オプショナルタプル
 * 
 * ユーザー情報のタプル型を作ってください
 * 1番目: 名前（文字列）- 必須
 * 2番目: 年齢（数値）- 必須  
 * 3番目: 電話番号（文字列）- オプション（なくてもOK）
 * 
 * ヒント: オプションは ? を使います
 */

type UserInfo = [string,number,string?]// あなたの答えをここに

// どちらもエラーが出ないようにしてください
const user1: UserInfo = ["山田", 30, "090-1234-5678"];
const user2: UserInfo = ["佐藤", 25]; // 電話番号なし

/**
 * 問題5: 読み取り専用タプル
 * 
 * 座標データを変更できないようにするタプル型を作ってください
 * 
 * ヒント: readonly を使います
 */

type ReadonlyCoordinate = readonly [number,number]// あなたの答えをここに

const fixedPoint: ReadonlyCoordinate = [100, 200];
// fixedPoint[0] = 999; // これがエラーになれば正解！

export {};
