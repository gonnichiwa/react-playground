import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    // location은 현재 보고 있는 페이지 정보를 가진 객체.
    // search : 쿼리스트링 url              /about?name=jin&id=sdflsndg
    //                  location.search  ?name=jin&id=sdflsndg
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({mode, detail: detail === 'true' ? false : true});
    };
    const onIncreaseMode = () => {
        const nextMode = (mode === null | isNaN(mode)) ? 1 : parseInt(mode) + 1;
        setSearchParams({mode: nextMode, detail});
    };

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
            <p>쿼리스트링 {location.search}</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;