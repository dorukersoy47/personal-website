export default function Extracurricular() {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Extracurricular</h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        What I like to do outside of classes.
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-12">
                    {/* Game Development Section */}
                    <section className="bg-dark-gray/50 rounded-xl p-6 md:p-8 border border-white/10">
                        <h2 className="text-2xl md:text-3xl font-bold text-light-purple mb-6">Game Development</h2>
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                                I spend a lot of time on game development, both through student societies and personal projects. 
                                It is where I combine programming, design, and problem solving while working with other people.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-white mb-2">Game Jams</h3>
                                    <p className="text-sm text-gray-300">
                                        I regularly join game jams to build small games in a short time, experiment with new ideas, and learn from other teams.
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-white mb-2">Personal Projects</h3>
                                    <p className="text-sm text-gray-300">
                                        Outside of jams, I work on my own prototypes to try out mechanics, tools, and systems that I find interesting.
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-white mb-2">UCL Game Dev Society</h3>
                                    <p className="text-sm text-gray-300">
                                        I am currently the president of the UCL Game Development Society, organising in workshops, events, and collaborative projects.
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-white mb-2">Godot Development</h3>
                                    <p className="text-sm text-gray-300">
                                        I use Godot engine for 2D and 3D game development, exploring its unique node-based architecture and GDScript.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sports Section */}
                    <section className="bg-dark-gray/30 rounded-xl p-6 md:p-8 border border-white/10">
                        <h2 className="text-2xl md:text-3xl font-bold text-light-purple mb-6">Sports</h2>
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                                Sports are a steady part of my week and help me keep a clear routine outside of work and projects.
                                I like activities that are both social and physically demanding.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                                <div className="text-center p-4 bg-white/5 rounded-lg">
                                    <h3 className="text-lg font-semibold text-white mb-2">Bouldering</h3>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-lg">
                                    <h3 className="text-lg font-semibold text-white mb-2">Football</h3>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-lg">
                                    <h3 className="text-lg font-semibold text-white mb-2">Basketball</h3>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-lg">
                                    <h3 className="text-lg font-semibold text-white mb-2">Volleyball</h3>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-lg">
                                    <h3 className="text-lg font-semibold text-white mb-2">Calisthenics</h3>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-lg">
                                    <h3 className="text-lg font-semibold text-white mb-2">Track and Field</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Music Section */}
                    <section className="bg-gradient-to-r from-dark-gray/40 to-dark-gray/20 rounded-xl p-6 md:p-8 border border-white/10">
                        <h2 className="text-2xl md:text-3xl font-bold text-light-purple mb-6">Music</h2>
                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed">
                                Music is a simple way for me to switch off from work and focus on something creative at my own pace.
                            </p>
                            
                            {/* Instruments */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Instruments</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                        <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                                        <div>
                                            <span className="text-white font-medium">Piano</span>
                                            <p className="text-xs text-gray-400">
                                                I have played piano for several years and like learning pieces from different styles.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                        <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                                        <div>
                                            <span className="text-white font-medium">Guitar</span>
                                            <p className="text-xs text-gray-400">
                                                I play guitar mainly for fun and enjoy learning new chords and songs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
