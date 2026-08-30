/**
 * Extracts unique option values from a dataset for use in table filter dropdowns.
 * Deduplicates and sorts alphabetically.
 */
export function getUniqueOptions<TData>(
    data: TData[],
    key: keyof TData
) {
    return Array.from(
        new Set(
            data.map((item) => String(item[key]))
        )
    ).map((value) => ({
        label: value,
        value,
    }));
}

