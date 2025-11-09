import { useEffect, useState } from "react";
import axios from "axios";

export function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/profile", { withCredentials: true });
        setUser(res.data.user);
      } catch (err) {
        console.error(err);
        setError("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
      <div className="mb-2">
        <span className="font-semibold">Username: </span>
        {user.username}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Email: </span>
        {user.email}
      </div>
    </div>
  );
}
