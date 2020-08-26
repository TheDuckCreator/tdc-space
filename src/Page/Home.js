import React from 'react'
import Hero from '../Component/Hero'
import config from '../conf.json'
import _ from 'lodash'
import axios from 'axios'

export default function Home(params) {
  let collection = axios.get(config.apiurl + '/').then((articles) => {
    return _.map((_article) => {
      return (
        <div>
          <h3 className="title is-3"> {_article.title} </h3>
          <hr />
        </div>
      )
    })
  })

  return (
    <div>
      <Hero title="TDC-Space" subtitle="ขอให้เป็ดมีพื้นที่" />
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-9">{collection}</div>
            <div className="column is-3"></div>
          </div>
        </section>
      </div>
    </div>
  )
}
