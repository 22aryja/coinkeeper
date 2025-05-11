export type StateControl = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export type DropdownOption = {
    label: string;
    onClick: () => void;
};