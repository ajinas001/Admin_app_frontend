import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
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
        disableNavigation();
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dummyEmail = "admin.s12345@allright.com";
        const dummyPassword = "password1234";

        if (email === dummyEmail && password === dummyPassword) {
           
            setLoading(true);
            setTimeout(() => {
                localStorage.setItem("isLoggedIn", "true");
                navigate("/dashboard", { replace: true });
            }, 2000);
        } else {
            toast.error("ログイン情報が正しくありません。", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center w-full h-screen z-10 bg-background">
                <div className="bg-background px-4 sm:px-6 md:px-3 lg:px-0 w-full max-w-[420px] mb-6 md:mb-12">
                    <h2 className="text-center text-2xl md:text-4xl font-semibold mb-4 text-textPrimary">
                        ログイン
                    </h2>
                    <form onSubmit={handleSubmit}>
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
                                    className={`w-full h-[44px] px-2 border rounded-md focus:ring-1 focus:ring-primary focus:outline-none text-textPrimary ${showPassword ? 'text-[16px]' : 'text-[16px] md:text-[32px] '} caret-primary`}
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
                        <button
                            type="submit"
                            disabled={loading} 
                            className={`w-full h-[48px] ${loading ? 'bg-hovercolor' : 'bg-primary'} hover:bg-hovercolor text-white font-medium px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center`}
                        >
                            {loading ? (
                                <span className="spinner"></span> 
                            ) : (
                                "ログイン"
                            )}
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-textPrimary">
                        パスワードをお忘れの場合
                    </p>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Login;
