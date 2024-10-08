import HeaderWebBar from '@/components/web-dev/header-web-page'

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <HeaderWebBar />
      <main className="bg-gray-900 px-2 py-4 text-white sm:px-32 md:px-32 md:py-12 lg:px-64 lg:text-base xl:px-72 2xl:px-96">
        {children}
      </main>
    </html>
  )
}
