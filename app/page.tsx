"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Sidebar from './sidebar';

export default function Home(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{ if(open){ const o=document.body.style.overflow; document.body.style.overflow='hidden'; return ()=>{document.body.style.overflow=o}; }},[open]);
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 flex flex-col items-center justify-center px-6 overflow-hidden text-center">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent)]">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-red-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-4rem] w-96 h-96 bg-rose-100/40 rounded-full blur-3xl" />
      </div>
      <Sidebar open={open} onClose={()=>setOpen(false)} />
  {/* Top-left anchored logo (clickable) */}
  <a
    href="https://cos.northeastern.edu/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Northeastern University College of Science homepage"
    className="absolute top-2 left-2 md:top-3 md:left-3 z-10"
  >
    <Image
      src="/images/highlights/cos-logo.png"
      alt="Northeastern University College of Science Logo"
      width={220}
      height={60}
      priority
      className="w-auto h-auto opacity-95 hover:opacity-100 transition-opacity"
    />
  </a>
  <section className="relative max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-5 leading-tight">
          Welcome to {" "}
          <span
            className="startlab-animated startlab-loop italic font-bold drop-shadow-sm"
          >
            StartLab
          </span>
        </h1>
        <p className="text-gray-700 text-[1.02rem] italic leading-[1.85] tracking-[0.02em] md:tracking-[0.035em] mb-10 max-w-3xl md:max-w-4xl mx-auto text-left">
          AI is already part of students’ learning. The question is not <span className="text-red-600 font-semibold italic">if</span> they’ll use it, but how we as faculty can design teaching that works with it <span className="text-red-600 font-semibold italic">when</span> they do. <span className="text-red-600 font-semibold italic">StartLab</span> is a place to begin. Here, you’ll see different ways to begin thinking about how AI might fit into your teaching — from redesigning assignments, to using AI as a partner in feedback and rubric creation, to exploring new approaches in your discipline. It’s meant to start a conversation — one that invites faculty to share, reflect, and build thoughtful AI-integrated teaching together.
        </p>
        <div className="flex justify-center">
          <button
            onClick={()=>setOpen(true)}
            className="bg-red-600 text-white px-7 py-3 rounded-md font-medium tracking-wide shadow-sm hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          >Start Exploring</button>
        </div>
      </section>
    </main>
  );
}
