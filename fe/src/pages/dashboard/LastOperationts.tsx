const dummy = [
    { type: "income", value: 1200, date: "2025-05-01" },
    { type: "outcome", value: 300, date: "2025-05-02" },
    { type: "income", value: 450, date: "2025-05-03" },
    { type: "outcome", value: 120, date: "2025-05-04" },
    { type: "income", value: 800, date: "2025-05-05" },
    { type: "outcome", value: 250, date: "2025-05-06" },
    { type: "income", value: 600, date: "2025-05-07" },
    { type: "outcome", value: 100, date: "2025-05-08" },
    { type: "outcome", value: 250, date: "2025-05-06" },
    { type: "income", value: 600, date: "2025-05-07" },
    { type: "outcome", value: 100, date: "2025-05-08" },
];

const LastOperationts = () => {
    return (
        <div className="w-full flex flex-col gap-4 justify-end">
            <h1 className="text-lg font-semibold pl-4">Last Operations</h1>
            <div className="flex flex-col gap-2 bg-accent-foreground p-4 rounded-t-4xl">
                <div className="flex w-full justify-between text-accent border-b border-solid border-border p-2">
                    <h2>Type</h2>
                    <span>Sum</span>
                    <span>Date</span>
                </div>
                <div className="flex flex-col gap-2 overflow-y-auto max-h-64">
                    {dummy.map((item, index) => (
                        <div
                            key={index}
                            className="flex w-full justify-between text-accent"
                        >
                            <h2>{item.type}</h2>
                            <span>{item.value}</span>
                            <span>{item.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LastOperationts;
