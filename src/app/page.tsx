'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import AddPlace from './components/map'
import Link from 'next/link'
import SlideCarousel from './components/carousel'
import { useEffect, useState } from 'react'
import ReviewPage from './(pages)/reviews/page'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allReviewSelector, selectedReviewState } from '@/store/writeAtoms'

export default function Home() {

  let session = useSession()
  if (session) {
    console.log(session)
  }

  const [map, setMap] = useState(false);
  const [selectedReview, setSelectedReview] = useRecoilState(selectedReviewState);
  const allReviews = useRecoilValue(allReviewSelector);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index:any) => {
    setCurrentIndex(index);
  };

  const mainReviewToShow = 6; // 메인화면에서 보여질 갯수

  const mainReviews = Array.isArray(allReviews) ? allReviews.slice(0, mainReviewToShow) : [];

  useEffect(()=> {
    setMap(true);
  },[])

  return (
    <div>
      <div>읽는곳곳</div>
      <h1>누구나 볼 수 있는 페이지</h1>
      {session.data ? (
        <div>
          {session.data.user?.name}
          <Image
            src={session.data.user?.image}
            width={100}
            height={100}
            alt="Picture of the author"
          />
            <div>
          </div>
        </div>
      ) : (
        <>
        <div>로그인된 정보 X</div>
        </>
      )}
      <AddPlace onClose={() => setMap(false)} selectedPlace={''} onMarkerClickParent={function (markerInfo: string): void {
        throw new Error('Function not implemented.')
      } }/>
      <SlideCarousel/>
      <div className="">
          <div className='flex justify-between'>
          <span>모든 기록</span>
          <span>
            <Link href={'/reviews'}>
            더 보기
            </Link>
            </span>
          </div>
          {mainReviews.length === 0 ? (
      <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <section className='pt-16'>
         <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
           <h1 className='text-4xl'>등록된 리뷰가 없습니다</h1>
         </div>
       </section>
     </div>
        ) : (
          mainReviews.map((item:any) => (
            <Link
              href={`/review/${item.id}`}
              key={item.id}
              onClick={() => setSelectedReview(item)}>
              <h1>모든 기록</h1>
              <div className="w-80 h-80 border border-slate-200 bg-slate-200 relative">
              <div className="absolute transform -translate-y-1/2 md:left-20 top-1/2 mx-8">
                <div className="text-white text-left">
                  <h1 className="text-3xl md:text-5xl font-bold"></h1>
                  <p className="py-4 md:text-2xl"></p>
                  <div>책 이미지</div>
                </div>
              </div>
            </div>
            </Link>
          ))
        )}
        </div>
    </div>
  )
}
