"use client";
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants/sidebarLinks'
import { usePathname, useRouter } from 'next/navigation'
import path from 'path'
import { cn } from '@/lib/utils'

const LeftSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className='sticky left-0 top-0 flex w-fit flex-col  justify-between  border-none  bg-black-1 pt-8 text-white-1 max-md:hidden lg:w-[270px] lg:pl-8'>
        <nav className='flex flex-col gap-6'>
            <Link href="/" className='flex cursor-pointer items-center max-lg:justify-center'>
                <Image src="/logo-pod.png" alt="logo" width={72} height={76} />
                <h1 className='text-24 font-extrabold max-lg:hidden'>PodMakr</h1>
            </Link>

            {sidebarLinks.map((item, index) => {
              const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                return <Link key={index} href={item.route} className={cn('flex items-center justify-start gap-3 py-4',
                {
                  "bg-nav-focus border-r-4 border-orange-1": isActive
                }
                )}>
                    <Image src={item.imgURL} alt={item.label} width={24} height={24} />
                    <span>{item.label}</span>
                </Link>
})
            }

        </nav>
    </section>
  )
}

export default LeftSideBar