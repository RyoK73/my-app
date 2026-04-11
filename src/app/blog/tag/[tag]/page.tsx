import { getAllPosts } from "@/lib/post";
import { getPostsByTag } from "@/lib/post";

const TagPage = async ({ params }: { params: Promise<{ tag: string }> }) => {
    const posts = await getAllPosts();
    const { tag } = await params;
    const postsByTag = getPostsByTag(tag);
    return(
        <main></main>
    )
};
