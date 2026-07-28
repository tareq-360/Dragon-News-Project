
const CareerPage = () => {
    const openPositions = [
        {
            id: 1,
            title: "Senior Foreign Correspondent",
            category: "International News",
            type: "Full-Time",
            location: "Remote / On-Site",
            description: "Looking for an experienced reporter to cover international policy, geopolitics, and global developments."
        },
        {
            id: 2,
            title: "Sports & Culture Desk Editor",
            category: "Editorial",
            type: "Full-Time",
            location: "Hybrid",
            description: "Manage newsroom workflow, edit incoming stories, and curate daily sports and cultural features."
        },
        {
            id: 3,
            title: "Frontend Web Developer (React & Tailwind)",
            category: "Engineering",
            type: "Full-Time / Remote",
            location: "Remote",
            description: "Join our digital media product team to build fast, responsive, and accessible newsroom user interfaces."
        }
    ];

    return (
        <div className="container mx-auto max-w-4xl px-4 py-10">
            {/* Header */}
            <div className="text-center border-b pb-8 mb-8">
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Build the Future of Independent News</h1>
                <p className="text-lg text-gray-600">Join the team at The Dragon News and uphold journalism without fear or favour.</p>
            </div>

            {/* Why Join Us */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Work With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-slate-800">Editorial Independence</h3>
                        <p className="text-gray-600 text-sm">Work in an environment where truth, journalistic integrity, and storytelling come first.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-slate-800">Flexible Work Culture</h3>
                        <p className="text-gray-600 text-sm">We offer hybrid and remote opportunities for journalists, editors, and engineers worldwide.</p>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Open Roles</h2>
                <div className="flex flex-col gap-4">
                    {openPositions.map((job) => (
                        <div key={job.id} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded font-semibold">{job.category}</span>
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">{job.type}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">{job.description}</p>
                                <span className="text-xs text-gray-400 mt-2 block">📍 {job.location}</span>
                            </div>
                            <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium px-5 py-2.5 rounded text-sm whitespace-nowrap self-start md:self-center">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Spontaneous Application */}
            <section className="bg-slate-100 p-8 rounded-lg text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Don't see a matching position?</h2>
                <p className="text-gray-600 text-sm mb-4">We are always looking for passionate writers, investigative journalists, and creative minds.</p>
                <a href="" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2.5 rounded text-sm">
                    Send Us Your Resume
                </a>
            </section>
        </div>
    );
};

export default CareerPage;