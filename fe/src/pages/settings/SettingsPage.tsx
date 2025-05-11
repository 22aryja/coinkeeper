import CategorySettings from "./components/CategorySettings";
import LogOut from "./components/LogOut";

const SettingsPage = () => {
    return (
        <section className="w-full h-full flex flex-col">
            <CategorySettings />
            <LogOut />
        </section>
    );
};

export default SettingsPage;
