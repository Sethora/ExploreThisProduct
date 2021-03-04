import React from 'react';
import styles from '../styles/slide.module.css';

const Slide = ({image, imageClick, getMember, getProducts}) => {

  const handleClick = () => {
    const memberId = image.Member_id;
    const url = image.Url;
    const items = image.Items_used;
    imageClick(memberId, url, items);
    getMember();
    getProducts(items);
  };

  return (
    <a className={styles.image_slide} >
      <img src={image.Url}
        onClick={handleClick}
        height="164px"
        width="164px">
      </img>
    </a>
  );
};


export default Slide;