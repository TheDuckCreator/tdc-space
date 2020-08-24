import React from 'react'
export default function Hero(props) {
  const { title } = props
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title"> {title} </h1>
          <h2 className="subtitle">Primary subtitle</h2>
        </div>
      </div>
    </section>
  )
}
