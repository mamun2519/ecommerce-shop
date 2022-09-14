import { Tab } from "@headlessui/react";
import React from "react";
import PageTitle from "../Utilitis/PageTitle";
import Log from "./Log";
import Reg from "./Reg";

const Login = () => {
  
  const Tabs = [
    {
      name: "Login",
      content: (
        <div 
        data-aos="fade-right"
        data-aos-duration="1000"
        >
          <Log></Log>
        </div>
      ),
    },
    {
      name: "Signup",
      content: (
        <div
        data-aos="fade-right"
        data-aos-duration="1000"
        >
          <PageTitle title='Sign Up'></PageTitle>
          <Reg></Reg>
        </div>
      ),
    },
  ];
  return (
    <div className="flex h-screen justify-center items-center px-4">
      <PageTitle title='Login'></PageTitle>
      <div class="card w-96 bg-base-100 border ">
        <div class="card-body p-4">
          <Tab.Group>
            <Tab.List className="flex gap-10 py-[4px] bg-slate-100 px-[4px] border rounded-lg  mx-auto justify-center">
              {Tabs.map((item, index) => (
                <Tab
                  key={index}
                  className={({ selected }) => (
                    "w-full relative  px-4 py-2.5 focus:outline-none whitespace-nowrap",
                    selected
                      ? "transition duration-500 py-[5px] px-6 bg-[#062C30] text-white rounded-lg "
                      : "  py-[5px] px-6"
                  )}
                >
                  {index < Tabs.length - 1 && (
                    <span className=" absolute right-0 w-[1px] h-6 top-1/2 -translate-y-1/2 bg-gray-100" />
                  )}
                  <span className="text-xl">{item.name}</span>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="pt-5">
              {Tabs.map((item, index) => (
                <Tab.Panel>{item.content}</Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Login;
