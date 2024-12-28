import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dummy credentials for login
        const dummyEmail = "admin.s12345@allright.com";
        const dummyPassword = "password1234";

        if (email === dummyEmail && password === dummyPassword) {
            setLoading(true); // Start loading
            setTimeout(() => {
                navigate("/dashboard"); // Navigate to the dashboard after 2 seconds
            }, 2000); // 2 seconds delay
        } else {
            alert("ログイン情報が正しくありません。");
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center w-full h-screen z-10 bg-background">
                <div className="bg-background px-4 sm:px-6 md:px-3 lg:px-0 w-full max-w-[420px] mb-6 md:mb-12">

                    {/* Heading */}
                    <h2 className="text-center text-lg md:text-4xl font-semibold mb-4 text-textPrimary">
                        ログイン
                    </h2>

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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 w-full h-[44px] px-4 border rounded-md focus:ring-1 bg-white focus:ring-primary focus:outline-none text-textPrimary"
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full h-[44px] px-2 border rounded-md focus:ring-1 focus:ring-primary focus:outline-none text-textPrimary ${showPassword ? 'text-[16px]' : 'text-[32px]'} caret-primary`}
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
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading} // Disable button when loading
                            className={`w-full h-[48px] ${loading ? 'bg-hovercolor' : 'bg-primary'} hover:bg-hovercolor text-white font-medium px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center`}
                        >
                            {loading ? (
                                <span className="spinner"></span>  // Spinner icon
                            ) : (
                                "ログイン"
                            )}
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
