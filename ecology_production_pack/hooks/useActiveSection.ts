"use client";
import { useEffect, useState } from "react";

export default function useActiveSection(ids:string[]){
 const [active,setActive]=useState("");

 useEffect(()=>{
  const observer = new IntersectionObserver((entries)=>{
   entries.forEach(e=>{
    if(e.isIntersecting) setActive(e.target.id);
   });
  });

  ids.forEach(id=>{
   const el=document.getElementById(id);
   if(el) observer.observe(el);
  });

  return ()=>observer.disconnect();
 },[]);

 return active;
}