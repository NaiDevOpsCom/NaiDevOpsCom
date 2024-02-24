import { createContext,useState, useEffect, useContext } from "react";
import configData from "../config.json";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
export const GalleryContext = createContext();
const  SERVER_URL = configData.SERVER_URL;


export const GalleryProvider = ({ children }) => 
{
  const {logoutUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const [onDataChange, setOnDataChange] = useState(true)
  const [loading, setLoading] = useState(true);

  const authTokens = JSON.parse(sessionStorage.getItem("authTokens"));
  const [images, setGallery] = useState([]);


    // Add Image
    const addImage = (formData) => {
      fetch(`${SERVER_URL}/gallery`, {
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
          setGallery(response);
          navigate("/admin/images", {replace:false});
        
          toast.success(response.success, { theme: "colored" })
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



    // Delete Image
    const deleteImages = (imagesIds) => {
      toast.loading("Deleting!")

      fetch(`${SERVER_URL}/deleteimages`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`
      },
      body: JSON.stringify({ids: imagesIds}),

      })
      .then(response => response.json())
      .then((response) => {
          if(response.success) 
          {
            toast.dismiss();
            setOnDataChange(!onDataChange);
            // toast.success(response.success, { theme: "colored" })
          } 
          else if(response.error)
          {
            toast.dismiss();
            toast.error(response.error, { theme: "colored" })
          }
          else
          {
            toast.dismiss();
            toast.error("Something went wrong!", { theme: "colored" })
          }
      })
      
  };

   // Get Featured Image
   const getFeaturedImage = () => {
    return fetch(`${SERVER_URL}/featuredimage`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    .then((response)=> response.json())
    }

    // GET POSTS
   useEffect(()=>{
      fetch(`${SERVER_URL}/gallery`, {
        method: 'GET',
         headers: {
           Accept: 'application/json',
         },
       })
       .then((response)=> response.json())
       .then((data)=>{
             let x = data.map((gallery)=>{
             return {select:false,id:gallery.id, user:gallery.user,date_posted:gallery.date_posted, image:gallery.image, title:gallery.title, featured: gallery.featured }
           }
          )
          setGallery(x)
          // setGallery(data)
      })

      setLoading(false);
    }, [onDataChange])



    // CONTEXT DATA
    const contextData = 
    {
        addImage,
        images,
        setGallery,
        getFeaturedImage,
        deleteImages
    };


    return (
      <GalleryContext.Provider value={contextData}>
            {loading ? null : children}
      </GalleryContext.Provider>
    )

}