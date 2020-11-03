import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Navrow from "./components/navigation/navrow";
import Homepage from "./components/pages/home/homepage";
import AddPhoneNumber from "./components/pages/PhoneNumber/AddPhoneNumber/add_phone_number";
import PhoneNumber from "./components/pages/PhoneNumber/phone_number";
import { Footer } from "./components/footer/footer.js";
import Schedules from "./components/pages/Schedules/schedules";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <Navrow />
        </header>
        <main>
          <Route exact path="/" component={Homepage} />
          <Route path="/add-phone-number" component={AddPhoneNumber} />
          <Route path="/phone-number" component={PhoneNumber} />
          <Route path="/schedule" component={Schedules} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
