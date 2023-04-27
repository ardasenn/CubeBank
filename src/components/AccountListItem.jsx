import React from "react";

const AccountListItem = () => {
  return (
    <div>
      <section className="account-personal">
        <div className="account-personal-content">
          <h4>Visa Classic</h4>
          <div className="account-content-main">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/chip.png"}
                alt=""
                width={55}
                height={40}
              />
              <span> Visa payWave</span>
            </div>
            <h4>5839-0586-9029</h4>
          </div>
          <div className="account-content-footer">
            <strong>Eva Nora</strong> <span>VISA</span>
          </div>
        </div>

        <div className="btns-personal-group">
          <button className="btn-personal">Yatır</button>

          <button className="btn-personal">Çek</button>
          <button className="btn-personal">Transfer</button>
        </div>
      </section>
      <section className="account-company">
        <div className="account-content">
          <h4>Organization Account / police</h4>
          <h5>
            <span>Kolluk Kuvvetleri</span>
          </h5>

          <div className="price">
            <strong>$3,150.00</strong> <br />
            <span>Kullanılabilir miktar</span>
          </div>
        </div>

        <div className="btns-group">
          <button className="btn">Yatır</button>

          <button className="btn">Çek</button>
          <button className="btn">Transfer</button>
        </div>
      </section>
      <style>
        {`
    .account-company {
        /* padding: 0.4rem; */
        color: #fff;
        width: 22rem;
        height: 9rem;
        font-family: 'Nunito';
        font-style: normal;
        background: #15293C;
        box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25);
        border-radius: 7px;
    }
    
    .account-content {
        padding: 0.4rem;
    }
    
    .account:not(:last-child) {
        margin-bottom: 1.5rem;
    }
    
    h4 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }
    
    h5 {
        font-size: 1rem;
        font-weight: 500;
        text-transform: capitalize;
    }
    
    h5 span {
        margin-top: 0.3rem;
    
    }
    
    .price {
        text-align: right;
    
    }
    
    .price strong {
        font-size: 1.3rem;
    }
    
    .price span {
        /* font-size: 1.1rem; */
    }
    
    .btns-group {
        display: flex;
        justify-content: space-between;
    }
    
    .btn {
        border: none;
        background: #07121C;
        box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25);
        border-radius: 7px 7px 0px 0px;
        color: #fff;
        width: 33%;
        height: 1.5rem;
        font-size: 1rem;
        cursor: pointer;
    }
   `}
      </style>
    </div>
  );
};

export default AccountListItem;
