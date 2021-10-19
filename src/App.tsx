import './App.css';
import { Greet } from './component/Greet';
import { Heading } from './component/Heading';
import { Oscar } from './component/Oscar';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import { Status } from './component/Status';

function App() {
  const person = {
    firstName: 'Abass',
    lastName: 'Adisa'
  }

  const status = {
    loading: 'loading',
    success: 'success',
    error: 'error'
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
      <Greet name="Richard" isLoggedIn={true}/>
      <Person name={person}/>
      <PersonList names={personList} />
      <Status status={'error'}/>
      <Heading>Place Holder</Heading>
      <Oscar>
        <Heading>Oscar goes to Di Caprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
