import { useState, type KeyboardEvent } from "react";
import Button from "../Button";

interface ChatInputProps {
    placeholder?: string;
    onSend: (message: string) => void;
    disabled?: boolean;
}

export default function ChatInput({
    placeholder = "Ask me anything about your career...",
    onSend,
    disabled = false,
}: ChatInputProps) {
    const [value, setValue] = useState("");

    const handleSend = () => {
        const trimmedValue = value.trim();

        if (!trimmedValue || disabled) return;

        onSend(trimmedValue);
        setValue("");
    };

    const handleKeyDown = (
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div className="border border-[#F7F8FA] bg-white rounded-lg px-6 py-4">
            <div className="flex items-center gap-3">
                <input
                    type="text"
                    value={value}
                    disabled={disabled}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className="
                        h-9
                        flex-1
                        font-normal
                        text-sm
                        text-[#262C36]
                        outline-none
                        placeholder:text-[#262C36]
                        placeholder:text-sm
                        placeholder:font-normal
                    "
                />


                <Button text="Send"
                    variant="blue"
                    onClick={handleSend}
                />

            </div>
        </div>
    );
}