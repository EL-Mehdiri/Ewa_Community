import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/authOptions'
import Content from './components/mainPage/ContentPage'
import SideBare from './components/mainPage/SideBare'
import Image from "next/image"
import Link from "next/link"


export default async function Home() {
  const session = await getServerSession(authOptions)


  return (
    <main >
      {/* content  */}

      {/* side bar 2  */}

    </main>
  )
}
