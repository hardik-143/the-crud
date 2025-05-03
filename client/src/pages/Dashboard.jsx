import { useSelector, useDispatch } from "react-redux";
import { makeNewApiKey } from "../reducers/authSlice";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="flex  justify-center py-10">
      <div className="custom-container">
        <h1 className="text-4xl font-bold">Hello {user.username}</h1>
        <div className="mt-4 flex justify-end flex-col items-end gap-2">
          <p className="text-lg w-full">Your api Key :</p>
          <div className="flex items-center gap-4">
            <b>{user.apiKey}</b>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => {
                dispatch(makeNewApiKey());
              }}
            >
              <i className="fa-solid fa-key"></i>
              <span>Generate New API Key</span>
            </button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg">
            You can use this api key to access the todo api
          </p>
        </div>
        <div className="mt-4">
          
        </div>
      </div>
    </div>
  );
}
