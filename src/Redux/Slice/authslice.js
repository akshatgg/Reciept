import { toast } from "react-hot-toast";
import { useAuth } from "../../Firebase/authcontext";

const initialState = {
    isloggedin: localStorage.getItem("isloggedin") || false,
    data: JSON.parse(localStorage.getItem("data")) || {},
};

const {login} =useAuth();


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(login)
        


    }
});


export default authSlice.reducer;



