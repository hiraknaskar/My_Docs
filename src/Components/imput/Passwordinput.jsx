import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Passwordinput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className="relative mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <div className="mt-1 relative w-full flex items-center">
                <input
                    id="password"
                    type={isShowPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder || "Enter your password"}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    {isShowPassword ? (
                        <FaRegEyeSlash
                            size={20}
                            className="text-gray-500 cursor-pointer"
                            onClick={toggleShowPassword}
                        />
                    ) : (
                        <FaRegEye
                            size={20}
                            className="text-gray-500 cursor-pointer"
                            onClick={toggleShowPassword}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Passwordinput;
