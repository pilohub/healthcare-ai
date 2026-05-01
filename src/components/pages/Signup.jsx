import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";
import "./auth.css";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert(error.message);
    return;
  }

  // 🔥 SAFE USER GET
  const user = data?.user;

  if (!user) {
    alert("Check your email to confirm account");
    return;
  }

  // 🔥 PROFILE INSERT WITH ERROR HANDLING
  const { error: profileError } = await supabase.from("profiles").upsert([
  {
    id: user.id,
    name,
    age,
    gender,
  },
]);

  if (profileError) {
    console.log(profileError);
    alert("Profile save failed");
    return;
  }

  alert("Signup successful ✅");
};
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Start your healthcare journey 🚀</p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Signup</button>

        <p className="switch-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}