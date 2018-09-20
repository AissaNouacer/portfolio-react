import React from "react";
import "./AppPage.css";
import "./agency.css";
import NavBar from "./NavBar";
// import Landing from "./Landing";
import Main from "./Main";
import FooterPage from "./footerpage";
class AppPage extends React.Component {
  render() {
    return (
      <div id="apppage">
        <NavBar />
        <Main />
        <FooterPage />
      </div>
    );
  }
}

export default AppPage;
