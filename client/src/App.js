import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

import './App.css';


function App() {
  return (
    <>
      <Header />

      <main class="main">

        <Search />

      </main>

      <Footer />
    </>
  );
}

export default App;
