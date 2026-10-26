import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

/**
 * Reusable "Forgot password" card.
 *
 * The component does NOT know about your API. You pass `onSubmit`,
 * an async function that receives the entered value (email) and
 * throws if the request fails.
 *
 * <ForgotPassword onSubmit={(email) => forgotPassword({ email })} />
 */
const ForgotPassword = ({
    onSubmit,
    title = "Forgot password?",
    description = "Enter your email and we'll send you a link to reset your password.",
    label = "Email",
    placeholder = "Enter your email",
    inputType = "email",
    submitText = "Send reset link",
    loadingText = "Sending...",
    successTitle = "Check your email",
    successMessage = (value) =>
        `If an account exists for ${value}, you'll receive a password reset link shortly.`,
    backTo = "/login",
    backText = "Back to login",
    className = "",
}) => {
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await onSubmit(value.trim());
            setSent(true);
        } catch (error) {
            toast.error(
                error?.response?.data?.message ||
                    "Could not send reset link. Please try again."
            );
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setSent(false);
        setValue("");
    };

    return (
        <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
            {sent ? (
                <div className="text-center" role="status">
                    <h1 className="text-3xl font-bold text-slate-800 mb-3">
                        {successTitle}
                    </h1>

                    <p className="text-sm text-gray-600 mb-6">
                        {typeof successMessage === "function"
                            ? successMessage(value)
                            : successMessage}
                    </p>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="text-sm text-blue-600 font-semibold hover:underline"
                    >
                        Use a different email
                    </button>
                </div>
            ) : (
                <>
                    <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">
                        {title}
                    </h1>

                    <p className="text-sm text-center text-gray-600 mb-6">
                        {description}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="forgot-input"
                                className="text-sm text-gray-600"
                            >
                                {label}
                            </label>

                            <input
                                id="forgot-input"
                                type={inputType}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder={placeholder}
                                required
                                autoComplete={inputType === "email" ? "email" : "username"}
                                className="mt-1 w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 rounded-lg transition"
                        >
                            {loading ? loadingText : submitText}
                        </button>
                    </form>
                </>
            )}

            <p className="text-center text-sm mt-6 text-gray-600">
                <Link to={backTo} className="text-blue-600 font-semibold">
                    {backText}
                </Link>
            </p>
        </div>
    );
};

export default ForgotPassword;
