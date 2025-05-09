import LoginForm from "./LoginForm";

export const LoginPage = () => {
    return (
        <section className="w-full h-full flex gap-8 flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold">Welcome back!</h1>
            <LoginForm />
        </section>
    );
};

export default LoginPage;
