import styled, {css} from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768 // px
};

// 위 sizes 객체에 따라 자동으로 media 쿼리 함수를 만들어 줌.
// 참고 : https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => {css`
    @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
    }
    `; console.log(...args, sizes[label]); } // ['width: 768px;', raw: Array(1)] 1024
    // 이해를 위해 ... src/example/tagged-template-literal.js 참조
    return acc;
}, {});

const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있음. */
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  /* 
    default 가로크기 1024px, 가운데정렬
    가로크기 작아짐에 따라 크기 줄이고
    768px미만이면 꽉 채움
  */
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`}
`;

const Button = styled.button`
 background: white;
 color: black;
 border-radius: 4px;
 padding: 0.5rem;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 font-size: 1rem;
 font-weight: 600;


/* & 문자 사용하여 Sass처럼 자기자신 선택 가능 */
&:hover {
  background: rgba(255,255,255,0.9);
}

/* invert값이 true일때 특정 스타일 부여 */
${props =>
props.inverted &&
css`
    background: none;
    border: 2px solid white;
    color: white;
    &:hover {
        background: white;
        color: black;
    }
`};

& + button { // 하위 첫번째 button 요소
    margin-left: 1rem;
}
`;

const StyledComponent = () => {
    return (
        <Box color='black'>
            <Button>안녕하세요</Button>
            <Button inverted={true}>테두리만</Button>
        </Box>
    );
};

export default StyledComponent;