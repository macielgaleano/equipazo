import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/1_5.png" alt="logo" width="200" height="200" />
    </main>
  )
}
