import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image
        src='/maintanance.png'
        alt='Next.js Logo'
        width={1000}
        height={707}
      />
    </main>
  )
}
