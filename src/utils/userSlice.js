import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
{
    name: "User",
    initialState: {
        item : null,
    },
    reducers: {
        adduserprofile: (state, action) => {
            state.item = action.payload;
        },
        removeuserprofile: (state) => {
            state.item = null;
        }        
        
        }
});

export const {adduserprofile,removeuserprofile} = userSlice.actions;

export default userSlice.reducer;