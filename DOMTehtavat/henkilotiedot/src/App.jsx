import { people } from './data/people.json';
import './App.css';


function Taidot({person}) {
  return (
    <div>
      <h2>Skills:</h2>
    <ul>
      {person.skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
      </ul>
    </div>
    );
}

function Hobbies({ person }) {
  return (
    <div>
      <h3>Hobbies:</h3>
      <ul>
        {person.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

function fullName(person) {
  return `${person.last}, ${person.first}`;
}

function People() {
  const list = people.map((person, index) => {
    return (
      <article className="profile" key={person + index}>
        <img
          src={`https://dummyimage.com/500x500/000/fff.png&text=${person.first[0]}`}
          alt={`portrait of ${fullName(person)}`}
          className="pfp"
        />
        <div>
          <h2>{fullName(person)}</h2>
          <p>Age: {person.age} years</p>
        </div>
        <Taidot person={person} />
        <Hobbies person={person} />
      </article>
    );
  });
  return list;
}


function App() {
  return (
    <div className="App">
      <h1>Keitä me olemme ja mitä osaamme?</h1>
      <People />
    </div>
  );
}

export default App;
