import React from "react";
import Title from "../layouts/Layout";
import { project1, project2, project3 } from "../../assets/index";
import { BsGithub } from "react-icons/bs";

import { FaGlobe } from "react-icons/fa";

import { Link } from "react-router-dom";

const Projects = () => {
  // const navigate = useNavigate();
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 ">
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={project1}
              alt="prroject1"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Full stack Social Media
                </h3>
                <div className="flex gap-2">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <Link
                      to={
                        "https://github.com/Abhishekkumar-7050/Social-Media-Client"
                      }
                    >
                      {" "}
                      <BsGithub />
                    </Link>
                  </span>
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <Link to={"https://social-media-client-vert.vercel.app/login"}>
                      {" "}
                      <FaGlobe />
                    </Link>
                  </span>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
               It may take some time to load because free webservice used . first click logout button and sign up and login...
               This project is a social media application . including the authentication , file handling , user can update profile , create post, like post, follow suggestions  can see any user profile.
               Technology used react , scss, node js ,  Mongodb Atlas Datatabase, Cloudinary etc.
              </p>
            </div>
          </div>
          </div>
          <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={project2}
              alt="prroject1"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Full stack E-commerce Website
                </h3>
                <div className="flex gap-2">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <Link
                      to={
                        "https://github.com/Abhishekkumar-7050/Ecommerce-Client"
                      }
                    >
                      {" "}
                      <BsGithub />
                    </Link>
                  </span>
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <Link to={"https://posterzecommercecompany.vercel.app/#/"}>
                      {" "}
                      <FaGlobe />
                    </Link>
                  </span>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              It may take some time to load because free webservice used .
              This is the ecommerce app where user can buy poster , add in cart and checkout to payments and confirm order, can select catecories of item and sort item.
              Technologies used strapi react  cloudinary postgrace Datatabase 
              </p>
            </div>
          </div>
          </div>
          <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={project3}
              alt="prroject1"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Learnig app Frontend
                </h3>
                <div className="flex gap-2">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <Link
                      to={
                        "https://github.com/Abhishekkumar-7050/Learn-At-Home"
                      }
                    >
                      {" "}
                      <BsGithub />
                    </Link>
                  </span>
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <Link to={"https://learn-at-home.vercel.app/"}>
                      {" "}
                      <FaGlobe />
                    </Link>
                  </span>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                The is Frontend  of learnig app, in this app we handled  navigation and routing
           A learning webpage serves as an interactive platform designed to facilitate the acquisition and dissemination of knowledge on a particular subject or skill. It typically offers a variety of educational 
              Used React. 
              </p>
            </div>
          </div>
          </div>

      </div>
    </section>
  );
};

export default Projects;
