import { getAllPosts, PostMeta } from '../api/api';
import Articles from '../components/articles';

export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <h1 className="pt-20">Blog</h1>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);
  return {
    props: { posts },
  };
}
