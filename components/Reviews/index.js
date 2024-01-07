'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import styles from './index.module.css'

const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].firstChild.clientHeight + 'px'
  }
  slider.on('created', updateHeight)
  slider.on('slideChanged', updateHeight)
}

export default function Reviews({ reviews }) {
  const [isClient, setIsClient] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [AdaptiveHeight],
  )

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return <></>

  return (
    <>
      <div className={`${styles.quoteBlocks} keen-slider`} ref={sliderRef}>
        {reviews.map((quote, i) => {
          return (
            <div key={i} className={`keen-slider__slide`}>
              <figure className={styles.quoteBlock}>
                {quote.text ?
                  <blockquote className={styles.quote}>
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                : <></>}
                <figcaption className={styles.caption}>
                  <Image
                    src={quote.profile_photo_url}
                    width={50}
                    height={50}
                    aria-hidden={true}
                    alt={`Profile photo for ${quote.author_name}`}
                  />
                  <div className={styles.starAndName}>
                    <div className={styles.rating}>
                      {[...new Array(5)].map((arr, index) => {
                        return index < quote.rating ?
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 576 512'
                              key={index}
                            >
                              <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
                            </svg>
                          : <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 576 512'
                              key={index}
                            >
                              <path d='M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z' />
                            </svg>
                      })}
                    </div>
                    <p>- {quote.author_name}</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          )
        })}
      </div>
      <ol className={styles.pageDots}>
        {[...Array(reviews.length)].map((content, i) => {
          const attributes = {
            'aria-label': `Page dot ${i + 1}`,
          }
          if (currentSlide === i) {
            attributes['aria-current'] = 'step'
          }
          return (
            <li
              key={i}
              className={`${styles.dot} ${
                currentSlide === i ? styles.selected : ''
              }`}
              onClick={() => {
                instanceRef.current?.moveToIdx(i)
              }}
              {...attributes}
            ></li>
          )
        })}
      </ol>
    </>
  )
}
