import Image from 'next/image'
import mainTitle from '/public/images/mainTitle.png'
import mainLogo from '/public/images/mainLogo.png'
import { Sunflower } from 'next/font/google'


const SunflowerFonts = Sunflower({
  weight: ['300','500','700'],
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <footer className="mx-auto text-center bottom-0 footer pt-10 md:p-[3rem] sm:p-[1rem] sm:pt-5 bg-base-200 border border-slate-200 text-[#AAAAAA]">
      <div className="grid grid-flow-col gap-4">
        <div className="footer_logo flex items-center gap-4 p-4 pl-20 sm:p-2 sm:mx-auto">
        <div className='flex justify-center items-center gap-2'>
             
             <Image src={mainLogo} alt="메인 로고" className="w-[3vw] sm:w-[5vw]" />
             <h1 className={`${SunflowerFonts.className} text-black sm:text-sm`}>읽는곳곳</h1>
             </div> 
        </div>
        <ul className="footer_hidden pt-5 pb-5 grid grid-flow-col gap-4 md:absolute md:right-10">
          <li className="text-sm md:text-xs">
            서비스기획 : 박혜인
            <br />
            ㅇㅇㅇ@ㅇㅇㅇ.ㅇㅇㅇ
          </li>
          <li className="text-sm md:text-xs">
            UI/UX 디자인 : 전예지
            <br />
            jyeji99@naver.com
          </li>
          <li className="text-sm md:text-xs">
            프론트엔드개발 : 최성관, 최은지
            <br />
            ㅇㅇㅇ@ㅇㅇㅇ.ㅇㅇ
          </li>
          <li className="text-sm md:text-xs">
            백엔드개발 : 권기대, 이성호
            <br />
            ㅇㅇㅇ@ㅇㅇㅇ.ㅇㅇ
          </li>
        </ul>
      </div>
      <div className="footer_hidden flex gap-5 absolute right-10 px-10">
        <div className="text-sm md:text-xs">개인정보처리방침</div>
        <div className="text-sm md:text-xs">이용약관</div>
      </div>
      <div className="footer_hidden text-xs mb-5 md:text-sm sm:text-xs sm:mb-5">
        ©2024. 읽는곳곳 Co. All Rights Reserved. Prod By. SWYP
      </div>
    </footer>
  )
}

export default Footer
