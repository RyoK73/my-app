import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type AnimationLinkProps = {
    children: React.ReactNode;
    linkText: string;
    className?: string;
};

export const InnerAnimationLink = ({
    children,
    linkText,
    className,
}: AnimationLinkProps) => {
    return (
        <Link
            href={linkText}
            className={cn(
                "relative border border-transparent text-base ml-auto bg-background px-1 hover:text-vivid transition duration-500 before:absolute before:inset-0 before:border before:border-vivid  before:[clip-path:inset(0_100%_0_0)] hover:before:[clip-path:inset(0_0%_0_0)] before:transition-[clip-path] before:duration-700",
                className,
            )}
        >
            {children}
        </Link>
    );
};
