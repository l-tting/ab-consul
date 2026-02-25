import React from 'react'

const HeroHome1 = () => {
    return (
        <div>
            <section className="text-center py-24 px-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    We Help Startups Turn Strategy Into Revenue
                </h1>
                <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                    AB Consult partners with growth-stage businesses to optimize revenue,
                    streamline operations, and scale sustainably.
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
                        Book a Strategy Call
                    </button>
                    <button className="border border-white/20 px-6 py-3 rounded-full">
                        Learn More
                    </button>
                </div>
            </section>

        </div>
    )
}

export default HeroHome1
