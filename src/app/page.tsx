import MainPricing from "@/widget/main-pricing/main-pricing";
import MainAwards from "@/widget/main-awards/main-awards";
import MainStocks from "@/widget/main-stocks/main-stocks";
import MainAbout from "@/widget/main-about/main-about";
import MainOffer from "@/widget/main-offer/main-offer";
import MainForm from "@/widget/main-form/main-form";
import MainMap from "@/widget/main-map/main-map";
import Footer from "@/widget/footer/footer";
import Header from "@/widget/header/header";
export default function Home() {
  return (
    <>
      <Header />
      <img
        src="/bg.png"
        alt="bg"
        className="absolute md:object-cover top-0 max-w-[2220px] left-1/2 -translate-x-1/2 w-screen -z-10 min-h-[300px]"
      />
      <main>
        <MainOffer />
        <MainAbout />
        <MainAwards />
        <MainPricing />
        <MainStocks />
        <MainForm />
        <MainMap />
      </main>
      <Footer />
    </>
  );
}
