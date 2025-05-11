import type { FC, ReactElement, ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface PopoverWindowProps {
    children: ReactNode;
    trigger: ReactElement;
}

const PopoverWindow: FC<PopoverWindowProps> = ({
    children,
    trigger,
}) => {
    return (
        <Popover>
            <PopoverTrigger asChild>{trigger}</PopoverTrigger>
            <PopoverContent>{children}</PopoverContent>
        </Popover>
    );
};

export default PopoverWindow;
