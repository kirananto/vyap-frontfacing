import React from 'react'
import logo from '../images/vyap.png'
import backgroundImg from '../images/background.svg'

export default function HeroLanding() {
    return (
        <section className="py-12 pt-12  flex align-middle px-4 h-screen text-center bg-cover" style={{ backgroundImage: `url(${backgroundImg}` }}>
            <div className="w-full max-w-6xl m-auto">
                <img src={logo} className="w-16 m-auto opacity-90 mb-12" />
                <h1 className="text-8xl mt-2 mb-6 leading-tight font-heading font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-400 to-purple-600">Reach all your retailers in one place</h1>
                <p className="text-2xl mb-8 text-gray-500 leading-relaxed">B2B marketplace app that helps wholesalers connect with local retailers and take orders, update payments, manage deliveries among other things.</p>
                <div>
                    <a className="inline-block mt-3 py-4 px-8 mr-6 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow" href="#"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="ml-2">I'm interested </span>
                    </a>
                    {/* <a className="text-indigo-600 hover:underline" href="#">Learn more</a>  */}
                </div>
            </div>
        </section>
    )
}
