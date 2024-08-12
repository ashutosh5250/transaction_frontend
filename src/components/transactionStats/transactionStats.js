import React from 'react';
import "./transactionStats.css";

function TransactionStats({ stats, month }) {
  return (
    <div className="stat-box">
      <h1 className="stats-heading">Statistics - {month}</h1>
      <p><strong>Total Sales:</strong> ${stats.totalSaleAmount}</p>
      <p><strong>Total Sold Items:</strong> {stats.totalSoldItems}</p>
      <p><strong>Total Not Sold Items:</strong> {stats.totalNotSoldItems}</p>
    </div>
  );
}


export default TransactionStats;