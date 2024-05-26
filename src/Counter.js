import {Component} from 'react';

class Counter extends Component {
    state = { // state 초기값
        number: 0, // max: 약 9000조
        fixedNumber: 999
    }
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={
                    () => {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            }
                        });
                        this.setState(prevState => (
                            {number: prevState.number + 1}
                        ));
                        console.log('called +1 +1, ');
                        console.log(this.state);
                    }
                }>+1</button>
                <button onClick={
                    () => {
                        this.setState(
                            {number: number - 1},
                            () => {
                                console.log('called -1');
                                console.log(this.state);
                            }
                        );
                    }
                }>-1</button>
            </div>
        );
    }
}

export default Counter;