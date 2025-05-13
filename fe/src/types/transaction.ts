export interface Transaction {
    id: number;
    title: string;
    amount: number;
    date: string | Date;
    type: TransactionType;
    categoryId: number;
}

export type TransactionType = "INCOME" | "EXPENSE";

export interface Balance {
    balance: number;
}

export type CreateTransaction = Omit<Transaction, "id">;