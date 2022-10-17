import Header from "./components/Header";
import Billing from "./components/Billing";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content mt ">
          <Billing />
          <ProductPage />
        </div>
        <footer>
          <div className="d-flex justify-content-between mt-4 mb-3">
            <p className="footer-text">Privacy Policy | Terms and Conditions | Refund Policy</p>
            <p className="footer-text">© PayPro Global, Inc. 2021</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
