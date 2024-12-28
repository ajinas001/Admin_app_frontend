import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const dataByMonth = {
    1: {
      labels: ["10代未満", "10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代", "90代以上"],
      datasets: [
        {
          label: "男性",
          data: [100, 200, 400, 600, 800, 700, 500, 200, 100, 50],
          backgroundColor: "#ff9500",
        },
        {
          label: "女性",
          data: [80, 150, 350, 500, 700, 600, 450, 150, 80, 30],
          backgroundColor: "#ffb854",
        },
        {
          label: "その他",
          data: [20, 50, 70, 100, 200, 150, 100, 50, 20, 10],
          backgroundColor: "#ffce8a",
        },
        {
          label: "回答なし",
          data: [10, 20, 50, 80, 100, 80, 50, 20, 10, 5],
          backgroundColor: "#ffdeb0",
        },
      ],
    },
    2: {
      labels: ["10代未満", "10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代", "90代以上"],
      datasets: [
        {
          label: "男性",
          data: [150, 250, 450, 650, 850, 750, 550, 250, 150, 70],
          backgroundColor: "#ff9500",
        },
        {
          label: "女性",
          data: [100, 200, 400, 600, 800, 700, 500, 200, 100, 50],
          backgroundColor: "#ffb854",
        },
      ],
    },
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const chartData = dataByMonth[currentMonth] || null;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "性別・年代比",
        align: "start",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: 100, // Set minimum value for the Y-axis
        max: 1000, // Set maximum value for the Y-axis
        ticks: {
          stepSize: 100, // Increment Y-axis values by 100
          callback: (value) => value, // Show the values as is
        },
      },
    },
  };


  return (
    <div className="bg-white p-12 rounded-lg shadow-md h-screen md:h-[400px]">
      <div className="flex justify-end items-end mb-4">

        <span className="text-gray-600 px-2">
          {currentYear}年  <button
            onClick={handlePreviousMonth}
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            &lt;
          </button> {String(currentMonth).padStart(2, "0")}月
        </span>

        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-gray-800 font-bold "
        >
          &gt;
        </button>
      </div>
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <div className="text-center text-gray-500">データがありません。</div>
      )}
    </div>
  );
};

export default BarChart;
