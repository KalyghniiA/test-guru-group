import Slider from '../slider-img/slider-img';
import styles from './card.module.css';
import { Apartment as ApartmentType } from '../../types/apartments';
import { ImageMock } from '../../mock/mock';
import { useState } from 'react';
import classNames from 'classnames';

type CardDataProps = {
  cardData: ApartmentType;
};

function Card({ cardData }: CardDataProps): JSX.Element {
  const { oldPrice, price, title, locality, date, seen } = cardData;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCompare, setIsCompare] = useState(false);

  return (
    <section
      className={classNames(styles.card, {
        [styles.cardSeen]: seen,
      })}
    >
      <div className={styles.sliderContainer}>
        <Slider images={ImageMock} name={title} />
        <div className={styles.buttonsContainer}>
          <button
            className={styles.button}
            onClick={() => {
              setIsCompare(!isCompare);
            }}
          >
            <svg
              className={classNames(styles.buttonSvg, {
                [styles.buttonSvgActive]: isCompare,
              })}
            >
              <use xlinkHref="#compare" />
            </svg>
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setIsFavorite(!isFavorite);
            }}
          >
            <svg
              className={classNames(styles.buttonSvg, {
                [styles.buttonSvgActive]: isFavorite,
              })}
            >
              <use xlinkHref="#like" />
            </svg>
          </button>
        </div>
      </div>
      <article className={styles.cardDescription}>
        <div className={styles.priceContainer}>
          <span className={styles.oldPrice}>{oldPrice} ₽</span>
          <span className={styles.newPrice}>{price} ₽</span>
        </div>
        <div className={styles.advantageContainer}>
          <span>
            <svg className={styles.advantageDelivery}>
              <use xlinkHref="#car" />
            </svg>
          </span>
          <span>
            <svg className={styles.advantageProtection}>
              <use xlinkHref="#guarantee" />
            </svg>
          </span>
        </div>
        <h3 className={styles.tradeName}>{title}</h3>
        <span className={styles.city}>{locality}</span>
        <span className={styles.date}>{date}</span>
      </article>
    </section>
  );
}

export default Card;
