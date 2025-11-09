import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", {
                email: email,
                password: password,
            },{withCredentials:true});
            console.log("Response from backend:", response.data);
            alert(response.data.message);
            if(response.status===200){
                navigate("/");
            }
        } catch (err) {
          console.log("Error:",err);
          alert("Login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-md w-[500px] mx-2">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Email"
                        className="w-full p-2 mb-4 border rounded"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="relative mb-6">
                        <input
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            placeholder="Password"
                            className="w-full p-2 pr-10 border rounded"
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-[12px] mb-4">
                            By continuing, you agree to Fetchkart's{" "}
                            <span className="text-blue-500 cursor-pointer">
                                Terms of Use
                            </span>{" "}
                            and{" "}
                            <span className="text-blue-500 cursor-pointer">
                                Privacy Policy
                            </span>
                        </p>
                    </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
                        >
                            Login
                        </button>
                </form>
            </div>
            <div className="absolute bottom-9">
                <p>
                    New customer?
                    <NavLink to="/signup">
                        <span className="text-blue-500 cursor-pointer underline">
                            Start here
                        </span>
                    </NavLink>
                </p>
            </div>
        </div>
    );
}
