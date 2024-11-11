// /pages/404.tsx
import Link from "next/link";

const Custom404 = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center p-4">
            <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
                <p className="text-xl text-gray-600 mb-4">
                    The page you are looking for does not exist. It might have been moved or deleted.
                </p>
                <Link href="/" passHref>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Custom404;
