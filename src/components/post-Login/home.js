import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";


import "./home.css"
import NavScrollExample from "../navbar4";
// import img1 from '../images/like.png'



const HomePage = () => {
  

  
  const [insfom, setInform] = useState([]);

  const [filteredHostels, setFilteredHostels] = useState([]);

  
 
  useEffect(() => {
    
    handleClick();
  }, []);
  const handleClick = () => {
    axios
      .get(`https://json-server-hostel-finder.onrender.com/api/users`)
      .then((response) => {
        setInform(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  
  const handleSearch = (searchTerm) => {
    if (typeof searchTerm === 'string') {
      const filteredHostels = insfom.filter(
        (hostel) =>
          hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hostel.price.toString().includes(searchTerm)
      );
      setFilteredHostels(filteredHostels);
    }
  };



  // const handleSearch = (searchTerm) => {
  //   if (typeof searchTerm === 'string') {
  //     const searchTermLowerCase = searchTerm.toLowerCase();
  
  //     // Filter by name or price
  //     const filteredHostelsByNameOrPrice = insfom.filter(
  //       (hostel) =>
  //         hostel.name.toLowerCase().includes(searchTermLowerCase) ||
  //         hostel.price.toString().includes(searchTermLowerCase)
  //     );
  
  //     // Filter by maximum price (less than or equal to)
  //     const maxPrice = parseFloat(searchTerm);
  //     const filteredHostelsByMaxPrice = insfom.filter(
  //       (hostel) => parseFloat(hostel.price) <= maxPrice
  //     );
  
  //     // Combine both filters
  //     const combinedFilter = filteredHostelsByNameOrPrice.concat(
  //       filteredHostelsByMaxPrice
  //     );
  
  //     setFilteredHostels(combinedFilter);
  //   }
  // };

 

 
 
//   let a1=0
//   const like=()=>{
//     let lb=document.getElementById("likebtn")
    
//       if(a1===0){
//   lb.style.backgroundColor="blue"
//   a1++
//   }
//   else{
//     lb.style.backgroundColor="white"
//     a1--
//   }
// }
// {console.log("data  ",insfom)}
  
  return (
    <>
     

     
      {/* <NavBarPage handleSearch={handleSearch} handleClick={handleClick}/> */}
      <NavScrollExample handleSearch={handleSearch} handleClick={handleClick} />
     
        <div className="parentdiv">
     
       {insfom.length===0?<><h1>Data is loading.......</h1><h5>please wait.... &#128512;</h5></>:(filteredHostels.length > 0 ? filteredHostels : insfom).map(
        
          (value, index) => {
            return (
              <>
                {/* {console.log(insfom)}

                <div>
                  <h1 key={index} className="click2">
                    {value.name}
                  </h1>

                  <Link to={`/hostels/${value.id}`}>
                    <button className="click1"> See More</button>{" "}
                  </Link>

                  <Link to={`/facilities/${value.name}/${value.id}`}>
                    <button onClick={FacPage} className="click">
                      facility pages
                    </button>
                  </Link>
                </div> */}

                {/* stylingpart */}

                <div id="maine" key={index}>
                  <div className="d1home">
                    <p>
                      3 BHK Flat In {value.name}, Kukatpally For Sale In
                      Vasavi Signature
                    </p>
                    <Link>
                      KPHB 5th Phase, {value.place}, Hyderabad, Telangana 500072,
                      India
                    </Link>
                  </div>
                  <div className="d2home">
                    <div className="start">
                      starting at: &nbsp;<div>{value.price}/Month</div>
                    </div>
                    <div className="Availability">
                      Availability :&nbsp;<div> Yes</div>
                    </div>
                  </div>
                  <div className="d3home">
                    <div className="carouseles">
                      <img src={value.image1} className="imagehostel" alt="building images" />
                      <img src={value.image} className="imagehoste2" alt="building images" />
                      
                    </div>
                    
                    <div className="facilitiesbox">
                      <div className="facilities">
                        <div>24/7 Water facility</div>
                        <div>High speed Wifi</div>
                        <div>Hygenic food</div>
                        <div>Form individual to four sharing</div>
                      </div>
                      <div id="buttonsdiv">
                      <Link style={{textDecoration: 'none'}} to={`/hostels/${value.id}`}>
                        <button id="knowmorebtn" >Know More</button>
                        </Link>
                        {/* <button id="likebtn" onClick={like}>
                          <img id="icon" src={img1} alt="iconic"></img>
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              
              </>
            );
          }
        )}
        </div>
      {/* </div> */}
    </>
  );
};

export default HomePage;
