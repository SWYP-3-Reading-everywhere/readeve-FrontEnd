'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Sunflower } from 'next/font/google'
import CustomModal from './modal'
import LoginBtn from './buttons/LoginButton'
import LogoutBtn from './buttons/LogoutButton'
import mainLogo from '/public/images/mainLogo.png'
import Image from 'next/image'
import navMapViewIcon from '/public/images/navMapViewIcon.png'
import navWriteIcon from '/public/images/navWriteIcon.png'

const SunflowerFonts = Sunflower({
  weight: ['300','500','700'],
  subsets: ['latin'],
});

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let session = useSession()
  let user: any = session.data?.user
  if (session) {
    // console.log(session)
  }

  const openLoginModal = () => {
    setIsLoginOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginOpen(false)
  }

  const toggleLoginStatus = () => {
    setIsLogin((prevLogin) => !prevLogin)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className="navbar sticky top-0 z-30 bg-white">
      <div className="flex justify-between mx-auto max-w-5xl right-0 menu menu-horizontal py-3">
        {/* 로고와 햄버거 아이콘 */}
        <div className="flex items-center menuLogo">
          {/* 로고 */}
          <div className="flex self-center justify-start whitespace-nowrap">
            <Link href="/">
             <div className='flex justify-center items-center gap-2'>
            <Image src={mainLogo} alt="메인 로고" className="w-[3vw] sm:w-[5vw]" />
            <h1 className={`${SunflowerFonts.className} sm:text-sm`}>읽는곳곳</h1>
            </div> 
            </Link>
          </div>

          {/* 햄버거 아이콘 (sm 화면에서만 보임) */}
          <div className="hidden sm:absolute right-5 top-4 sm:block">
            <label htmlFor="menu-toggle" className="cursor-pointer" onClick={toggleDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
          </div>
        </div>

        {/* 네비게이션 메뉴 (md 화면에서만 보임) */}
        <div className="flex justify-center items-center space-x-4 md:space-x-8 sm:hidden">
          {session.data && (
            <div className="flex items-center space-x-4 gap-3">
              {/* write 아이콘 */}
              <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-md">
                <Link href="/write">
                  <Image src={navWriteIcon} alt="navWriteIcon" className="max-h-5" width={15} height={15} />
                </Link>
              </div>
              {/* map 아이콘 */}
              <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-md">
                <Link href="/map">
                  <Image src={navMapViewIcon} alt="navMapViewIcon" className="max-h-4" width={15} height={15} />
                </Link>
              </div>
              {/* 내 서재 링크 */}
              <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-xs">
                <Link href={`/mypage/${user?.id}`}>내 서재</Link>
              </div>
            </div>
          )}

          {/* 로그인/로그아웃 버튼 */}
          <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-md">
            {session.data ? (
              <div className="flex items-center">
                <div className="mr-4 text-xs underline">{session.data.user?.name}님</div>
                <LogoutBtn />
              </div>
            ) : (
              <div className="flex items-center gap-5">
                 <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-md">
                <Link href="/map">
                  <Image src={navMapViewIcon} alt="navMapViewIcon" className="max-h-4" width={15} height={15} />
                </Link>
              </div>
                {/* 로그인 버튼 */}
                <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-md">
                  <button className="text-xs" onClick={openLoginModal}>
                    로그인
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 햄버거 메뉴 토글용 체크박스 (md 화면에서만 보임) */}
        <input type="checkbox" className="hidden md:hidden" id="menu-toggle" />

        {/* 햄버거 메뉴 아이템 (sm 화면에서만 보임) */}
        <div className={`md:hidden ${isDropdownOpen ? 'block' : 'hidden'} absolute top-16 right-4 bg-white border rounded shadow-md p-4`}>
          <div className="flex flex-col items-center space-y-4 mt-4">
            {session.data && (
              <>
                <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-md">
                  <Link href="/write">
                    <Image src={navWriteIcon} alt="navWriteIcon" className="max-h-5" width={15} height={15} />
                  </Link>
                </div>
                <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-md">
                  <Link href="/map">
                    <Image src={navMapViewIcon} alt="navMapViewIcon" className="max-h-4" width={15} height={15} />
                  </Link>
                </div>
                <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-xs">
                  <Link href={`/mypage/${user?.id}`}>내 서재</Link>
                </div>
              </>
            )}
            <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-md">
              {session.data ? (
                <div className="flex items-center">
                  <div className="mr-4 text-xs">{session.data.user?.name}</div>
                  <LogoutBtn />
                </div>
              ) : (
                <div className='flex flex-col items-center'>
                <div className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-md">
                <Link href="/map">
                  <Image src={navMapViewIcon} alt="navMapViewIcon" className="max-h-4" width={15} height={15} />
                </Link>
              </div>
                <button className="font-bold rounded hover:bg-gray-100 dark:border-gray-700 text-md text-xs" onClick={openLoginModal}>
                  로그인
                </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 모바일에서 로그인 모달 */}
      {isLoginOpen && (
        <CustomModal onClose={closeLoginModal} isOpen={true} size={'30rem'}>
          <div className="p-[2rem]">
            <div className="font-bold text-2xl">로그인</div>
            <div className="text-xs text-[#E57C65] py-2">
              <h1>로그인을 하고 모든 기능을 이용해 보세요</h1>
              <h1>필요한 시간은 단 3초!</h1>
            </div>
            <LoginBtn onLogin={toggleLoginStatus} />
          </div>
        </CustomModal>
      )}
      <div className="grow" id="space"></div>
    </nav>
  )
}

export default NavBar
