import ImageSlider from "./ImageSlider";
import ZotBinsFeatures from "./ZotBinsFeatures";
import ZotBinsTechStack from "./ZotBinsTechStack";
import Footer from "./Footer";

import auth1Screen from "./assets/authenticationScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.51.12.png";
import auth2Screen from "./assets/authenticationScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.51.18.png";
import auth3Screen from "./assets/authenticationScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 19.35.18.png";

import onboard1 from "./assets/onboardingScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.50.44.png";
import onboard2 from "./assets/onboardingScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.50.51.png";
import onboard3 from "./assets/onboardingScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.50.55.png";
import onboard4 from "./assets/onboardingScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.50.59.png";
import onboard5 from "./assets/onboardingScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.51.04.png";

import home1 from "./assets/homeScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.51.40.png";
import home2 from "./assets/homeScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.52.30.png";
import home3 from "./assets/homeScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.53.19.png";
import home4 from "./assets/homeScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 19.35.50.png";
// import home5 from "./assets/homeScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 19.35.55.png";
import home6 from "./assets/homeScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 19.36.22.png";

import profile1 from "./assets/profileScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.52.40.png";
import profile2 from "./assets/profileScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.52.53.png";
import profile3 from "./assets/profileScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.52.59.png";
import profile4 from "./assets/profileScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.53.09.png";
import profile5 from "./assets/profileScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 19.31.18.png";
import profile6 from "./assets/profileScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 19.31.29.png";

import waste1 from "./assets/wasteScreens/IMG_1229.PNG";
import waste2 from "./assets/wasteScreens/IMG_1231.PNG";
import waste3 from "./assets/wasteScreens/Simulator Screenshot - iPhone 16 - 2025-05-29 at 18.52.03.png";

const ZotBins = () => {
  const onboardingSlides = [
    {
      img: onboard1,
      title: "Start Page",
      description: "Landing page after initial download",
      type: "Onboarding",
    },
    {
      img: onboard2,
      title: "About ZotBins",
      description: "Introduction to the app",
      type: "Onboarding",
    },
    {
      img: onboard3,
      title: "Scan Feature",
      description: "Categorize trash by scanning",
      type: "Onboarding",
    },
    {
      img: onboard4,
      title: "Daily Quiz",
      description: "Test your knowledge about sustainability",
      type: "Onboarding",
    },
    {
      img: onboard5,
      title: "Achievements",
      description: "Complete fun missions to level up",
      type: "Onboarding",
    },
    {
      img: auth1Screen,
      title: "Login",
      description: "Sign into existing account",
      type: "Authentication",
    },

    {
      img: auth3Screen,
      title: "Create Account",
      description: "Input credentials",
      type: "Authentication",
    },
  ];

  const homeSlides = [
    {
      img: home1,
      title: "Home Page",
      description: "Displays feature widgets",
      type: "Home",
    },
    {
      img: waste1,
      title: "Scanner",
      description: "Scan an object",
      type: "Scan",
    },
    {
      img: waste2,
      title: "Scanner",
      description: "Identify and categorize waste",
      type: "Scan",
    },
    {
      img: waste3,
      title: "ZotBins Map",
      description: "Route to the nearest ZotBin on campus",
      type: "Map",
    },
    {
      img: waste1,
      title: "Scanner",
      description: "Scan an object",
      type: "Scan",
    },
    {
      img: waste2,
      title: "Scanner",
      description: "Identify and categorize waste",
      type: "Scan",
    },
    {
      img: waste3,
      title: "ZotBins Map",
      description: "Route to the nearest ZotBin on campus",
      type: "Map",
    },
    {
      img: home3,
      title: "Environmental Impact",
      description: "View your carbon footprint",
      type: "Home",
    },
    {
      img: home4,
      title: "Daily Quiz",
      description: "Test your knowledge about sustainability",
      type: "Home",
    },
    {
      img: home6,
      title: "Earn points",
      description: "Complete fun missions to level up",
      type: "Home",
    },
    {
      img: home2,
      title: "Leaderboard",
      description: "Level up and compete against others",
      type: "Home",
    },
  ];

  const profileSlides = [
    {
      img: profile1,
      title: "Profile Page",
      description: "Displays user information",
      type: "Profile",
    },
    {
      img: profile5,
      title: "Achievements",
      description: "View completed and in progress achievements",
      type: "Profile",
    },
    {
      img: profile2,
      title: "Settings",
      description: "Configure application settings",
      type: "Profile",
    },
    {
      img: profile3,
      title: "Spirit Trash",
      description: "Retake spirit trash quiz",
      type: "Profile",
    },
    {
      img: profile4,
      title: "Spirit Trash Results",
      description: "Embrace your new identity!",
      type: "Profile",
    },
    {
      img: profile6,
      title: "Add Friends",
      description: "Be sustainable together",
      type: "Profile",
    },
  ];

  return (
    <div className="bg-radial from-[#085c21] from-10%  to-[#141f17]">
      {/* <div className="bg-radial from-[#b2cfba]  to-[#37b85d]"> */}
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="mt-10 text-[50px] font-extrabold text-white">
          ZotBins Mobile App
        </h1>

        <p className="text-2xl text-white/60">
          Empowering UCI students towards sustainability through AI powered
          trash classification
        </p>

        <div className="w-1/2 mt-12 bg-white/15 backdrop-blur-xl rounded-xl p-5  border border-white/20 shadow-lg shadow-black/10 text-center">
          <div className="text-white text-xl md:text-2xl font-semibold mb-2">
            🎉 Now Available on the App Store!
          </div>

          <a
            href="https://apps.apple.com/us/app/zotbins/id6743295314"
            className="inline-flex items-center  bg-gradient-to-r from-black to-gray-800 text-white px-8 py-2 rounded-full font-semibold text-lg border-1 border-white/10   hover:shadow-lg hover:shadow-black/30 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600"
          >
            Download for iOS
          </a>
        </div>
      </div>

      <ImageSlider slides={onboardingSlides} />
      <ZotBinsFeatures />
      <ImageSlider slides={homeSlides} />
      <ImageSlider slides={profileSlides} />

      <ZotBinsTechStack />

      <Footer />

      <div class="floating-elements">
        <div class="float-icon">🌱</div>
        <div class="float-icon">♻️</div>
        <div class="float-icon">🤖</div>
        <div class="float-icon">🌍</div>
      </div>
    </div>
  );
};

export default ZotBins;
