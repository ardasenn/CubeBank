import logo from "./logo.svg";
import "./App.css";
import AccountTransactionsList from "./components/AccountTransactionsList";
import AccountsList from "./components/AccountsList";

function App() {
  return (
    <div className="App">
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/fleeca.png"}
          alt=""
          width={200}
          height={60}
        />
      </div>
      <div className="account-container">
        <AccountsList />
        <AccountTransactionsList />
      </div>
      <style>
        {`
          .img-container {
            margin-bottom: 1rem;
            margin-top: 1rem;
            text-align: center;
        }
        
        .account-container {
            display: flex;
            justify-content: space-around;
        
        }
          
          `}
      </style>
    </div>
  );
}

export default App;
