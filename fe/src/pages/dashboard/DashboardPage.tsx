import DashboardHeader from "./DashboardHeader";
import LastOperationts from "./LastOperationts";

export const DashboardPage = () => {
    return (
        <section className="w-full h-full flex flex-col">
            <DashboardHeader />
            <LastOperationts />
        </section>
    );
};

export default DashboardPage;
