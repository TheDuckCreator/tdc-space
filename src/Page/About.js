import React, { useState, useEffect } from 'react'
import Hero from '../Component/Hero'
import config from '../conf.json'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import coverPhoto from '../Asset/cover.png'

export default function About(params) {
  const [content, setContent] = useState('')

  useEffect(() => {
    axios.get(config.apiurl + '/' + 3).then((articles) => {
      let _article = articles.data
      console.log(_article)
      let statedContent = (
        <div>
          <Helmet>
            <title>{_article.Title} - TDC-Space</title>
            <meta charSet="utf-8" />
            <meta name="description" content={_article.Content} />
            <meta property="og:title" content={_article.Title + 'TDC-Space'} />
            <meta property="og:type" content="text/html" />
            <meta
              property="og:url"
              content="http://space.theduckcreator.in.th"
            />
            <meta property="og:image" content={coverPhoto} />
          </Helmet>
          <h1 className="title is-3"> {_article.Title} </h1>
          <h4 className="has-text-secondary">
            ผู้เขียน {_article.created_by ? _article.created_by.firstname : ''}{' '}
            {_article.created_by ? _article.created_by.lastname : ''} เมื่อ{' '}
            {_article.date}{' '}
            <span className="tag tag-light"> {_article.category} </span>
          </h4>
          <hr />
          <p>
            <ReactMarkdown source={_article.Content} />{' '}
          </p>
        </div>
      )
      setContent(statedContent)
    })

    return () => {}
  }, [])

  return (
    <div>
      <Hero title="About" subtitle="เกี่ยวกับทีดีซีสเปซ" />
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-9">
              {content}
              <br />
              <div
                className="fb-comments"
                data-href="http://space.theduckcreator.in.th/content/"
                data-numposts="5"
                data-width=""
              ></div>
            </div>
            <div className="column is-3">
              <h3 className="title is-4 mitr">ติดตามพวกเราได้ที่</h3>
              <div id="fb-root"></div>

              <div
                className="fb-page"
                data-href={'https://www.facebook.com/theduckcreatorthailand/'}
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
