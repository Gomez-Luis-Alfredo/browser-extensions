export const extentionReducer = (state=[],action) =>{
switch (action.type) {
    case 'remove':
        return state.filter(extention => extention.id !== action.payload)
        
    default:
        break;
}
}