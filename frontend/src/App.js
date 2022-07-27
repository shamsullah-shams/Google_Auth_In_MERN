import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

function App() {
  // @@ handling google callback
  const callbackHandling = (response) => {
    var { name, email_verified, email, } = jwt_decode(response.credential);
    axios.post('http://localhost:9000/api/google/signin', {
      name: name,
      email: email,
      email_verified: email_verified,
    }).then(response => {
      console.log(response);
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "Your Google Client Id",
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
    <div id='signInDiv'></div>
  );
}

export default App;
