import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Repos } from "./pages/Repos";
import { Starred } from "./pages/Starred";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:username" exact component={User} />
      <Route path="/:username/repos" exact component={Repos} />
      <Route path="/:username/starred" exact component={Starred} />
    </BrowserRouter>
  );
}

export default App;
