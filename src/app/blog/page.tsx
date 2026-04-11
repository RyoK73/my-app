import Markdown from "react-markdown";
import { getPostList } from "@/lib/post";
import Link from "next/link";
import path from "path";

const PostList = async () => {
    const postContents = await getPostList();
    // 日付で降順に並び替え
    postContents.sort((a, b) => b.date.localeCompare(a.date));
    return (
        <main>
            <ul>
                {postContents.map((postContent) => {
                    return (
                        <li key={postContent.slug}>
                            <Link href={path.join(process.cwd(), postContent.slug)}>
                                <h1>{postContent.title}</h1>
                                <time>{postContent.date}</time>
                                <p></p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};
