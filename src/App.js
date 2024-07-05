import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { IncomExpense } from './components/IncomExpense';
import { History } from './components/History';
import { Transactions } from './components/Transactions';

function App() {
  return (
    <div className="App">
      <Header />
      <IncomExpense />
      <History />
      <Transactions />
    </div>
  );
}

export default App;
