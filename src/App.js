import "./App.css";
//Components
import Header from "./components/Header";
import TodosList from "./components/TodosList";

const data = [
  {
    id: 0,
    title: 'Add Dummy Data',
    description: 'Give the page some content',
  },
  {
    id: 1,
    title: '',
    description: '',
  },
  {
    id: 2,
    title: '',
    description: '',
  },
  {
    id: 3,
    title: '',
    description: '',
  },
  {
    id: 4,
    title: '',
    description: '',
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <TodosList data={data}/>
    </div>
  );
}

export default App;
