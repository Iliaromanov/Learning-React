import Message from "./Message";
import ClickTest from "./ClickTest";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let langs = ["Go", "Python", "C++", "C"];
  const langsSelect = (lang: string) => {
    console.log(`I code in ${lang}`);
  }

  let cities = ["New York", "San Francisco", "Seattle", "Boston", "Toronto"];
  const citySelect = (city: string) => {
    console.log(`I work in ${city}`);
  }

  return (
    <div>
      <Message></Message>
      <ClickTest></ClickTest>
      <Alert>
        Hello <span>World!</span>
      </Alert>
      <ListGroup 
        list={langs} header="Programmming Languages"
        onSelectItem={langsSelect}
      />
      <ListGroup list={cities} header="Cities" onSelectItem={citySelect}></ListGroup>
    </div>
  );
}

export default App;
