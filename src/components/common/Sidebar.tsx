import { CustomCard } from "./CustomCard";
import { TagList } from "./TagList";
import { getAllPosts } from "@/lib/post";
import { Author } from "./Author";
import { cn } from "@/lib/utils";
const posts = await getAllPosts();
type SidebarProps = {
    className?: string;
};
export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={cn("col-span-1 flex flex-col gap-5 ", className)}>
            <Author />
            {/* タグ一覧を配置予定 */}
            {/* <CustomCard title={"Tag"}>
                <TagList tags={allTags} />
            </CustomCard> */}
        </div>
    );
};
