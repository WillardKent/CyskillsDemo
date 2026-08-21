export type TabItem = {
    id: string;
    label: string;
};

type TabsProps = {
    tabs: TabItem[];
    value: string;
    onChange: (tabId: string) => void;
};

export default function Tabs({
    tabs,
    value,
    onChange,
}: TabsProps) {
    return (
        <div className="w-full border-b border-gray-200">
            <div className="flex">
                {tabs.map((tab) => {
                    const isActive = value === tab.id;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => onChange(tab.id)}
                            className={`relative flex-1 px-4 py-4 text-center text-sm font-medium transition ${isActive
                                ? "text-gray-900"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab.label}

                            {isActive && (
                                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}