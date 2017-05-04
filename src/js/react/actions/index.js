export const getContent = (data) => ({
    type: 'GET_CONTENT',
    pageId: data.id
});

export const openMenu = (e) => ({
    type: 'MENU_OPEN',
    e: e
});

export const closeMenu = (e) => ({
    type: 'MENU_CLOSE'
});