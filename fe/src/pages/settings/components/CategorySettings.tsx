import { useEffect, useState } from "react";
import Plus from "@/assets/icons/ui/plus.svg?react";
import Delete from "@/assets/icons/ui/delete.svg?react";
import { Button } from "@/components/ui/button";
import CategoryModal from "./CategoryModal";
import { api } from "@/requests/requests";
import type { Category } from "@/types/categories";

const CategorySettings = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const cats: Category[] = await api.getCategories();
        setCategories(cats);
    };

    const createCategory = async (name: string) => {
        const category: Category = await api.createCategory({
            id: 1,
            name,
            color: "",
            icon: "",
        });
        setCategories((prev: Category[]) => ({ ...prev, category }));
    };

    const deleteCategory = async (id: number) => {
        await api.deleteCategory(id);
    };

    const handleClick = () => {
        setOpen(true);
    };

    const handleCreate = (newCategory: string) => {
        createCategory(newCategory);
        setOpen(false);
    };

    const handleDelete = (categoryId: number) => {
        deleteCategory(categoryId);
        const filteredCategories: Category[] = categories.filter(
            (cat: Category) => cat.id !== categoryId
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
                    {categories.map((category: Category) => (
                        <div
                            key={category.id}
                            className="w-full flex justify-between items-center border-b border-solid border-b-border p-2"
                        >
                            <h1>{category.name}</h1>
                            <div>
                                <Delete
                                    className="w-4 h-4 text-red-200 hover:text-red-400 active:text-red-400 active:scale-150 transition-all"
                                    onClick={() => handleDelete(category.id)}
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
