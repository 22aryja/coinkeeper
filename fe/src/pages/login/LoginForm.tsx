import InputWithLabel from "@/components/mod-ui/InputWithLabel";
import { Button } from "@/components/ui/button";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

type LoginFields = { login: string; password: string };

export const LoginForm = () => {
    const [input, setInput] = useState<LoginFields>({
        login: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange =
        (type: keyof LoginFields) => (e: ChangeEvent<HTMLInputElement>) => {
            setInput((prev) => ({
                ...prev,
                [type]: e.target.value,
            }));
        };

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        e.preventDefault();
        if (input.login === "User" && input.password === "User123") {
            localStorage.setItem("coinkeeper-user", "User");
            navigate("/");
        }
    };

    return (
        <form className="flex flex-col gap-4 w-full p-4 md:w-1/3">
            <InputWithLabel label="Login" onChange={handleChange("login")} />
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
