import { createContext,useState, useEffect } from "react";
import configData from "../config.json";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import {toast} from 'react-hot-toast';


export const EventContext = createContext();
const  SERVER_URL = configData.SERVER_URL;


export const EventProvider = ({ children }) => 
{
  const {logoutUser} = useContext(AuthContext)

  const navigate = useNavigate();
  const [onDataChange, setOnDataChange] = useState(true)

   const authTokens = JSON.parse(sessionStorage.getItem("authTokens"))
   const [events, setEvents] = useState([]);

      // Add Event
    const addEvent = (formData) => {

      fetch(`${SERVER_URL}/events`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authTokens.access}`
        },
        body: formData
        })
        .then((response)=>response.json())
        .then((response) =>{
        if (response.success) 
        {
          setOnDataChange(!onDataChange);
          navigate("/admin/events", {replace:false});          
          toast.success(response.success);
        } 
        
        else if(response.errors)
        {
          toast.error(response.errors)
        }
        else if(response.detail)
        {
          setTimeout(() =>  toast.warning("Session expired!"), 1000)           
          logoutUser()
        }
        else{
          toast.error("Something went wrong!")

        }
      })
        
    };

       // Update Event
       const updateEvent = (id, formData) => {

        fetch(`${SERVER_URL}/events/${id}`, {
          method: "PATCH",
          headers: {
              Authorization: `Bearer ${authTokens.access}`
          },
          body: formData
          })
          .then((response)=>response.json())
          .then((response) =>{
            if (response.success) 
            {
              setOnDataChange(!onDataChange);
              navigate("/admin/events")
              window.location.reload(true)
              toast.success(response.success)
            } 
            
            else if(response.error)
            {
              toast.error(response.error)
            }
            else if(response.detail)
            {
              setTimeout(() =>  toast.warning("Session expired!"), 1000) 
              logoutUser()
            }
            else{
              toast.error("Something went wrong!")
  
            }
        })
          
      };

    // Get single event
    const getSingleEvent = (event_id) => {
       return fetch(`${SERVER_URL}/events/${event_id}`, {
        method: 'GET',
         headers: {
           Accept: 'application/json',
          //  Authorization: `Bearer ${authTokens.access}`
         },
       })
       .then((response)=> response.json())
      }

      // Get Top event
      const getTopEvent = () => {
        return fetch(`${SERVER_URL}/topevent`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        })
        .then((response)=> response.json())
        }

         // Get Regular event
      const getRegularEvent = () => {
        return fetch(`${SERVER_URL}/regularevent`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        })
        .then((response)=> response.json())
        }
 

      // Delete Event
      const deleteEvent = (id) => {
        fetch(`${SERVER_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`
        }
        })
        .then(r => r.json())
        .then((response) => {
            if(response.success) 
            {
              setOnDataChange(!onDataChange);
              toast.success(response.success)
            } 
            else if(response.error)
            {
              toast.error(response.error)
            }
            else if(response.detail)
            {
              setTimeout(() =>  toast.warning("Session expired!"), 1000) 
              logoutUser()
            }
            else
            {
              toast.error("Something went wrong!")
            }
        })
        
    };


      // GET Events 
    useEffect(()=>{  
      fetch(`${SERVER_URL}/events`, {
       method: 'GET',
        headers: {
          Accept: 'application/json',
          // Authorization: `Bearer ${authTokens.access}`
        },
      })
      .then((response)=> response.json())
      .then((data)=>{
          setEvents(data)
        })
      
      }, [onDataChange])


    // CONTEXT DATA
    const contextData = 
    {
       events,
       addEvent,
       getSingleEvent,
       getTopEvent,
       getRegularEvent,
       updateEvent,
       deleteEvent
    };


    return (
      <EventContext.Provider value={contextData}>
           {children}
      </EventContext.Provider>
    )

}

