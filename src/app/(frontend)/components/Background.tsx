import { cn } from "@/lib/utils";
import React, { ComponentProps, FC } from "react";

const Background = () => {
  return (
    <section className="wrapper relative">
      <Oval className="-top-4.5 left-[5%] bg-[#C7C5E2]" />
      <Oval className="left-[25%] bg-[#FFA3EC]" />
      <Oval className="left-1/2" />
      <Oval className="left-[75%] bg-[#FEAD8A]" />
      <Oval className="-top-4.5 left-[95%] bg-[#C8C8FF]" />
    </section>
  );
};

export default Background;

const Oval: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "absolute top-0 aspect-[4.16/1.71] w-[416px] -translate-x-1/2 rounded-[100%] bg-[#FD7F9A] blur-[200px]",
        className,
      )}
      {...props}
    />
  );
};
