import React from "react";

const AccountTransactionItem = () => {
  return (
    <div className="transaction-item-container">
      <div className="item-head">
        <p>Şirket Hesabı / Polis Yatırılan</p>
      </div>
      <div className="item-detail">
        <span>-1,500$</span>
        <span> WuuHuu</span>
        <span> 12.06.2022</span>
      </div>
      <style>
        {`
          .transaction-item-container {
            font-family: 'K2D';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 35px;
            color: #fff;
            width: 45rem;
            height: 6.5rem;
            background: #15293C;
            box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25);
            border-radius: 7px;
            margin-bottom: 10px;
            margin-right: 20px;
        }
        
        
        
        .item-head {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .item-head p {
            border-bottom: 1px solid #fff;
            width: 95%;
        
        }
        
        .item-detail {
            display: flex;
            justify-content: space-between;
            width: 95%;
            margin-left: 15px;
            margin-top: 15px;
            font-size: 23px;
        }
          `}
      </style>
    </div>
  );
};

export default AccountTransactionItem;
