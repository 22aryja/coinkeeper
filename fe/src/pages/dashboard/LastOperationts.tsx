import { api } from "@/requests/requests";
import type { CreateTransaction, Transaction } from "@/types/transaction";
import { memo, useEffect, useState } from "react";
import Delete from "@/assets/icons/ui/delete.svg?react";
import Edit from "@/assets/icons/ui/edit.svg?react";
import TransactionModal from "./TransactionModal";

// const dummyTransactions: Transaction[] = [
//     {
//         id: 1,
//         title: "Monthly Salary",
//         amount: 5000,
//         date: "2025-05-01",
//         type: "INCOME",
//         categoryId: 1,
//     },
//     {
//         id: 2,
//         title: "Groceries at Market",
//         amount: 150.75,
//         date: "2025-05-03",
//         type: "EXPENSE",
//         categoryId: 2,
//     },
//     {
//         id: 3,
//         title: "Freelance Work",
//         amount: 1200,
//         date: "2025-05-05",
//         type: "INCOME",
//         categoryId: 3,
//     },
//     {
//         id: 4,
//         title: "Electricity Bill",
//         amount: 90.5,
//         date: "2025-05-07",
//         type: "EXPENSE",
//         categoryId: 4,
//     },
//     {
//         id: 5,
//         title: "Dinner Out",
//         amount: 60,
//         date: "2025-05-10",
//         type: "EXPENSE",
//         categoryId: 5,
//     },
// ];

const LastOperationts = memo(() => {
    const [transactions, setTransactions] =
        useState<Transaction[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedTransaction, setSelectedTransaction] = useState<
        CreateTransaction | undefined
    >(undefined);

    useEffect(() => {
        getTransactions();
    }, []);

    const getTransactions = async () => {
        const transactions: Transaction[] = await api.getTransactions();
        setTransactions(transactions);
    };

    const handleEdit = (transaction: Transaction) => () => {
        setOpen(true);
        const { id, date, ...rest } = transaction;
        setSelectedTransaction({ date: new Date(date), ...rest });
    };

    const handleDelete = (id: number) => () => {
        const filteredTransaction: Transaction[] = transactions.filter(
            (transaction: Transaction) => transaction.id !== id
        );
        setTransactions(filteredTransaction);
    };

    return (
        <>
            <div className="w-full flex flex-col gap-4 justify-end">
                <h1 className="text-lg font-semibold pl-4">Last Operations</h1>
                <div className="flex flex-col gap-2 p-4 border border-solid border-border rounded-2xl">
                    <div className="flex w-full justify-between border-b border-solid border-border p-2">
                        <h2>Type</h2>
                        <span>Sum</span>
                        <span>Date</span>
                        <span>Actions</span>
                    </div>
                    {transactions.length !== 0 ? (
                        <div className="flex flex-col overflow-y-auto max-h-64">
                            {transactions.map((transaction: Transaction) => (
                                <div
                                    key={transaction.id}
                                    className="flex w-full justify-between p-4 border-b border-solid border-border"
                                >
                                    <h2>{transaction.type}</h2>
                                    <span>{transaction.amount}</span>
                                    <span>
                                        {(
                                            transaction.date as Date
                                        ).toLocaleString()}
                                    </span>
                                    <div className="flex gap-2 items-center">
                                        <Edit
                                            className="w-4 h-4 cursor-pointer transition-all hover:scale-125"
                                            onClick={handleEdit(transaction)}
                                        />
                                        <Delete
                                            className="w-4 h-4 cursor-pointer transition-all hover:scale-125"
                                            onClick={handleDelete(
                                                transaction.id
                                            )}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full flex justify-center h-full items-center">
                            No transactions yet...
                        </div>
                    )}
                </div>
            </div>

            <TransactionModal
                stateControl={{ open, setOpen }}
                transaction={selectedTransaction}
            />
        </>
    );
});

export default LastOperationts;
