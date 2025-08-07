// GoogleAuthRedirect.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../config';

const GoogleAuthRedirect = () => {
  const navigate = useNavigate();
  const [data,setData]=useState(null)
  const getData = async () => {
    try {
      const data = await axios.get(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "application/json",
        },
      });
      setData(data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };  
 useEffect(() => {
    const doLogin = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      console.log("Token received:", token);

      if (!token) {
        navigate('/login');
        return;
      }

      // Save token
      localStorage.setItem('jwtToken', token);

      try {
        // Fetch user profile
        const res = await axios.get(`${BASE_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const user = res.data.user;
        localStorage.setItem("user", JSON.stringify(user));

        navigate('/'); // success redirect
      } catch (error) {
        console.error("Error fetching user data after Google login:", error);
        navigate('/login');
      }
    };

    doLogin();
  }, [navigate]);

  return <p>Logging you in...</p>;
};

export default GoogleAuthRedirect;
