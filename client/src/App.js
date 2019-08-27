import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { useAuth0 } from "./react-auth0-wrapper";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      <header>
        <NavbarComponent />
      </header>
    </div>
  );
}

export default App;