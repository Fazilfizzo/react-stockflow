import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import PasswordInput from "./PasswordInput";

/**
 * Reusable "Reset password" card. Reads ?token=... from the URL
 * (the link you email the user: /reset-password?token=abc123).
 *
 * <ResetPassword onSubmit={({ token, newPassword }) => resetPassword({ token, newPassword })} />
 */
const ResetPassword = ({
    onSubmit,
    title = "Set a new password",
    minLength = 8,
    redirectTo = "/login",
    className = "",
}) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [loading, setLoading] = useState(false);

    const inputClass =
        "mt-1 w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password.length < minLength) {
            return toast.error(`Password must be at least ${minLength} characters`);
        }
        if (password !== confirm) {
            return toast.error("Passwords do not match");
        }

        try {
            setLoading(true);
            await onSubmit({ token, newPassword: password });
            toast.success("Password updated. Please log in.");
            navigate(redirectTo);
        } catch (error) {
            toast.error(
                error?.response?.data?.message ||
                    "This reset link is invalid or has expired."
            );
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // No token in the URL: the link is broken, so don't show the form
    if (!token) {
        return (
            <div className={`bg-white rounded-2xl shadow-lg p-8 text-center ${className}`}>
                <h1 className="text-3xl font-bold text-slate-800 mb-3">
                    Invalid reset link
                </h1>
                <p className="text-sm text-gray-600 mb-6">
                    This link is missing its token. Request a new one to continue.
                </p>
                <Link to="/forgot-password" className="text-blue-600 font-semibold">
                    Request a new link
                </Link>
            </div>
        );
    }

    return (
        <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
            <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
                {title}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="text-sm text-gray-600">New password</label>
                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter new password"
                        className={inputClass}
                        required
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">Confirm password</label>
                    <PasswordInput
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        placeholder="Re-enter new password"
                        className={inputClass}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 rounded-lg transition"
                >
                    {loading ? "Updating..." : "Update password"}
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
