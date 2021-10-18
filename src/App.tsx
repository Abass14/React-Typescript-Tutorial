import './App.css';
import { Greet } from './component/Greet';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';

function App() {
  const person = {
    firstName: 'Abass',
    lastName: 'Adisa'
  }

  const personList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Peter',
      last: 'Parker'
    },
  ]
  return (
    <div className="App">
      <Greet name="Richard" noMsg={15} isLoggedIn={true}/>
      <Person name={person}/>
      <PersonList names={personList} />
    </div>
  );
}

export default App;
