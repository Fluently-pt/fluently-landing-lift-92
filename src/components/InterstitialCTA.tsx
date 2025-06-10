import React from "react";
import { Button } from "@/components/ui/button";

const InterstitialCTA = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-calm-lavender/10 to-calm-navy/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-nunito font-bold text-2xl sm:text-3xl text-calm-charcoal mb-6 animate-fade-in">
          Start Offering Continuous Support Between Sessions
        </h2>
        <p className="font-nunito text-lg text-calm-charcoal/80 mb-8 animate-fade-in">
          Join our waitlist of pioneering clinics and therapists reimagining
          what happens between therapy.
        </p>
        <Button
          onClick={scrollToCTA}
          className="bg-calm-lavender hover:from-calm-navy/90 hover:to-calm-lavender/90 text-white font-nunito font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in"
        >
          Join the Waitlist
        </Button>
      </div>
    </section>
  );
};

export default InterstitialCTA;
