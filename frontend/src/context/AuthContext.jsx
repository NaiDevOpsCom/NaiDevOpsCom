import { createContext,useState, useEffect } from "react";
import configData from "../config.json";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast';
import Swal from "sweetalert2";


export const AuthContext = createContext(undefined);
const  SERVER_URL = configData.SERVER_URL;



export const AuthProvider = ({ children }) => 
{
    const navigate = useNavigate();
    
    const [onDataChange, setOnDataChange]=useState(true);
    const [usersData, setUsersData]  = useState();

  
    const [current_user, setCurrentUser]  = useState(null);
    const [authToken, setAuthToken] = useState(() => sessionStorage.getItem("authToken") ? sessionStorage.getItem("authToken") : null );
    const [loading, setLoading] = useState(true);

   
       console.log(authToken);
       
      // USER REGISTRATION
      const registerUser = (email) => {
        toast.loading("Creating user! Please wait!")
        
        fetch(`${SERVER_URL}/users/register`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${authToken}`
          },
          body: JSON.stringify({
              email
          })
          })
          .then((res)=> res.json())
          .then((response)=>{
            console.log(response);
            
            if (response.success) {
                toast.dismiss();
                toast.success("Saved Successfuly!! User will receive an email with credentials!");
                setOnDataChange(!onDataChange);
            }
            else if(response.email_error){
              toast.dismiss();
              toast.error(response.email_error)
            } 
            else if(response.username_error){
              toast.dismiss();
              toast.error(response.username_error)
            } 
            else if(response.error){
              toast.dismiss();
              toast.error(response.error)
            } 
            else if(response.detail)
            {
              toast.dismiss();
              setTimeout(() =>  toast.error("Session expired!"), 1000)           
              logout()
            }
            else {
              toast.dismiss();
              toast.error("Something went wrong!");
            }
          })
        }
    
    // LOGIN USER
    const loginUser = async (email, password) => {
      toast.loading("Logging you in!")
        const response = await fetch(`${SERVER_URL}/token/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password })
        });
        const data = await response.json();

        if (response.status === 200) 
        {
          
          toast.dismiss();
          setAuthToken(data.access);
          // setTokenUser((data.access));
          sessionStorage.setItem("authToken",data.access);
          setOnDataChange(!onDataChange);
          navigate("/admin");
          setTimeout(() =>  Swal.fire({'icon':'success','timer':3000,'text':'Loggedin Successfully!',"confirmButtonColor": '#088F8F',
          'title':"Success", }), 800)    
        } 
        
        else
        {
          toast.dismiss();
          toast.error("Wrong Password!")
        }

       
    };

   // Delete User
   const deleteUser = (id) => {
        fetch(`${SERVER_URL}/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
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
              toast.error(response.error)
            }
            else if(response.detail)
            {
              setTimeout(() =>  toast.error("Session expired!"), 1000)           
              logout()
            }
            else
            {
              toast.error("Something went wrong!")
            }
        })
        
      };


    // RESET PASSWORD USER
    const sendPassword = (email) => {
      toast.loading("Loading!")

      fetch(`${SERVER_URL}/user/sendpassword`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
        },
      body: JSON.stringify({email})
      })
      .then((response)=> response.json() )
      .then((response)=>{
           if(response.success) 
            {
              toast.dismiss();
              navigate("/admin");
              toast.success(response.success)
            }
            else if(response.email_error) 
            {
              toast.dismiss();
              toast.error(response.email_error)
            }
            else if(response.error) 
            {
              toast.dismiss();
              toast.error(response.error)
            }
            else{
               toast.dismiss();
               toast.error("Something went wrong!!")
            }
        })
      .catch(()=>
        {
          toast.dismiss();
          toast.error("Something went wrong!!")
        })
    }


    // UPDATE PASSWORD from Profile section
    const updatePassword = (oldpassword, newpassword) => {
  
      fetch(`${SERVER_URL}/user/updatepassword`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        },
      body: JSON.stringify({email: current_user && current_user.email, oldpassword, newpassword})
      })
      .then((response)=> response.json() )
      .then((response)=>{
           if(response.success) 
            {              
              setTimeout(() => toast.success(response.success + " Login again to access your account"), 1000);
              logout()   
            }
            else if(response.email_error) 
            {
              toast.error(response.email_error)
            }
            else if(response.password_error) 
            {
              toast.error(response.password_error)
            }
            else if(response.detail)
            {
              setTimeout(() =>  toast.error("Session expired!"), 1000)           
              logout()
            }
            else{
               toast.error("Something went wrong!!")
            }
        })
      .catch(()=>
        {
          toast.error("Something went wrong!!")
        })
    }

    //  // UPDATE USERNAME from Profile section
    //  const updateUsername = (username: any) => {
  
    //   fetch(`${SERVER_URL}/user/updateusername`, {
    //   method: "PATCH",
    //   headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${authToken}`
    //     },
    //   body: JSON.stringify({username})
    //   })
    //   .then((response)=> response.json() )
    //   .then((response)=>{
    //        if(response.success) 
    //         {        
    //           setOnDataChange(!onDataChange)      
    //           setTimeout(() => toast.success(response.success), 1000);
    //         }
    //         else if(response.error) 
    //         {
    //           toast.error(response.error)
    //         }
    //         else if(response.detail)
    //         {
    //           setTimeout(() =>  toast.error("Session expired!"), 1000)           
    //           logout()
    //         }
    //         else{
    //            toast.error("Something went wrong!!")
    //         }
    //     })
    //   .catch(()=>
    //     {
    //       toast.error("Something went wrong!!")
    //     })
    // }


    // LOGOUT USER
    const logout = () => 
    {
        setAuthToken(null);
        setCurrentUser(null);
        sessionStorage.removeItem("authToken");        
        setOnDataChange(!onDataChange)

        navigate("/admin/login");
    };

    // GET AUTHENTICATED USER
      useEffect(()=>
      {
        if(authToken)
       {
        fetch(`${SERVER_URL}/users/current_user`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`
            }
        })
        .then((response)=> response.json() )
        .then((response)=>{

             if(response.detail) 
              {
                setTimeout(() =>  toast.error("Session expired!"), 1000)           
                logout();
              }
              else{
                setCurrentUser(response)
                console.log(response);
                
              }
          })
        .catch(()=>
          {
            toast("Something went wrong!!")
          })
        }
        
    }, [authToken,loading,onDataChange])

    // GET USERS
    useEffect(()=>{
      if(authToken)
      {
        fetch(`${SERVER_URL}/users`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`
          },
        })
        .then((response)=> response.json())
        .then((data)=>{
            setUsersData(data)
        })
      }
      else{
        (()=> logout()());
      }

      setLoading(false);
    }, [onDataChange])

    
    // CONTEXT DATA
    const contextData = 
    {
        current_user,
        setCurrentUser,
        usersData,
        deleteUser,
        authToken,
        setAuthToken,
        registerUser,
        loginUser,
        sendPassword,
        updatePassword,
        logout,
    };  
    
  

    // useEffect(() => 
    // {
    //   if (authToken) 
    //   {
    //     setTokenUser(authToken);
    //   }

    //   setLoading(false);

    // }, [authToken, loading]);
    


    return (
      <>
      <AuthContext.Provider value={contextData}>
        {loading ? null : children}
      </AuthContext.Provider>
      </>
    )

}