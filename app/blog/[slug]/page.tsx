import getPostData from "@/src/lib/post";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { consola } from "consola";

const blogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    consola.info((await params).slug);
    const pageContent = getPostData((await params).slug);
    consola.info(pageContent);
    return (
        <article className="prose">
            <h1>{pageContent.title}</h1>
            <p>{pageContent.date}</p>
            <Markdown remarkPlugins={[remarkGfm]}>{pageContent.contentMarkdown}</Markdown>
        </article>
    );
};

export default blogPage;
