import { useSelector, useDispatch } from "react-redux";
import { handleLogout, makeNewApiKey } from "../reducers/authSlice";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">API Key Management</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your API Key
                </label>
                <div className="flex items-center gap-4">
                  <code className="bg-gray-100 px-4 py-2 rounded-md font-mono">
                    {user.apiKey}
                  </code>
                  <button
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    onClick={() => dispatch(makeNewApiKey())}
                  >
                    <i className="fa-solid fa-key"></i>
                    <span>Generate New Key</span>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Use this API key to authenticate your requests to the Todo API.
                Keep it secure and never share it publicly.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Welcome to your dashboard! Here you can manage your API key and
                access various features of the application.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">API Documentation</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Learn how to use our API with detailed documentation and
                    examples.
                  </p>
                  <Link
                    to="/api-docs"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center gap-1"
                  >
                    View Documentation
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                {/* <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Manage Todos</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Create, update, and manage your todos through our API or web
                    interface.
                  </p>
                  <Link
                    to="/todos"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center gap-1"
                  >
                    Go to Todos
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
