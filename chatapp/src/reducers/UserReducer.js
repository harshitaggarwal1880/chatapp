const UserReducer = (state, action)=>{
    switch(action.type){
        case "CHANGE":
            return {
                ...state,
                roll: 45
            }

        default:
            return state;
    }
}

export default UserReducer;