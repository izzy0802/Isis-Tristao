/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Isis Tristão Dos Santos",
  title: (
    <div
      style={{
        width: "878px",
        height: "195px",
        textAlign: "center",
      }}
    >
      Criando soluções
      <br />e experiências marcantes.
    </div>
  ),
  email: "alex@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const primaryColor = "Black";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main" style={{ backgroundColor: "#ffff" }}>
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Contact />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
