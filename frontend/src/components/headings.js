import React from "react"

const Headings = ({ title, description }) => {
  return (
    <header className="container mt-8">
      <h1 className="text-6xl font-bold  text-black underline decoration-sky-600 hover:decoration-blue-400">{title}</h1>
      {description && (
        <p className="mt-4 text-2xl text-neutral-500">{description}</p>
      )}
    </header>
  )
}

export default Headings