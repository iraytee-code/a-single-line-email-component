import React from "react";
import Email from "./components/Email";

function App() {
  return (
    <Email
      sender="React Newsletter"
      subject="React Newsletter - Issue 36"
      date="July 15"
      message="React Newsletter - Issue 36 July 15 read this issue on https://reactjs.org/tutorial/tutorial.html"
    />
  );
}

export default App;
