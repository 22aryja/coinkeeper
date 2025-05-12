export interface Transaction {
    id: number;
    title: string;
    amount: number;
    date: string;
    type: TransactionType;
    categoryId: number;
}

export type TransactionType = "INCOME" | "EXPENSE";

export interface Balance {
    balance: number;
}
