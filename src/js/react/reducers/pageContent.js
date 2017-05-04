const pageContent = (state = {}, action) => {
    switch (action.type) {
        case 'GET_CONTENT':
            return {
                pageId: action.id,
                title: action.title,
                metaDescription: action.metaDescription
            };
        default:
            return state;
    }
};

export default pageContent;