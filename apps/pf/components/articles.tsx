import Link from 'next/link';

export default function Articles({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug} className="text-white">
          <div>
            <Link href={`/posts/${post.slug}`} legacyBehavior>
              {post.title}
            </Link>
          </div>
          <p>{post.excerpt}</p>
          {/* <p>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p> */}
        </li>
      ))}
    </ul>
  );
}
