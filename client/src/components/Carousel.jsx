import React from 'react';

const Carousel = (props) => {
  return(
    <div className="carousel">
      <div className="slide" id="set1">
      {props.images.map((item, i)=> {
        if (i > 0 && i <= 5) {
          return <a className="imageSlide" ><img src={item.Url} height="164px" width="164px"></img></a>
          }
      })}
      </div>
      <div className="slide" id="set2">
      {props.images.map((item, i)=> {
        if (i >= 5 && i <= 10) {
          return <a className="imageSlide" ><img src={item.Url} height="164px" width="164px"></img></a>
          }
      })}
      </div>
    </div>

    <aside className="carousel_nav">
      <ol class="nav_list">
        <li class="nav_item">
          <a href="#set1"
            class="nav_button">Go to slide 1</a>
        </li>
        <li class="nav_item">
          <a href="#set2"
            class="nav_button">Go to slide 2</a>
        </li>
      </ol>
    </aside>
  )
}

export default Carousel;
