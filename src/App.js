import axios from "axios";
import { useEffect } from "react";

import "./App.css";

function App() {
  return useEffect(() => {
    axios.get("http://localhost:8000/user").then((res) => {
      const { data, status } = res;
      if (status === 200) {
        console.log(data);
      } else {
        alert(`Aldaa garlaa ${status}`);
      }
    });
  });
}

export default App;
