import { UPDATE_BP, UPDATE_DBP, UPDATE_HR, UPDATE_PR, UPDATE_SBP, UPDATE_SR,
    actionType, stateType } from "./store-types";

export const initalState: stateType[] = [{
    id:0,
    name:'',
   BP :{value:0, name: 'blood pressure'},
   HR :{value:0, name: 'Heart Rate'},
   SBP :{value:0, name: 'Sistolic Blood Pressure '},
   DBP :{value:0, name: 'Distolic blood pressure'},
   PR :{value:0, name: 'Pulse Rate'},
   SR :{value:0, name: 'Sugar'}, 
}
]

export const initalStateValue: stateType[] = [{
    id:1,
    name:'komal',
   BP :{value:61, name: 'blood pressure'},
   HR :{value:80, name: 'Heart Rate'},
   SBP :{value:135, name: 'Sistolic Blood Pressure '},
   DBP :{value:85, name: 'Distolic blood pressure'},
   PR :{value:40, name: 'Pulse Rate'},
   SR :{value:30, name: 'Sugar'}, 
},

{
    id:2,
    name:'manoj',
   BP :{value:130, name: 'blood pressure'},
   HR :{value:105, name: 'Heart Rate'},
   SBP :{value:90, name: 'Sistolic Blood Pressure '},
   DBP :{value:80, name: 'Distolic blood pressure'},
   PR :{value:60, name: 'Pulse Rate'},
   SR :{value:100, name: 'Sugar'}, 
}

]


const reducerFunction = (state= initalState, action:any) => {
switch (action.type) {
    case 'SET_USERS_DATA':
        return{
            ...action.payload.users
        }
    
        case 'UPDATE_USER_DATA':
            console.log('state while update', state)

            const UserId: number = state.findIndex((user: stateType) => user.id === action.userData.id )
            state[UserId]= action.userData;
        return [  ...state,]
          
        
   default:
       return state;
    }
}
export default reducerFunction;