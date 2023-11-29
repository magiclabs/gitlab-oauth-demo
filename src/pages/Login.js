import { magic } from "../lib/magic";
import { FaGitlab } from "react-icons/fa";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "gitlab",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic + GitLab</h1>
      <button onClick={handleSocialLogin}>
        <FaGitlab size={"2.5rem"} />
        Log in with GitLab
      </button>
    </div>
  );
};

export default Login;
