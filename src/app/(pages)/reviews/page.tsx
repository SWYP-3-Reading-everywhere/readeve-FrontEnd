'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allReviewSelector, filterReviewState, getReviewData, reviewState, selectedReviewState, toggleReviewPrivate } from '@/store/writeAtoms';

export interface ReviewData {
    id?:number;
    date?:string;
    title?:string;
    place?:string;
    category?:string;
    description?:string;
    isFavorite:boolean;
    image:string;
    tag?: {
        rate?: number;
        count?: number;
      };
    private?:boolean;
}

const ReviewPage = () => {

    const [categoryName, setCategoryName] = useState('');
    const allReviews = useRecoilValue(getReviewData)
    const reviewItems = allReviews.filter((item:ReviewData) => item.category === "reviews");
  
    const [selectedReview, setSelectedReview] = useRecoilState(selectedReviewState);
    const [reviewFilter, setReviewFilter] = useRecoilState(filterReviewState);


    const filteredReviews = reviewItems.filter((item: ReviewData) => {
        if (reviewFilter === '전체') {
          return true; // 전체 범위 선택 시 모든 리뷰 반환
        }
    });


 
  return (
        <section className="main">
          <section className='pt-20 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
            <h2 className='mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold'>
                {categoryName}
            </h2>
            <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium">
                    <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    홈
                </a>
            </li>
            <li>
      <div className="flex items-center">
        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" className="ml-1 text-sm font-medium">{categoryName}</a>
      </div>
    </li>
  </ol>
</nav>
    <div className='md-pt-10 relative'>
        <div className='absolute right-10 sm-pt-0'>
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <select id="filter" value={reviewFilter} onChange={(e) => setReviewFilter(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="전체">전체</option>
        <option value="최신등록순">최신등록순</option>
        <option value="오래된순">오래된순</option>
        <option value="즐겨찾기순">즐겨찾기순</option>
    </select>
    </div>
    </div>
        </div> 
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-2 item_list lg:pt-20'>
    {filteredReviews.length === 0 ? (
      <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <section className='pt-16'>
         <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
           <h1 className='text-4xl'>등록된 리뷰가 없습니다</h1>
         </div>
       </section>
     </div>
        ) : (
            filteredReviews.map((item: ReviewData) => (
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
        </section>
        </section>
  );
};

export default ReviewPage;
