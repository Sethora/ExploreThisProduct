import React from 'react';
import styles from '../styles/slide.module.css';

const Slide = (props) => {
  const handleClick = () => {
    const memberId = props.image.Member_id;
    const url = props.image.Url;
    const items = props.image.Items_used;
    props.imageClick(memberId, url, items);
    props.getMember();
    props.getProducts(items);
  };

  return (
    <a className={styles.image_slide} ><img src={props.image.Url} onClick={handleClick} height="164px" width="164px"></img></a>
  );
};

export default Slide;