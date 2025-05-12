import type { Credentials, User } from "@/types/auth";
import type { Category } from "@/types/categories";
import type { Stats } from "@/types/stats";
import type { Balance, Transaction } from "@/types/transaction";
import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL + "/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export const api = {
    register: async (creds: Credentials): Promise<User> => {
        const { data } = await API.post<User>("/auth/register", creds);
        return data;
    },

    login: async (creds: Credentials): Promise<string> => {
        const { data } = await API.post<string>("/auth/login", creds);
        return data;
    },

    getCategories: async (): Promise<Category[]> => {
        const { data } = await API.get<Category[]>("/categories");
        return data;
    },

    createCategory: async (category: { name: string }): Promise<Category> => {
        const { data } = await API.post<Category>("/categories", category);
        return data;
    },

    deleteCategory: async (id: number): Promise<void> => {
        await API.delete(`/categories/${id}`);
    },

    getTransactions: async (): Promise<Transaction[]> => {
        const { data } = await API.get<Transaction[]>("/transactions");
        return data;
    },

    createTransaction: async (
        tx: Omit<Transaction, "id">
    ): Promise<Transaction> => {
        const { data } = await API.post<Transaction>("/transactions", tx);
        return data;
    },

    updateTransaction: async (
        id: number,
        tx: Omit<Transaction, "id">
    ): Promise<Transaction> => {
        const { data } = await API.put<Transaction>(`/transactions/${id}`, tx);
        return data;
    },

    deleteTransaction: async (id: number): Promise<void> => {
        await API.delete(`/transactions/${id}`);
    },

    getBalance: async (): Promise<Balance> => {
        const { data } = await API.get<Balance>("/transactions/balance");
        return data;
    },

    getStats: async (params: {
        start: string;
        end: string;
    }): Promise<Stats[]> => {
        const { data } = await API.get<Stats[]>("/stats", { params });
        return data;
    },
};
