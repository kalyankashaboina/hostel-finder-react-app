import React, { useEffect, useState } from 'react'

import axios from 'axios'

function ImagesPaths() {
//   const[Item,SetItem]=useState([])
//   const [loading, setLoading] = useState(true);
//   useEffect(()=>{handleEvent()},[])

//   const handleEvent=()=>{
//     axios.get(`http://localhost:3031/users/1`)
//     .then(response => {
//       SetItem(response.data);
//       setLoading(false); 
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//     });
// };
  return (
  <> 
    <div>ImagesPaths</div>
    {/* <img src={Item.image} alt="no image"/> */}
    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYsq-szAaPbwaZT0EpjX35JFF2TPvYzG1Z5y8kCaaoV9cJxr9ghW2k6xbVWbBb20sKU6RGY3d8Ua409payiIxyRE6kSHA=s1600" alt='googlepics'></img>
    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZquVT4KVgNhz8-cbshZjKO3sX4yJPeTaUpGmKzsLYHW125Po8Kg5P7dcrYXRxrFsGBjRevNhAE1WvNz-3hTt2Zwye7LQ=s1600" alt="googlepics4" />

    <img src='https://th.bing.com/th?id=OIP.twDw1sXK9O2QQzPZoHEg3gHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'></img>
    
    </>
  )
}

export default ImagesPaths