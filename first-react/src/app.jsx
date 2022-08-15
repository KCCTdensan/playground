import "./app.css"

// 関数
function Component1() {
  return (
    <div>this is Component1</div>
  )
}

// 無名関数
const Component2 = function() {
  return (
    <div>this is Component2</div>
  )
}

// 無名関数(アロー関数)
const Component3 = () => {
  return (
    <div>this is Component3</div>
  )
}

// 無名関数(アロー関数(省略))
const Component4 = () => (
  <div>this is Component4</div>
)

const App = () => (
  <>
    <Component1 />
    <Component2 />
    <Component3 />
    <Component4 />
  </>
)
export default App
