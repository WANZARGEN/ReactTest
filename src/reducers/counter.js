import { INCREMENT } from '../actions';
/**
 * reducer를 여러개로 분리하여 작성 할 땐, 서로 직접적인 관계가 없어야 합니다.
 */
const counterInitialState = {
    counter: new Array(10).fill(0),
    total: 0
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                counter: state.counter.map((value, idx) => {
                    if(idx === action.idx) {
                        return value + 1;
                    } else return value
                }),
                total: state.total + 1
            }
        default:
            return state;
    }
};



export default counter;