import "./App.css";
import Filter from "./Components/Filter";
import BookList from "./Components/BookList";
import Bookform from "./Components/Bookform";
import Error from "./Components/Error";
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>Book Library App</h2>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <Bookform />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
      <Error/>
    </div>
  );
}

export default App;
