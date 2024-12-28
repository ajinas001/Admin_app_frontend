import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'; 

const StatCard = ({ title, value, subValue, change, positive, date, number }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg text-textPrimary mb-2 font-bold">{title}</h3>
            <p className="text-sm text-textPrimary border-b pb-4 mb-6">{date}</p>
            <p className="text-3xl font-bold text-textPrimary ">{number}<span className='text-lg'>{value}</span></p>
            <div className='flex justify-between my-2'>
                <p className="text-sm text-textPrimary">{subValue}</p>
                <p
                    className={`text-xs font-medium p-1 rounded-lg ${positive ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50'
                        }`}
                >
                    <span className="inline-block align-middle font-extrabold px-1">
                        {positive ? (
                            <AiOutlineArrowUp className="w-4 h-4 text-current" />
                        ) : (
                            <AiOutlineArrowDown className="w-4 h-4 text-current" />
                        )}
                    </span>
                    {change}
                </p>


            </div>

        </div>
    );
};

export default StatCard;