import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => { // 본 Home.js 파일이 pages/ 경로에 있는데,
                     // 꼭 pages/ 이름, 경로depth 아니어도 상관없음.
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지 입니다.</p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/phikal">phikal의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/jin">jin의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;