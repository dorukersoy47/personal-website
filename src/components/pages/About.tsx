export default function About() {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        Get to know me a little better.
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-12">

                    {/* Who I Am Section */}
                    <section className="bg-dark-gray/50 rounded-xl p-6 md:p-8 border border-white/10">
                        <h2 className="text-2xl md:text-3xl font-bold text-light-purple mb-6">Who I am?</h2>
                        <div className="text-gray-300 leading-relaxed">
                            <p>
                                I’m Doruk, a student who enjoys building things, learning new skills, and taking on projects that challenge me creatively and technically. 
                                I spend my time working on personal projects, contributing to student communities, and exploring any area that I find interesting.
                            </p>
                        </div>
                    </section>

                    {/* Places I've Lived Section */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-light-purple mb-6">Places I've lived</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Istanbul */}
                            <div className="bg-dark-gray/30 rounded-lg p-6 border border-white/5">
                                <h3 className="text-xl font-semibold text-white mb-4">Istanbul</h3>
                                <div className="text-gray-300">
                                    <p>
                                        I grew up in Istanbul, where I started getting into personal projects, technology, and creative hobbies.
                                    </p>
                                </div>
                            </div>

                            {/* London */}
                            <div className="bg-dark-gray/30 rounded-lg p-6 border border-white/5">
                                <h3 className="text-xl font-semibold text-white mb-4">London</h3>
                                <div className="text-gray-300">
                                    <p>
                                        I currently live in London, a place that has given me new opportunities, communities, and experiences to learn from.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Professional Interests Section */}
                    <section className="bg-dark-gray/30 rounded-xl p-6 md:p-8 border border-white/10">
                        <h2 className="text-m md:text-3xl font-bold text-light-purple mb-6">My interests</h2>
                        <p className="text-l md:text-l font-bold mb-6">See more on extracurriculars page...</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">

                            {/* Game Dev */}
                            <div className="text-center p-4 bg-white/5 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">Game Dev</h4>
                                <p className="text-sm text-gray-300">
                                    I enjoy making small games, participating in jams, and working with others on creative projects.
                                </p>
                            </div>

                            {/* Software/Projects */}
                            <div className="text-center p-4 bg-white/5 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">Projects</h4>
                                <p className="text-sm text-gray-300">
                                    I like building tools, interfaces, and experimental ideas that help me learn and try new things.
                                </p>
                            </div>

                            {/* Sports */}
                            <div className="text-center p-4 bg-white/5 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">Sports</h4>
                                <p className="text-sm text-gray-300">
                                    I am a fond of sports in general. Currently,  I am doing bouldering, football, basketball, volleyball, and calisthenics.
                                </p>
                            </div>

                            {/* Music */}
                            <div className="text-center p-4 bg-white/5 rounded-lg">
                                <h4 className="font-semibold text-white mb-2">Music</h4>
                                <p className="text-sm text-gray-300">
                                    I probably listen to music when I am not sleeping. Also, I play piano and guitar and enjoy learning new pieces in my free time.
                                </p>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}