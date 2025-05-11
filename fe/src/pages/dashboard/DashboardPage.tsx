import { Button } from "@/components/ui/button";
import DashboardHeader from "./DashboardHeader";
import LastOperationts from "./LastOperationts";
import Plus from "@/assets/icons/ui/plus.svg?react";
import TransactionModal from "./TransactionModal";
import { useState } from "react";

export const DashboardPage = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <>
            <section className="w-full h-full flex flex-col">
                <DashboardHeader />
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex w-full h-full justify-center items-center">
                        <Button onClick={handleClick}>
                            <Plus className="w-4 h-4" />
                            Create transaction
                        </Button>
                    </div>
                    <LastOperationts />
                </div>
            </section>

            <TransactionModal stateControl={{ open, setOpen }} />
        </>
    );
};

export default DashboardPage;
