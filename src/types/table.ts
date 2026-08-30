export interface FilterOption {
    label: string;
    value: string;
}

export interface TableFilter {
    columnId: string;
    label: string;
    placeholder?: string;
    options: FilterOption[];
}
