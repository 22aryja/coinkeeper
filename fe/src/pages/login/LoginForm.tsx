import InputWithLabel from "@/components/mod-ui/InputWithLabel";
import { Button } from "@/components/ui/button";
import { api } from "@/requests/requests";
import type { Credentials } from "@/types/auth";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [input, setInput] = useState<Credentials>({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange =
        (type: keyof Credentials) => (e: ChangeEvent<HTMLInputElement>) => {
            setInput((prev) => ({
                ...prev,
                [type]: e.target.value,
            }));
        };

    const login = async () => {
        const success: string = await api.login(input);
        localStorage.setItem("coinkeeper-user", success);
        navigate("/");
    };

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        e.preventDefault();
        login();
    };

    return (
        <form className="flex flex-col gap-4 w-full p-4 md:w-1/3">
            <InputWithLabel label="Email" onChange={handleChange("email")} />
            <InputWithLabel
                label="Password"
                type="password"
                onChange={handleChange("password")}
            />
            <Button onClick={handleSubmit} type="submit">
                Login
            </Button>
            <span className="text-sm">
                Haven't registered yet?{" "}
                <Link to="/register" className="text-blue-400">
                    Register
                </Link>{" "}
                here!
            </span>
        </form>
    );
};

export default LoginForm;
