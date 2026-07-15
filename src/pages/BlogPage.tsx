import { CalendarDays, ChevronRight, GraduationCap, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterCTA } from "../components/NewsletterCTA";
import { SectionHeader } from "../components/SectionHeader";
import { blogPosts } from "../data/site";

export function BlogPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gray-50 pb-16 pt-8">
        <div className="absolute inset-0 lg:hidden" aria-hidden="true">
          <img src="/blog-banner.webp" alt="Medymatic blog" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55" />
        </div>

        <div className="container-page relative z-10">
          <nav className="flex items-center gap-3 text-sm font-bold" aria-label="Breadcrumb">
            <Link to="/" className="text-white transition hover:text-brand-red lg:text-brand-ink">
              Home
            </Link>
            <ChevronRight size={16} className="text-white/60 lg:text-brand-muted" />
            <span className="text-brand-red">Blog</span>
          </nav>

          <div className="grid gap-10 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative z-10">
              <h1 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl lg:text-black">
                Insights That
                <span className="mt-1 block text-brand-red">Drive Healthcare</span>
                <span className="block text-brand-red">Forward</span>
              </h1>
              <p className="mt-5 max-w-md text-sm font-medium leading-6 text-white/85 sm:text-base lg:text-brand-muted">
                Stay informed with expert insights, industry updates, and best practices in revenue
                cycle management and healthcare operations.
              </p>
              <Link
                to="/contact"
                className="focus-ring mt-7 inline-flex min-h-12 w-56 items-center justify-center rounded-3xl bg-brand-red px-8 text-base font-black text-white transition hover:bg-red-700"
              >
                Contact Us
              </Link>
            </div>

            <div className="relative hidden min-h-[26rem] sm:min-h-[28rem] lg:block">
              <div className="absolute left-2 top-6 hidden text-3xl font-light text-red-200 lg:block">
                +
              </div>
              <div className="absolute -left-8 bottom-16 hidden text-3xl font-light text-red-200 lg:block">
                +
              </div>
              <div className="absolute left-0 top-1/2 hidden text-3xl font-light text-red-200 lg:block">
                +
              </div>

              <div className="absolute right-0 top-0 h-[24rem] w-[24rem] overflow-hidden rounded-full bg-white shadow-[0_30px_80px_rgba(17,24,39,0.08)] sm:h-[27rem] sm:w-[27rem] lg:h-[29rem] lg:w-[29rem]">
                <img
                  src="/blog-banner.webp"
                  alt="Medymatic healthcare insights"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-8 bottom-2 h-24 w-24 rounded-full bg-brand-red" />

              <div className="absolute right-8 top-0 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <Lightbulb className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Expert
                  <br />
                  Insights
                </span>
              </div>
              <div className="absolute left-0 top-1/3 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <CalendarDays className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Industry
                  <br />
                  Updates
                </span>
              </div>
              <div className="absolute bottom-8 right-2 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-50">
                  <GraduationCap className="text-brand-red" size={18} />
                </span>
                <span className="text-xs font-black leading-tight text-brand-ink">
                  Knowledge
                  <br />
                  For Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Articles" title="Latest health resources" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-2xl border border-brand-line bg-white shadow-card transition duration-300 "
              >
                <Link to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                  <div className="h-52 overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-black uppercase tracking-[0.12em]">
                    <time dateTime={post.publishedDate} className="text-brand-red">
                      {post.date}
                    </time>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
                    <span className="text-brand-muted">{post.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-black leading-snug">
                    <Link to={`/blog/${post.slug}`} className="transition hover:text-brand-red">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-brand-muted">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <NewsletterCTA />
    </>
  );
}
