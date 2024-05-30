import React, { useState } from 'react';
import TextBoxUseState from './TextBoxUseState';
import TextBoxReducer from './TextBoxReducer';

const TextBoxUseStateApp = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
        <div>
            <button onClick={() => {setVisible(!visible)}}>{visible ? '숨기기' : '보이기'}</button>
            {visible && <TextBoxUseState/>}
        </div>
        <div>
            <TextBoxReducer/>
        </div>
        </>
        
    );
};

export default TextBoxUseStateApp;