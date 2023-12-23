import Layout from "./components/layout/Layout";

import "/public/css/demo.css";
import "/public/css/bootstrap.min.css";
import "/public/css/flaticon.css";
import "/public/css/menu.css";
import "/public/css/dropdown-effects/fade-down.css";
import "/public/css/lunar.css";
import "/public/css/animate.css";
import "/public/css/pink-theme.css";
import "/public/css/responsive.css";
import Hero from "./components/section/Hero";
import Brands from "./components/section/Brand";
import Features from "./components/section/Features";
import Links from "./components/section/Links";
import Features2 from "./components/section/Features2";
import Categories from "./components/section/Categories";
import Links2 from "./components/section/Links2";
import Categories2 from "./components/section/Categories2";
import Categories3 from "./components/section/Categories3";
import Links3 from "./components/section/Links3";
import Statistic from "./components/section/Statistic";
import Features3 from "./components/section/Feature3";
import Links4 from "./components/section/Links4";
import Categories4 from "./components/section/Categories4";
import Integrations from "./components/section/Integrations";
import Reviews from "./components/section/Reviews";
import FAQs from "./components/section/FAQ";
import Banner from "./components/section/Banner";

export default function Home() {
  return (
    <Layout headerCls="navbar light-hero-header">
      <Hero />
      <Brands />
      <hr className="divider" />
      <Features />
      <hr className="divider" />
      <Links />
      <Features2 />
      <Categories />
      <Links2 />
      <Categories2 />
      <Categories3 />
      <Links3 />
      <Statistic />
      <hr className="divider" />
      <Features3 />
      <Links4 />
      <Categories4 />
      <Integrations />
      <Reviews />
      <FAQs />
      <Banner />
    </Layout>
  );
}
