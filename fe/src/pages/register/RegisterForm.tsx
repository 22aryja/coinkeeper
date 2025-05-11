import InputWithLabel from "@/components/mod-ui/InputWithLabel";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        e.preventDefault();
        localStorage.setItem("coinkeeper-user", "User");
        navigate("/");
    };

    return (
        <form className="flex flex-col gap-4 w-full p-4 md:w-1/3">
            <div className="grid grid-cols-2 gap-4">
                <InputWithLabel label="First Name" />
                <InputWithLabel label="Last Name" />
            </div>

            <InputWithLabel label="Login" />

            <InputWithLabel label="Password" type="password" />
            <InputWithLabel label="Confirm password" type="password" />

            <Button onClick={handleSubmit} type="submit">
                Submit
            </Button>
        </form>
    );
};

export default RegisterForm;
