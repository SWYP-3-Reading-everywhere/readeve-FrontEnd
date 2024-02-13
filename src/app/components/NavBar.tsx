'use client';

import Link from 'next/link';
import React from 'react'

const NavBar = () => {
  
  return (
    <nav className="navbar sticky top-0 z-10 bg-slate-200">
      <div className="dropdown md:hidden" id="category_drop-down">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
           <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/">기록하기</Link>
          </li>
          <li>
            <Link href="/mypage/:[id]">내 서재</Link>
          </li>
          <li>
            <Link href="/">장소 보기</Link>
          </li>
          <li>
            <Link href="/">로그인</Link>
          </li>
        </ul>
      </div>

   <div className='flex-none hidden md:block'>
    <ul className='flex justify-end w-full right-0 menu menu-horizontal p-0'>
        <h1 className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white mx-8'>
          <Link href='/'>읽는곳곳</Link>
          </h1>
        <div className='block py-2 pl-3 pr-4 font-bold text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:border-gray-700 mx-8 text-lg'>
          <Link href="/">기록하기</Link>
          </div>
        <div className='block py-2 pl-3 pr-4 font-bold text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:border-gray-700 mx-8 text-lg'>
          <Link href="/mypage/:[id]">내 서재</Link>
          </div>
        <div className='block py-2 pl-3 pr-4 font-bold text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:border-gray-700 mx-8 text-lg'>
          <Link href="/">장소 보기</Link>
          </div>
          <div className='block py-2 pl-3 pr-4 font-bold text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:border-gray-700 mx-8 text-lg'>
          <Link href="/">로그인</Link>
          </div>
        </ul>
        </div>
        <div className="grow" id="space"></div>
      </nav>
   
  )
}

export default NavBar;