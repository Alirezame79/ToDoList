import './App.css';
import Card from './ui/Card';
import EnterToDo from './component/EnterToDo';
import DisplayList from './component/DisplayList';

function App() {

  return (
    <div className="App">
      <Card>
        <h1>ToDoList App</h1>
        <EnterToDo />
        <DisplayList />
      </Card>
    </div>
  );
}

export default App;
