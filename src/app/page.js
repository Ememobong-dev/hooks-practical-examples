import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl"> PRACTICAL EXAMPLES ON useState, UseRef, UseReducer, and useContext </h1>
      <div className="flex flex-wrap justify-center items-center mt-5 gap-5">
        <button className="bg-yellow-900 text-white py-3 px-8 rounded-3xl" >useState</button>
        <button  className="bg-yellow-900 text-white py-3 px-8 rounded-3xl">useRef</button>
        <button  className="bg-yellow-900 text-white py-3 px-8 rounded-3xl">useReducer</button>
        <button  className="bg-yellow-900 text-white py-3 px-8 rounded-3xl">useContext</button>
  
      </div>
    </div>

   
  );
}
