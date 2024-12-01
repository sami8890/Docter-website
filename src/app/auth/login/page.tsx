"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Login: React.FC = () => {
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signIn("credentials", {
            username: "test",
            password: "test123",
            redirect: false,
        });
        router.push("/dashboard");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col space-y-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
                    Login as Test User
                </button>
            </form>
        </div>
    );
};

export default Login;
