
import axios from "axios";
const KEY_URL = "39872924-85aaaf490e1b4ae0c12b933b4"
axios.defaults.baseURL = 'https://pixabay.com/api/';


async function fetchImg (query, page, perPage) {

  
      const response = await axios.get(`?key=${KEY_URL}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
  console.log(response.data);
      
     return response.data;
    
      
  }
      
  export { fetchImg  } ;