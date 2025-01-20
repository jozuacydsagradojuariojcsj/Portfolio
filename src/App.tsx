import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup2 from "./components/ListGroup2";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //const handleSelectItem = (item: string) => {
  //  console.log(item);
  //};

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
