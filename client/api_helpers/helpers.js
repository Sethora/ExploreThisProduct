import axios from 'axios';

export var getImages = (id) => {
  return axios.get(`/api/items/images/${id}`)
    .then((response)=> {
      return response.data;
    })
    .catch((error)=>{
      console.log(error);
    });
};