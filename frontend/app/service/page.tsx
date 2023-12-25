/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ServiceComponent from "../component/service.component";
export default function Help() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: any) => {
    setActiveIndex(index);
  };
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key: any) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <ServiceComponent
            title={"Our unique solutions"}
            desc="Best solutions for your bussiness with amazing talent"
          />
        </div>
      </Layout>
    </>
  );
}
