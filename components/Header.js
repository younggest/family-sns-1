import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import {HomeIcon} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const {data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter();

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>
        <div onClick={() => router.push('/')} className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit='contain'
          />
        </div>

        <div onClick={() => router.push('/')} className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit='contain'
          />
        </div>

        <div className="max-w-xs">
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h5 w-5 text-gray-500'/>
            </div>
            <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black' type="text" placeholder="검색" />
          </div>
        </div>

        <div className='flex items-center justify-end space-x-4'>
          {/* <MenuIcon className='h-6 md:hidden cursor-pointer' /> */}

          {session ? (
            <>
            <PlusCircleIcon
              onClick={() => setOpen(true)}
              className='navBtn1'
             />

            <img
              onClick={signOut}
              src={session.user.image}
              alt=""
              className="h-7 w-7 rounded-full cursor-pointer"
            />
            </>
          ): (
            <>
            <HomeIcon onClick={() => router.push('/')} className='navBtn1' />
            <button onClick={signIn}>로그인</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
