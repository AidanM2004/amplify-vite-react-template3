import type { Schema } from "../amplify/data/resource"; // Import the Schema type
import { generateClient } from "aws-amplify/data"; // Import the function to generate a client
import { useAuthenticator } from "@aws-amplify/ui-react"; // Import the Authenticator hook

// Generate the client using the Schema type
const client = generateClient<Schema>();

function App() {
  // Destructure user and signOut from the useAuthenticator hook
  const { user, signOut } = useAuthenticator();

  // Extract the username from the user's loginId or default to "User"
  const displayedUsername = user?.signInDetails?.loginId?.split('@')[0] || "User";

  return (
    <main>
      {/* Display a welcome message with the username */}
      <h1>Thank you {displayedUsername} for signing in.</h1>

      {/* Button to sign out */}
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App; // Export the App component
