import React from "react";

import LoginForm from "./components/register/LoginForm";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Parcel/Card";
import cardImage from "./static/ahihi.jpg";
import Popcast from "./components/popcast/Popcast";
function App() {
  const logo = "https://cms-web-staging.kienlongbank.co/assets/img/main-logo.svg";
  return (
    <div className="App">

      {/* <LoginForm logo={logo}></LoginForm> */}
      {/* <LoginPage></LoginPage> */}
      {/* <LoginForm logo={logo}></LoginForm> */}
      <Routes>
        <Route path="/login" element={<LoginForm logo={logo}></LoginForm>}></Route>
        <Route path="/card" element={
          <Card
            title="Parcel+TypeScript+React+Tailwind Template"
            image={cardImage}
            imageAlt="Architecture"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Fusce sit amet mattis augue. Pellentesque tempor tortor eu diam efficitur hendrerit a ac sem. 
            Mauris sit amet tellus cursus, convallis diam.`}
            tags={["#parcel", "#typescript", "#react", "#tailwind"]}
          />
        }></Route>
        <Route path="/" element={<Popcast></Popcast>}></Route>
      </Routes>
    </div>
  );
}

export default App;
