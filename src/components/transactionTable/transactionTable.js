import React from 'react';
import "./transactionTable.css";

function TransactionTable({ transactions, onPageChange }) {
  return (
    <div className="transaction-table-container">
     
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{transaction.category}</td>
              <td>{transaction.sold ? "SOLD" :"NOT SOLD"}</td>
              <td><img src={transaction.image} alt={transaction.title} className="transaction-image"></img></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="transaction-table-pagination">
        <button onClick={() => onPageChange('prev')}>Previous</button>
        <button onClick={() => onPageChange('next')}>Next</button>
      </div>
    </div>
  );
}

export default TransactionTable;