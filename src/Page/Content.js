import React, { useState, useEffect } from 'react'
import Hero from '../Component/Hero'
import config from '../conf.json'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import coverPhoto from '../Asset/cover.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function Content(params) {
  const [content, setContent] = useState('')
  const id = useParams().id

  useEffect(() => {
    axios.get(config.apiurl + '/' + id).then((articles) => {
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
  }, [id])

  return (
    <div>
      <Hero title="TDC-Space" subtitle="ขอให้เป็ดมีพื้นที่" />
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-9">
              {content}
              <div className="columns">
                <div className="column is-2">
                  <button
                    className="button is-info is-small "
                    href={
                      'https://www.facebook.com/sharer/sharer.php?u=http://space.theduckcreator.in.th/content/' +
                      id +
                      ';src=sdkpreparse'
                    }
                  >
                    {' '}
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ marginRight: '2px' }}
                    />
                    Share
                  </button>
                </div>
                <div className="column is-1">
                  <button
                    className="button is-info is-small "
                    href="https://twitter.com/intent/tweet"
                  >
                    {' '}
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ marginRight: '2px' }}
                    />
                    Tweet
                  </button>
                </div>
              </div>

              <br />
              <div
                className="fb-comments"
                data-href={'http://space.theduckcreator.in.th/content/' + id}
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
