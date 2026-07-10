import React from "react";
import HeroDiagram from "@/components/HeroDiagram";
import Marquee from "@/components/Marquee";
import WaitlistForm from "@/components/WaitlistForm";
import GoRoundBanner from "@/components/GoRoundBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-page flex flex-col antialiased">
      {/* ================= NAVBAR ================= */}
      <nav className="w-full h-24 bg-bg-page flex items-center justify-between px-6 sm:px-12 md:px-20 z-50 sticky top-0 backdrop-blur-md bg-bg-page/90">
        <a href="#" className="flex items-center" aria-label="Loopin home">
          {/* Custom SVG logo based on Figma specs */}
          <svg width="125" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="18" cy="14" rx="14" ry="10" fill="#27D258" opacity="0.85" />
            <ellipse cx="10" cy="22" rx="14" ry="10" fill="#27D258" opacity="0.85" className="mix-blend-multiply" />
            <text x="38" y="24" className="font-display font-bold text-2xl" fill="#06371E">Loopin</text>
          </svg>
        </a>

        {/* Join the Waitlist CTA button: Shown in navbar only on desktop */}
        <a
          href="#waitlist"
          className="hidden md:inline-flex bg-accent-green hover:bg-[#1fb84a] text-primary-green px-6 py-3 rounded-full font-body font-semibold text-base transition-all shadow-md active:scale-95 cursor-pointer border border-primary-green/5"
        >
          Join the waitlist
        </a>
      </nav>

      {/* ================= HERO SECTION (Centered Layout) ================= */}
      <main className="flex-1">
        <section className="relative overflow-hidden w-full pt-16 pb-12 flex flex-col items-center text-center">
          {/* Concentric curved mesh background pattern matching figma */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="95%" cy="50%" r="300" stroke="#06371E" strokeWidth="1.5" fill="none" />
            <circle cx="95%" cy="50%" r="450" stroke="#06371E" strokeWidth="1.5" fill="none" />
            <circle cx="95%" cy="50%" r="600" stroke="#06371E" strokeWidth="1.5" fill="none" />
            <circle cx="95%" cy="50%" r="750" stroke="#06371E" strokeWidth="1.5" fill="none" strokeDasharray="5 5" />
            <circle cx="95%" cy="50%" r="900" stroke="#06371E" strokeWidth="1.5" fill="none" />

            <circle cx="5%" cy="20%" r="200" stroke="#06371E" strokeWidth="1.5" fill="none" />
            <circle cx="5%" cy="20%" r="350" stroke="#06371E" strokeWidth="1.5" fill="none" />
            <circle cx="5%" cy="20%" r="500" stroke="#06371E" strokeWidth="1.5" fill="none" strokeDasharray="5 5" />
          </svg>

          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 flex flex-col items-center z-10">

            {/* Centered Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-[64px] leading-[1.15] text-primary-green tracking-tight max-w-[900px]">
              Save Together, Take<br />Your Turn, Build Your<br />Future.
            </h1>

            {/* Centered Subtitle */}
            <p className="font-body text-lg sm:text-xl text-text-muted mt-6 leading-relaxed max-w-[650px] mx-auto">
              The savings circle your community trusts, now protected, and building your credit.
            </p>

            {/* CTA Button: Visible ONLY on mobile/tablet, hidden on desktop */}
            <div className="mt-8 md:hidden">
              <a
                href="#waitlist"
                className="bg-accent-green hover:bg-[#1fb84a] text-primary-green px-8 py-4 rounded-full font-body font-semibold text-base transition-all shadow-lg shadow-accent-green/10 active:scale-[0.98] inline-block"
              >
                Join the waitlist
              </a>
            </div>

            {/* Centered savings circle illustration container */}
            <div className="w-full flex items-center justify-center mt-12 sm:mt-16">
              <HeroDiagram />
            </div>

          </div>
        </section>

        {/* ================= WHAT IS A SAVINGS CIRCLE (Centered Layout) ================= */}
        <section id="how-it-works" className="w-full py-24 bg-bg-page border-t border-text-main/5 flex flex-col items-center text-center">
          <div className="max-w-[975px] mx-auto px-6 sm:px-12 flex flex-col items-center">
            <h2 className="font-display text-4xl sm:text-[48px] leading-[56px] text-primary-green mb-6">
              What is a savings circle?
            </h2>
            <div className="font-body text-base sm:text-lg text-text-muted leading-relaxed space-y-6 max-w-[800px]">
              <p>
                A group agrees to save the same amount every month, for instance £200 each. Every month, one member receives the whole pot. The next month, someone else. It goes round until everyone has had their turn.
              </p>
              <p>
                You put in the same as everyone else, and you receive the same. The only thing that changes is when you get paid. People have done this for generations. Loopin just makes it safe, automatic, and rewarding.
              </p>
            </div>
          </div>
        </section>

        {/* ================= GO ROUND BANNER ================= */}
        <GoRoundBanner />

        {/* ================= THREE STEPS SECTION ================= */}
        <section className="w-full py-24 bg-[#EDEFEB]">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12">
            <div className="max-w-[838px] mb-16 text-left">
              <h2 className="font-display text-4xl sm:text-[48px] leading-[60px] text-primary-green">
                Three steps.<br />No spreadsheets, no chasing.
              </h2>
              <p className="font-body text-lg text-text-muted mt-4">
                Everything that used to live in a WhatsApp group and a notes app, handled for you.
              </p>
            </div>

            {/* Cards Grid: max-w-[1120px] (3 * 360px cards + 2 * 20px gap) */}
            <div className="flex flex-col md:flex-row gap-5 max-w-[1120px] mx-auto w-full items-stretch justify-center">
              {/* Step 1 */}
              <div className="bg-[#FFCBE3] rounded-[32px] pt-6 pb-6 px-4 w-full md:w-[360px] h-[252px] flex flex-col justify-start gap-8 shadow-sm relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,203,227,0.8)] transition-all duration-300">
                <div className="flex justify-between items-start w-full">
                  {/* Figma-exported Step 1 Icon */}
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm shrink-0 bg-white">
                    <img src="/images/icon-step-1.png" alt="Start or join a circle icon" className="w-full h-full object-cover" />
                  </div>
                  {/* Step Number Badge (Solid #EDEFEB background with border) */}
                  <div className="w-8 h-8 rounded-full bg-[#EDEFEB] border border-primary-green/10 flex items-center justify-center font-body font-semibold text-sm text-primary-green shadow-sm">
                    1
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="font-body font-semibold text-xl text-primary-green leading-none">
                    Start or join a circle
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-[15px]">
                    Invite people you trust. Set the amount, how often you save, and who gets paid when.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#8FD3DB] rounded-[32px] pt-6 pb-6 px-4 w-full md:w-[360px] h-[252px] flex flex-col justify-start gap-8 shadow-sm relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(143,211,219,0.8)] transition-all duration-300">
                <div className="flex justify-between items-start w-full">
                  {/* Figma-exported Step 2 Icon */}
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm shrink-0 bg-white">
                    <img src="/images/icon-step-2.png" alt="Contribute automatically icon" className="w-full h-full object-cover" />
                  </div>
                  {/* Step Number Badge (Solid #EDEFEB background with border) */}
                  <div className="w-8 h-8 rounded-full bg-[#EDEFEB] border border-primary-green/10 flex items-center justify-center font-body font-semibold text-sm text-primary-green shadow-sm">
                    2
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="font-body font-semibold text-xl text-primary-green leading-none">
                    Contribute automatically
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-[15px]">
                    Loopin collects each month through an FCA-regulated payment partner. No reminders, no reconciling.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#FFD95A] rounded-[32px] pt-6 pb-6 px-4 w-full md:w-[360px] h-[252px] flex flex-col justify-start gap-8 shadow-sm relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,217,90,0.8)] transition-all duration-300">
                <div className="flex justify-between items-start w-full">
                  {/* Figma-exported Step 3 Icon */}
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm shrink-0 bg-white">
                    <img src="/images/icon-step-3.png" alt="Take your turn icon" className="w-full h-full object-cover" />
                  </div>
                  {/* Step Number Badge (Solid #EDEFEB background with border) */}
                  <div className="w-8 h-8 rounded-full bg-[#EDEFEB] border border-primary-green/10 flex items-center justify-center font-body font-semibold text-sm text-primary-green shadow-sm">
                    3
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="font-body font-semibold text-xl text-primary-green leading-none">
                    Take your turn
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-[15px]">
                    When it's your month, the full pot lands in your account and every on-time payment builds your credit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY LOOPIN GRID SECTION (Centered Heading) ================= */}
        <section className="w-full py-24 bg-white flex flex-col items-center">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 w-full flex flex-col items-center">

            <h2 className="font-display text-4xl sm:text-[48px] leading-[56px] text-primary-green text-center mb-16 max-w-[838px]">
              The circle you know, with the protection it never had.
            </h2>

            {/* Feature Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Feature 1 */}
              <div className="bg-[#F0F3F2] rounded-[24px] p-8 flex flex-row gap-6 items-center shadow-sm border border-text-main/5 w-full">
                <img src="/images/icon-protected.png" alt="Protected icon" className="w-16 h-16 shrink-0 object-contain" />
                <div>
                  <h3 className="font-body font-semibold text-xl text-primary-green mb-2">
                    Your money is protected
                  </h3>
                  <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                    Payments run through an FCA-regulated partner. Loopin never holds your funds, and no one can disappear with the pot.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#F0F3F2] rounded-[24px] p-8 flex flex-row gap-6 items-center shadow-sm border border-text-main/5 w-full">
                <img src="/images/icon-credit.png" alt="Credit icon" className="w-16 h-16 shrink-0 object-contain" />
                <div>
                  <h3 className="font-body font-semibold text-xl text-primary-green mb-2">
                    Build your credit
                  </h3>
                  <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                    Every on-time contribution can be reported to credit bureaus, so saving with your circle actually counts toward your future.
                  </p>
                </div>
              </div>

              {/* Feature 3 (Distinct warm yellow style in design) */}
              <div className="bg-[#FFFBEF] rounded-[24px] p-8 flex flex-row gap-6 items-center shadow-sm border border-[#FFCA28]/60 w-full">
                <img src="/images/icon-pulse.png" alt="Pulse icon" className="w-16 h-16 shrink-0 object-contain" />
                <div>
                  <h3 className="font-body font-semibold text-xl text-primary-green mb-2">
                    Loopin Pulse
                  </h3>
                  <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                    A friendly monthly race to pay first. Climb the leaderboard, earn points, and redeem them for real rewards.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#F0F3F2] rounded-[24px] p-8 flex flex-row gap-6 items-center shadow-sm border border-text-main/5 w-full">
                <img src="/images/icon-community.png" alt="Community icon" className="w-16 h-16 shrink-0 object-contain" />
                <div>
                  <h3 className="font-body font-semibold text-xl text-primary-green mb-2">
                    Built for your community
                  </h3>
                  <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                    Invite-only circles, the names you grew up with, and a platform that respects how your community already saves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ONE PRACTICE MANY NAMES MARQUEE ================= */}
        <section className="w-full bg-[#06371E] pt-16 pb-8">
          <h2 className="font-display text-2xl text-accent-green text-center mb-8">
            One practice, many names
          </h2>
          <Marquee />
        </section>
 
        {/* ================= WAITLIST CTA FORM ================= */}
        <section id="waitlist" 
        style={{ backgroundImage: 'url("/images/form-bg.png")' }}
        className="relative w-full py-24 px-6 sm:px-12 flex items-center justify-center overflow-hidden bg-bg-page border-t border-text-main/5">
          {/* Subtle dotted grid matrix background */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#06371E 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px'
            }}
            
          />

          {/* Form Container Panel */}
          <div className="w-full max-w-[838px] bg-primary-green text-white p-10 sm:p-16 rounded-[32px] text-center z-10 shadow-2xl relative border border-white/5 overflow-hidden"            
          >
            {/* Geometric dark green background pattern from Figma */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none"
            />

            <h2 className="font-display text-4xl sm:text-[48px] mb-4 text-white relative z-10">
              Bring your circle to Loopin
            </h2>
            <p className="font-body text-base sm:text-lg text-white/80 mb-10 max-w-[530px] mx-auto leading-relaxed relative z-10">
              We're onboarding the first circles in UK cities now. Join the waitlist and we'll set yours up personally.
            </p>

            <div className="relative z-10">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white py-16 border-t border-text-main/5">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-12 flex flex-col gap-12">

          {/* Top disclaimer & logo part */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex flex-col gap-4">
              <svg width="125" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="18" cy="14" rx="14" ry="10" fill="#27D258" opacity="0.85" />
                <ellipse cx="10" cy="22" rx="14" ry="10" fill="#27D258" opacity="0.85" className="mix-blend-multiply" />
                <text x="38" y="24" className="font-display font-bold text-2xl" fill="#06371E">Loopin</text>
              </svg>
              <p className="font-body text-base text-text-muted max-w-[320px]">
                Powering community finance through trust.
              </p>
            </div>

            <p className="font-body text-xs sm:text-sm text-text-muted max-w-[415px] leading-relaxed">
              Loopin is pre-launch. When we go live, payments will be processed and safeguarded by an FCA-authorised payment partner. Loopin is a technology platform and never holds your money directly.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-text-main/5" />

          {/* Bottom copyright & names list */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-text-muted font-body w-full">
            <p>© 2026 Loopin. Built for community, in the UK.</p>
            <p className="tracking-wider text-text-main/60 font-semibold uppercase">
              pardna · ajo · kameti · susu · hagbad
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
