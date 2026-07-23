import Link from 'next/link';
const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-center dark:bg-gray-900">
                <div className="max-w-md">
                    {/* Visual Badge */}
                    <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                        404 Error
                    </p>

                    {/* Main Heading */}
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        Page not found
                    </h1>

                    {/* Descriptive Text */}
                    <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="mt-8 flex items-center justify-center gap-x-4">
                        <Link
                            href="/"
                            className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                        >
                            Back to Home
                        </Link>

                        <Link
                            href="/contact"
                            className="text-sm font-semibold text-gray-900 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white transition-colors"
                        >
                            Contact Support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;