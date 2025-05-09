import InputWithLabel from "@/components/mod-ui/InputWithLabel";
import Modal from "@/components/mod-ui/Modal";
import { Button } from "@/components/ui/button";
import type { StateControl } from "@/types/common";
import { useState, type ChangeEvent, type FC } from "react";

interface CategoryModalProps {
    stateControl: StateControl;
    onCreate: (name: string) => void;
}

const CategoryModal: FC<CategoryModalProps> = ({ stateControl, onCreate }) => {
    const [name, setName] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    };

    const handleClick = () => {
        onCreate(name);
    };

    return (
        <Modal stateControl={stateControl}>
            <div className="w-full h-full flex flex-col gap-4">
                <InputWithLabel label="Name" onChange={handleChange} />
                <Button onClick={handleClick}>Create</Button>
            </div>
        </Modal>
    );
};

export default CategoryModal;
