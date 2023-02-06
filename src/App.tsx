import "./App.css";
import Card from "./components/Card/Card";
import Info from "./components/Info/Info";
import gentelmanData from "./gentelman.data";

function App() {
  return (
    <div className="root">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info />
        <button className="button button--select">Select all</button>
      </section>
      <main className="main">
        <ul className="gentelmen">
          {gentelmanData.map((gentleman) => (
            <Card gentelman={gentleman} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
