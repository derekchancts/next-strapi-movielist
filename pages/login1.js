import { useState, useEffect } from "react";
import axios from 'axios';
import { setCookie } from 'nookies'
import { useCookies } from "react-cookie"
import jwt_decode from "jwt-decode";
import { useRouter } from 'next/router'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookies] = useCookies(["jwt"])
  
  const router = useRouter();


  
  let decodedToken;

  useEffect(() => {
    // console.log(cookie.jwt)
    if (cookies.jwt) {
      decodedToken = jwt_decode(cookies.jwt.jwt);
      console.log("Decoded Token", decodedToken);

      // JWT exp is in seconds
        if (decodedToken.exp * 1000 < Date.now()) {
          console.log("Token expired.");
        } else {
          console.log("Valid token");  
          router.push('/payed') 
        }
    }
    
  }, [cookies])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(username, password);

    try {
      const { data } = await axios.post(`${process.env.API_URL}/auth/local`, {
        identifier: username,
        password: password
      });
      // console.log(data);

      setCookie(null, "jwt", JSON.stringify(data), {
        path: "/",
        // maxAge: 3600, // Expires after 1hr
        maxAge: 30 * 24 * 60 * 60,
        sameSite: true,
        HttpOnly
      });
      window.location.reload();
    } catch (error) {
      console.log(error)
    };

  }; 


  return (
    <div >
      <h2 className='login'>Login</h2>
      <form className="form-style-1" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter email"
          />
        </div>
        
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
          />
        </div>
        <div className="btn">
          <button type="submit" >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
