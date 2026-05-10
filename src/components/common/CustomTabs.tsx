"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type TabProp = {
    name: string;
    link: string;
};

export type NonEmptyArray<T> = [T, ...T[]];

export const CustomTabs = ({ tabs }: { tabs: NonEmptyArray<TabProp> }) => {
    const pathName = usePathname();
    return (
        <nav className="flex h-auto">
            {tabs.map((tab) => {
                const isActive =
                    tab.link === pathName || (tab.link !== "/" && pathName.startsWith(tab.link));
                return (
                    <Link
                        key={tab.name}
                        href={tab.link}
                        className={cn(
                            "border border-border p-2 bg-background",
                            isActive ? "bg-foreground text-background" : "bg-background text-foreground",
                        )}
                    >
                        {tab.name}
                    </Link>
                );
            })}
        </nav>
    );
};
