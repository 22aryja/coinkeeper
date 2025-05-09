import InputWithLabel from "@/components/mod-ui/InputWithLabel";
import { Button } from "@/components/ui/button";

export const LoginForm = () => {
    
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        e.preventDefault();
    };

    return (
        <form className="flex flex-col gap-4 w-full p-4">
            <InputWithLabel label="Username" />
            <InputWithLabel label="Password" />
            <Button onClick={handleClick}>Login</Button>
        </form>
    );
};

export default LoginForm;
