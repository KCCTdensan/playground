// これはReactを自分で1から構築するときに必要になるファイル
// アプリ本体のロジックとかは別のファイル(ここではapp.jsx)に書くとスッキリしていいかも

// jsxってのは</>みたいなやつが使えるようにする為のやつ

import ReactDOM from "react-dom/client"
import App from "./app"

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
