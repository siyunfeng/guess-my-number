import './App.css';
import Header from './components/Header';
import GuessingBoard from './components/GuessingBoard';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <hr />
      <GuessingBoard />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
