import './App.css';

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
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
        />
        <Item 
          isPacked={true} 
          name="Kolkyt donaa" 
        />
        <Item 
          isPacked={false} 
          name="Mike Monroen valokuva" 
        />
      </ul>
    </section>
  );
}

