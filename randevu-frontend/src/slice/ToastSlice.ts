import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IToast{
     type ?: 'Notification' | 'Success' | 'Error' | 'Confirm' ,
     header: string,
     closeButton:boolean,
     explantaion:string,
     open?:boolean,
     delay?:number
}

export interface INotificateToaster extends IToast {

}

export interface IErrorToaster extends IToast {
    againButton:boolean,
    AgainAction:()=>void,
}

export interface ISuccessToaster extends IToast {

}

export interface IConfirmTosater extends IToast{

    ConfirmButton:boolean,
    ConfirmAction:()=>void,

}

interface IInitialState {
    Notifcation : INotificateToaster,
    Error: IErrorToaster,
    Success : ISuccessToaster,
    Confirm:IConfirmTosater
}

const initialState :IInitialState = {
    Notifcation: {
        open:false,
        delay:5000,
        type: "Notification",
        header: "",
        closeButton: false,
        explantaion: ""
    },
    Error: {
        open:false,
        delay:5000,
        againButton: false,
        AgainAction: function (): {} {
            throw new Error("Function not implemented.");
        },
        type: "Error",
        header: "",
        closeButton: false,
        explantaion: ""
    },
    Success: {
        open:false,
        delay:5000,
        type: "Success",
        header: "",
        closeButton: false,
        explantaion: ""
    },
    Confirm: {
        open:false,
        delay:5000,
        ConfirmButton: false,
        ConfirmAction: function (): {} {
            throw new Error("Function not implemented.");
        },
        type: "Confirm",
        header: "",
        closeButton: false,
        explantaion: ""
    }
}

const ToastSlice = createSlice({
name:"toast",
initialState,
reducers:{

    NotificateToaster:(state,action:PayloadAction<INotificateToaster>) =>{
        
        state.Notifcation.open = true;
        state.Notifcation.closeButton = action.payload.closeButton;
        if(action.payload.delay) state.Notifcation.delay = action.payload.delay;
        state.Notifcation.explantaion = action.payload.explantaion;
        state.Notifcation.header = action.payload.header;
    },
    ErrorToaster: (state,action:PayloadAction<IErrorToaster>) =>{

        state.Error.open = true;
        state.Error.closeButton = action.payload.closeButton;
        if(action.payload.delay) state.Error.delay = action.payload.delay;
        state.Error.explantaion = action.payload.explantaion;
        state.Error.header = action.payload.header;
        state.Error.againButton = action.payload.againButton;
        state.Error.AgainAction = action.payload.AgainAction;

    },
    SuccessToaster: (state,action:PayloadAction<ISuccessToaster>) =>{

        state.Success.open = true;
        state.Success.closeButton = action.payload.closeButton;
        if(action.payload.delay) state.Success.delay = action.payload.delay;
        state.Success.explantaion = action.payload.explantaion;
        state.Success.header = action.payload.header;

        setTimeout(()=>{
            
            state.Success.open  = false;
            state.Success.explantaion ="";
            state.Success.header = "";

        },action.payload.delay || state.Success.delay);

    },
    ConfirmToaster : (state,action:PayloadAction<IConfirmTosater>)=>{

        state.Confirm.open = true;
        state.Confirm.closeButton = action.payload.closeButton;
        if(action.payload.delay) state.Confirm.delay = action.payload.delay;
        state.Confirm.explantaion = action.payload.explantaion;
        state.Confirm.header = action.payload.header;
        state.Confirm.ConfirmButton = state.Confirm.ConfirmButton;
        state.Confirm.ConfirmAction = action.payload.ConfirmAction;
        setTimeout(()=>{
            
            state.Confirm.ConfirmButton = false;
            state.Confirm.ConfirmAction = () =>{};
            state.Confirm.open  = false;
            state.Confirm.explantaion ="";
            state.Confirm.header = "";

        },action.payload.delay || state.Confirm.delay);

    },
    NotificateToasterClose: (state)=>{

        state.Notifcation.open  = false;
        state.Notifcation.explantaion ="";
        state.Notifcation.header = "";

    },
    ErrorToasterClose : (state)=>{
        state.Error.open  = false;
        state.Error.explantaion ="";
        state.Error.header = "";
        state.Error.againButton = false;
        state.Error.AgainAction = ()=>{};
    }

}
})

export const { NotificateToaster,ErrorToaster,SuccessToaster,ConfirmToaster ,NotificateToasterClose,ErrorToasterClose } = ToastSlice.actions
export default ToastSlice.reducer