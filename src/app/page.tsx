import MainContent from "@/components/Main/MainContent";
import SideBar from "@/components/SideBar/SideBar";

export default function Home() {

  return (
    <>
      <div className=" bg-black bg-slate leading-relaxed text-slate-400 
      antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 
        font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <SideBar />
            <MainContent />
          </div>
        </div>
      </div>
    </>
  );
}
