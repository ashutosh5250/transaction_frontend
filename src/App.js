import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionTable from "./components/transactionTable/transactionTable.js";
import TransactionStats from "./components/transactionStats/transactionStats.js";
import TransactionBarChart from "./components/transactionBarChart/transactionBarChart.js";
import MonthDropdown from "./components/monthDropdown/monthDropdown.js";
import "./App.css";

const apiEndpoint = "https://transactions-e18r.onrender.com/product";

function App() {
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [transactions, setTransactions] = useState([]);
  const [stats, setStats] = useState({});
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [timeoutId, setTimeoutId] = useState(null); 

  useEffect(() => {
    fetchTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth, searchText, page]);

  useEffect(() => {
    fetchStats();
    fetchBarChartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        `${apiEndpoint}/transactions?month=${selectedMonth}&search=${searchText}&page=${page}`
      );
      setTransactions(response.data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        `${apiEndpoint}/statistics?month=${selectedMonth}`
      );
      setStats(response.data);
    } catch (err) {
      console.error("Error fetching statistics:", err);
    }
  };

  const fetchBarChartData = async () => {
    try {
      const response = await axios.get(
        `${apiEndpoint}/barchart?month=${selectedMonth}`
      );
      const data = response.data || [];
      setBarChartData(data);
    } catch (err) {
      console.error("Error fetching bar chart data:", err);
    }
  };

  const handleSearchChange = (value) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      setSearchText(value); 
    }, 500);
    setTimeoutId(newTimeoutId); 
  };

  return (
    <>
      <div className="heading">
        <h1>Transactions Dashboard</h1>
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Search Transactions"
          onChange={(e) => handleSearchChange(e.target.value)}
          className="input-box"
        />
        <MonthDropdown
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
        />
      </div>
      <div>
        <TransactionTable
          transactions={transactions}
          onSearchChange={handleSearchChange}
          onPageChange={(direction) =>
            setPage(direction === "next" ? page + 1 : page - 1)
          }
        />
        <TransactionStats stats={stats} month={selectedMonth} />
        <TransactionBarChart data={barChartData} />
      </div>
    </>
  );
}

export default App;
