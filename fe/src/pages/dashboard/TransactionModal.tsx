import DatePicker from "@/components/mod-ui/DatePicker";
import Dropdown from "@/components/mod-ui/Dropdown";
import InputWithLabel from "@/components/mod-ui/InputWithLabel";
import Modal from "@/components/mod-ui/Modal";
import { Button } from "@/components/ui/button";
import type { DropdownOption, StateControl } from "@/types/common";
import { useMemo, useState, type FC } from "react";

interface TransactionModalProps {
    stateControl: StateControl;
}

const TransactionModal: FC<TransactionModalProps> = ({ stateControl }) => {
    const [type, setType] = useState<"Income" | "Outcome">("Income");
    const [date, setDate] = useState<Date | undefined>(new Date());

    const options: DropdownOption[] = useMemo(
        () => [
            {
                label: "Income",
                onClick: () => setType("Income"),
            },
            {
                label: "Outcome",
                onClick: () => setType("Outcome"),
            },
        ],
        []
    );

    const handleSelect = (date: Date | undefined) => {
        setDate(date);
    };

    return (
        <Modal stateControl={stateControl}>
            <div className="w-full h-full flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <Dropdown options={options} label="Type">
                        <div className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none">
                            {type}
                        </div>
                    </Dropdown>
                    <InputWithLabel label="Sum" />
                    <Dropdown options={options} label="Category">
                        <div className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none">
                            {type}
                        </div>
                    </Dropdown>
                    <DatePicker
                        label="Date"
                        date={date}
                        onSelect={handleSelect}
                        trigger={
                            <button className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none">
                                {date
                                    ? date.toLocaleDateString()
                                    : "Pick a date"}
                            </button>
                        }
                    />
                </div>
                <InputWithLabel label="Comment (Optional)" />
                <Button>Create</Button>
            </div>
        </Modal>
    );
};

export default TransactionModal;
