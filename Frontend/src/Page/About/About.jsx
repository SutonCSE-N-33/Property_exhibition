/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/images/Property-min.png";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer";
import AboutCard from "./AboutCard";
const About = () => {
  return (
    <div>
      <section className="mt-5 flex gap-5">
        <div className="container mx-auto">
          <h2 className="text-center mb-6 text-gray-500 font-bold text-2xl">
            We Are CodeDjangoSquad Team
          </h2>
          <div className="md:flex gap-5 ">
            <AboutCard
              title="Chowdhury Ihsan"
              role="MERN And Django Developer"
              bio="who is always learn and stay up-to-date with the latest industry trends and technologies. his commitment to ongoing professional development helps me adapt to the ever-evolving world of software development"
              imglink="https://media.licdn.com/dms/image/C5603AQGYVmn29m_M4A/profile-displayphoto-shrink_200_200/0/1654657144700?e=1703116800&v=beta&t=HJ9RiVQlCUz0WYC7LhQUNCej3tmispyWeyaPUaIY2aM"
            />
            <AboutCard
              title="Nazrul Islam"
              role="Full Stack Developer"
              bio=" I am a passionate and innovative software developer and designer, developing, and deploying web applications. My dedication to clean and efficient code has led me to excel in multiple programming languages and frameworks"
              imglink="https://avatars.githubusercontent.com/u/84913712?v=4"
            />
            <AboutCard
              title="Md. Ubaidur Rahman"
              role="Django Backend Developer"
              bio="An energetic learner and stay up-to-date with the latest industry trends and technologies, My aim to clean and efficient code that`s why I can multiple programming languages and frameworks"
              imglink="https://cdn.discordapp.com/avatars/737539911284031628/6625a5f57ee7c2069cb7c82c496a7763.webp?size=160"
            />
            <AboutCard
              title="Tohidul Islam Rupok"
              role="Django Developer"
              bio=" I am an excited about up-to-date technologies with the latest industry trends, trying to learn in depth architecture of frameworks"
              imglink="https://avatars.githubusercontent.com/u/88036943?v=4"
            />
          </div>
        </div>
      </section>

      <section className="my-5 flex justify-center">
        <div className="container mx-auto p-10 text-center border border-lg shadow-xl shadow-xl">
          <h2 className="text-center text-gray-700 mb-6 text-black font-base text-3xl">
            About Us
          </h2>
          <p className="text-center text-gray-600 text-sm  text-zinc-400">
            We CodeDjangoSquad Team, it is our Demo Team Project Property
            Exhibition which is Real estate Management System <br />
            for land and the house apartment buildings buy sell rent purpose
            service available in our website.
          </p>

          <div className="flex justify-center mt-12">
            <i className="fa-brands fa-facebook text-2xl cursor-pointer"></i>
            <i className="fa-brands fa-twitter ml-3 text-2xl cursor-pointer"></i>
            <i className="fa-brands fa-linkedin ml-3 text-2xl cursor-pointer"></i>
            <i className="fa-brands fa-square-instagram ml-3 text-2xl cursor-pointer"></i>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
