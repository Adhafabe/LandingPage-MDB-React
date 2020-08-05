import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import AppPage from './Componens/Hero/AppPage.js';
import EcommercePage from './Componens/E-commerce/EcommercePage.js'

class App extends Component {
  render() {
    return (
      <div>
        <AppPage></AppPage>
        <EcommercePage></EcommercePage>
      </div>
    );
  }
}

export default App;
