import { type FC, type ReactElement } from "react";
import { Calendar } from "../ui/calendar";
import PopoverWindow from "./PopoverWindow";
import { Label } from "../ui/label";

interface DatePickerProps {
    label?: string;
    trigger: ReactElement;
    date: Date | undefined;
    onSelect: (date: Date | undefined) => void;
}

const DatePicker: FC<DatePickerProps> = ({
    trigger,
    date,
    onSelect,
    label,
}) => {
    return (
        <div className="grid w-full items-center gap-1.5">
            {label && <Label className="text-sm font-medium">{label}</Label>}
            <PopoverWindow trigger={trigger}>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onSelect}
                    initialFocus
                />
            </PopoverWindow>
        </div>
    );
};

export default DatePicker;
