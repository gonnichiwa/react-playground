import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({index, key, style}) => {
      const todo = todos[index];
      return (
        <TodoListItem 
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      )
    },[onRemove, onToggle, todos]
  );
  return (
    <List 
      className='TodoList'
      width={512}  // 전체 크기 (px)
      height={513} // 전체 높이 (px 대충 Item 갯수 10개 잡음)
      rowCount={todos.length} // 전체 항목 개수
      rowHeight={57} // 항목 높이 (px)
      rowRenderer={rowRenderer} // 항목을 렌더링 할 때 쓰는 함수
      list={todos} // 배열 데이터
      style={{outline: 'none'}} // List 컴포넌트 기본 적용 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
