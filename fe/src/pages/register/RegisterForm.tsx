import InputWithLabel from "@/components/mod-ui/InputWithLabel";
import { Button } from "@/components/ui/button";
import { api } from "@/requests/requests";
import type { Credentials, User } from "@/types/auth";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
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

    const register = async (): Promise<void> => {
        const user: User = await api.register(input);
        localStorage.setItem("coinkeeper-user", JSON.stringify(user));
        navigate("/");
    };

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        e.preventDefault();
        register();
    };

    return (
        <form className="flex flex-col gap-4 w-full p-4 md:w-1/3">
            <div className="grid grid-cols-2 gap-4">
                <InputWithLabel label="First Name" />
                <InputWithLabel label="Last Name" />
            </div>

            <InputWithLabel
                label="Email"
                type="email"
                onChange={handleChange("email")}
            />

            <InputWithLabel
                label="Password"
                type="password"
                onChange={handleChange("password")}
            />
            <InputWithLabel label="Confirm password" type="password" />

            <Button onClick={handleSubmit} type="submit">
                Submit
            </Button>
        </form>
    );
};

export default RegisterForm;
