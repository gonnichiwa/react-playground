import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>게시글 {id} 상세 페이지 입니다.</h2>
        </div>
    );
};

export default Article;