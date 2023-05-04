import { Outlet } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";

function App() {
    return (
        <div className="text-orange-100 w-screen h-screen">
            <Navbar />
            <Outlet />

            <Footer />
        </div>
    );
}

export default App;
