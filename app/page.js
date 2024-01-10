import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/authOptions'


export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className='p-5'>
      <p className="text-4xl">Hello, {session && <span>{session.user.name}</span>}</p>
    </main>
  )
}
