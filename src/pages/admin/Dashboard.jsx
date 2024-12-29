import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import StatCard from "../../components/admin/Statcard";
import BarChart from "../../components/admin/Barchart";
import { statDataByMonth } from "../../assets/data/dummyData";
import Registered_users from "../../components/admin/Registered_users";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("ダッシュボード");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


  const navigate = useNavigate();

  const disableNavigation = () => {
    window.history.pushState(null, "", window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    } else {
      disableNavigation();
    }
  }, [navigate]);

  // Default dummy data for empty state
  const defaultDummyData = [
    {
      title: "ユーザー登録数計",
      number: "- 人",
      value: "",
      subValue: "- 人 (前月時点の累計）",
      date: `${currentYear}年${currentMonth}月01日-${currentYear}年${currentMonth}月30日`,
      change: "0%",
      positive: null,
    },
    {
      title: "アクティブユーザー",
      number: "- 人 / 今月",
      value: "0%",
      subValue: "- 人 (前月時点）",
      date: `${currentYear}年${currentMonth}月01日-${currentYear}年${currentMonth}月30日`,
      change: "0%",
      positive: null,
    },
    {
      title: "定着率",
      number: "- %",
      value: " / 前月",
      subValue: "前月からの変化",
      date: `${currentYear}年${currentMonth}月01日-${currentYear}年${currentMonth}月30日`,
      change: "0%",
      positive: null,
    },
    {
      title: "平均接続回数",
      number: "- 回 / 今月",
      value: "",
      subValue: "- 回 (前月の今日時点）",
      date: `${currentYear}年${currentMonth}月01日-${currentYear}年${currentMonth}月30日`,
      change: "0%",
      positive: null,
    },
    {
      title: "抽選利用回数",
      number: "- 回 / 今月",
      value: "",
      subValue: "- 回 (前月の今日時点）",
      date: `${currentYear}年${currentMonth}月01日-${currentYear}年${currentMonth}月30日`,
      change: "0%",
      positive: null,
    },
    {
      title: "アカウント削除数",
      number: "- 人 / 今月",
      value: "",
      subValue: "- 人 (前月の今日時点）",
      date: `${currentYear}年${currentMonth}月01日-${currentYear}年${currentMonth}月30日`,
      change: "0%",
      positive: null,
    },
  ];

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


  const getStatDataForMonth = () => {
    const data = statDataByMonth[currentYear]?.[currentMonth];
    return data && data.length > 0 ? data : defaultDummyData;
  };

  const renderContent = () => {
    switch (activeSection) {
      case "ダッシュボード":
        const statData = getStatDataForMonth();
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {statData.slice(0, 4).map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  number={stat.number}
                  value={stat.value}
                  subValue={stat.subValue}
                  date={stat.date}
                  change={stat.change}
                  positive={stat.positive}
                  month={currentMonth}
                  year={currentYear}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="col-span-1 sm:col-span-2">
                <BarChart
                  currentMonth={currentMonth}
                  currentYear={currentYear}
                  onNextMonth={handleNextMonth}
                  onPreviousMonth={handlePreviousMonth}
                />
              </div>
              {statData.slice(4).map((stat, index) => (
                <div className="col-span-1 gap-6" key={index + 4}>
                  <StatCard
                    title={stat.title}
                    number={stat.number}
                    value={stat.value}
                    subValue={stat.subValue}
                    date={stat.date}
                    change={stat.change}
                    positive={stat.positive}
                  />
                </div>
              ))}
            </div>
          </>
        );
      case "登録ユーザー":
        return (
          <div className="mt-6 text-lg">
            <Registered_users />
          </div>
        );
      case "通信量":
        return <div className="mt-6 text-lg">通信量のデータコンテンツ</div>;
      case "運営管理者":
        return <div className="mt-6 text-lg">運営管理者の管理コンテンツ</div>;
      default:
        return <div className="mt-6 text-lg">コンテンツが見つかりません。</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full bg-background">
      <Navbar />
      <Sidebar onMenuClick={setActiveSection} />
      <div className="flex-1 p-6 mt-8 lg:ml-0 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;

