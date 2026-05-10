import { SwitchTheme } from "@/components/common/SwitchThemeButton";
import { CustomTabs, type TabProp, NonEmptyArray } from "@/components/common/CustomTabs";
const TabProps: NonEmptyArray<TabProp> = [
    {
        name: "01 . Home",
        link: "/",
    },
    {
        name: "02 . Work",
        link: "/blog/tag/works",
    },
    {
        name: "03 . About",
        link: "/about",
    },
];

export const Header = () => {
    return (
        <div className="col-span-2">
            <div className="">
                <div className="">
                    <CustomTabs tabs={TabProps} />
                </div>
                <SwitchTheme />
            </div>
        </div>
    );
};
