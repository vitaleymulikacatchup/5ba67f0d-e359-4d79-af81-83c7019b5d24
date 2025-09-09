use client

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingOverlay
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={40}
        navItems={
          [
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]
        }
        buttonText="How to buy"
        onButtonClick={() => { /* Button click handler */ }}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to DogMemecoin!" subtitle="The playful currency for dog lovers." />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout 
          title="Join the DogMemecoin Community!"
          descriptions={[
            "DogMemecoin is a fun way to show your love for dogs and blockchain.",
            "Easily swap DogMemecoin with other currencies.",
            "Connect with a vibrant community of crypto dog enthusiasts."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D 
          title="How to Buy DogMemecoin"
          steps={[
            { title: "Step 1", description: "Create a crypto wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase Ethereum", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Exchange for DogMemecoin", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]} 
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics 
          title="Tokenomics Overview"
          description="Learn more about our token distribution and utility." 
          kpiItems={[
            { value: "1B", description: "Total Supply", icon: "DollarSign" },
            { value: "20%", description: "Token Sale", icon: "Coins" },
            { value: "80%", description: "Liquidity", icon: "Shield" },
          ]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient 
          logoSrc="/images/logo.svg"
          logoAlt="DogMemecoin"
          logoText="DogMemecoin"
          items={[
            { label: "Privacy Policy", onClick: () => { /* Privacy policy handler */ } },
            { label: "Terms of Service", onClick: () => { /* Terms handler */ } },
            { label: "Contact Us", onClick: () => { /* Contact handler */ } },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}