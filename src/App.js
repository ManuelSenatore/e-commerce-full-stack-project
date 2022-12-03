import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import 'animate.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponents from "./components/NavBarComponents";
import { Container } from "react-bootstrap";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import SignUpComopnent from "./components/SignUpComponent";
import MapsComponent from "./components/MapsComponent";
import WishListComponent from "./components/WishListComponent";
import CarrelloComponent from "./components/CarrelloComponent";
import SuccessComponent from "./components/pagamento/SuccessComponent";
import FailureComponent from "./components/pagamento/FailureComponent";
import CheckoutComponent from "./components/CheckoutComponent";


function App() {
  return (
    <BrowserRouter>
      <NavBarComponents />
      <Container fluid className="p-0">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUpComopnent />} />
          <Route path="/wishlist" element={<WishListComponent />} />
          <Route path="/carrello" element={<CarrelloComponent />} />
          <Route path="payment/success" element={<SuccessComponent />} />
          <Route path="payment/failure" element={<FailureComponent />} />
          <Route path="/checkout" element={<CheckoutComponent />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
