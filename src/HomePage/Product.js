import React from 'react'
import mockup from '../images/mockup3.png'

export default function Product() {
    return (
        <section className="pt-36 pb-16 px-4 w-full min-h-screen section-height pt-12 flex align-middle bg-white">
            <div className="w-full max-w-4xl m-auto">
                <h2 className="text-5xl md:text-6xl sm:text-8xl font-bold title-font mb-32 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-400 to-purple-600">
                We focus on helping you get the job done.
                                    </h2>
                <div className="flex flex-wrap lg:-mx-32 gap-8 justify-center text-center">
                    <img alt="Vyap Product" className="w-full max-w-lg lg:max-w-2xl xl:max-w-4xl" src={mockup} />
                </div>
            </div>
        </section>
    )
}
