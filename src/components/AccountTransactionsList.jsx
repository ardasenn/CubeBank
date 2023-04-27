import React from "react";
import AccountTransactionItem from "./AccountTransactionItem";

const AccountTransactionsList = () => {
  return (
    <div className="transaction-container">
      <div className="transaction-list">
        <AccountTransactionItem />
        <AccountTransactionItem />
        <AccountTransactionItem />
        <AccountTransactionItem />
        <AccountTransactionItem />
      </div>
      <div id="x-line"></div>
      <style>
        {`
          .transaction-container {
            display: flex;            
        }
        
        
        #x-line {
            width: 8px;
            height: 600px;
            background: #15293C;
            box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25);
            border-radius: 7px;
            border: 1px solid white;
        }
          `}
      </style>
    </div>
  );
};

export default AccountTransactionsList;
