import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup2 from "./components/ListGroup2";
import { useState } from "react";

function App() {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //const handleSelectItem = (item: string) => {
  //  console.log(item);
  //};

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Label</Button>
    </div>
  );
}

export default App;
