import React, { useState, useEffect } from "react";
import { dummyData } from "../../assets/data/dummyData";
import { Tooltip } from "react-tooltip";

const RegisteredUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const usersPerPage = 10;

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
        <div className="w-full min-h-screen max-w-7xl mx-auto p-2 bg-background">
            <div className="p-2  z-10">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <h2 className="text-lg md:text-2xl font-bold text-textPrimary">
                        登録ユーザー一覧
                    </h2>
                    <div className="flex items-center w-full sm:w-72  ">
                        <input
                            type="text"
                            placeholder={`ニックネーム / メールアドレスで検索`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-2 pl-8 pr-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                </div>

            </div>

            {isLoading ? (
                <>
                    <table className="hidden lg:block table-auto w-full text-sm md:text-base divide-y divide-gray-300 rounded-lg overflow-hidden">
                        <thead className="bg-white text-textSecondary">
                            <tr>
                                <th className="p-4 pl-4 text-left w-[5%]">No.</th>
                                <th className="p-2 text-left w-[20%]">ニックネーム</th>
                                <th className="p-2 text-left w-[25%]">メールアドレス</th>
                                <th className="p-2 text-left w-[15%]">生年月</th>
                                <th className="p-2 text-left w-[10%]">性別</th>
                                <th className="p-2 text-left w-[15%]">居住地</th>
                                <th className="p-2 text-left w-[15%]">登録日</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="flex items-center justify-center min-h-[50vh]">
                        <div className="animate-spin w-8 h-8 border-4 bg-background lg:m-40 border-primary border-t-transparent rounded-full"></div>
                    </div>
                </>
            ) : filteredData.length === 0 ? (
                <>
                    <table className="hidden lg:block table-auto w-full text-sm md:text-base divide-y divide-gray-300 rounded-lg overflow-hidden">
                        <thead className="bg-white text-textSecondary">
                            <tr>
                                <th className="p-4 pl-4 text-left w-[5%]">No.</th>
                                <th className="p-2 text-left w-[20%]">ニックネーム</th>
                                <th className="p-2 text-left w-[25%]">メールアドレス</th>
                                <th className="p-2 text-left w-[15%]">生年月</th>
                                <th className="p-2 text-left w-[10%]">性別</th>
                                <th className="p-2 text-left w-[15%]">居住地</th>
                                <th className="p-2 text-left w-[15%]">登録日</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-background">
                        <p className="text-gray-500 text-center">
                            表示するデータがありません
                        </p>
                    </div>
                </>
            ) : (
                <div className="bg-white rounded-lg shadow mt-8 overflow-hidden sm:min-h-full">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-sm md:text-base divide-y divide-gray-300">
                            <thead className="bg-white text-textSecondary">
                                <tr>
                                    <th className="p-4 pl-4 text-left w-[5%]">No.</th>
                                    <th className="p-2 text-left w-[20%]">ニックネーム</th>
                                    <th className="p-2 text-left w-[25%]">メールアドレス</th>
                                    <th className="p-2 text-left w-[15%]">生年月</th>
                                    <th className="p-2 text-left w-[10%]">性別</th>
                                    <th className="p-2 text-left w-[15%]">居住地</th>
                                    <th className="p-2 text-left w-[15%]">登録日</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {currentUsers.map((user, index) => (
                                    <tr
                                        key={user.no}
                                        className="hover:bg-gray-50 text-start whitespace-nowrap text-textSecondary"
                                    >
                                        {user.no && <td className="p-2 pl-4">{user.no}.</td>}
                                        <td className="p-2">{user.nickname}</td>
                                        <td className="p-2">
                                            <span
                                                data-tooltip-id={`tooltip-${user.no}`}
                                                data-tooltip-content={user.email}
                                                className="truncate w-48 block overflow-hidden text-ellipsis cursor-pointer"
                                            >
                                                {user.email}
                                            </span>
                                            <Tooltip
                                                id={`tooltip-${user.no}`}
                                                place="bottom"
                                                effect="solid"
                                                className="text-sm text-gray-700"
                                            />
                                        </td>
                                        <td className="p-2">{user.birth}</td>
                                        <td className="p-2">{user.gender}</td>
                                        <td className="p-2">{user.location}</td>
                                        <td className="p-2">{user.registrationDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Pagination part*/}
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
                            className={`px-2 md:px-3 py-1 rounded-md ${currentPage === 1
                                ? "bg-white text-gray-500 cursor-not-allowed"
                                : "bg-white text-gray-600 hover:bg-primary hover:text-white"
                                }`}
                        >
                            &lt;
                        </button>
                        <button
                            onClick={() => handlePageChange(1)}
                            className={`px-2 md:px-3 py-1 rounded-md ${currentPage === 1
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
                                    className={`px-2 md:px-3 py-1 rounded-md ${currentPage === page
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
                                className={`px-2 md:px-3 py-1 rounded-md ${currentPage === totalPages
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
                            className={`px-2 md:px-3 py-1 rounded-md ${currentPage === totalPages
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
