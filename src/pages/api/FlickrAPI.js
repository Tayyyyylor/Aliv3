// import axios from "axios";

//  export const getPhotos = async (userId) => {

//     const apiKey = '0573988488c9d5de090353904dd2be0c';
//   const apiUrl = 'https://api.flickr.com/services/rest/';
  
//   try {
//     const response = await axios.get(apiUrl, {
//       params: {
//         method: 'flickr.people.getPhotos',
//         api_key: apiKey,
//         user_id: userId,
//         format: 'json',
//         nojsoncallback: 1,
//       },
//     });
  
//     return response.data.photos.photo;
//   } catch (error) {
//     console.error('Error fetching photos:', error);
//     throw error;
//   }
//   };