import type { PostData } from "@/lib/post";
import { getAllPosts } from "@/lib/post";
import TagList from "@/components/common/TagList";
import Link from "next/link";
import path from "path";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

// postsで./posts/のコンテンツ一覧を受け取りリストを表示する
const PostList = (posts: PostData[]) => {
    const sortedPost = posts.sort((a, b) => b.date.localeCompare(a.date));
    return (
        <ul className="">
            {sortedPost.map((post) => {
                return (
                    // liはカード形式？かリスト形式にしたい
                    <li key={post.slug} className="">
                        <Card className="rounded-sm">
                            <CardHeader>
                                <Link
                                    key={post.slug}
                                    href={path.join("/blog", post.slug)}
                                    className=""
                                >
                                    <time className="">{post.date}</time>
                                    <CardTitle className="text-foreground">{post.title}</CardTitle>
                                </Link>
                                <TagList tags={post.tag} />
                            </CardHeader>
                        </Card>
                    </li>
                );
            })}
        </ul>
    );
};

// tagで./posts/*.mdをフィルターし適合するpostsをリストで表示する
export const PostListByTag = async ({ tag }: { tag?: string }) => {
    const posts = await getAllPosts();
    const postsByTag = tag
        ? posts.filter((post) => {
              return post.tag.includes(tag);
          })
        : posts;
    return PostList(postsByTag);
};
