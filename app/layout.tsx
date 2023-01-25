import Link from "next/link";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Link href="/test/test-1">Test 1</Link>
        <Link href="/test/test-5">Test 5</Link>

        {children}
      </body>
    </html>
  )
}