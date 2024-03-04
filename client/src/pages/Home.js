import React from "react";
import Navbar from "../components/Navbar";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      {/* HERO */}
      <section className="hero flex justify-between items-center px-32 gap-12  min-h-screen">
        <div className="left">
          <h1 className="text-6xl font-black mb-3">
            Introducing
            <br /> Nibash.io
          </h1>
          <p className="text-2xl text-neutral-500 mb-5">Ending the debate when it comes to real estate services in Bangladesh</p>
          <div className="buttons flex gap-5">
            <PrimaryButton text="get started" />
            <SecondaryButton text="explore" />
          </div>
        </div>
        <div className="right bg-neutral-600 h-64 w-64">1</div>
      </section>
      {/* SLIDING ELEMENT */}
      <section className="sliding-element h-16 w-screen bg-[#262523] flex justify-evenly items-center text-2xl text-white uppercase">
        <p>yada</p>
        <p>yada</p>
        <p>yada</p>
        <p>yada</p>
      </section>
      {/* something */}
      <section className="info bg-[#F3F3F3] flex justify-between items-top px-32 py-20">
        <div className="left w-1/2">
          <h1 className="text-4xl">Some Headline Goes Here</h1>
        </div>
        <div className="right w-1/2">
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem voluptatem officiis, nobis tempora odit quo saepe, libero culpa dicta, velit sapiente asperiores provident itaque! Dolor
            maiores quasi vitae praesentium porro?
          </p>
          <SecondaryButton text="Something" />
        </div>
      </section>
      {/* something else */}
      <section className="product flex flex-col justify-center items-center px-32 py-20">
        <h1 className="text-5xl font-bold mb-3">Witness our product</h1>
        <p className="text-center mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio libero aliquid alias fugit? Modi iste sint temporibus deleniti! Suscipit, asperiores itaque.</p>
        <div className="showcases">product images and description goes here</div>
      </section>
      {/* Praise ourselves */}
      <section className="flex justify-between items-center px-32 py-20 bg-[#F3F3F3]">
        <div className="left w-1/2">
          <h1 className="text-5xl font-bold mb-3 capitalize">we blend beauty and functionality seamlessly</h1>
          <p className="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sapiente natus rem. Voluptate atque, quod perferendis repudiandae.</p>
          <SecondaryButton text="Get in touch now" />
        </div>
        <div className="right h-64 w-1/2">
          <div className="img bg-green-500 rounded-xl h-full"></div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="features px-32 py-20 flex">
        <div className="left w-1/2">
          <h1 className="text-5xl font-bold mb-3 capitalize">Features</h1>
          <p>something goes here</p>
        </div>
        <div className="right w-1/2">SOME KIND OF BULLETS/ INVIS CARDS</div>
      </section>
      {/* SUBSCRIBE */}
      <section className="subscribe flex flex-col justify-center items-center px-32 py-20 bg-[#262523]">
        <h1>SOMETHIG GOES HERE</h1>
        <p>sOMETHING else goes here</p>
        <button>hey</button>
      </section>
      <section className="footer">logo and links again</section>
    </div>
  );
}
