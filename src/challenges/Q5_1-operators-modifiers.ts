// Q5_1. TypeScript演算子・修飾子 集中練習
// keyof, extends, typeof, in, readonly, ?, never, unknown など

/**
 * 問題1: keyof演算子の基本
 * 
 * 以下のオブジェクト型のプロパティ名の型を作ってください
 */

type Book = {
  title: string;
  author: string;
  year: number;
  isAvailable: boolean;
};

type BookKeys = keyof Book// keyofを使ってBookのプロパティ名の型を作る

// テスト
const key1: BookKeys = "title";     // OK
const key2: BookKeys = "author";    // OK
// const key3: BookKeys = "invalid"; // エラーになるはず

/**
 * 問題2: typeof演算子
 * 
 * 変数から型を取得してください
 */

const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3
};

type ConfigType = typeof config// configの型を取得

// テスト
const newConfig: ConfigType = {
  apiUrl: "https://api2.example.com",
  timeout: 3000,
  retries: 5
};

/**
 * 問題3: extends条件型の基本
 * 
 * 型Tが数値なら"number"、文字列なら"string"、それ以外なら"other"を返す型
 */

type TypeChecker<T> = T extends number ? number : string// extendsを使った条件型

// テスト
type Test1 = TypeChecker<number>;   // "number" になるはず
type Test2 = TypeChecker<string>;   // "string" になるはず  
type Test3 = TypeChecker<boolean>;  // "other" になるはず

/**
 * 問題4: in演算子（マップ型で使用）
 * 
 * 文字列のUnion型から、各文字列をキーとするオブジェクト型を作ってください
 * 全ての値はboolean型にしてください
 */

type CreateFlags<T extends string> = {[K in T]:boolean}// in演算子を使ってマップ型を作る

// テスト
type Flags = CreateFlags<"read" | "write" | "execute">;
// { read: boolean; write: boolean; execute: boolean; } になるはず

/**
 * 問題5: Union型（|）とIntersection型（&）
 * 
 * A. Union型：文字列または数値を受け取る型
 * B. Intersection型：2つのオブジェクト型を合成する型
 */

type StringOrNumber = string | number // | を使ってUnion型を作る

type User = { name: string; age: number };
type Contact = { email: string; phone: string };
type UserWithContact = User & Contact   // & を使ってIntersection型を作る

// テスト
const value1: StringOrNumber = "hello";
const value2: StringOrNumber = 42;
const user: UserWithContact = {
  name: "田中",
  age: 30,
  email: "tanaka@example.com",
  phone: "090-1234-5678"
};

/**
 * 問題6: infer（条件型での型推論）
 * 
 * 配列型から要素の型を取り出す型を作ってください
 * 例：string[] → string
 */

type ArrayElement<T> = T extends (infer U)[] ? U : never;// infer を使って配列の要素型を取得

// テスト  
type StringElement = ArrayElement<string[]>;  // string になるはず
type NumberElement = ArrayElement<number[]>;  // number になるはず


// 関数の戻り値の型を取得する型を作ってみて
type ReturnType<T> = T extends (...args: any[]) => infer  ReturnValue  ? ReturnValue : never // ここを埋めてみて

// テスト
type Test1 = ReturnType<() => string>;  // string になるはず
type Test2 = ReturnType<(x: number) => boolean>;  // boolean になるはず

export {};
