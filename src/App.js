import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import AppPage from './Componens/Hero/AppPage.js';
import EcommercePage from './Componens/E-commerce/EcommercePage.js'
import ContactPage from './Componens/Contact/ContactPage.js'

class App extends Component {
  render() {
    return (
      <div>
        <AppPage></AppPage>
        <MDBContainer>
          <EcommercePage></EcommercePage>
          <ContactPage></ContactPage>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
