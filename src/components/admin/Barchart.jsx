import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import dataByYearAndMonth from "../../assets/data/dummyData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ currentMonth, currentYear, onNextMonth, onPreviousMonth }) => {
  const chartData =
    dataByYearAndMonth[currentYear]?.[currentMonth] || null;
  const defaultData = {
    labels: [
      "10代未満", "10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代", "90代以上",
    ],
    datasets: [
      {
        label: "男性",
        data: Array(10).fill(0),
        backgroundColor: "#ff9500",
      },
      {
        label: "女性",
        data: Array(10).fill(0),
        backgroundColor: "#ffb854",
      },
      {
        label: "その他",
        data: Array(10).fill(0),
        backgroundColor: "#ffce8a",
      },
      {
        label: "回答なし",
        data: Array(10).fill(0),
        backgroundColor: "#ffdeb0",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: false, 
          boxWidth: 20, 
          padding: 10, 
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#ffffff", 
        bodyColor: "#1d4ed8",
        cornerRadius: 8, 
        displayColors: true,
        caretPadding: 10,
        caretSize: 8,
        callbacks: {
          title: () => "",
          label: (tooltipItem) => {
            const total = tooltipItem.raw;
            return `${total}人`; 
          },
          labelColor: (tooltipItem) => {
            return {
              backgroundColor: tooltipItem.dataset.backgroundColor,
              borderColor: tooltipItem.dataset.borderColor || tooltipItem.dataset.backgroundColor,
            };
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          padding: 10,
          font: {
            size: 14, 
          },
          callback: function (value, index, values) {
            return this.getLabelForValue(value);
          },
        },
      },
      y: {
        stacked: true,
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 100,
          callback: (value) => value,
          padding: 20,
        },
        grid: {
          drawBorder: true,
        },
      },
    },

  };


  return (
    <div className="bg-white px-4 py-16 md:py-12 rounded-lg shadow-md h-[400px]">
      <div className="flex justify-between items-center px-4 mb-2">
        <span className="text-sm md:text-lg">性別・年代比</span>
        <span className="text-gray-600 text-sm flex items-center space-x-2">
          <span>{currentYear}年</span>
          <button
            onClick={onPreviousMonth}
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            &lt;
          </button>
          <span>{String(currentMonth).padStart(2, "0")}月</span>
          <button
            onClick={onNextMonth}
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            &gt;
          </button>
        </span>
      </div>

      <Bar data={chartData || defaultData} options={options} />
    </div>
  );
};

export default BarChart;
