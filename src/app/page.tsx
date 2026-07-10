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
          <svg width="163" height="38" viewBox="0 0 163 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.9978 17.8161C51.9978 27.6556 35.3463 13.2844 25.5068 13.2844C15.6672 13.2844 16.3657 27.6556 16.3657 17.8161C16.3657 7.97652 24.3422 0 34.1818 0C44.0213 0 51.9978 7.97652 51.9978 17.8161Z" fill="#27D258"/>
            <path d="M-7.62939e-06 19.7064C-7.62939e-06 9.86684 16.7033 24.6783 26.5428 24.6783C36.3823 24.6783 35.6321 9.86684 35.6321 19.7064C35.6321 29.5459 27.6556 37.5224 17.816 37.5224C7.97651 37.5224 -7.62939e-06 29.5459 -7.62939e-06 19.7064Z" fill="#27D258"/>
            <path d="M77.5354 23.3391C77.7421 23.431 77.8455 23.5688 77.8455 23.7525C77.8455 23.7755 77.834 23.8099 77.811 23.8559C77.811 23.8788 77.7881 23.9477 77.7421 24.0626L74.504 30.8834C74.4121 31.0901 74.2743 31.1934 74.0906 31.1934C74.0446 31.1934 73.9872 31.1705 73.9183 31.1245C73.8494 31.1016 73.7461 31.0212 73.6083 30.8834C73.4935 30.7686 73.2638 30.7112 72.9193 30.7112H55.6605C55.316 30.7112 55.1438 30.5389 55.1438 30.1944V29.161C55.1438 28.8165 55.316 28.6442 55.6605 28.6442C57.36 28.6442 58.2097 27.5534 58.2097 25.3716V10.2486C58.2097 8.06687 57.36 6.976 55.6605 6.976C55.316 6.976 55.1438 6.80376 55.1438 6.45927V5.42581C55.1438 5.05835 55.316 4.87463 55.6605 4.87463H66.0985C66.5348 4.87463 66.753 5.05835 66.753 5.42581V6.45927C66.753 6.80376 66.5463 6.976 66.1329 6.976H63.6871V24.9927C63.6871 27.1744 64.4794 28.2653 66.064 28.2653H67.4075C69.084 28.2653 70.6227 27.9093 72.0237 27.1974C73.4246 26.4625 74.6188 25.096 75.6063 23.098L75.7097 22.8913C75.8245 22.6846 75.9623 22.5813 76.1231 22.5813C76.2379 22.5813 76.3412 22.6157 76.4331 22.6846L77.5354 23.3391Z" fill="#06371E"/>
            <path d="M85.4743 13.039C86.7833 13.039 87.989 13.3031 89.0914 13.8313C90.2167 14.3365 91.1813 15.037 91.9851 15.9327C92.7889 16.8054 93.4089 17.7929 93.8453 18.8952C94.3046 19.9746 94.5343 21.1 94.5343 22.2712C94.5343 23.9707 94.1324 25.4979 93.3286 26.8529C92.5248 28.1849 91.4683 29.2413 90.1593 30.0222C88.8502 30.7801 87.4264 31.159 85.8876 31.159C84.5786 31.159 83.3729 30.9064 82.2705 30.4011C81.1682 29.8959 80.2036 29.2184 79.3768 28.3686C78.573 27.4959 77.9415 26.5084 77.4822 25.4061C77.0458 24.2807 76.8276 23.1095 76.8276 21.8923C76.8276 20.2158 77.2181 18.7115 77.9989 17.3795C78.7797 16.0475 79.8247 14.9911 81.1337 14.2102C82.4428 13.4294 83.8896 13.039 85.4743 13.039ZM86.9556 28.3686C87.3919 28.3686 87.8742 28.2538 88.4024 28.0242C88.9306 27.7945 89.3899 27.3926 89.7803 26.8185C90.1937 26.2443 90.4004 25.452 90.4004 24.4415C90.4004 23.6377 90.2397 22.7535 89.9181 21.7889C89.6196 20.8014 89.1947 19.8598 88.6435 18.9641C88.1153 18.0455 87.4838 17.2991 86.7489 16.725C86.0369 16.1279 85.2561 15.8293 84.4063 15.8293C83.4648 15.8293 82.6495 16.1853 81.9605 16.8972C81.2715 17.5862 80.927 18.5393 80.927 19.7565C80.927 20.5373 81.0763 21.4215 81.3749 22.409C81.6964 23.3965 82.1213 24.3496 82.6495 25.2683C83.2006 26.1639 83.8437 26.9103 84.5786 27.5074C85.3135 28.0816 86.1058 28.3686 86.9556 28.3686Z" fill="#06371E"/>
            <path d="M103.188 13.039C104.497 13.039 105.703 13.3031 106.806 13.8313C107.931 14.3365 108.895 15.037 109.699 15.9327C110.503 16.8054 111.123 17.7929 111.559 18.8952C112.019 19.9746 112.248 21.1 112.248 22.2712C112.248 23.9707 111.847 25.4979 111.043 26.8529C110.239 28.1849 109.182 29.2413 107.873 30.0222C106.564 30.7801 105.141 31.159 103.602 31.159C102.293 31.159 101.087 30.9064 99.9847 30.4011C98.8823 29.8959 97.9178 29.2184 97.091 28.3686C96.2872 27.4959 95.6556 26.5084 95.1963 25.4061C94.76 24.2807 94.5418 23.1095 94.5418 21.8923C94.5418 20.2158 94.9322 18.7115 95.7131 17.3795C96.4939 16.0475 97.5388 14.9911 98.8479 14.2102C100.157 13.4294 101.604 13.039 103.188 13.039ZM104.67 28.3686C105.106 28.3686 105.588 28.2538 106.117 28.0242C106.645 27.7945 107.104 27.3926 107.495 26.8185C107.908 26.2443 108.115 25.452 108.115 24.4415C108.115 23.6377 107.954 22.7535 107.632 21.7889C107.334 20.8014 106.909 19.8598 106.358 18.9641C105.829 18.0455 105.198 17.2991 104.463 16.725C103.751 16.1279 102.97 15.8293 102.121 15.8293C101.179 15.8293 100.364 16.1853 99.6747 16.8972C98.9857 17.5862 98.6412 18.5393 98.6412 19.7565C98.6412 20.5373 98.7905 21.4215 99.089 22.409C99.4106 23.3965 99.8354 24.3496 100.364 25.2683C100.915 26.1639 101.558 26.9103 102.293 27.5074C103.028 28.0816 103.82 28.3686 104.67 28.3686Z" fill="#06371E"/>
            <path d="M118.37 16.1738C118.507 15.8523 118.76 15.4504 119.127 14.9681C119.495 14.4628 120.046 14.015 120.781 13.6246C121.516 13.2342 122.469 13.039 123.64 13.039C124.421 13.039 125.248 13.1997 126.12 13.5213C126.993 13.8428 127.82 14.3595 128.601 15.0714C129.382 15.7834 130.013 16.7135 130.495 17.8618C131.001 19.0101 131.253 20.4225 131.253 22.099C131.253 24.2118 130.874 25.9457 130.117 27.3007C129.359 28.6327 128.371 29.6088 127.154 30.2289C125.937 30.8489 124.628 31.159 123.227 31.159C121.481 31.159 119.989 30.6078 118.748 29.5055V32.2613C118.748 33.18 118.955 33.9493 119.369 34.5694C119.782 35.2125 120.413 35.534 121.263 35.534C121.608 35.534 121.78 35.7062 121.78 36.0507V37.0842C121.78 37.4287 121.608 37.6009 121.263 37.6009H111.411C111.066 37.6009 110.894 37.4287 110.894 37.0842V36.0507C110.894 35.7062 111.078 35.534 111.445 35.534C112.295 35.534 112.915 35.2125 113.306 34.5694C113.719 33.9493 113.926 33.18 113.926 32.2613V20.411C113.926 19.7909 113.891 19.1938 113.822 18.6197C113.753 18.0455 113.57 17.5632 113.271 17.1728C112.996 16.7594 112.536 16.5183 111.893 16.4494C111.732 16.4264 111.629 16.3805 111.583 16.3116C111.537 16.2197 111.514 16.1164 111.514 16.0016V14.8303C111.514 14.5317 111.675 14.3825 111.997 14.3825C113.145 14.3825 114.086 14.3365 114.821 14.2447C115.556 14.1298 116.188 13.9691 116.716 13.7624C117.267 13.5557 117.807 13.326 118.335 13.0734C118.404 13.0275 118.461 13.0045 118.507 13.0045C118.576 13.0045 118.622 13.0045 118.645 13.0045H118.68C118.726 13.0045 118.748 13.039 118.748 13.1079C118.748 13.1308 118.737 13.1882 118.714 13.2801C118.714 13.372 118.691 13.6361 118.645 14.0724C118.599 14.4858 118.507 15.1863 118.37 16.1738ZM118.748 24.5793C118.84 25.2912 119.036 25.9802 119.334 26.6462C119.656 27.3122 120.092 27.8519 120.643 28.2653C121.194 28.6787 121.849 28.8854 122.607 28.8854C123.709 28.8854 124.57 28.6098 125.19 28.0586C125.81 27.5074 126.235 26.7955 126.465 25.9228C126.718 25.0501 126.844 24.1429 126.844 23.2013C126.844 20.9966 126.396 19.2512 125.5 17.9651C124.628 16.6791 123.479 16.036 122.056 16.036C121.137 16.036 120.391 16.3001 119.816 16.8283C119.265 17.3336 118.909 17.8273 118.748 18.3096V24.5793Z" fill="#06371E"/>
            <path d="M140.698 28.6442C141.042 28.6442 141.215 28.8165 141.215 29.161V30.1944C141.215 30.5389 141.019 30.7112 140.629 30.7112H130.88C130.49 30.7112 130.294 30.5389 130.294 30.1944V29.161C130.294 28.8165 130.467 28.6442 130.811 28.6442H130.88C131.73 28.6442 132.35 28.3342 132.74 27.7141C133.154 27.0711 133.36 26.2902 133.36 25.3716V21.72C133.36 21.1918 133.314 20.6636 133.223 20.1354C133.154 19.6072 132.981 19.1479 132.706 18.7575C132.43 18.367 131.971 18.1374 131.328 18.0685C131.052 18.0455 130.915 17.8962 130.915 17.6206V16.4494C130.915 16.3116 130.96 16.2197 131.052 16.1738C131.144 16.1049 131.27 16.0475 131.431 16.0016C133.246 15.4044 134.635 14.7959 135.6 14.1758C136.587 13.5327 137.31 12.9701 137.77 12.4878C137.816 12.4419 137.862 12.4189 137.908 12.4189H138.011C138.057 12.4189 138.08 12.4419 138.08 12.4878V25.3372C138.08 26.2558 138.287 27.0366 138.7 27.6797C139.113 28.3227 139.745 28.6442 140.595 28.6442H140.698ZM135.772 5.21912C136.369 5.21912 136.955 5.50619 137.529 6.08033C138.103 6.65448 138.39 7.22862 138.39 7.80277C138.39 8.37691 138.103 8.95106 137.529 9.5252C136.955 10.0993 136.369 10.3864 135.772 10.3864C135.221 10.3864 134.646 10.0993 134.049 9.5252C133.475 8.97402 133.188 8.39988 133.188 7.80277C133.188 7.22862 133.475 6.65448 134.049 6.08033C134.623 5.50619 135.198 5.21912 135.772 5.21912Z" fill="#06371E"/>
            <path d="M160.003 19.4809V25.3716C160.003 26.6347 160.198 27.4959 160.589 27.9553C161.002 28.4146 161.542 28.6442 162.208 28.6442H162.483C162.828 28.6442 163 28.8165 163 29.161V30.1944C163 30.5389 162.828 30.7112 162.483 30.7112H153.32C152.975 30.7112 152.803 30.5389 152.803 30.1944V29.161C152.803 28.8165 152.975 28.6442 153.32 28.6442H153.561C154.043 28.6442 154.434 28.4146 154.732 27.9553C155.031 27.4959 155.18 26.6347 155.18 25.3716V19.4809C155.18 18.3785 155.008 17.5403 154.663 16.9661C154.319 16.369 153.664 16.0705 152.7 16.0705C152.126 16.0705 151.552 16.2197 150.977 16.5183C150.403 16.7939 149.898 17.1613 149.462 17.6206C149.025 18.057 148.704 18.5278 148.497 19.033V25.3716C148.497 26.2902 148.692 27.0711 149.083 27.7141C149.496 28.3342 150.036 28.6442 150.702 28.6442H150.771C151.115 28.6442 151.287 28.8165 151.287 29.161V30.1944C151.287 30.5389 151.115 30.7112 150.771 30.7112H141.091C140.746 30.7112 140.574 30.5389 140.574 30.1944V29.161C140.574 28.8165 140.746 28.6442 141.091 28.6442H141.16C142.009 28.6442 142.641 28.3342 143.054 27.7141C143.468 27.0711 143.674 26.2902 143.674 25.3716V21.0311C143.674 20.411 143.628 19.8139 143.536 19.2397C143.468 18.6656 143.284 18.1833 142.985 17.7929C142.71 17.3795 142.25 17.1384 141.607 17.0695C141.355 17.0465 141.228 16.8972 141.228 16.6216V15.4504C141.228 15.2207 141.389 15.0714 141.711 15.0025C143.364 14.7499 144.777 14.3595 145.948 13.8313C147.142 13.3031 147.969 12.8782 148.428 12.5567C148.543 12.4648 148.635 12.4189 148.704 12.4189H148.738C148.784 12.4189 148.807 12.4419 148.807 12.4878C148.807 12.5337 148.796 12.6256 148.773 12.7634L148.187 17.0006C148.509 16.4724 148.933 15.9097 149.462 15.3126C149.99 14.6925 150.644 14.1643 151.425 13.7279C152.206 13.2686 153.113 13.039 154.147 13.039C155.387 13.039 156.397 13.2227 157.178 13.5901C157.959 13.9576 158.545 14.4514 158.935 15.0714C159.348 15.6915 159.624 16.3805 159.762 17.1384C159.923 17.8962 160.003 18.6771 160.003 19.4809Z" fill="#06371E"/>
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
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[2184px] h-[971px] pointer-events-none opacity-[0.6] z-0"
            style={{ backgroundImage: 'url("/images/hero-bg-desktop.svg")', backgroundSize: '100% 100%' }}
          />

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
              <div className="bg-[#FFCBE3] rounded-[32px] pt-6 pb-6 px-4 w-full md:w-[360px] h-[252px] flex flex-col justify-start gap-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,203,227,0.8)] transition-all duration-300">
                <div className="flex justify-between items-start w-full">
                  {/* Figma-exported Step 1 Icon */}
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm shrink-0 bg-white">
                    <img src="/images/icon-step-1.png" alt="Start or join a circle icon" className="w-full h-full object-cover" />
                  </div>
                  {/* Step Number Badge (Solid #EDEFEB background with border) */}
                  <div className="w-8 h-8 rounded-full bg-[#EDEFEB] border border-primary-green/10 flex items-center justify-center font-body font-semibold text-sm text-primary-green shadow-sm leading-none">
                    1
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="font-body font-semibold text-xl text-primary-green leading-none">
                    Start or join a circle
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-[20px]">
                    Invite people you trust. Set the amount, how often you save, and who gets paid when.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#8FD3DB] rounded-[32px] pt-6 pb-6 px-4 w-full md:w-[360px] h-[252px] flex flex-col justify-start gap-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(143,211,219,0.8)] transition-all duration-300">
                <div className="flex justify-between items-start w-full">
                  {/* Figma-exported Step 2 Icon */}
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm shrink-0 bg-white">
                    <img src="/images/icon-step-2.png" alt="Contribute automatically icon" className="w-full h-full object-cover" />
                  </div>
                  {/* Step Number Badge (Solid #EDEFEB background with border) */}
                  <div className="w-8 h-8 rounded-full bg-[#EDEFEB] border border-primary-green/10 flex items-center justify-center font-body font-semibold text-sm text-primary-green leading-none">
                    2
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="font-body font-semibold text-xl text-primary-green leading-none">
                    Contribute automatically
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-[20px]">
                    Loopin collects each month through an FCA-regulated payment partner. No reminders, no reconciling.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#FFD95A] rounded-[32px] pt-6 pb-6 px-4 w-full md:w-[360px] h-[252px] flex flex-col justify-start gap-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,217,90,0.8)] transition-all duration-300">
                <div className="flex justify-between items-start w-full">
                  {/* Figma-exported Step 3 Icon */}
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm shrink-0 bg-white">
                    <img src="/images/icon-step-3.png" alt="Take your turn icon" className="w-full h-full object-cover" />
                  </div>
                  {/* Step Number Badge (Solid #EDEFEB background with border) */}
                  <div className="w-8 h-8 rounded-full bg-[#EDEFEB] border border-primary-green/10 flex items-center justify-center font-body font-semibold text-sm text-primary-green leading-none">
                    3
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="font-body font-semibold text-xl text-primary-green leading-none">
                    Take your turn
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-[20px]">
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
              <svg width="163" height="38" viewBox="0 0 163 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.9978 17.8161C51.9978 27.6556 35.3463 13.2844 25.5068 13.2844C15.6672 13.2844 16.3657 27.6556 16.3657 17.8161C16.3657 7.97652 24.3422 0 34.1818 0C44.0213 0 51.9978 7.97652 51.9978 17.8161Z" fill="#27D258"/>
                <path d="M-7.62939e-06 19.7064C-7.62939e-06 9.86684 16.7033 24.6783 26.5428 24.6783C36.3823 24.6783 35.6321 9.86684 35.6321 19.7064C35.6321 29.5459 27.6556 37.5224 17.816 37.5224C7.97651 37.5224 -7.62939e-06 29.5459 -7.62939e-06 19.7064Z" fill="#27D258"/>
                <path d="M77.5354 23.3391C77.7421 23.431 77.8455 23.5688 77.8455 23.7525C77.8455 23.7755 77.834 23.8099 77.811 23.8559C77.811 23.8788 77.7881 23.9477 77.7421 24.0626L74.504 30.8834C74.4121 31.0901 74.2743 31.1934 74.0906 31.1934C74.0446 31.1934 73.9872 31.1705 73.9183 31.1245C73.8494 31.1016 73.7461 31.0212 73.6083 30.8834C73.4935 30.7686 73.2638 30.7112 72.9193 30.7112H55.6605C55.316 30.7112 55.1438 30.5389 55.1438 30.1944V29.161C55.1438 28.8165 55.316 28.6442 55.6605 28.6442C57.36 28.6442 58.2097 27.5534 58.2097 25.3716V10.2486C58.2097 8.06687 57.36 6.976 55.6605 6.976C55.316 6.976 55.1438 6.80376 55.1438 6.45927V5.42581C55.1438 5.05835 55.316 4.87463 55.6605 4.87463H66.0985C66.5348 4.87463 66.753 5.05835 66.753 5.42581V6.45927C66.753 6.80376 66.5463 6.976 66.1329 6.976H63.6871V24.9927C63.6871 27.1744 64.4794 28.2653 66.064 28.2653H67.4075C69.084 28.2653 70.6227 27.9093 72.0237 27.1974C73.4246 26.4625 74.6188 25.096 75.6063 23.098L75.7097 22.8913C75.8245 22.6846 75.9623 22.5813 76.1231 22.5813C76.2379 22.5813 76.3412 22.6157 76.4331 22.6846L77.5354 23.3391Z" fill="#06371E"/>
                <path d="M85.4743 13.039C86.7833 13.039 87.989 13.3031 89.0914 13.8313C90.2167 14.3365 91.1813 15.037 91.9851 15.9327C92.7889 16.8054 93.4089 17.7929 93.8453 18.8952C94.3046 19.9746 94.5343 21.1 94.5343 22.2712C94.5343 23.9707 94.1324 25.4979 93.3286 26.8529C92.5248 28.1849 91.4683 29.2413 90.1593 30.0222C88.8502 30.7801 87.4264 31.159 85.8876 31.159C84.5786 31.159 83.3729 30.9064 82.2705 30.4011C81.1682 29.8959 80.2036 29.2184 79.3768 28.3686C78.573 27.4959 77.9415 26.5084 77.4822 25.4061C77.0458 24.2807 76.8276 23.1095 76.8276 21.8923C76.8276 20.2158 77.2181 18.7115 77.9989 17.3795C78.7797 16.0475 79.8247 14.9911 81.1337 14.2102C82.4428 13.4294 83.8896 13.039 85.4743 13.039ZM86.9556 28.3686C87.3919 28.3686 87.8742 28.2538 88.4024 28.0242C88.9306 27.7945 89.3899 27.3926 89.7803 26.8185C90.1937 26.2443 90.4004 25.452 90.4004 24.4415C90.4004 23.6377 90.2397 22.7535 89.9181 21.7889C89.6196 20.8014 89.1947 19.8598 88.6435 18.9641C88.1153 18.0455 87.4838 17.2991 86.7489 16.725C86.0369 16.1279 85.2561 15.8293 84.4063 15.8293C83.4648 15.8293 82.6495 16.1853 81.9605 16.8972C81.2715 17.5862 80.927 18.5393 80.927 19.7565C80.927 20.5373 81.0763 21.4215 81.3749 22.409C81.6964 23.3965 82.1213 24.3496 82.6495 25.2683C83.2006 26.1639 83.8437 26.9103 84.5786 27.5074C85.3135 28.0816 86.1058 28.3686 86.9556 28.3686Z" fill="#06371E"/>
                <path d="M103.188 13.039C104.497 13.039 105.703 13.3031 106.806 13.8313C107.931 14.3365 108.895 15.037 109.699 15.9327C110.503 16.8054 111.123 17.7929 111.559 18.8952C112.019 19.9746 112.248 21.1 112.248 22.2712C112.248 23.9707 111.847 25.4979 111.043 26.8529C110.239 28.1849 109.182 29.2413 107.873 30.0222C106.564 30.7801 105.141 31.159 103.602 31.159C102.293 31.159 101.087 30.9064 99.9847 30.4011C98.8823 29.8959 97.9178 29.2184 97.091 28.3686C96.2872 27.4959 95.6556 26.5084 95.1963 25.4061C94.76 24.2807 94.5418 23.1095 94.5418 21.8923C94.5418 20.2158 94.9322 18.7115 95.7131 17.3795C96.4939 16.0475 97.5388 14.9911 98.8479 14.2102C100.157 13.4294 101.604 13.039 103.188 13.039ZM104.67 28.3686C105.106 28.3686 105.588 28.2538 106.117 28.0242C106.645 27.7945 107.104 27.3926 107.495 26.8185C107.908 26.2443 108.115 25.452 108.115 24.4415C108.115 23.6377 107.954 22.7535 107.632 21.7889C107.334 20.8014 106.909 19.8598 106.358 18.9641C105.829 18.0455 105.198 17.2991 104.463 16.725C103.751 16.1279 102.97 15.8293 102.121 15.8293C101.179 15.8293 100.364 16.1853 99.6747 16.8972C98.9857 17.5862 98.6412 18.5393 98.6412 19.7565C98.6412 20.5373 98.7905 21.4215 99.089 22.409C99.4106 23.3965 99.8354 24.3496 100.364 25.2683C100.915 26.1639 101.558 26.9103 102.293 27.5074C103.028 28.0816 103.82 28.3686 104.67 28.3686Z" fill="#06371E"/>
                <path d="M118.37 16.1738C118.507 15.8523 118.76 15.4504 119.127 14.9681C119.495 14.4628 120.046 14.015 120.781 13.6246C121.516 13.2342 122.469 13.039 123.64 13.039C124.421 13.039 125.248 13.1997 126.12 13.5213C126.993 13.8428 127.82 14.3595 128.601 15.0714C129.382 15.7834 130.013 16.7135 130.495 17.8618C131.001 19.0101 131.253 20.4225 131.253 22.099C131.253 24.2118 130.874 25.9457 130.117 27.3007C129.359 28.6327 128.371 29.6088 127.154 30.2289C125.937 30.8489 124.628 31.159 123.227 31.159C121.481 31.159 119.989 30.6078 118.748 29.5055V32.2613C118.748 33.18 118.955 33.9493 119.369 34.5694C119.782 35.2125 120.413 35.534 121.263 35.534C121.608 35.534 121.78 35.7062 121.78 36.0507V37.0842C121.78 37.4287 121.608 37.6009 121.263 37.6009H111.411C111.066 37.6009 110.894 37.4287 110.894 37.0842V36.0507C110.894 35.7062 111.078 35.534 111.445 35.534C112.295 35.534 112.915 35.2125 113.306 34.5694C113.719 33.9493 113.926 33.18 113.926 32.2613V20.411C113.926 19.7909 113.891 19.1938 113.822 18.6197C113.753 18.0455 113.57 17.5632 113.271 17.1728C112.996 16.7594 112.536 16.5183 111.893 16.4494C111.732 16.4264 111.629 16.3805 111.583 16.3116C111.537 16.2197 111.514 16.1164 111.514 16.0016V14.8303C111.514 14.5317 111.675 14.3825 111.997 14.3825C113.145 14.3825 114.086 14.3365 114.821 14.2447C115.556 14.1298 116.188 13.9691 116.716 13.7624C117.267 13.5557 117.807 13.326 118.335 13.0734C118.404 13.0275 118.461 13.0045 118.507 13.0045C118.576 13.0045 118.622 13.0045 118.645 13.0045H118.68C118.726 13.0045 118.748 13.039 118.748 13.1079C118.748 13.1308 118.737 13.1882 118.714 13.2801C118.714 13.372 118.691 13.6361 118.645 14.0724C118.599 14.4858 118.507 15.1863 118.37 16.1738ZM118.748 24.5793C118.84 25.2912 119.036 25.9802 119.334 26.6462C119.656 27.3122 120.092 27.8519 120.643 28.2653C121.194 28.6787 121.849 28.8854 122.607 28.8854C123.709 28.8854 124.57 28.6098 125.19 28.0586C125.81 27.5074 126.235 26.7955 126.465 25.9228C126.718 25.0501 126.844 24.1429 126.844 23.2013C126.844 20.9966 126.396 19.2512 125.5 17.9651C124.628 16.6791 123.479 16.036 122.056 16.036C121.137 16.036 120.391 16.3001 119.816 16.8283C119.265 17.3336 118.909 17.8273 118.748 18.3096V24.5793Z" fill="#06371E"/>
                <path d="M140.698 28.6442C141.042 28.6442 141.215 28.8165 141.215 29.161V30.1944C141.215 30.5389 141.019 30.7112 140.629 30.7112H130.88C130.49 30.7112 130.294 30.5389 130.294 30.1944V29.161C130.294 28.8165 130.467 28.6442 130.811 28.6442H130.88C131.73 28.6442 132.35 28.3342 132.74 27.7141C133.154 27.0711 133.36 26.2902 133.36 25.3716V21.72C133.36 21.1918 133.314 20.6636 133.223 20.1354C133.154 19.6072 132.981 19.1479 132.706 18.7575C132.43 18.367 131.971 18.1374 131.328 18.0685C131.052 18.0455 130.915 17.8962 130.915 17.6206V16.4494C130.915 16.3116 130.96 16.2197 131.052 16.1738C131.144 16.1049 131.27 16.0475 131.431 16.0016C133.246 15.4044 134.635 14.7959 135.6 14.1758C136.587 13.5327 137.31 12.9701 137.77 12.4878C137.816 12.4419 137.862 12.4189 137.908 12.4189H138.011C138.057 12.4189 138.08 12.4419 138.08 12.4878V25.3372C138.08 26.2558 138.287 27.0366 138.7 27.6797C139.113 28.3227 139.745 28.6442 140.595 28.6442H140.698ZM135.772 5.21912C136.369 5.21912 136.955 5.50619 137.529 6.08033C138.103 6.65448 138.39 7.22862 138.39 7.80277C138.39 8.37691 138.103 8.95106 137.529 9.5252C136.955 10.0993 136.369 10.3864 135.772 10.3864C135.221 10.3864 134.646 10.0993 134.049 9.5252C133.475 8.97402 133.188 8.39988 133.188 7.80277C133.188 7.22862 133.475 6.65448 134.049 6.08033C134.623 5.50619 135.198 5.21912 135.772 5.21912Z" fill="#06371E"/>
                <path d="M160.003 19.4809V25.3716C160.003 26.6347 160.198 27.4959 160.589 27.9553C161.002 28.4146 161.542 28.6442 162.208 28.6442H162.483C162.828 28.6442 163 28.8165 163 29.161V30.1944C163 30.5389 162.828 30.7112 162.483 30.7112H153.32C152.975 30.7112 152.803 30.5389 152.803 30.1944V29.161C152.803 28.8165 152.975 28.6442 153.32 28.6442H153.561C154.043 28.6442 154.434 28.4146 154.732 27.9553C155.031 27.4959 155.18 26.6347 155.18 25.3716V19.4809C155.18 18.3785 155.008 17.5403 154.663 16.9661C154.319 16.369 153.664 16.0705 152.7 16.0705C152.126 16.0705 151.552 16.2197 150.977 16.5183C150.403 16.7939 149.898 17.1613 149.462 17.6206C149.025 18.057 148.704 18.5278 148.497 19.033V25.3716C148.497 26.2902 148.692 27.0711 149.083 27.7141C149.496 28.3342 150.036 28.6442 150.702 28.6442H150.771C151.115 28.6442 151.287 28.8165 151.287 29.161V30.1944C151.287 30.5389 151.115 30.7112 150.771 30.7112H141.091C140.746 30.7112 140.574 30.5389 140.574 30.1944V29.161C140.574 28.8165 140.746 28.6442 141.091 28.6442H141.16C142.009 28.6442 142.641 28.3342 143.054 27.7141C143.468 27.0711 143.674 26.2902 143.674 25.3716V21.0311C143.674 20.411 143.628 19.8139 143.536 19.2397C143.468 18.6656 143.284 18.1833 142.985 17.7929C142.71 17.3795 142.25 17.1384 141.607 17.0695C141.355 17.0465 141.228 16.8972 141.228 16.6216V15.4504C141.228 15.2207 141.389 15.0714 141.711 15.0025C143.364 14.7499 144.777 14.3595 145.948 13.8313C147.142 13.3031 147.969 12.8782 148.428 12.5567C148.543 12.4648 148.635 12.4189 148.704 12.4189H148.738C148.784 12.4189 148.807 12.4419 148.807 12.4878C148.807 12.5337 148.796 12.6256 148.773 12.7634L148.187 17.0006C148.509 16.4724 148.933 15.9097 149.462 15.3126C149.99 14.6925 150.644 14.1643 151.425 13.7279C152.206 13.2686 153.113 13.039 154.147 13.039C155.387 13.039 156.397 13.2227 157.178 13.5901C157.959 13.9576 158.545 14.4514 158.935 15.0714C159.348 15.6915 159.624 16.3805 159.762 17.1384C159.923 17.8962 160.003 18.6771 160.003 19.4809Z" fill="#06371E"/>
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
