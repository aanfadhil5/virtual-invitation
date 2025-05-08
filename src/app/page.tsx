"use client";
import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Greeting } from "@/components/sections/Greeting";
import { Quote } from "@/components/sections/Quote";
import { Couple } from "@/components/sections/Couple";
import { Events } from "@/components/sections/Events";
import { Gallery } from "@/components/sections/Gallery";
import { Video } from "@/components/sections/Video";
import { LiveStream } from "@/components/sections/LiveStream";
import { LoveStory } from "@/components/sections/LoveStory";
import { Rundown } from "@/components/sections/Rundown";
import { RSVP } from "@/components/sections/RSVP";
import { Prayer } from "@/components/sections/Prayer";
import { Gift } from "@/components/sections/Gift";
import { Dresscode } from "@/components/sections/Dresscode";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/ui/Navigation";

// Sample data - in a real app, this would come from your Supabase database
const weddingData = {
  coupleInfo: {
    bride: {
      name: "Sarah",
      fullName: "Sarah Ayu Lestari",
      parents: "Bapak Ahmad & Ibu Siti",
      photo: "/images/bride.jpg",
      socialMedia: {
        instagram: "sarahayu",
      },
    },
    groom: {
      name: "Andi",
      fullName: "Andi Permana",
      parents: "Bapak Budi & Ibu Wati",
      photo: "/images/groom.jpg",
      socialMedia: {
        instagram: "andipermana",
      },
    },
  },
  events: [
    {
      id: "1",
      title: "Akad Nikah",
      date: "2023-12-10",
      time: "08:00 - 10:00",
      location: "Masjid Al-Hidayah",
      address: "Jl. Kebon Jeruk No. 123, Jakarta Barat",
      mapUrl: "https://maps.google.com/?q=Masjid+Al-Hidayah+Jakarta",
    },
    {
      id: "2",
      title: "Resepsi",
      date: "2023-12-10",
      time: "11:00 - 14:00",
      location: "Gedung Serba Guna",
      address: "Jl. Kebon Jeruk No. 456, Jakarta Barat",
      mapUrl: "https://maps.google.com/?q=Gedung+Serba+Guna+Jakarta",
    },
  ],
  quote:
    "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.",
  gallery: [
    {
      id: "1",
      imageUrl: "/images/gallery-1.jpg",
      caption: "Pre-wedding photoshoot",
    },
    {
      id: "2",
      imageUrl: "/images/gallery-2.jpg",
      caption: "Our engagement day",
    },
    {
      id: "3",
      imageUrl: "/images/gallery-3.jpg",
      caption: "Beautiful moments",
    },
    {
      id: "4",
      imageUrl: "/images/gallery-4.jpg",
      caption: "Together forever",
    },
    {
      id: "5",
      imageUrl: "/images/gallery-5.jpg",
      caption: "Love story",
    },
    {
      id: "6",
      imageUrl: "/images/gallery-6.jpg",
      caption: "Happiness",
    },
  ],
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  liveStreamUrl: "https://www.youtube.com/watch?v=live",
  zoomInfo: {
    url: "https://zoom.us/j/1234567890",
    id: "123 456 7890",
    password: "wedding",
  },
  loveStory: [
    {
      id: "1",
      date: "2018-01-15",
      title: "Pertama Bertemu",
      description:
        "Kami bertemu pertama kali di sebuah acara kampus dan langsung merasa cocok satu sama lain.",
      imageUrl: "/images/story-1.jpg",
    },
    {
      id: "2",
      date: "2019-06-20",
      title: "Mulai Berpacaran",
      description:
        "Setelah mengenal satu sama lain selama lebih dari setahun, kami memutuskan untuk menjalin hubungan yang lebih serius.",
      imageUrl: "/images/story-2.jpg",
    },
    {
      id: "3",
      date: "2022-12-25",
      title: "Lamaran",
      description:
        "Di malam Natal yang indah, Andi melamar Sarah di depan keluarga besar.",
      imageUrl: "/images/story-3.jpg",
    },
  ],
  rundown: [
    {
      id: "1",
      time: "08:00",
      activity: "Akad Nikah",
      description: "Prosesi sakral pernikahan",
    },
    {
      id: "2",
      time: "10:00",
      activity: "Sesi Foto",
      description: "Foto bersama keluarga dan tamu undangan",
    },
    {
      id: "3",
      time: "11:00",
      activity: "Pembukaan Resepsi",
      description: "Sambutan dari keluarga",
    },
    {
      id: "4",
      time: "12:00",
      activity: "Makan Siang",
      description: "Hidangan prasmanan",
    },
    {
      id: "5",
      time: "13:00",
      activity: "Hiburan",
      description: "Penampilan musik dan tarian",
    },
  ],
  prayer:
    "Ya Allah, berkatilah pernikahan kami. Jadikanlah ikatan ini sebagai ibadah kepada-Mu. Kuatkanlah kami dalam suka dan duka, dalam sehat dan sakit. Jadikanlah keluarga kami keluarga yang sakinah, mawaddah, warahmah. Aamiin ya Rabbal 'Alamin.",
  giftInfo: {
    bankTransfer: {
      accountName: "Sarah Ayu Lestari",
      accountNumber: "1234567890",
      bankName: "Bank Central Asia (BCA)",
    },
    shippingAddress:
      "Jl. Kebon Jeruk No. 789, RT 05/RW 02, Kelurahan Kebon Jeruk, Kecamatan Kebon Jeruk, Jakarta Barat, 11530",
  },
  dresscode: [
    {
      id: "1",
      title: "Warna",
      description: "Dusty Pink, Cream, atau Pastel",
      icon: "color",
    },
    {
      id: "2",
      title: "Formal",
      description: "Batik, Kebaya, atau Formal Dress",
      icon: "formal",
    },
    {
      id: "3",
      title: "Alas Kaki",
      description: "Hindari sepatu berhak tinggi",
      icon: "traditional",
    },
  ],
  contactPersons: [
    {
      id: "1",
      name: "Dewi",
      role: "Keluarga Mempelai Wanita",
      phoneNumber: "081234567890",
    },
    {
      id: "2",
      name: "Rudi",
      role: "Keluarga Mempelai Pria",
      phoneNumber: "089876543210",
    },
    {
      id: "3",
      name: "Tina",
      role: "Wedding Organizer",
      phoneNumber: "087654321098",
    },
  ],
};

