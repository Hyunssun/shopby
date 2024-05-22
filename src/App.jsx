import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import MyRouter from "./router";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
