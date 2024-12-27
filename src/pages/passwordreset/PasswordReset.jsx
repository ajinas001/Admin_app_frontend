import { useState } from "react";
import Navbar from "../../components/Navbar";

function Login() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (password.length < 8 || password.length > 20) {
            alert("Password must be between 8 and 20 characters.");
            return;
        }
        alert("Password set successfully!");
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center w-full h-screen z-10 bg-background">
                <div className="bg-background px-8 lg:px-0 w-auto lg:w-[420px] mb-0 md:mb-12">
                    {/* Heading */}
                    <h2 className="text-center text-lg md:text-4xl font-semibold mb-4 text-textPrimary">
                        ログイン
                    </h2>
                    <p className="text-center text-sm md:text-md text-textSecondary mb-6 px-0 sm:px-8 lg:mb-12">
                        メールアドレスとパスワードを入力してログインしてください。
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-textPrimary"
                            >
                                メールアドレス
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 w-full h-[44px] px-4 border rounded-md focus:ring-1 focus:ring-primary focus:outline-none text-textPrimary"
                                placeholder="admin.s12345@allright.com"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-textPrimary"
                            >
                                パスワード
                            </label>
                            <div className="relative mt-1">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-[44px] px-4 border rounded-md focus:ring-1 focus:ring-primary focus:outline-none text-textPrimary"
                                    placeholder="••••••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-2 flex items-center text-sm text-textPrimary"
                                >
                                    {showPassword ? "隠す" : "表示"}
                                </button>
                            </div>
                            <p className="text-sm text-textPrimary mt-1">
                                半角大文字・小文字・数字を含めた8文字以上20文字以内
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-[48px] bg-primary hover:bg-hovercolor text-white font-medium px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            ログイン
                        </button>
                    </form>

                    {/* Forgot Password */}
                    <p className="mt-4 text-center text-sm text-textPrimary">
                        パスワードをお忘れの場合
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
