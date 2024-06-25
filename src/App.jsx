import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import Login from "./pages/Login.jsx";
import Sales from "./pages/Sales.jsx";
import Operations from "./pages/Operations.jsx";
import Marketing from "./pages/Marketing.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/" 
          element={
            <SharedLayout>
              <Index />
            </SharedLayout>
          } 
        />
        <Route path="/sales" element={<SharedLayout><Sales /></SharedLayout>} />
        <Route path="/operations" element={<SharedLayout><Operations /></SharedLayout>} />
        <Route path="/marketing" element={<SharedLayout><Marketing /></SharedLayout>} />
      </Routes>
    </Router>
  );
}
export default App;