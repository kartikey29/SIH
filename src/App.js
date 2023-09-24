import { useState } from "react";

import Doctor from "./page/Doctor";
import Customer from "./page/Customer";

import { Button } from "@mui/material";

function App() {
  const [isDoctor, setDoctor] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  return (
    <div className="App">
      {showBtn ? (
        <div className="flex h-screen justify-center items-center gap-2">
          <Button
            variant="contained"
            onClick={() => {
              setDoctor(true);
              setShowBtn(false);
            }}
          >
            Doctor
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setDoctor(true);
              setShowBtn(false);
            }}
          >
            Customer
          </Button>
        </div>
      ) : (
        <div>{isDoctor ? <Doctor></Doctor> : <Customer></Customer>}</div>
      )}
    </div>
  );
}

export default App;
