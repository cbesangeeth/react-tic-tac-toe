import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import NoMatch from "./component/NoMatch/NoMatch";
import NewGame from "./component/NewGame/NewGame";
import History from "./component/History/History";
import Root from "./component/Root/Root";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="new" element={<NewGame />}></Route>
          <Route path="history" element={<History />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
