import { HomeIcon } from "lucide-react";
import Link from "next/link";

export const NotFoundScreen = () => {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#f8fafc] px-6 py-16 text-slate-900">
      <section className="mx-auto flex w-full max-w-[420px] -translate-y-3 flex-col items-center text-center sm:-translate-y-5">
        <p className="text-[clamp(5.5rem,12vw,8rem)] leading-none font-bold text-[#e7eaf0]">404</p>
        <h1 className="mt-7 text-[28px] leading-tight font-semibold tracking-normal text-[#394150]">
          Page not found
        </h1>
        <p className="mt-4 text-[20px] leading-7 font-medium tracking-normal text-[#858b98]">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-11 inline-flex h-12 w-full items-center justify-center gap-3 rounded-[10px] bg-[#161616] px-6 text-base font-semibold tracking-normal text-white shadow-sm transition-colors hover:bg-[#262626] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#161616]"
        >
          <HomeIcon aria-hidden="true" className="h-5 w-5" />
          <span>Go to Home</span>
        </Link>
      </section>
    </main>
  );
};
