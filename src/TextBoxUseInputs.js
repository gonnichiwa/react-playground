import { useReducer } from "react";

function reducer(state, target) {
    return {
        ...state,
        [target.name]: target.value
    }
}
export default function TextBoxUseInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = (e) => {
        dispatch(e.target);
    }
    return [state, onChange];
}