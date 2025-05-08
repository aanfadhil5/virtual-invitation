"use client";
import React from "react";
import { Hero } from "@/components/sections/Hero";

export default function TestHero() {
  return (
    <main>
      <Hero
        bridesName="Sarah"
        groomsName="Andi"
        backgroundImage="/images/hero-bg.jpg"
      />
    </main>
  );
}
