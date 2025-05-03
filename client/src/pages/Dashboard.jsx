import { useSelector } from "react-redux";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex  justify-center py-10">
      <div className="custom-container">
        <h1 className="text-4xl font-bold">Hello {user.username}</h1>
        <div className="mt-4">
          <p className="text-lg">
            Your api Key is : <b>{user.apiKey}</b>
          </p>
        </div>
        <div className="mt-4">
          <p className="text-lg">You can use this api key to access the api</p>
        </div>
      </div>
    </div>
  );
}
