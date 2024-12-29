import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PasswordReset() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading ,setLoading]=useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
        localStorage.setItem("isLoggedIn","false")
        disableNavigation();
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("パスワードが一致しません！");
            return;
        }
        if (password.length < 8 || password.length > 20) {
            toast.error("パスワードは8文字以上20文字以内で入力してください。");
            return;
        }
    
        toast.success("パスワードが正常に設定されました！");
        setLoading(true);
        setTimeout(() => navigate("/login", { replace: true }), 2000);
    };
    

    return (
        <>
            <Navbar />
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className="z-[9999] fixed bottom-5 w-full" 
            />
            <div className="flex justify-center items-center w-full h-screen z-10 bg-background">
                <div className="bg-background px-8 lg:px-0 w-auto lg:w-[420px] mb-0 md:mb-12">
                    <h2 className="text-center text-2xl md:text-4xl font-semibold mb-4 text-textPrimary">
                        パスワード設定
                    </h2>
                    <p className="text-center text-sm md:text-md text-textSecondary mb-6 px-0 sm:px-8 lg:mb-12">
                        パスワードを入力後 [設定ボタン] を押してサービスの利用を開始してください。
                    </p>
                    <form onSubmit={handleSubmit}>
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
                            <p className="text-sm text-textPrimary mt-1">
                                半角大文字・小文字・数字を含めた8文字以上20文字以内
                            </p>
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-semibold text-textPrimary"
                            >
                                パスワード確認用
                            </label>
                            <div className="relative mt-1">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`w-full h-[44px] px-2 border rounded-md focus:ring-1 focus:ring-primary focus:outline-none text-textPrimary ${showConfirmPassword ? 'text-[16px]' : 'text-[16px] md:text-[32px] '} caret-primary`}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-2 flex items-center text-sm text-textPrimary"
                                >
                                    {showConfirmPassword ? "隠す" : "表示"}
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
                                " 設定"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PasswordReset;
