"use client";
import { useTheme } from "next-themes";
import { LuSun } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";

export const SwitchTheme = () => {
    const { setTheme, theme } = useTheme();
    return (
        <div className="h-auto w-auto">
            <button
                onClick={() => {
                    theme == "dark" ? setTheme("light") : setTheme("dark");
                }}
                className="text-3xl border p-2 rounded-lg hover:"
            >
                {theme == "dark" ? <LuMoonStar /> : <LuSun />}
            </button>
        </div>
    );
};
