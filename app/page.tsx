"use client"
import MiddlewareOk from "@/components/middlewareok";
import SectionNavbarHome from "./sectionnavbarhome";
import axios from "axios";
import Sectiongrid from "./sectiongrid";
import { useEffect, useState } from "react";

export default function Home() {
  interface Props {
    data:any
  }
  const [response,setresponse] = useState<Props | null>(null)

  useEffect(() => {
     axios.get(`http://localhost:8000/api/image`).then(Response => {setresponse(Response)})
  }, [])

console.log(response)

  return (
    <MiddlewareOk>
      <SectionNavbarHome />
      <div className="container p-3 mx-auto">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-7 gap-3" >
          {response && response.data.map((data:any, index:number) => (
            <Sectiongrid key={index} data={data}/>
          ))}
        </div>
      </div>
    </MiddlewareOk>
  );
}

