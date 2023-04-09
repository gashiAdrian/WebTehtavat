import './App.css';

function Item({ name, isPacked, importance }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'} {importance > 0 && `(Importance: ${importance})`}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Andyn pakkauslista</h1>
      <p>Keikalle lähdettäessä tarkista, onko pakattu:</p>
      <ul>
        <Item 
          isPacked={true} 
          name="Sähköskeba" 
          importance={9}
        />
        <Item 
          isPacked={true} 
          name="Kolkyt donaa"
          importance={0}
        />
        <Item 
          isPacked={false} 
          name="Mike Monroen valokuva"
          importance={6}
        />
      </ul>
    </section>
  );
}