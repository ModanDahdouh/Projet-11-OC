import React from 'react'
import Account from '../../components/Account/Account';
export default function User() {
  document.title = "Argent Bank - User"

  const accountData = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      amountDescription: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      amountDescription: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      amountDescription: "Current Balance",
    },
  ];

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      
      <h2 className="sr-only">Accounts</h2>
      {accountData.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          amountDescription={account.amountDescription}
        />
      ))}
    </main>
  )
}
