import React, { useState, useEffect } from 'react'
import Hero from '../Component/Hero'
import config from '../conf.json'
import _ from 'lodash'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

export default function Home(params) {
  const [content, setContent] = useState('')
  useEffect(() => {
    axios.get(config.apiurl + '/').then((articles) => {
      let statedContent = _.map(articles.data, (_article) => {
        return (
          <div>
            <Link className="has-text-link title is-3 mitr">
              <h3> # {_article.Title} </h3>{' '}
            </Link>
            <hr />
            <p className="feature-text">
              <ReactMarkdown source={_article.Content} />
            </p>
            <hr />
          </div>
        )
      })
      setContent(statedContent)
    })
    return () => {}
  }, [])

  return (
    <div>
      <Hero title="TDC-Space" subtitle="ขอให้เป็ดมีพื้นที่" />
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-9">{content}</div>
            <div className="column is-3"></div>
          </div>
        </section>
      </div>
    </div>
  )
}
