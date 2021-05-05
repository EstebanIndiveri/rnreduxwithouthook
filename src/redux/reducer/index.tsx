const initalState={
    backgroundColor:'#f7e5ed',
    fontSize:20,
}

export const reducer=(state=initalState,action:any)=>{
    switch (action.type) {
        case 'CHANGE_BACKGROUND_COLOR':
            if(state.backgroundColor==='#f7e5ed'){
                return{backgroundColor:'green'}
            }else{
                return{backgroundColor:'#f7e5ed'}
            }
        case 'INCREASE_FONT_SIZE':
            return{
                ...state,
                fontSize:action.currentFontSize + 1,
            };
        case 'DECREASE_FONT_SIZE':
            return{
                ...state,
                fontSize:action.currentFontSize - 1,
            };
        default:
            return state;
    }
};