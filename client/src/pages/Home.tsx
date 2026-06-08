import { Button } from "@/components/ui/button";
import { Check, Shield, Home as HomeIcon, DollarSign, ArrowRight, AlertCircle, TrendingUp } from "lucide-react";

export default function Home() {
  const targetUrl = "https://trk.connectbenefit.online/click";

  const handleContinue = () => {
    window.location.href = targetUrl;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      {/* Top Alert Banner - 100% matched to advertorial style */}
      <div className="w-full bg-[#0f4c81] text-white text-center font-bold text-[14px] md:text-[16px] py-3.5 px-4 border-b-4 border-[#22c55e] shadow-md leading-snug">
        <span className="bg-[#b91c1c] text-white text-xs uppercase px-2 py-0.5 rounded font-extrabold mr-2 inline-block animate-pulse">
          NEW REPORT
        </span>
        Retirees hold $131,000 in unused home equity. Experts call it "The Sleeping Asset."
      </div>

      {/* Main Container - Centered Single-Column Article Layout */}
      <main className="flex-1 max-w-[840px] w-full mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-5 md:p-10">
          
          {/* Eyebrow & Headline */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="font-serif font-black text-[#1e293b] text-3xl md:text-[42px] leading-tight md:leading-[1.15] tracking-tight">
              How Seniors Are Unlocking $130,000 In "Sleeping" Home Equity—With Their Kids' Blessing
            </h1>
          </div>

          {/* Hero Image Block - Matches the look of the report page */}
          <div className="relative rounded-lg overflow-hidden border border-gray-200 mb-6 md:mb-8 shadow-sm">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663666425428/Sm67XczeVwxRyC6qhVGi6T/happy_senior_couple-Lxcwuuu84PNU7qXCavK4AG.webp" 
              alt="Happy Senior Couple" 
              className="w-full h-auto object-cover max-h-[380px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-6 text-white text-center">
              <p className="text-sm md:text-lg font-serif italic leading-relaxed">
                "We spent years paying for our home. Finding out we could use that money to live comfortably changed everything for us."
              </p>
            </div>
          </div>

          {/* Ultra-Simple, High-Conviction Copy (7th-Grade Reading Level) */}
          <div className="space-y-4 mb-8 text-gray-800 font-serif text-lg md:text-[20px] leading-relaxed">
            <p>
              If you are 62 or older, your home has a lot of cash sitting inside it. You built this wealth over many years. But right now, <strong>high prices, rising taxes, and big medical bills</strong> are making retirement hard.
            </p>
            <p>
              Why leave your money locked inside your walls when you can use it to <strong>stop worrying about bills today?</strong>
            </p>
            <p className="font-sans text-base md:text-lg font-semibold text-[#0f4c81] bg-blue-50 border-l-4 border-[#0f4c81] p-4 rounded-r-lg">
              👉 The next page shows how you can turn your home value into cash. You do NOT have to sell your house, you do NOT have to move, and you do NOT have to make monthly mortgage payments.
            </p>
          </div>

          {/* Primary High-Impact CTA Block - MATCHED BLUE COLOR */}
          <div className="text-center mb-8 md:mb-12">
            <Button 
              onClick={handleContinue}
              className="btn-shimmer w-full max-w-[560px] h-auto min-h-[68px] px-4 py-4 bg-[#0066cc] hover:bg-[#0052b3] text-white font-black text-base sm:text-lg md:text-[24px] rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight whitespace-normal leading-tight text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Continue To Home Equity Check
                <ArrowRight className="w-5 h-5 md:w-7 md:h-7 stroke-[3.5px] shrink-0" />
              </span>
            </Button>
            <p className="text-xs md:text-sm text-gray-500 mt-3 font-semibold flex items-center justify-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-600" /> Free, safe, and takes less than 60 seconds to check.
            </p>
          </div>

          {/* Core Benefit Matrix - 7th-Grade Level */}
          <div className="bg-[#f8fafc] rounded-xl border border-gray-200 p-5 md:p-8 mb-8">
            <h2 className="text-xl md:text-2xl font-black text-[#1e293b] mb-4 border-b border-gray-200 pb-3 font-serif uppercase tracking-tight text-center">
              4 Simple Facts About Your Home Money
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="bg-white p-5 rounded-lg border border-gray-150 shadow-sm hover:border-gray-300 transition-colors">
                <span className="inline-block bg-[#22c55e] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                  FACT #1
                </span>
                <h3 className="font-black text-gray-900 text-base md:text-lg mb-1">It is YOUR Money</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  You paid for your house for years. That money belongs to you, not the bank. You should be able to use it when you need it.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-150 shadow-sm hover:border-gray-300 transition-colors">
                <span className="inline-block bg-[#22c55e] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                  FACT #2
                </span>
                <h3 className="font-black text-gray-900 text-base md:text-lg mb-1">You Do NOT Have to Sell</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Many people think they have to sell their house to get their cash. That is not true. You stay the owner and keep living in your home.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-150 shadow-sm hover:border-gray-300 transition-colors">
                <span className="inline-block bg-[#22c55e] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                  FACT #3
                </span>
                <h3 className="font-black text-gray-900 text-base md:text-lg mb-1">No Monthly Payments</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  You do not have to make monthly mortgage payments anymore. You only pay your normal property taxes, home insurance, and keep the house in good shape.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-150 shadow-sm hover:border-gray-300 transition-colors">
                <span className="inline-block bg-[#22c55e] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                  FACT #4
                </span>
                <h3 className="font-black text-gray-900 text-base md:text-lg mb-1">Tax-Free Cash</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  The cash you get is 100% tax-free. Also, it will not hurt your Social Security or Medicare benefits.
                </p>
              </div>
            </div>
          </div>

          {/* The Golden Angle: Resolving Inheritance Guilt (MATCHED GREEN CALLOUT) */}
          <div className="bg-[#f0fdf4] border-l-4 border-[#22c55e] rounded-r-xl p-5 md:p-8 mb-8">
            <h3 className="text-lg md:text-xl font-black text-[#1e293b] mb-2 font-serif uppercase tracking-tight">
              Why Most Kids Want Their Parents to Use This Money
            </h3>
            <div className="text-gray-800 text-base md:text-lg leading-relaxed font-serif space-y-3">
              <p>
                Many seniors feel bad about using their home money. They say, <em>"I want to leave this house for my kids."</em>
              </p>
              <p className="font-sans font-bold text-gray-900 text-sm md:text-base bg-white/60 p-3 rounded border border-[#22c55e]/30">
                📊 But a big survey found a surprising fact: <strong>78% of adult children want their parents to use their home money to live well now</strong> instead of saving the house for later.
              </p>
              <p className="italic">
                "We told our parents: We do not need the house. We want you to be happy and safe. Use your home money to enjoy your life. That is what we care about."
              </p>
            </div>
          </div>

          {/* 3-Step Progress Visual - MATCHED BLUE/GREEN COLORS */}
          <div className="mb-8 md:mb-12 text-center">
            <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-[#52616f] mb-6">
              The 3-Step Home Equity Check
            </h3>
            <div className="flex justify-between items-center max-w-[500px] mx-auto relative px-4">
              {/* Connecting Line */}
              <div className="absolute top-[22px] left-10 right-10 h-0.5 bg-gray-200 -z-0"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-11 h-11 rounded-full bg-[#0f4c81] text-white flex items-center justify-center font-extrabold text-sm border-4 border-white shadow-md">
                  1
                </div>
                <span className="text-xs md:text-sm font-bold text-[#0f4c81] mt-2">Home Details</span>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-11 h-11 rounded-full bg-[#22c55e] text-white flex items-center justify-center font-extrabold text-sm border-4 border-white shadow-md">
                  2
                </div>
                <span className="text-xs md:text-sm font-bold text-[#22c55e] mt-2">Equity Estimate</span>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-11 h-11 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-extrabold text-sm border-4 border-white shadow-md">
                  3
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-500 mt-2">Your Options</span>
              </div>
            </div>
          </div>

          {/* Trust Strip Grid - MATCHED GREEN ICONS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4 border-t border-b border-gray-200 py-6 mb-8">
            <div className="flex items-start gap-2 min-w-0 px-1">
              <Shield className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm font-bold text-gray-700 leading-tight break-words min-w-0">HUD Regulated Program</span>
            </div>
            <div className="flex items-start gap-2 min-w-0 px-1">
              <HomeIcon className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm font-bold text-gray-700 leading-tight break-words min-w-0">You Stay The Owner</span>
            </div>
            <div className="flex items-start gap-2 min-w-0 px-1">
              <Check className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm font-bold text-gray-700 leading-tight break-words min-w-0">No Monthly Payments</span>
            </div>
            <div className="flex items-start gap-2 min-w-0 px-1">
              <DollarSign className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm font-bold text-gray-700 leading-tight break-words min-w-0">100% Tax-Free Cash</span>
            </div>
          </div>

          {/* Final CTA Block - MATCHED BLUE COLOR */}
          <div className="text-center">
            <Button 
              onClick={handleContinue}
              className="btn-shimmer w-full max-w-[560px] h-auto min-h-[68px] px-4 py-4 bg-[#0066cc] hover:bg-[#0052b3] text-white font-black text-base sm:text-lg md:text-[24px] rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight whitespace-normal leading-tight text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Continue To Home Equity Check
                <ArrowRight className="w-5 h-5 md:w-7 md:h-7 stroke-[3.5px] shrink-0" />
              </span>
            </Button>
            <p className="text-xs text-[#52616f] mt-3 font-semibold">
              Clicking above will open the Official Home Equity Check.
            </p>
          </div>

        </div>
      </main>

      {/* Footer - standard direct-response/affiliate disclaimers */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8 px-4 text-center text-[11px] md:text-xs text-gray-500 leading-relaxed">
        <div className="max-w-[840px] mx-auto space-y-4">
          <div className="flex justify-center gap-4 font-bold text-gray-600 mb-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:underline">Contact Us</a>
            <span>•</span>
            <a href="#" className="hover:underline">Advertising Disclosure</a>
          </div>
          <p>
            <strong>Advertising Disclosure:</strong> This website is a private, consumer-advisory bridge page. We are not a government agency, lender, or financial advisor. This page is an advertisement designed to help homeowners find information about home equity options. We may receive compensation from the companies we recommend on the following pages.
          </p>
          <p>
            This site is not affiliated with, endorsed by, or associated with HUD, FHA, VA, FNMA, GNMA, or any other government department or program. Reverse mortgages are FHA-insured loans regulated by the Department of Housing and Urban Development (HUD).
          </p>
          <p>© 2026 Senior Home Equity Check. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
