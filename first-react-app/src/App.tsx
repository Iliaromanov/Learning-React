import Message from "./Message";
import ClickTest from "./ClickTest";
import ListGroup from "./components/ListGroup";

function App() {
  let langs = ["Go", "Python", "C++", "C"];
  let cities = ["New York", "San Francisco", "Seattle", "Boston", "Toronto"];
  return (
    <div>
      <Message></Message>
      <ClickTest></ClickTest>
      <ListGroup list={langs} header="Programmming Languages"></ListGroup>
      <ListGroup list={cities} header="Cities"></ListGroup>
    </div>
  );
}

export default App;
