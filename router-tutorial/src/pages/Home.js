import React from 'react';

const Home = () => { // 본 Home.js 파일이 pages/ 경로에 있는데,
                     // 꼭 pages/ 이름, 경로depth 아니어도 상관없음.
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지 입니다.</p>
        </div>
    );
};

export default Home;