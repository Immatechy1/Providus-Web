import { Helmet } from "react-helmet";
import Home from "./Home";

import Navbar from "./componentData/Navbar";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Providus Web</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Home />
   
   
      {/* <BrowserRouter>
        <Routes>
        <Route exact path="/">
           <Home />
        </Route>
        </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
