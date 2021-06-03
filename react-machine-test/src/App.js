import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { Task } from "./components/Task";
import { NavMenu } from "./components/NavMenu";
import { PrivateRouter } from "./components/PrivateRouter";
import { ChangePassword } from "./components/ChangePassword";
function App() {
  return (
    <>
      <NavMenu />
      <Route exact path="/" component={Login} />
      <div className="content">
        <Switch>
          <PrivateRouter path="/home" component={Home} />
          <PrivateRouter path="/task" component={Task} />
          <PrivateRouter path="/user" component={User} />
          <PrivateRouter path="/changepassword" component={ChangePassword} />
        </Switch>
      </div>
    </>
  );
}

export default App;
