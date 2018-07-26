import { ADD_DATA } from './';

export const addData = (data) => {
    return {
        type: ADD_DATA,
        data: data
    };
};

