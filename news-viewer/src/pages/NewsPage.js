import React from 'react';
import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
    const params = useParams();
    // 카테고리 선택 안됐으면 기본값 'all' 사용, see components/Categories.js, const categories
    const category = params.category || 'all';

    return (
        <>
            <Categories />
            <NewsList category={category}/>
        </>
    );
};

export default NewsPage;