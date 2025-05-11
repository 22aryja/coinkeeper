import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
        localStorage.removeItem("coinkeeper-user");
    };

    return (
        <section className="w-full flex flex-col p-4 gap-4">
            <div className="w-full flex justify-between items-center">
                <h1 className="font-semibold text-2xl">Logout</h1>
                <Button variant="destructive" onClick={handleClick}>
                    <LogOutIcon /> Logout
                </Button>
            </div>
        </section>
    );
};

export default LogOut;
