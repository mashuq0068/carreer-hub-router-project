import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const Details = () => {
    const {id} = useParams()
    const [data , setData] = useState([])
    useEffect(() => {
             fetch('/public/jobs.json')
             .then(res => res.json())
             .then(mainData => setData(mainData))
    },[])
     const newData = data.filter(clickedData => clickedData.id == id )
     const now = useLoaderData();
     console.log(now)
  
 
 console.log(newData[0])
 
 
  
    return (
        <div>
           
        </div>
    );
};

export default Details;