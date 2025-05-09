import { useState } from "react";
import Plus from "@/assets/icons/ui/plus.svg?react";
import Delete from "@/assets/icons/ui/delete.svg?react";
import { Button } from "@/components/ui/button";
import CategoryModal from "./CategoryModal";

const CategorySettings = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>([
        "Taxi",
        "Salary",
        "Entertainment",
    ]);

    const handleClick = () => {
        setOpen(true);
    };

    const handleCreate = (newCategory: string) => {
        setCategories((categories) => [...categories, newCategory]);
        setOpen(false);
    };

    const handleDelete = (category: string) => {
        const filteredCategories: string[] = categories.filter(
            (cat: string) => cat !== category
        );
        setCategories(filteredCategories);
    };

    return (
        <>
            <section className="w-full flex flex-col p-4 gap-4">
                <div className="w-full flex justify-between items-center">
                    <h1 className="font-semibold text-2xl">Categories</h1>
                    <Button onClick={handleClick}>
                        <Plus className="w-4 h-4" />
                        Create
                    </Button>
                </div>
                <div className="w-full flex flex-col gap-2">
                    {categories.map((category: string) => (
                        <div
                            key={category}
                            className="w-full flex justify-between items-center border-b border-solid border-b-border p-2"
                        >
                            <h1>{category}</h1>
                            <div>
                                <Delete
                                    className="w-4 h-4 text-red-200 hover:text-red-400 active:text-red-400 active:scale-150 transition-all"
                                    onClick={() => handleDelete(category)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CategoryModal
                stateControl={{ open, setOpen }}
                onCreate={handleCreate}
            />
        </>
    );
};

export default CategorySettings;
