import { cn } from "@/lib/utils";
import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "../magicui/animated-beam";
import { DollarSign, Leaf, Medal, MessageCircle, Truck, User } from "lucide-react";
import logo from '../../assets/logoAgro.png'


const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";


export function AnimatedBeamMultipleOutputDemo({
    className,
  }: {
    className?: string;
  }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);
   
    return (
      <div
        className={cn(
          "relative flex h-[500px] w-full max-w-full items-center justify-center overflow-hidden p-10",
          className,
        )}
        ref={containerRef}
      >
        <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center gap-2">
            <Circle ref={div1Ref}>
              <DollarSign className="text-black"/>
            </Circle>
            <Circle ref={div2Ref}>
              <MessageCircle className="text-black"/>
            </Circle>
            <Circle ref={div3Ref}>
              <Truck className="text-black" />
            </Circle>
            <Circle ref={div4Ref}>
              <Leaf className="text-black"/>
            </Circle>
            <Circle ref={div5Ref}>
              <Medal className="text-black"/>
            </Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div6Ref} className="size-16">
              <img src={logo} alt="logo" />
            </Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div7Ref}>
              <User className="text-black"/>
            </Circle>
          </div>
        </div>
   
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
          duration={8}
          delay={1}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
          duration={8}
          delay={0.5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
          duration={8}
          delay={0.9}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          duration={8}
          delay={0.6}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
          duration={8}
          delay={1}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          duration={8}
          delay={2}
        />
      </div>
    );
  }
   
