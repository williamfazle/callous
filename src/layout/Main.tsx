import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CTASection from "../components/ctaection/CTASection";
import Testimonials from "../components/testimonials/Testimonials";

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Testimonials/>
            <CTASection/>
            <Footer />
        </div>
    );
};

export default Main