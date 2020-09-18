import React, { useState } from "react";
import AppRouter from "components/AppRouter";
import { authService } from "fbase";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <div className="App">
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()}Twitter-clone</footer>
    </div>
  );
}

export default App;
