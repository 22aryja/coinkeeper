const dummy = [
    { type: "income", value: 1200 },
    { type: "outcome", value: 300 },
    { type: "income", value: 450 },
    { type: "outcome", value: 120 },
    { type: "income", value: 800 },
    { type: "outcome", value: 250 },
    { type: "income", value: 600 },
    { type: "outcome", value: 100 },
];

const LastOperationts = () => {
    return (
        <div className="w-full flex flex-col p-4 gap-4">
            <h1>Last Operations</h1>
            <div className="flex flex-col gap-2">
                {dummy.map((item, index) => (
                    <div key={index} className="flex w-full justify-between">
                        <h2>{item.type}</h2>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LastOperationts;
