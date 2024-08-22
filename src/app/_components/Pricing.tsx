import React from "react";
import Link from "next/link";
import { LampComponent } from "@/components/global/lamp";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, MoveRight } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";

const PricingComponent = () => {
  return (
    <section id="pricing" className="mt-12">
      <LampComponent />
      <div className="-mt-72 flex flex-wrap justify-center items-center gap-8">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 flex flex-col gap-6 relative group/card border dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] my-2 !w-[350px] h-auto rounded-xl p-6">
            <CardItem>
              <h1 className="text-xl font-bold text-neutral-600 dark:text-white">
                Basic
              </h1>
              <h1 className="text-6xl font-bold">&#8377;0</h1>
              <p>Start with our free plan with limited features.</p>
            </CardItem>
            <CardItem>
              <ul>
                <li className="flex items-center gap-2">
                  <Check size={18} /> 3 Free Automations
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} />
                  100 tasks per month
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} />
                  Two-Step Actions
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} />
                  Customer Support
                </li>
              </ul>
            </CardItem>
            <CardItem>
              <Link
                href={"/sign-up"}
                className="flex justify-left gap-2 mt-5 items-center hover:underline underline-offset-4"
              >
                Try Now <MoveRight size={20} />
              </Link>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 flex flex-col gap-6 relative group/card border dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] !w-[350px] h-auto rounded-xl p-6">
            <CardItem>
              <h1 className="text-xl font-bold text-neutral-600 dark:text-white">
                Pro Plan
              </h1>
              <h1 className="text-6xl font-bold">
                &#8377;890<span className="text-xl">/month</span>
              </h1>
              <p>Paid plan with more features and limited access.</p>
            </CardItem>
            <CardItem>
              <ul>
                <li className="flex items-center gap-2">
                  <Check size={18} /> 100 Automations
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} />
                  10000 tasks per month
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} />
                  Two-Step Actions
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} /> Customer Support
                </li>
              </ul>
            </CardItem>
            <CardItem>
              <Link
                href={"/sign-up"}
                className="flex justify-left gap-2 mt-5 items-center hover:underline underline-offset-4"
              >
                Try Now <MoveRight size={20} />
              </Link>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 flex flex-col gap-6 relative group/card border dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] !w-[350px] h-auto rounded-xl p-6">
            <CardItem>
              <h1 className="text-xl font-bold text-neutral-600 dark:text-white">
                Unlimited
              </h1>
              <h1 className="text-6xl font-bold">
                &#8377;6900<span className="text-xl">/month</span>
              </h1>
              <p>Pro plan with unlimited access and features.</p>
            </CardItem>
            <CardItem>
              <ul>
                <li className="flex items-center gap-2">
                  <Check size={18} /> Unlimited Automations
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} /> Unlimited tasks per month
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} /> Two-Step Actions
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} /> Customer Support
                </li>
              </ul>
            </CardItem>
            <CardItem>
              <Link
                href={"/sign-up"}
                className="flex justify-left gap-2 mt-5 items-center hover:underline underline-offset-4"
              >
                Try Now <MoveRight size={20} />
              </Link>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default PricingComponent;
