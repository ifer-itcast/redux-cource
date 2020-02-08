import * as Types from './actionTypes';

export const add = () => {
    return {
        type: Types.ADD
    };
};

export const sub = () => {
    return {
        type: Types.SUB
    };
};

export const addAsync = () => {
    // thunk 插件的使用，这里可以返回函数
    return dispatch => {
        setTimeout(() => {
            // 异步结束后，手动执行 dispatch
            dispatch(add());
        }, 2000);
    }
}