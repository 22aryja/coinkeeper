import { api } from "@/requests/requests";
import type { Balance } from "@/types/transaction";
import { memo, useEffect, useState } from "react";

export const DashboardHeader = memo(() => {
    const [balance, setBalance] = useState<number>(0);

    useEffect(() => {
        getBalance();
    }, []);

    const getBalance = async () => {
        const { balance }: Balance = await api.getBalance();
        setBalance(balance);
    };

    return (
        <header className="flex w-full rounded-b-4xl justify-around border shadow-2xs bg-accent-foreground p-2 lg:rounded-b-none">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-accent text-lg font-semibold">Balance</h1>
                <span className="text-accent font-medium">{balance}</span>
            </div>
        </header>
    );
});

export default DashboardHeader;
