// CSS 파일을 import해서 스타일을 적용
import './NewsBlog.css';
// useState 훅을 사용하기 위해 리액트에서 import
import { useState } from 'react';
// 모달 컴포넌트 import
import Modal from './Modal';

function NewsBlog() {
    // 상단 제목
    let title = "React Study";

    // 뉴스 제목 배열 상태
    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    // 각 뉴스에 대한 좋아요 수 배열 상태
    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0]);

    // 모달창 열림/닫힘 상태
    let [showModal, setShowModal] = useState(false);

    // 현재 선택된 뉴스의 index (모달에 표시할 뉴스 선택용)
    let [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div>
            {/* 상단 네비게이션 바 */}
            <div className='black-nav'>
                <h4>Blog Header</h4>
                {/* 제목 표시 - 스타일 인라인 적용 */}
                <p style={{ color: "orange", fontSize: '20px' }}>{title}</p>
            </div>

            {
                // 뉴스 배열을 map으로 반복해서 출력
                news.map((item, index) => {
                    return (
                        <div className='post-list' key={index}>
                            {/* 제목 클릭 시 모달 토글 + 선택된 인덱스 저장 */}
                            <h4 onClick={() => {
                                // 모달을 열거나 닫음 (toggle)
                                setShowModal(!showModal);
                                // 클릭한 뉴스의 index를 저장
                                setSelectedIndex(index);
                            }}>
                                {item}
                                {/* 좋아요 버튼 (하트) 클릭 시 좋아요 증가 */}
                                <span onClick={(event) => {
                                    // 이벤트 버블링 방지 (부모 h4의 클릭 막기)
                                    event.stopPropagation();

                                    // 기존 배열 복사 후 좋아요 수 1 증가
                                    let updatedLikes = [...likeCountArr];
                                    updatedLikes[index] += 1;

                                    // 새로운 배열로 상태 업데이트
                                    setLikeCountArr(updatedLikes);
                                }}>
                                    💖{likeCountArr[index]}
                                </span>
                            </h4>
                            <p>내용 무</p> {/* 뉴스 내용은 현재 없음 */}
                        </div>
                    );
                })
            }

            {
                // 모달이 열려 있고, 선택된 뉴스가 존재할 때만 모달 컴포넌트 출력
                showModal && selectedIndex !== null &&
                <Modal
                    title={news[selectedIndex]}                      // 선택한 뉴스 제목
                    likeCount={likeCountArr[selectedIndex]}          // 해당 뉴스의 좋아요 수
                    news={news}                                      // 뉴스 전체 배열 전달 (수정용)
                    setNews={setNews}                                // 뉴스 수정 함수 전달
                    bgColor="lightblue"                              // 모달 배경색 prop 전달
                />
            }
        </div>
    );
}

export default NewsBlog;
