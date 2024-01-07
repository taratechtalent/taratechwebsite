/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import CounterUp from "../components/elements/CounterUp";
import ServiceContactComponent from "../component/service.contact.component";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          {/* END IMAGE CONTENT */}
          {/* STATISTIC-1
			============================================= */}
          {/* END STATISTIC-1 */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
          {/* TEXT CONTENT
			============================================= */}
          <section
            id="integrations-1"
            className="pt-100 integrations-section mt-80"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-52 w-700">Industries</h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Most popular programming languages and framework for
                      development
                    </p>
                  </div>
                </div>
              </div>
              {/* INTEGRATIONS-1 WRAPPER */}
              <div className="integrations-1-wrapper">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 rows-2">
                  {/* TOOL #1 */}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-1 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Nodejs</h6>
                        <p className="p-sm">Web development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  {/* END FEATURE BOX #1 */}
                  {/* TOOL #2 */}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Typescript</h6>
                        <p className="p-sm">Web development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Javascript</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Express</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Nestjs</h6>
                        <p className="p-sm">Backend Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">PHP</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">.Net core</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">.Net</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">C#</h6>
                        <p className="p-sm">Web development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Ruby on rails</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Java</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Graphql</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Django</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Flask</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-2 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Python</h6>
                        <p className="p-sm">Web development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  {/* END FEATURE BOX #2 */}
                  {/* TOOL #3 */}
                  <hr className="divider  !mb-10" />
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Sql server</h6>
                        <p className="p-sm">Database</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Postgresql</h6>
                        <p className="p-sm">Database</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Mongo</h6>
                        <p className="p-sm">Database</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Redis</h6>
                        <p className="p-sm">Database</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Mysql</h6>
                        <p className="p-sm">Database</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <hr className="divider  !mb-10" />
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-3 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Angular</h6>
                        <p className="p-sm">Frontend framework</p>
                      </div>
                    </Link>
                  </div>{" "}
                  {/* END FEATURE BOX #3 */}
                  {/* TOOL #4 */}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-4 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Vuejs</h6>
                        <p className="p-sm">Frontend framework</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Nextjs</h6>
                        <p className="p-sm">Frontend Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  {/* END FEATURE BOX #4 */}
                  {/* TOOL #5 */}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Reactjs</h6>
                        <p className="p-sm">Frontend framework</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <hr className="divider  !mb-10" />
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Android</h6>
                        <p className="p-sm">Mobile Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">IOS</h6>
                        <p className="p-sm">Mobile Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Kotlin</h6>
                        <p className="p-sm">Mobile Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Flutter</h6>
                        <p className="p-sm">Mobile Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Swift</h6>
                        <p className="p-sm">Mobile Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <hr className="divider  !mb-10" />
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Docker</h6>
                        <p className="p-sm">Devops</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Terraform</h6>
                        <p className="p-sm">Devops</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">kubernetes</h6>
                        <p className="p-sm">Devops</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Amazon web services</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Google cloud</h6>
                        <p className="p-sm">Web Development</p>
                      </div>
                    </Link>
                  </div>{" "}
                  <hr className="divider  !mb-10" />
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Figma</h6>
                        <p className="p-sm">UI/UX </p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Adobe XD</h6>
                        <p className="p-sm">UI/UX </p>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-5 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700">Adobe illustrator</h6>
                        <p className="p-sm">UI/UX </p>
                      </div>
                    </Link>
                  </div>{" "}
                  {/* END FEATURE BOX #9 */}
                </div>
              </div>{" "}
              {/* END INTEGRATIONS-1 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END INTEGRATIONS-1 */}
          {/* BANNER-3
			============================================= */}
          <div className="mt-80">
            <ServiceContactComponent />
          </div>
        </div>
      </Layout>
    </>
  );
}
