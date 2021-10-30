import React from 'react'

export default function BenefitsSection() {
    return (
        <section className="mt-24 pt-12 pb-16 px-4 w-full h-screen pt-12 flex align-middle bg-gray-50">
        <div className=" max-w-4xl m-auto">
          <h2 className="text-5xl font-bold title-font mb-32 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-400 to-purple-600">What are the benefits?</h2>
          <div className="flex max-w-sm mb-16 mx-auto text-center border-b-2">
            <div className="w-1/2 pb-2 border-b-4 border-blue-600">
              <button className="hover:text-blue-600">For Suppliers</button>
            </div>
            <div className="w-1/2 pb-2">
              <button className="hover:text-blue-600">For Retailers</button>
            </div>
          </div>
          <div className="flex flex-wrap -mx-32 gap-8 justify-center text-center">
            <div className="lg:w-80 mb-8 lg:mb-0 bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-xl shadow-lg">
                <div className="bg-gradient-to-r from-indigo-300 to-purple-300 p-12 rounded-full w-8 h-8 mx-auto">
              <svg className="text-white w-8 h-8 mx-auto flex place-content-center " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              </div>
              <h3 className="text-2xl my-3 font-semibold font-heading">Process your orders instantly</h3>
              <p className="text-gray-400 leading-relaxed">Get your orders instantly at your warehouse where they can pack and deliver the item faster.</p>
            </div>
            <div className="lg:w-80 mb-8 lg:mb-0 bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-xl shadow-lg">
              <svg className="text-blue-600 w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg>
              <h3 className="text-2xl my-3 font-semibold font-heading">Improve your sales channel</h3>
              <p className="text-gray-400 leading-relaxed">Best in class technology to help your sales reps to sell more and the logistics team to deliver faster.
              </p>
            </div>
            <div className="lg:w-80 mb-8 lg:mb-0 bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-xl shadow-lg">
              <svg className="text-blue-600 w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              <h3 className="text-2xl my-3 font-semibold font-heading">Increase your basket size</h3>
              <p className="text-gray-400 leading-relaxed">vyap helps you to introduce new products, market your promotions, and fill voids to help you drive more revenue.</p>
            </div>
          </div>
        </div>
      </section>
    )
}
