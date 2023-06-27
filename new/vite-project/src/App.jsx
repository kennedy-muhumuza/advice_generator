import "./App.scss";
import { useEffect, useState } from "react";
import Message from "./Message/Message";

// import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
// const supabase = createClient(
//   "https://xyzcompany.supabase.co",
//   "public-anon-key"
// );

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("http://localhost:3000/advice");
    const data = await res.json();
    setAdvice(data.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h3>Hello World</h3>
      <p>{advice}</p>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

export default App;
