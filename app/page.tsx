import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
  return (
    <Layout headerCls="navbar-dark light-hero-header">
      <Hero />
    </Layout>
  );
}
