import React from "react";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Button from "./components/Button/Button";
import ContactForm from "./components/ContactForm/ContactForm";
const App = () => {
  return (
    <div className="container">
      <Navigation></Navigation>
      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
    </div>
  );
};

export default App;
