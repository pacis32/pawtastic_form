import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Petbasics from './Components/Petbasics';
import Petdetails from './Components/Petdetails';
import Comfirm from './Components/Confirm';
import HumanProfile from './Components/HumanProfile';
import Background from './Images/pet-image.jpeg';



const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/Human Profile",
    sidebar: () => <div></div>,
    main: () => <HumanProfile/>
  },
  {
    path: "/Petbasics",
    sidebar: () => <div></div>,
    main: () => <Petbasics/>
  },
  {
    path: "/Pet details",
    sidebar: () => <div></div>,
    main: () => <Petdetails/>
  },
  {
    path: "/Confirm",
    sidebar: () => <div>Confirm</div>,
    main: () => <Comfirm/>
  },
];
class App extends Component {

  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
  render(){
    return (
    <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "50px",
          width: "40%",
          height:"60%",
          background: "#f0f0f0",
          backgroundImage: `url(${Background})`
          
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 ,height:"60%"}}>
          <li>
            <Link to="/">Human profile</Link>
          </li>
          <li>
            <Link to="/Petbasics" >Petbasics</Link>
          </li>
          <li>
            <Link to="/ Pet details">Pet details</Link>
          </li>
          <li>
            <Link to="/ Confirm">Confirm</Link>
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
          }}
  

export default App;
