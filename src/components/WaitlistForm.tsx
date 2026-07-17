"use client";

import React, { useState } from "react";
import { joinWaitlist } from "@/app/actions";

export default function WaitlistForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const result = await joinWaitlist({ firstName, email });
      if (result.success) {
        setStatus("success");
        setFirstName("");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(result.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Waitlist submission error:", err);
      setStatus("error");
      setErrorMsg("Connection error. Please check your internet and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-[500px] mx-auto text-center py-6 px-6 bg-white/5 border border-accent-green/20 rounded-2xl animate-fade-in">
        <span className="text-3xl mb-3 block">🎉</span>
        <h3 className="font-display font-medium text-xl text-white mb-2">You're on the list!</h3>
        <p className="font-body text-sm text-white/80 leading-relaxed">
          Thanks for joining. We'll be in touch soon to get your circle onboarded personally.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[452px] mx-auto flex flex-col gap-4 font-body">
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {/* First Name Input */}
        <div className="flex-1">
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            aria-label="First name"
            disabled={status === "submitting"}
            className="w-full h-12 bg-transparent text-white placeholder-white/50 text-base px-4 py-2 rounded-xl border border-white/20 outline-none focus:border-accent-green/50 disabled:opacity-50 transition-all"
          />
        </div>

        {/* Email Address Input */}
        <div className="flex-1">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            aria-label="Email address"
            disabled={status === "submitting"}
            className="w-full h-12 bg-transparent text-white placeholder-white/50 text-base px-4 py-2 rounded-xl border border-white/20 outline-none focus:border-accent-green/50 disabled:opacity-50 transition-all"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full h-12 bg-accent-green text-primary-green hover:bg-[#1fb84a] active:scale-[0.98] font-semibold text-base rounded-xl transition-all cursor-pointer shadow-lg hover:shadow-accent-green/10 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {status === "submitting" ? (
          <>
            <svg className="animate-spin h-5 w-5 text-primary-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Joining...</span>
          </>
        ) : (
          <span>Join the waitlist</span>
        )}
      </button>

      {/* Error Message Display */}
      {status === "error" && (
        <p className="text-rose-300 text-sm text-center mt-1 animate-fade-in font-medium">
          ⚠️ {errorMsg}
        </p>
      )}
    </form>
  );
}
