import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>Welcome to ERP System</h1>
      <p>Manage your business smarter</p>

      <button
        onClick={() => navigate("/login")}
        style={{padding:"10px 20px", fontSize:"16px"}}
      >
        Sign In
      </button>
    </div>
  );
}

export default Landing;