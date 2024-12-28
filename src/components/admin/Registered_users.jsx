import React, { useState } from "react";
import { dummyData } from "../../assets/data/dummyData";
import { FiSearch } from "react-icons/fi";

const RegisteredUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const usersPerPage = 10;

    // Filtered data based on search
    const filteredData = dummyData.filter(
        (user) =>
            user.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(filteredData.length / usersPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-2xl font-bold text-textPrimary mb-4">
                    登録ユーザー一覧
                </h2>
                {/* Search Bar */}
                <div className="flex items-center mb-4 relative w-48 md:w-72">
                    <FiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="ニックネーム / メールアドレスで検索"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 pl-10 pr-14 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden text-sm md:text-base mb-12">
                <table className="table-auto w-full  ">
                    <thead className="bg-white text-textPrimary">
                        <tr>
                            <th className="p-2 border border-gray-300">No.</th>
                            <th className="p-2 border border-gray-300">ニックネーム</th>
                            <th className="p-2 border border-gray-300">メールアドレス</th>
                            <th className="p-2 border border-gray-300">生年月</th>
                            <th className="p-2 border border-gray-300">性別</th>
                            <th className="p-2 border border-gray-300">居住地</th>
                            <th className="p-2 border border-gray-300">登録日</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user, index) => (
                            <tr
                                key={user.no}
                                className="hover:bg-gray-50 text-center whitespace-nowrap"
                            >
                                <td className="p-2 border border-gray-300">{user.no}</td>
                                <td className="p-2 border border-gray-300">{user.nickname}</td>
                                <td className="p-2 border border-gray-300">{user.email}</td>
                                <td className="p-2 border border-gray-300">{user.birth}</td>
                                <td className="p-2 border border-gray-300">{user.gender}</td>
                                <td className="p-2 border border-gray-300">{user.location}</td>
                                <td className="p-2 border border-gray-300">
                                    {user.registrationDate}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm">
                <p className="text-textPrimary">
                    {filteredData.length}人中 - {usersPerPage}人表示
                </p>
                <div className="flex space-x-2">
                    {/* First Page Button */}
                    <button
                        onClick={() => handlePageChange(1)}
                        className={`px-2 md:px-3 py-1 rounded-md ${currentPage === 1
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-primary hover:text-white"
                            }`}
                    >
                        1
                    </button>

                    {/* Dots Before Current Page */}
                    {currentPage > 6 && <span className="px-2 text-textPrimary">...</span>}

                    {/* Page Neighbors */}
                    {[...Array(3)]
                        .map((_, index) => currentPage - 1 + index)
                        .filter((page) => page > 1 && page < totalPages)
                        .map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-2 md:px-3 py-1 rounded-md ${currentPage === page
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-textPrimary hover:bg-primary hover:text-white"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                    {/* Dots After Current Page */}
                    {currentPage < totalPages - 5 && <span className="px-2 text-gray-600">...</span>}

                    {/* Last Page Button */}
                    {totalPages > 1 && (
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            className={`px-2 md:px-3 py-1 rounded-md ${currentPage === totalPages
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-primary hover:text-white"
                                }`}
                        >
                            {totalPages}
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
};

export default RegisteredUsers;
