import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem; // rem : root em, 최상위 fontsize 기준 몇배수 크기로 할건지?
  //  em : 부모 요소 fontSize크기 기준
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=51acdda84c6844b7addb39d8a98089c2`
    );
  }, [category]);

  // 아직 articles 값이 설정 되지 않았을 때
  if (!response) {
    return null;
  }
  // 에러처리
  if(error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }

  // 대기중일 때
  if (loading) {
    return <NewsListBlock>fetching...</NewsListBlock>;
  }


  // articles 값이 유효할 때
  const { articles } = response.data; // 객체 분해하기 https://ko.javascript.info/destructuring-assignment#ref-931
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
