var initialState = [
    {
        id : 1,
        name : "Dư Công Thành",
        gender: 1,
        birth : "25/10/1997",
        country : "Cẩm Phả"
    }, {
        id : 2,
        name : "Dương Dương",
        gender: 2,
        birth : "05/07/1997",
        country : "Cẩm Phả"
    }, {
        id : 3,
        name : "Dương Thị Liễu",
        gender: 2,
        birth : "05/07/1997",
        country : "Cẩm Phả"
    }
];

const employees = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
};

export default employees;