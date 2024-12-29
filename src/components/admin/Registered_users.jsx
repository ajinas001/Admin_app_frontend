import React, { useState, useEffect } from "react";
import { dummyData } from "../../assets/data/dummyData";
import { FiSearch } from "react-icons/fi";

const RegisteredUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const usersPerPage = 10;

    // Filter data based on the search query
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

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [searchQuery, currentPage]);

    return (
        <div className="w-full sm:min-h-screen max-w-7xl mx-auto p-4">
    {/* Header and Search */}
    <div className="flex flex-wrap justify-between items-center gap-4">
        <h2 className="text-lg md:text-2xl font-bold text-textPrimary">
            登録ユーザー一覧
        </h2>
        <div className="flex items-center w-full sm:w-72 relative">
            <FiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
                type="text"
                placeholder="ニックネーム / メールアドレスで検索"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    </div>

    {/* Table */}
    <div className="bg-white rounded-lg shadow mt-8 overflow-hidden sm:min-h-full">
        <div className="overflow-x-auto">
            <table className="table-auto w-full text-sm md:text-base divide-y divide-gray-300">
                <thead className="bg-white text-textSecondary">
                    <tr>
                        <th className="p-4 pl-4 text-left">No.</th>
                        <th className="p-2 text-left">ニックネーム</th>
                        <th className="p-2 text-left">メールアドレス</th>
                        <th className="p-2 text-left">生年月</th>
                        <th className="p-2 text-left">性別</th>
                        <th className="p-2 text-left">居住地</th>
                        <th className="p-2 text-left">登録日</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {isLoading ? (
                        <tr>
                            <td colSpan="7" className="text-center p-4">
                                <div className="fixed inset-0 bg-white bg-opacity-0 flex items-center justify-center z-50">
                                    <div className="animate-spin w-12 h-12 lg:ms-40 border-4 border-primary border-t-transparent rounded-full"></div>
                                </div>
                            </td>
                        </tr>
                    ) : filteredData.length === 0 ? (
                        <tr>
                            <td
                                colSpan="7"
                                className="text-center p-4 text-gray-500"
                            >
                                データが見つかりません。
                            </td>
                        </tr>
                    ) : (
                        currentUsers.map((user, index) => (
                            <tr key={user.no} className="hover:bg-gray-50 text-start whitespace-nowrap text-textSecondary">
                            <td className="p-2 pl-4">{user.no}.</td>
                            <td className="p-2">{user.nickname}</td>
                            <td className="p-2 w-32 truncate overflow-hidden text-ellipsis">{user.email}</td> {/* Increased width */}
                            <td className="p-2">{user.birth}</td>
                            <td className="p-2">{user.gender}</td>
                            <td className="p-2">{user.location}</td>
                            <td className="p-2">{user.registrationDate}</td>
                        </tr>
                        
                        ))
                    )}
                </tbody>
            </table>
        </div>
    </div>

    {/* Pagination */}
    {/* Show pagination only if there are filtered results */}
    {filteredData.length > 0 && (
        <div className="flex flex-wrap justify-between items-center mt-12 text-sm gap-4">
            <div className="flex-shrink-0">
                <p className="text-textPrimary">
                    {filteredData.length}人中 - {usersPerPage}人表示
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-3">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-2 md:px-3 py-1 rounded-md ${
                        currentPage === 1
                            ? "bg-white text-gray-500 cursor-not-allowed"
                            : "bg-white text-gray-600 hover:bg-primary hover:text-white"
                    }`}
                >
                    &lt;
                </button>
                <button
                    onClick={() => handlePageChange(1)}
                    className={`px-2 md:px-3 py-1 rounded-md ${
                        currentPage === 1
                            ? "bg-primary text-white"
                            : "bg-white text-gray-600 hover:bg-primary hover:text-white"
                    }`}
                >
                    1
                </button>
                {currentPage > 6 && (
                    <span className="px-2 text-textPrimary">...</span>
                )}
                {[...Array(6)]
                    .map((_, index) => currentPage - 1 + index)
                    .filter((page) => page > 1 && page < totalPages)
                    .map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-2 md:px-3 py-1 rounded-md ${
                                currentPage === page
                                    ? "bg-primary text-white"
                                    : "bg-white text-textPrimary hover:bg-primary hover:text-white"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                {currentPage < totalPages - 5 && (
                    <span className="px-2 text-gray-600">...</span>
                )}
                {totalPages > 1 && (
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        className={`px-2 md:px-3 py-1 rounded-md ${
                            currentPage === totalPages
                                ? "bg-primary text-white"
                                : "bg-white text-gray-600 hover:bg-primary hover:text-white"
                        }`}
                    >
                        {totalPages}
                    </button>
                )}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-2 md:px-3 py-1 rounded-md ${
                        currentPage === totalPages
                            ? "bg-white text-gray-500 cursor-not-allowed"
                            : "bg-white text-gray-600 hover:bg-primary hover:text-white"
                    }`}
                >
                    &gt;
                </button>
            </div>
        </div>
    )}
</div>

    );
};

export default RegisteredUsers;
