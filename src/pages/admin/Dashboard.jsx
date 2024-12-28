import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";
import StatCard from "../../components/admin/Statcard";
import BarChart from "../../components/admin/Barchart";
import { allData, statData } from "../../assets/data/dummyData";
import Registered_users from "../../components/admin/Registered_users";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("ダッシュボード");

  const renderContent = () => {
    switch (activeSection) {
      case "ダッシュボード":
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
                />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="col-span-1 sm:col-span-2">
                <BarChart data={allData} />
              </div>
              {statData.slice(4, 6).map((stat, index) => (
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
        return <div className="mt-6 text-lg"><Registered_users/></div>;
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
      <div className="flex-1 p-6 mt-8 lg:ml-0 overflow-y-auto"> {/* Add margin to the right */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
