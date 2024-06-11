import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;
    return (
        // TodoListItem-virtualized : 컴포넌트들 사이에 테두리 쳐줌, 홀수,짝수번째 다른 배경 색상 넣기 위함
        <div className='TodoListItem-virtualized' style={style}>
            <div className='TodoListItem'>
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}> { /* true : checkbox checked */}
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);