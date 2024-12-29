import React, { useContext } from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { mycontext } from '../../context/Context';

const StatCard = ({ title, value, subValue, change, positive, date, number }) => {
    // const datas = useContext(mycontext)

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg text-textPrimary mb-2 font-bold">{title}</h3>
            <p className="text-sm text-textPrimary border-b pb-4 mb-6">{date}</p>
            <p className="text-3xl font-bold text-textPrimary ">{number}<span className='text-lg'>{value}</span></p>
            <div className='flex justify-between my-2'>
                <p className="text-sm text-textSecondary">{subValue}</p>
                <p
                    className={`text-xs font-medium p-1 ${positive === true ? 'text-green-500 rounded-lg bg-green-50' :
                            positive === null ? 'text-gray-500 bg-gray-300 px-4 rounded-sm' :
                                'text-red-500 rounded-lg bg-red-50'
                        }`}
                >
                    <span className="inline-block align-middle font-extrabold px-1">
                        {positive==true ? (
                            <AiOutlineArrowUp className="w-4 h-4 text-current" />
                        ) :positive === false? (
                            <AiOutlineArrowDown className="w-4 h-4 text-current" />
                        ):null}
                    </span>
                    {change}
                </p>


            </div>

        </div>
    );
};

export default StatCard;