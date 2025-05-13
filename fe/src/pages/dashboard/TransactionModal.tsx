import DatePicker from "@/components/mod-ui/DatePicker";
import Dropdown from "@/components/mod-ui/Dropdown";
import InputWithLabel from "@/components/mod-ui/InputWithLabel";
import Modal from "@/components/mod-ui/Modal";
import { Button } from "@/components/ui/button";
import { api } from "@/requests/requests";
import type { Category } from "@/types/categories";
import type { DropdownOption, StateControl } from "@/types/common";
import type { CreateTransaction } from "@/types/transaction";
import { useEffect, useMemo, useReducer, useState, type FC } from "react";

interface TransactionModalProps {
    stateControl: StateControl;
    transaction?: CreateTransaction;
}

const reducer = (
    state: CreateTransaction,
    action: { type: keyof CreateTransaction | "fill"; payload: unknown }
) => {
    if (action.type === "fill") {
        return action.payload as CreateTransaction;
    } else {
        return {
            ...state,
            [action.type]: action.payload,
        };
    }
};

const initialState: CreateTransaction = {
    title: "",
    amount: 0,
    date: new Date(),
    type: "INCOME",
    categoryId: 0,
};

const TransactionModal: FC<TransactionModalProps> = ({
    stateControl,
    transaction,
}) => {
    const [store, dispatch] = useReducer(reducer, initialState);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        if (transaction) {
            dispatch({ type: "fill", payload: transaction });
        }
    }, [transaction]);

    const createTransaction = async () => {
        const transaction = await api.createTransaction(store);
    };

    const getCategories = async () => {
        const cats: Category[] = await api.getCategories();
        setCategories(cats);
    };

    const typeOptions: DropdownOption[] = useMemo(
        () => [
            {
                label: "Income",
                onClick: () => dispatch({ type: "type", payload: "INCOME" }),
            },
            {
                label: "Expense",
                onClick: () => dispatch({ type: "type", payload: "EXPENSE" }),
            },
        ],
        []
    );

    const categoryOptions: DropdownOption[] = useMemo(
        () =>
            categories.map((category: Category) => ({
                label: category.name,
                onClick: () =>
                    dispatch({ type: "categoryId", payload: category.id }),
            })),
        [categories]
    );

    const handleSelect = (date: Date | undefined) => {
        dispatch({ type: "date", payload: date });
    };

    const foundCategory: Category | undefined = useMemo(
        () =>
            categories.find(
                (category: Category) => category.id === store.categoryId
            ),
        [categories, store.categoryId]
    );

    const handleCreate = () => {
        createTransaction();
        stateControl.setOpen(false);
    };

    return (
        <Modal stateControl={stateControl}>
            <div className="w-full h-full flex flex-col gap-4">
                <InputWithLabel
                    label="Title"
                    value={store.title}
                    onChange={(e) =>
                        dispatch({ type: "title", payload: e.target.value })
                    }
                />

                <div className="grid grid-cols-2 gap-4">
                    <Dropdown options={typeOptions} label="Type">
                        <div className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none">
                            {store.type}
                        </div>
                    </Dropdown>
                    <InputWithLabel
                        label="Sum"
                        type="number"
                        value={store.amount}
                        onChange={(e) =>
                            dispatch({
                                type: "amount",
                                payload: e.target.value,
                            })
                        }
                    />
                    <Dropdown options={categoryOptions} label="Category">
                        <div className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none">
                            {foundCategory ? foundCategory.name : ""}
                        </div>
                    </Dropdown>
                    <DatePicker
                        label="Date"
                        date={store.date as Date | undefined}
                        onSelect={handleSelect}
                        trigger={
                            <button className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none">
                                {store.date
                                    ? (store.date as Date).toLocaleDateString()
                                    : "Pick a date"}
                            </button>
                        }
                    />
                </div>
                <InputWithLabel label="Comment (Optional)" />
                <Button onClick={handleCreate}>
                    {transaction ? "Edit" : "Create"}
                </Button>
            </div>
        </Modal>
    );
};

export default TransactionModal;
