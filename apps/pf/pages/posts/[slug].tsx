import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getPostFromSlug, getSlugs, PostMeta } from '../../api/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import YouTube from '../../components/youTube';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/night-owl.css';
import CodeBlockName from '../../components/codeBlockName';

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>

      <div className="container pt-20 md:mx-auto 	">
        <h1 className="text-center">{post.meta.title}</h1>
        <article className="prose !prose-invert prose-pre:p-0 prose-pre:mt-0 max-w-none px-5 md:px-0">
          <MDXRemote
            {...post.source}
            components={{ YouTube, Image, CodeBlockName }}
          />
        </article>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false, // dont force generating page if it don't exist
  };
};
