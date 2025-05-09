import RegisterForm from "./RegisterForm";

export const RegisterPage = () => {
    return (
        <section className="w-full h-full flex flex-col gap-8 justify-center items-center">
            <h1 className="text-4xl font-semibold">Create an account</h1>
            <RegisterForm />
        </section>
    );
};

export default RegisterPage;
