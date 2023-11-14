import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// Redux
import { Provider } from "react-redux";
import store from "./utils/store";

// Authentication
import { AuthContextProvider } from "./utils/context/AuthContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

// Components
import * as MainHeader from "./components/Header";
import Body from "./components/Body";
import { Footer as MainFooter } from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import PaymentPage from "./components/PaymentPage";
import OrderSummary from "./components/OrderSummary";
import Shimmer from "./components/Shimmer";
import RestaurantDetails from "./components/RestaurantDetails";
import StoreOwner from "./components/StoreOwner";
import { UserAuth } from "./utils/context/AuthContext";
import UserProfile from "./components/UserProfile";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { stripe_public_key } from "./config";
import PaymentForm from "./components/PaymentForm";
import StripeContainer from "./components/StripeContainer";

const stripePromise = loadStripe(stripe_public_key);

const Instamart = lazy(() => import("./components/Instamart"));
const Help = lazy(() => import("./components/Help"));

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Routes>
          <Route path="*" element={<AppLayout/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/pform" element={<StripeContainer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </AuthContextProvider>
    </Provider>
  );
};

const AppLayout = ( ) => {
  const user = useSelector((store) => store.user.item); 
  console.log(user);
  return (
    user == 'store-owner' ?  <><Routes> <Route path="/" element={<StoreOwner />} />  </Routes><MainFooter /> </>:
    <>
      <MainHeader.Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
        <Route path="/" element={<Body />} />
        <Route path="/restaurant/:resId" element={<RestaurantDetails />} />
      </Routes>
      <MainFooter />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
