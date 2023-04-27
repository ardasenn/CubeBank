import React from "react";
import AccountListItem from "./AccountListItem";
const AccountsList = () => {
  return (
    <div>
      <aside>
        <section className="scroller">
          <AccountListItem />
        </section>
      </aside>
    </div>
  );
};

export default AccountsList;
