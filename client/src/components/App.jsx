import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ExploreThisProduct from './ETPModule.jsx';
import {getImages} from '../../api_helpers/helpers.js';


const App = () => {
  const [memberImages, setMemberImages] = useState([]);
  const [hasData, setHasData] = useState(true);

  useEffect(() => {
    const url = window.location.href.split('/');
    const candidateId = url[url.length - 1];
    const id = (isNaN(Number(candidateId)) || candidateId === '') ? 2 : Number(candidateId);
    getImages(id)
      .then(imageData => {
        setMemberImages(imageData);
      })
      .catch((error)=>{
        console.log(error);
      });
  });

  return (
    <div>
      {hasData ?
        <ExploreThisProduct images={memberImages}/> : null
      }
    </div>
  );
};

export default App;