import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About This Todo App
          </h1>
          <p className="text-indigo-100 text-lg max-w-3xl mx-auto">
            A simple and powerful Todo application to help you plan, track,
            and complete your daily tasks efficiently.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Why This App?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Managing daily tasks can be challenging. This Todo App is built
              to keep things simple, so you can focus on what truly matters.
              Add your tasks, track progress, and stay organized every day.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it’s work, study, or personal goals, this app helps you
              maintain clarity and productivity with a clean and distraction-
              free interface.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Key Features
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                <span className="text-gray-600">
                  Add and manage daily tasks easily
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                <span className="text-gray-600">
                  Mark tasks as completed
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                <span className="text-gray-600">
                  Clean and user-friendly design
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                <span className="text-gray-600">
                  Fast and responsive experience
                </span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Motivation Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Stay Organized. Stay Productive.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Small tasks completed every day lead to big achievements.
            This Todo App is designed to keep you consistent and focused.
          </p>
        </div>
      </section>

    </div>
  )
}
