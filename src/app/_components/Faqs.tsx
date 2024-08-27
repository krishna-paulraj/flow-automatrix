import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqComponent = () => {
  return (
    <div className="mt-20 max-w-[40rem] w-full px-12 flex flex-col gap-5 justify-center items-center mx-auto">
      <h1 className="text-3xl my-3 text-center">
        Questions? Here are your Answers.
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            What is Flow Automation?
          </AccordionTrigger>
          <AccordionContent className="">
            Flow Automation is a powerful tool designed to help businesses
            automate repetitive tasks and workflows, enabling users to focus on
            more strategic work.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            What happens if I exceed my task limit?
          </AccordionTrigger>
          <AccordionContent>
            If you exceed your task limit, your automations will be paused, and
            you&apos;ll be notified. You can either upgrade to a higher plan or
            wait until your tasks reset at the beginning of the next billing
            cycle.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            Is there a mobile app for Flow Automation?
          </AccordionTrigger>
          <AccordionContent>
            Currently, Flow Automation is accessible through any web browser on
            both desktop and mobile devices. A dedicated mobile app is in
            development and will be released soon.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqComponent;
