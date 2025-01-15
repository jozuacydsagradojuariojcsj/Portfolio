import Alert from "./Alert";

const ListGroup2 = () => {
  return (
    <div>
      <Alert onClose={() => console.log("ListGroup Alert Button")}>
        Hello <span>Worlds</span>
      </Alert>
    </div>
  );
};

export default ListGroup2;
