import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>My Profile 💖</h1>

      {!user ? (
        <p>No user data found.</p>
      ) : (
        <div style={{ 
          marginTop: "20px",
          background: "#ffe4ec",
          padding: "25px",
          borderRadius: "15px",
          width: "350px",
          marginInline: "auto",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
        }}>
          <h2>Welcome, {user.name} 👋</h2>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
