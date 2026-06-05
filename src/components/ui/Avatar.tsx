import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

const avatars = {
  1: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  2: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const Avatar = ({ varient, className }: { varient: number; className?: string }) => {
  return (
    <Image
      src={avatars[varient as keyof typeof avatars]}
      alt="Avatar"
      width={24}
      height={24}
      className={cn("rounded-full w-6 h-6", className)}
    />
  );
};

export default Avatar;
