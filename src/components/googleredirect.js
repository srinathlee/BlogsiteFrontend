// GoogleAuthRedirect.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log("Token received:", token); // Debugging line
    if (token) {
      localStorage.setItem('jwtToken', token); // or cookies
      navigate('/'); // or wherever you want
    } else {
      navigate('/login');
    }
  }, []);

  return <p>Logging you in...</p>;
};

export default GoogleAuthRedirect;
