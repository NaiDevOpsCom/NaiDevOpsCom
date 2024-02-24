import { createContext,useState, useEffect, useContext } from "react";
import configData from "../config.json";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
export const AwardContext = createContext();
const  SERVER_URL = configData.SERVER_URL;


export const AwardsProvider = ({ children }) => 
{ 
  const {logoutUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const [onDataChange, setOnDataChange] = useState(true)
  const [loading, setLoading] = useState(true);

  const authTokens = JSON.parse(sessionStorage.getItem("authTokens"));
  const [awards, setAwards] = useState([]);



    // Add Award
    const addAward = (formData) => {
      fetch(`${SERVER_URL}/awards`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authTokens.access}`,
        },
        body:formData ,
        })
      .then((r)=> r.json())
      .then((response)=>{

        if (response.success) 
        {
          setOnDataChange(!onDataChange);
          setAwards(response);
          navigate("/admin/awards");
        } 
        else if (response.error) 
        {
          toast.error(response.error, { theme: "colored" })
        }
        else if(response.detail)
        {
          setTimeout(() =>  toast.warning("Session expired!", { theme: "colored" }), 1000) 
          logoutUser()
        }
        else
        {
          toast.error("Something went wrong!", { theme: "colored" })
        }
      })
        
    };

      // Update Award
      const updateAward = (id, formData) => {
      fetch(`${SERVER_URL}/awards/${id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${authTokens.access}`
        },
        body: formData,
        })
        .then((response)=>response.json())
        .then((response) =>{
          if (response.success) 
          {
            setOnDataChange(!onDataChange);
            navigate("/admin/awards");
            toast.success(response.success, { theme: "colored" })
          } 
          
          else if(response.error)
          {
            toast.error(response.error, { theme: "colored" })
          }
          else if(response.detail)
          {
            setTimeout(() =>  toast.warning("Session expired!", { theme: "colored" }), 1000) 
            logoutUser()
          }
          else{
            toast.error("Something went wrong!", { theme: "colored" })
  
          }
      })
        
    };
    
    // Get single award
    const getSingleAward = (award_id) => {
      return fetch(`${SERVER_URL}/awards/${award_id}`, {
        method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        })
        .then((response)=> response.json())
    
        }
 

    // Delete Award
    const deleteAward = (id) => {
      fetch(`${SERVER_URL}/awards/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`
      }
      })
      .then(response => response.json())
      .then((response) => {
          if(response.success) 
          {
            setOnDataChange(!onDataChange);
          } 
          else if(response.error)
          {
            toast.error(response.error, { theme: "colored" })
          }
          else if(response.detail)
          {
            setTimeout(() =>  toast.warning("Session expired!", { theme: "colored" }), 1000) 
            logoutUser()
          }
          else
          {
            toast.error("Something went wrong!", { theme: "colored" })
          }
      })
      
  };

    // GET AWARDS
   useEffect(()=>{
      fetch(`${SERVER_URL}/awards`, {
        method: 'GET',
         headers: {
           Accept: 'application/json',
         },
       })
       .then((response)=> response.json())
       .then((data)=>{
          setAwards(data)
      })

      setLoading(false);
    }, [onDataChange])



    // CONTEXT DATA
    const contextData = 
    {
        addAward,
        awards,
        updateAward,
        getSingleAward,
        deleteAward
    };


    return (
      <AwardContext.Provider value={contextData}>
            {loading ? null : children}
      </AwardContext.Provider>
    )

}