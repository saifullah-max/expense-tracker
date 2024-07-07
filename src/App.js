import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { IncomExpense } from './components/Income-Expense/IncomExpense';
import { History } from './components/History/History';
import { Transactions } from './components/Transactions/Transactions';
import { TransactionProvider } from './components/Transactions/TransactionContext';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function App() {
  return (
    <div className="App">
      <TransactionProvider>
      <Header/>
      <IncomExpense />
      {/* <History /> */}
      <Transactions />
      </TransactionProvider>
    </div>
  );
}

export default App;