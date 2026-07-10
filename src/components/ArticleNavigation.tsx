import { Link } from "react-router-dom";
import { blogPosts } from "../data/site";

type TableOfContentsProps = {
  items: Array<{ id: string; label: string }>;
};

export function ArticleTableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav
      aria-label="On this page"
      className="mt-10 rounded-2xl border border-brand-line bg-gray-50 p-6 sm:p-7"
    >
      <h2 className="text-lg font-black text-brand-ink">On this page</h2>
      <ol className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="focus-ring inline-flex rounded text-brand-muted transition hover:text-brand-red"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const relatedPosts = blogPosts.filter((post) => post.slug !== currentSlug).slice(0, 2);

  return (
    <aside className="mt-16 border-t border-brand-line pt-10" aria-labelledby="related-articles">
      <h2 id="related-articles" className="text-2xl font-black text-brand-ink sm:text-3xl">
        Related insights
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="focus-ring rounded-2xl border border-brand-line bg-white p-5 transition hover:border-brand-red hover:shadow-card"
          >
            <span className="text-xs font-black uppercase tracking-wider text-brand-red">
              {post.category}
            </span>
            <span className="mt-2 block text-lg font-black leading-snug text-brand-ink">
              {post.title}
            </span>
            <span className="mt-2 block text-sm leading-6 text-brand-muted">
              {post.excerpt}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
