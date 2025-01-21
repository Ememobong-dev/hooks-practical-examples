import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl"> PRACTICAL EXAMPLES ON useState, UseRef, UseReducer, and useContext </h1>
      <div className="flex flex-wrap justify-center items-center mt-5 gap-5">
        <button className="bg-yellow-500 font-bold text-white py-3 px-8 rounded-3xl hover:bg-yellow-300">
          <Link href={"/useStateHooks"} target="blank" >
            useState
          </Link>
        </button>
        <button className="bg-blue-900 font-bold text-white py-3 px-8 rounded-3xl hover:bg-blue-300 ">
          <Link href={"/useRefHook"} target="blank" >
          UseRef
          </Link>
        </button>
        <button className="bg-white font-bold text-black py-3 px-8 rounded-3xl hover:bg-slate-200">
          <Link href={"/useReducerHook"} target="blank" >
           UseReducer
          </Link>
        </button>
        <button className="bg-orange-600 font-bold text-white py-3 px-8 rounded-3xl hover:bg-orange-400">
          <Link href={"/useContextHook"} target="blank" >
           useContext
          </Link>
        </button>
      </div>
    </div>

   
  );
}
