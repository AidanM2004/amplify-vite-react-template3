import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  


             // "jane.doe"
             const username = user?.signInDetails?.loginId?.split('@')[0] || "User";
  return (
    <main>
      
      <h1>Thank you {username} for signing in</h1>
        
      
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
