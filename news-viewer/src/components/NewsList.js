import { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

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

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // componentDidMound + componentDidUpdate
    // async 사용함수 fetchData로 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=51acdda84c6844b7addb39d8a98089c2"
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (e) {
        alert("error");
        console.log(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 대기중일 때
  if (loading) {
    return <NewsListBlock>fetching...</NewsListBlock>;
  }
  // 아직 articles 값이 설정 되지 않았을 때
  if (!articles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
