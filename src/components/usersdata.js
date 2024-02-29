import React, { useState } from 'react'
import home from "./post-Login/home"

function UserData() {
    const[data,setData]=useState([

          {
            "id":1,
            "name":"Abhilash pg",
            "place":"kbhp rd 1",
            "svgImage":"<Logo/>",
            "image":"https://drive.google.com/uc?id=1EmoNZzZ1_1pHaKuH6x1DKLcoioKeElPI",
            "image1":"https://drive.google.com/uc?id=1SXqxc7ulsf3RchKGoNnP3ww9yeVCymwX",
      
            "image12":"https://drive.google.com/uc?id=1OrV6pyEkVVUtoiJHoh0pibOpExCTtxKs",
            
            "image2":"https://drive.google.com/uc?id=1OrV6pyEkVVUtoiJHoh0pibOpExCTtxKs",
            "image3":"https://drive.google.com/uc?id=1Jvg9F8QA3-JJWzbdY7hhxkCueJqb4lgm",
            "price":6000, 
            "decription":"A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. "
      
      
            
          },
          {
            "id":2,
            "name":"Venus hostel",
            "place":"kphb rd2",
            "image":"https://drive.google.com/uc?id=1NBeoJ9LkNrx3qoGaQhgiMd_wvDFU6tsV",
            "image1":"https://drive.google.com/uc?id=1HwY2kdwD5bs5-tdZh_Ux6R0Vx4FPH5ET",
            "image2":"https://drive.google.com/uc?id=1tS9a7Rsg-hyOt4fX92LvMNwMTvzRHe-H",
            "image3":"https://drive.google.com/uc?id=10YMh1fpDoTtzEyjBeGs7MEtWwnUchiqF",
            "price":4500,
            "decription":"A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. "
      
          },{
            "id":3,
            "name":"Hima pg",
            "place":"kukatpally",
            "image":"https://drive.google.com/uc?id=1eQJZTt6xP4WC22PD8UQ8zPTBFGHdad53",
            "image1":"https://drive.google.com/uc?id=1hWLbqVdDFJIKhroKKwr4-aEBb80diYg3",
            "image2":"https://drive.google.com/uc?id=1ivAFDG4SuHENlOE-olsXqgPvQMaKkG0p",
            "image3":"https://drive.google.com/uc?id=1ZsW7ijWLdwfM8yaU8SsSqzB95Yw_pUOh",
            "price":5000,
             "decription":"A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. "
      
          },
          {
            "id":4,
            "name":"Sarveshvara pg",
            "place":"kbhp",
            "image":"https://drive.google.com/uc?id=1uFDMcHfN1ReVJJcFtzVmRANMHEGI2zZ6",
            "image1":"https://drive.google.com/uc?id=1It4BguA7lPShTRvMkmVE26kgyPC6tLz5",
            "image2":"https://drive.google.com/uc?id=1MLmamBCY6NOv813MUSULR6SMxGFzJoM6",
            "image3":"https://drive.google.com/uc?id=16Fg33w2qC2DHuJUckVB_boJdrBv3g5Q3",
            "price":7000,
            "decription":"A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. "
      
          },
          {
            "id":5,
            "name":"Akhil pg",
            "place":"kbhp rd 1",
            "image":"https://drive.google.com/uc?id=1uCHVbVzwlRBnCwW0Kdef6FmoAvFWlWHY",
            "image1":"https://drive.google.com/uc?id=1wWDgK0iksdAHuo3qGLt8SGDVffhfUwY6",
            "image2":"https://drive.google.com/uc?id=1JGrz46eEqCcXaoLHCa0xDqgaXDQcWrpe",
            "image3":"https://drive.google.com/uc?id=1JP_2-6yxPvRbU_p2DddndCNK2Rc7wpMO",
            "price":6000, 
            "decription":"A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. "
      
      
            
          },
          {
            "id":6,
            "name":"Vamshi hostel",
            "place":"kphb rd2",
            "image":"https://drive.google.com/uc?id=1Y0o7-LmPj3a3I7AW0GXubqOQEeIj5eQZ",
            "image1":"https://drive.google.com/uc?id=1VbaYe0jmtDpe3daWOlk0tAZyoSZLCfaZ",
            "image2":"https://drive.google.com/uc?id=1qolWrKToClhmAOVmc6xI_Mx51EjA-I38",
            "image3":"",
            "price":4500,
            "decription":"A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. "
      
          },{
            "id":7,
            "name":"rosy pg",
            "place":"kukatpally",
            "image":"https://drive.google.com/uc?id=17d2wKtSRiyDRTl63I-XQWRO4GPlUKKT2",
            "image1":"https://drive.google.com/uc?id=1RdAh7uMQjJdcyDEumU8jmurohK6Y9oh2",
            "image2":"https://drive.google.com/uc?id=1DoL1jVT4jse7-oUD2EfeR0Q_f9agL4Om",
            "image3":"https://drive.google.com/uc?id=1AvJ-DroDAisCRU1B6-933qZFi7AmIib4",
            "price":5000,
             "decription":"A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. "
      
          },
          {
            "id":8,
            "name":"Sai pg",
            "place":"kbhp",
            "image":"https://drive.google.com/uc?id=1sxwiiKhUuFHO46y1J5ya8gTh_xD-vdOM",
            "image1":"https://drive.google.com/uc?id=1VlRPQSmyfnQa9RqYoXmm0_Bj6uONJW5x",
            "image2":"https://drive.google.com/uc?id=1LKwBmr3WxnkROfkPZiydQom8izKvhO6-",
            "image3":"https://drive.google.com/uc?id=1JmqMwh4lF1NvIbEfHZoUxNaw5UcIEFI-",
            "price":7000,
            "decription":"A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. "
      
          },
          {
            "id":9,
            "name":"Anvesh pg",
            "place":"kbhp rd 1",
            "image":"https://drive.google.com/uc?id=1QaOZp0Fym4GTvGmJV9nPi7-uZSbR1nRn",
            "image1":"https://drive.google.com/uc?id=1sC-vWAeD6uX-avOyYzT1Q_adQJ4c1ffG",
            "image2":"https://drive.google.com/uc?id=14fsxYlGzBzpux8W6QhwayTqzeDcq28pb",
            "image3":"https://drive.google.com/uc?id=1a7NlxNwEYW0-DqDLv3kYC9ztAN2xv0Pd",
            "price":6000, 
            "decription":"A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. "
      
      
            
          },
          {
            "id":10,
            "name":"bindu hostel",
            "place":"kphb rd2",
            "image":"https://drive.google.com/uc?id=13eDwcodxJHXWLlFYJcmErdERRAva9-8H",
            "image1":"https://drive.google.com/uc?id=1U2obrq0MdmtKiwBWp4PtsSkOAYYDma80",
            "image2":"https://drive.google.com/uc?id=1S94V9ZfiMPR6YnjJa2ZNzpSVKCJRUAwe",
            "image3":"https://drive.google.com/uc?id=1bQGexGc5l441VYqDCSBlZ-FvTJrZ4cZC",
            "price":4500,
            "decription":"A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. "
      
          }
         
        
      ])
  return (
    <div>

<h3>users Data</h3>

<page data={data}/>



        
    </div>
  )
}

export default UserData