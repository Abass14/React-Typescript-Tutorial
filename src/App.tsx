import React from 'react';
import './App.css';
import { Button } from './component/Button';
import { Container } from './component/Container';
import { Greet } from './component/Greet';
import { Heading } from './component/Heading';
import { Input } from './component/Input';
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

  const handleClicked = (event: React.MouseEvent<HTMLButtonElement>, id: number) =>{
    console.log("Button Clicked", event, id)
  }
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
      <Input value=' ' handleChange={(event) => console.log(event)} />
      <Button handleClick={handleClicked} />
      <Container styles={{ border: '1px solid black', padding: '2rem'}} />
    </div>
  );
}

export default App;
