// 05. Medium準備 - 高度なジェネリクス応用
// type-challenges Medium レベルに向けた実践的なパターン

/**
 * 問題1: Conditional Types (条件型)
 * 
 * 型Tが文字列なら文字列を、そうでなければ数値を返す型を作ってください
 * 
 * ヒント: T extends string ? string : number の形を使います
 */

type StringOrNumber<T> = (T extends string ? string : number)// あなたの答えをここに

// テスト（型エラーが出ないようにしてください）
type Test1 = StringOrNumber<string>; // string になるはず
type Test2 = StringOrNumber<number>; // number になるはず

/**
 * 問題2: Mapped Types (マップ型)
 * 
 * オブジェクトの全てのプロパティをオプション（?）にする型を作ってください
 * 
 * ヒント: { [K in keyof T]?: T[K] } の形を使います
 */

type MakeOptional<T> = {[K in keyof T]?: T[K]}// あなたの答えをここに

// テスト
type User = { name: string; age: number; email: string };
type OptionalUser = MakeOptional<User>; // 全てのプロパティがオプションになるはず

/**
 * 問題3: Template Literal Types (テンプレートリテラル型)
 * 
 * 文字列の前に "Hello, " を付ける型を作ってください
 * 
 * ヒント: `Hello, ${T}` の形を使います
 */

type AddHello<T extends string> = `Hello, ${T}` // あなたの答えをここに

// テスト
type Greeting = AddHello<"World">; // "Hello, World" になるはず

/**
 * 問題4: Utility Types + Conditional Types の組み合わせ
 * 
 * オブジェクトから特定の型のプロパティだけを抽出する型を作ってください
 * 例: string型のプロパティだけを残す
 * 
 * ヒント: 2段階で考えてみてください
 * 1. まず条件に合うプロパティ名を集める
 * 2. それを使って実際にプロパティを選択する
 */

type PickByType<T, U> = // あなたの答えをここに

// テスト
type Example = { name: string; age: number; isActive: boolean; email: string };
type StringProps = PickByType<Example, string>; // { name: string; email: string } になるはず

/**
 * 問題5: 再帰的な型（Recursive Types）
 * 
 * オブジェクトの全てのプロパティを再帰的に読み取り専用にする型を作ってください
 * ネストしたオブジェクトも含めて全て readonly にします
 * 
 * ヒント: プロパティの値の型によって処理を分ける必要があります
 * オブジェクトなら深く、そうでなければそのまま
 */

type DeepReadonly<T> = // あなたの答えをここに

// テスト
type NestedObject = {
  user: {
    name: string;
    profile: {
      age: number;
    };
  };
};
type ReadonlyNested = DeepReadonly<NestedObject>; // 全てのプロパティが readonly になるはず

export {};
