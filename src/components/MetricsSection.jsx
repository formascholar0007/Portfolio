import React from 'react'

function MetricsSection() {
  return (
    <div className="mt-20 md:mt-40 flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto text-center font-Sora px-4">
      <div className="mb-8 md:mb-0 md:mr-8 flex-1">
        <p className="text-4xl md:text-6xl font-bold text-purple-600">14</p>
        <p className="text-zinc-600 text-base md:text-lg">Years of Experience</p>
      </div>
      <div className="mb-8 md:mb-0 md:mr-8 flex-1">
        <p className="text-4xl md:text-6xl font-bold text-purple-600">50+</p>
        <p className="text-zinc-600 text-base md:text-lg">Projects Completed</p>
      </div>
      <div className="mb-8 md:mb-0 md:mr-8 flex-1">
        <p className="text-4xl md:text-6xl font-bold text-purple-600">1.5K</p>
        <p className="text-zinc-600 text-base md:text-lg">Happy Clients</p>
      </div>
      <div className="flex-1">
        <p className="text-4xl md:text-6xl font-bold text-purple-600">14</p>
        <p className="text-zinc-600 text-base md:text-lg">Years of Experience</p>
      </div>
    </div>
  )
}

export default MetricsSection
