import './App.css';
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

function App() {
  const callbackHandling = (response) => {
    var {
      name,
      email_verified,
      email,
    } = jwt_decode(response.credential);
    console.log(name,
      email_verified,
      email);
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "224489536190-2uh1fbq6c3sq4ug36tbhg9amc675nkgb.apps.googleusercontent.com",
      callback: callbackHandling
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
      }
    )


  }, [])

  return (

    <div>
      <div id='signInDiv'>

      </div>
    </div>
  );
}

export default App;