export default function Home() {
  // Define sections for navigation
  const sections = [
    {
      id: "hero",
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: "greeting",
      label: "Greeting",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
    },
    {
      id: "quote",
      label: "Quote",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
    },
    {
      id: "couple",
      label: "Couple",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: "events",
      label: "Events",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "video",
      label: "Video",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "livestream",
      label: "Live",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "love-story",
      label: "Story",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: "rundown",
      label: "Rundown",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "rsvp",
      label: "RSVP",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "prayer",
      label: "Prayer",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: "gift",
      label: "Gift",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
    },
    {
      id: "dresscode",
      label: "Dress",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      id: "contact",
      label: "Contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main>
      <Hero
        bridesName={weddingData.coupleInfo.bride.name}
        groomsName={weddingData.coupleInfo.groom.name}
        backgroundImage="/images/hero-bg.jpg"
      />

      <Greeting />

      <Quote quoteText={weddingData.quote} quoteSource="Ar-Rum 30:21" />

      <Couple coupleInfo={weddingData.coupleInfo} />

      <Events events={weddingData.events} />

      <Gallery galleryItems={weddingData.gallery} />

      <Video videoUrl={weddingData.videoUrl} videoTitle="Wedding Video" />

      <LiveStream
        youtubeUrl={weddingData.liveStreamUrl}
        zoomUrl={weddingData.zoomInfo.url}
        zoomId={weddingData.zoomInfo.id}
        zoomPassword={weddingData.zoomInfo.password}
        date={weddingData.events[0].date}
        time={weddingData.events[0].time}
      />

      <LoveStory loveStoryItems={weddingData.loveStory} />

      <Rundown rundownEvents={weddingData.rundown} />

      <RSVP />

      <Prayer prayerText={weddingData.prayer} />

      <Gift
        giftInfo={weddingData.giftInfo}
        bridesName={weddingData.coupleInfo.bride.name}
      />

      <Dresscode dresscodeItems={weddingData.dresscode} />

      <Contact
        contactPersons={weddingData.contactPersons}
        bridesName={weddingData.coupleInfo.bride.name}
      />

      <Footer
        copyrightName={`${weddingData.coupleInfo.bride.name} & ${weddingData.coupleInfo.groom.name} Wedding`}
        developerName="Farhan Fadhilah"
        developerUrl="https://farhanfadhilah.com"
      />

      {/* Bottom Navigation */}
      <Navigation
        sections={sections}
        autoNavigate={true}
        autoNavigateInterval={5000}
      />
    </main>
  );
}
