import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const TransactionBarChart = ({ data }) => {

  const defaultData = [
    { range: "0-100", count: 0 },
    { range: "101-200", count: 0 },
    { range: "201-300", count: 0 },
    { range: "301-400", count: 0 },
    { range: "401-500", count: 0 },
    { range: "501-600", count: 0 },
    { range: "601-700", count: 0 },
    { range: "701-800", count: 0 },
    { range: "801-900", count: 0 },
    { range: "901-above", count: 0 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data || defaultData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="range" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TransactionBarChart;
