import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import "./App.css";
import ExistingRooms from "./components/room/ExistingRooms.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditRoom from "./components/room/EditRoom.jsx";
import Home from "./components/home/Home.jsx";
import AddRoom from "./components/room/AddRoom.jsx";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
