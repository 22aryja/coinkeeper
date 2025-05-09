import InputWithLabel from "@/components/mod-ui/InputWithLabel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const LoginForm = () => {
    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        e.preventDefault();
    };

    return (
        <form className="flex flex-col gap-4 w-full p-4 md:w-1/3">
            <InputWithLabel label="Login" />
            <InputWithLabel label="Password" type="password" />
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
