import React from 'react'
export default function Hero(props) {
  const { title, subtitle } = props
  return (
    <section className="hero is-primary tdc-space-hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title mitr is-1"> {title} </h1>
          <h2 className="subtitle mitr is-4">{subtitle}</h2>
        </div>
      </div>
    </section>
  )
}
