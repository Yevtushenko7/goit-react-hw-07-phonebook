import React from "react";
import { connect } from "react-redux";
import { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import {operations} from "./redux";


class App extends Component {

 componentDidMount() {
    this.props.Fetch();
  }

  render() {
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  Fetch: () => dispatch(operations.Fetch()),
});

export default connect(null, mapDispatchToProps)(App);