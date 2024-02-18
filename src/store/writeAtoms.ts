import { atom, atomFamily, selector } from "recoil";

export interface ReviewData {
    id?:number;
    date?:string;
    title?:string;
    place?:string;
    category?:string;
    description?:string;
    isFavorite?:boolean;
    image?:string;
    tag?: {
        rate?: number;
        count?: number;
      };
    isPrivate?:boolean;
}

// 독후감 배열
export const reviewState = atom<ReviewData[]>({
    key:'reviewState',
    default:[],
})

export const selectedReviewState = atom<ReviewData | null>({
    key:'selectedReviewState',
    default:null,
})

// 리뷰 필터링
export const filterReviewState = atom({
    key:'filterReviewState',
    default:'전체'
})

// 모든 공유리뷰 호출
export const allReviewSelector = selector({
    key:'allReviewSelector',
    get:({get}) => {  
    }
})

// 리뷰 전체보기/ 나만 보기 기능
export const toggleReviewPrivate = atomFamily({
  key:'toggleReviewPrivate',
  default:(id) => false,
})



export const filteredReviewsState = selector({
    key: 'filteredProductsState',
    get: ({ get }) => {
      const filterReview = get(filterReviewState);
      const allReviews = get(reviewState);
  
      return allReviews.filter((item:any) => {
        if (filterReview === '전체') {
          return true; // 전체 범위 선택 시 모든 리뷰 반환
        }
  
        const curDate = new Date().getTime();
        const reviewDate = new Date(item.date).getTime(); // 리뷰의 날짜 정보

        if (filterReview === '최신등록순') {
          return reviewDate >= curDate - 50 * 24 * 60 * 60 * 1000; // 최근 50일 이내
        } else if (filterReview === '오래된 순') {
            return reviewDate <= curDate - 50 * 24 * 60 * 60 * 1000 && reviewDate >= curDate - 100 * 24 * 60 * 60 * 1000; // 50일 전부터 100일 전까지
        } else if (filterReview === '즐겨찾기 순') {
          return item.isFavorite;
        }
        return false; // 범위에 해당하지 않는 상품 제외
      });
    },
  });
  
// 상품 API 가져오기
export const getReviewData = selector({
    key:'getReviewData',
    get: async () => {
        const res = await fetch('https://fakestoreapi.com/products/');
        const data = await res.json();
        return data;
    }
}) ;  


export const deleteReview = async (reviewId: any) => {
    // 후에 API에서 독후감 삭제
    await fetch('', { method: 'DELETE' });

}