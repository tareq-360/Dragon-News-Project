
const AboutUsPage = () => {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-10">
            {/* Header Section */}
            <div className="text-center border-b pb-8 mb-8">
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">About The Dragon News</h1>
                <p className="text-lg italic text-gray-600">"Journalism Without Fear or Favour"</p>
            </div>

            {/* Our Mission */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to <span className="font-semibold">The Dragon News</span>, your trusted destination for unbiased, accurate, and timely global news reporting. Founded on the core principles of integrity, accuracy, and journalistic independence, we strive to bring you stories that matter most—free from corporate influence or political bias.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    From breaking global monetary updates and international politics to sports updates, entertainment, and cultural reporting, we aim to empower our readers with the knowledge they need to navigate an ever-changing world.
                </p>
            </section>

            {/* Core Values */}
            <section className="mb-10 bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Core Principles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-l-4 border-slate-700 pl-4">
                        <h3 className="font-bold text-lg mb-1">Uncompromising Truth</h3>
                        <p className="text-sm text-gray-600">Fact-checked reporting held to the highest standard of verification.</p>
                    </div>
                    <div className="border-l-4 border-slate-700 pl-4">
                        <h3 className="font-bold text-lg mb-1">Global Perspective</h3>
                        <p className="text-sm text-gray-600">Covering international news, economic policies, world events, and culture.</p>
                    </div>
                    <div className="border-l-4 border-slate-700 pl-4">
                        <h3 className="font-bold text-lg mb-1">Reader First</h3>
                        <p className="text-sm text-gray-600">Delivering essential stories cleanly, transparently, and without clutter.</p>
                    </div>
                </div>
            </section>

            {/* What We Cover */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Cover</h2>
                <p className="text-gray-700 mb-4">
                    Our dedicated editorial teams deliver coverage across key desks:
                </p>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                    <li className="bg-gray-100 py-3 rounded font-medium text-gray-700">Breaking News</li>
                    <li className="bg-gray-100 py-3 rounded font-medium text-gray-700">International</li>
                    <li className="bg-gray-100 py-3 rounded font-medium text-gray-700">Sports & Culture</li>
                    <li className="bg-gray-100 py-3 rounded font-medium text-gray-700">Arts & Entertainment</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUsPage;