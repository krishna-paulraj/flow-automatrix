import Image from "next/image";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import NavBar from "@/components/global/Navbar";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/global/infinite-scroll";
import { clients, products } from "@/lib/constants";
import { HeroParallax } from "@/components/global/hero-parallax";
import { LampComponent } from "@/components/global/lamp";
import { Card, CardHeader } from "@/components/ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { CheckIcon } from "lucide-react";
import { Exo_2 } from "next/font/google";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div>
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Flow Matrix
                </h1>
              </div>
            }
          >
            <Image
              src={"/temp-banner.png"}
              alt="app banner"
              fill
              className="p-2 rounded-2xl object-cover h-full object-left-top"
            />
          </ContainerScroll>
        </div>
      </section>
      <InfiniteMovingCards
        className="mt-[100px] mx-auto"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section className="mt-[50px]">
        <HeroParallax products={products} />
      </section>
      <section className="-mt-[500px] md:-mt-[1000px]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row sm:gap-8 -mt-72">
          <CardContainer className="inter-var">
            <CardBody className="w-auto bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Basic
                <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what Fuzzie can do for you
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon /> 1 User
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />1 Project
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    1GB Storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Public Projects
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ="20"
                  className="px-4 py-2 rounded-xl text-xs shadow-sm shadow-neutral-700 dark:shadow-neutral-500 font-normal dark:text-white"
                >
                  Try now
                </CardItem>
                <CardItem
                  translateZ="20"
                  as={"button"}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-semibold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="w-auto bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Premium Plans
                <h2 className="text-6xl">$x</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Coming soon... follow up for latest updates
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon /> Multiple Automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    1000+ tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited Public Projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Many More..
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ="20"
                  className="px-4 py-2 rounded-xl text-xs shadow-sm shadow-neutral-700 dark:shadow-neutral-500 font-normal dark:text-white"
                >
                  Try now
                </CardItem>
                <CardItem
                  translateZ="20"
                  as={"button"}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-semibold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
