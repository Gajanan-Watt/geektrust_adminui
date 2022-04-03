import logo from "./logo.svg";
import "./App.css";
import { Row } from "antd";
import "antd/dist/antd.css";
import { AdminUi } from "./AdminUi/Wrapper";

function App() {
  return (
    <div className="admin-wrp">
      <Row justify="center" align="middle">
        <AdminUi />
      </Row>
    </div>
  );
}

export default App;
