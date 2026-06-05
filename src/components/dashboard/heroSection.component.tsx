"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Circle, FileText, Play } from "lucide-react";
import { carouselItems, checklistItems } from "@/constants/dashboard";

const HeroSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(() =>
    checklistItems.map((_, index) => index < 2),
  );
  const activeSlide = carouselItems[activeSlideIndex];
  const completedCount = completedSteps.filter(Boolean).length;
  const progress = Math.round((completedCount / checklistItems.length) * 100);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) => (currentIndex + 1) % carouselItems.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-6">
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.18 }}
        className="rounded-md bg-[#E7F3F880] px-5 py-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-[#347FA9]">Latest from Bitscale</h2>
          <div className="flex items-center gap-1">
            {carouselItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setActiveSlideIndex(index)}
                className={[
                  "h-1.5 rounded-full transition-all",
                  activeSlideIndex === index ? "w-7 bg-[#4e86b2]" : "w-1.5 bg-[#9ec0d8]",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.title}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.24 }}
            className="mt-4 flex flex-col gap-3 sm:flex-row"
          >
            <div
              className="relative flex aspect-video w-full shrink-0 items-center justify-center overflow-hidden rounded-lg bg-cover bg-center sm:h-[97px] sm:w-[143px]"
              style={{ backgroundImage: `url(${activeSlide.thumbnail})` }}
            >
              <div className="flex h-full w-full cursor-default flex-col items-center justify-center bg-black/50">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  href={activeSlide.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white p-1.5"
                >
                  <Play fill="#000" width={13} height={13} />
                </motion.a>
              </div>
            </div>

            <div className="min-w-0 pt-0.5">
              <h3 className="text-[13px] font-medium leading-tight text-[#1f2937]">
                {activeSlide.title}
              </h3>
              <p className="mt-1 max-w-[360px] text-[12px] leading-5 text-[#7b8493]">
                {activeSlide.description}
              </p>
              <p className="mt-1 text-[11px] font-medium text-[#a8b0bb]">Posted today</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.18 }}
        className="rounded-md border border-[#E7F3F8] bg-linear-to-b from-[#E7F3F8] via-[#ffffff] to-[#ffffff] px-5 py-4"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4b5563] text-white p-1.5">
            <FileText />
          </div>
          <div>
            <h2 className="text-sm font-medium leading-none text-[#383530]">
              Complete product demo
            </h2>
            <p className="mt-2 text-xs leading-none text-[#454545]">
              92% of users nailed BitScale after this walkthrough
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#e6e9ee]">
            <motion.div
              className="h-full rounded-full bg-[#4f8a68] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-medium text-[#5c936d]">{progress}%</span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-x-14 gap-y-4 sm:grid-cols-2">
          {checklistItems.map((item, index) => {
            const isDone = completedSteps[index];
            const Icon = isDone ? CheckCircle2 : Circle;

            return (
              <motion.button
                key={item.label}
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  setCompletedSteps((currentSteps) =>
                    currentSteps.map((isStepDone, stepIndex) =>
                      stepIndex === index ? !isStepDone : isStepDone,
                    ),
                  )
                }
                className="flex items-center gap-2 text-left"
              >
                <Icon
                  className={isDone ? "h-4 w-4 text-[#4d86ae]" : "h-4 w-4 text-[#c8ced6]"}
                  strokeWidth={isDone ? 3 : 2}
                />
                <span className="text-xs font-medium leading-none text-[#374151]">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
