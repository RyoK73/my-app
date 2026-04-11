import { getAllPosts } from "@/lib/post";
import PostList from "@/components/ui/post-list";
import Link from "next/link";
import path from "path";

const AllPost = async () => {
    const postContents = await getAllPosts();
    // 日付で降順に並び替え
    postContents.sort((a, b) => b.date.localeCompare(a.date));
    return (
        <main>
            <PostList posts={postContents} />
        </main>
    );
};

export default AllPost;
