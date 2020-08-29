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
      let reversedContent = _.reverse(articles.data)
      let statedContent = _.map(reversedContent, (_article) => {
        let truncatedContent = _.truncate(_article.Content, { length: 200 })
        console.log(_article.Content)
        return (
          <div>
            <Link className="has-text-link mitr" to={'/content/' + _article.id}>
              <h2> # {_article.Title} </h2>{' '}
            </Link>
            <p className="feature-text">
              <ReactMarkdown
                source={truncatedContent}
                allowedTypes={['paragraph', 'html', 'text']}
              />{' '}
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
            <div className="column is-9">
              <h2 className="title is-3 mitr"> {'>> Latest'}</h2>
              {content}
            </div>
            <div className="column is-3">
              <h3 className="title is-4 mitr">ติดตามพวกเราได้ที่</h3>
              <div id="fb-root"></div>

              <div
                className="fb-page"
                data-href="https://www.facebook.com/theduckcreatorthailand"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/theduckcreatorthailand"
                  class="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/theduckcreatorthailand">
                    The Duck Creator
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
