import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:username" exact component={User} />
    </BrowserRouter>
  );
}

export default App;
