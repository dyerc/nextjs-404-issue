
import { notFound } from "next/navigation";

const PAGES = [{
  data: "Test 1 Content",
  slug: "test-1"
}, {
  data: "Test 5 Content",
  slug: "test-5"
}]

export default function TestPage({ params }) {
  const page = PAGES.find(p => p.slug === params.slug);

  if (!page) {
    notFound();

  }
  return (
    <div>
      {page.data}
    </div>
  )
}

export function generateStaticParams() {
  return PAGES.map(({ slug }) => ({
    slug,
  }));
}