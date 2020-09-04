import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/Human Profile",
    sidebar: () => <div>Human Profile</div>,
    main: () => <h2>Human Profile</h2>
  },
  {
    path: "/Pet basics",
    sidebar: () => <div>Pet basics!</div>,
    main: () => <h2>Pet basics</h2>
  },
  {
    path: "/Pet details",
    sidebar: () => <div>Pet details</div>,
    main: () => <h2>Pet details</h2>
  },
  {
    path: "/Pet details",
    sidebar: () => <div>Pet details</div>,
    main: () => <h2>Pet details</h2>
  },
];
 function App() {
  return (
    <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "20px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/">Homan profile</Link>
          </li>
          <li>
            <Link to="/Pet basics">Pet basics</Link>
          </li>
          <li>
            <Link to="/ Pet details">Pet details</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.sidebar />}
            />
          ))}
        </Switch>
      </div>

      <div style={{ flex: 1, padding: "20px" }}>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </div>
  </Router>
  
  )
          }

export default App;
