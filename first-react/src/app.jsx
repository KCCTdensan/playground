// このアプリのメインのロジック

// jsxってのは</>みたいなやつが使えるようにする為のやつ

// Reactではcssはこんな風にやる．
// <link>は使わない．
import Counter from "./count"
import "./app.css"

const Header = () => {
  return(
    <dev>
      <h1>○○なう</h1>
    </dev>
  )
}

// 関数

// 関数形式のコンポーネント

function Component1() {
  return (
    <div>this is Component1</div>
  )
}

// 無名関数形式のコンポーネント
const Component2 = function() {
  return (
    <div>this is Component2</div>
  )
}

// 無名関数(アロー関数)形式のコンポーネント
const Component3 = () => {
  return (
    <div>this is Component3</div>
  )
}

// 無名関数(アロー関数)形式のコンポーネント
// returnしかしないアロー関数は{}とreturnを省略できる．
const Component4 = () => (
  <div>this is Component4</div>
)

// main.jsxでアプリ本体として使われる
const App = () => (
  <>
    <Header />
    <Counter/>
    <Component1 />
    <Component2 />
    <Component3 />
    <Component4 />
  </>
)

//
export default App

// export defaultしたやつは
// import App from "./hoge.js"で使える．

// export Nameしたやつは
// import { Name } from "./hoge.js"で使える．
