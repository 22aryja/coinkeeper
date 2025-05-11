import type { DropdownOption } from "@/types/common";
import { useId, type ReactNode } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Label } from "@radix-ui/react-label";

type DropdownProps = {
    label?: string;
    children: ReactNode;
    options: DropdownOption[];
};

export const Dropdown: React.FC<DropdownProps> = ({
    children,
    options,
    label,
}) => {
    return (
        <DropdownMenu>
            <div className="grid w-full items-center gap-1.5">
                {label && (
                    <Label className="text-sm font-medium">{label}</Label>
                )}
                <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            </div>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    {options.map((option: DropdownOption) => (
                        <DropdownMenuItem
                            key={option.label}
                            onClick={option.onClick}
                        >
                            {option.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};


export default Dropdown;
