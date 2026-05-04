import Navbar from "@/components/navbar";

const posts = [
  { slug: "blog1", title: "Blog Post 1", date: "2026-01-10", excerpt: "Ringkasan blog post pertama." },
  { slug: "blog2", title: "Blog Post 2", date: "2026-02-15", excerpt: "Ringkasan blog post kedua." },
];

export default function BlogPage() {
  return (
    <main className="p-8">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border p-4 rounded">
            <a href={`/blog/${post.slug}`} className="text-lg font-semibold hover:underline">
              {post.title}
            </a>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-1">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
