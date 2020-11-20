import React from 'react';

const Slide = (props) => {

  const handleClick = () => {
    const memberId = props.image.Member_id
    const url = props.image.Url;
    const items = props.image.Items_used
    props.imageClick(memberId, url, items)
  }

  return (
    <a className="imageSlide" ><img src={props.image.Url} onClick={handleClick} height="164px" width="164px"></img></a>
  )
}

export default Slide;