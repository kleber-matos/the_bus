import React from "react";

export default function index() {
  return (
    <main className="flex justify-center flex-col items-center">
      <div className="text-center  md:w-2/4 flex justify-evenly items-center flex-col h-96">
        <h1 className="text-5xl	font-medium m-6	">EXPLOTE THE WORLD</h1>
        <p className="max-w-2xl text-xl	m-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          ipsam recusandae provident doloremque maxime non ipsum quia quas
          optio, perspiciatis eaque! Asperiores, praesentium cumque itaque
          expedita eum sapiente vero optio.
        </p>
        <button className="bg-cyan-600 hover:bg-cyan-500 rounded w-40  p-3 text-white font-bold m-3">
          START NOW
        </button>
      </div>

      <img
        className="w-2/12 hidden md:flex"
        src="https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-van-under-the-planet-line-art-illustration-png-image_9242099.png"
        alt=""
      />
    </main>
  );
}
