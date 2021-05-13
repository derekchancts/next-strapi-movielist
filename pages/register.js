import { useState, useEffect } from "react";
import axios from 'axios';
// import { setCookie, parseCookies } from 'nookies'
import { useCookies } from "react-cookie"
import jwt_decode from "jwt-decode";
import { useRouter } from 'next/router'


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookie, setCookie] = useCookies(["jwt"])
  
  const router = useRouter();


  
  // let decodedToken;

  // useEffect(() => {
  //   // console.log(cookie.jwt)
  //   if (cookie.jwt) {
  //     decodedToken = jwt_decode(cookie.jwt.jwt);
  //     console.log("Decoded Token", decodedToken);

  //     // JWT exp is in seconds
  //       if (decodedToken.exp * 1000 < Date.now()) {
  //         console.log("Token expired.");
  //       } else {
  //         console.log("Valid token");  
  //         router.push('/payed') 
  //       }
  //   }
  // }, [cookie])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(username, email, password);

    // const registerInfo = {
    //   username: username, 
    //   email: email,
    //   password: password
    // }

    // const register = await fetch(`${process.env.API_URL}/auth/local/register`, {
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(registerInfo)
    // })

    // const registerResponse = await register.json();
    // console.log(registerResponse)



    const body = {
      username: username,
      email: email,
      password: password
     };

    try {
      const { data } = await axios.post(`${process.env.API_URL}/auth/local/register`, body);
      console.log(data);

      // setCookie("jwt", JSON.stringify(data), {
      //   path: "/",
      //   // maxAge: 3600, // Expires after 1hr
      //   maxAge: 30 * 24 * 60 * 60,
      //   SameSite: true,
      //   HttpOnly: true,
      //   Secure: true
      // });
    } catch (error) {
      console.log(error)
    };

  };


  return (
    <div >
      <h2 className='login'>Register</h2>
      <form className="form-style-1" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="enter username"
            />
          </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default Register;
