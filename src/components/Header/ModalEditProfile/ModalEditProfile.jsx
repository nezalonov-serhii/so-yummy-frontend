import { Box, Button } from "./ModalEditProfile.styled"
import {logoutThunk} from '../../../redux/thunk/auth/authThunk'
import { useDispatch } from "react-redux"


export const ModalEditProfile =()=>{
    const dispatch = useDispatch()

    return(
        <Box>
            <p>Edit profile</p>
            <Button onClick={()=> dispatch(logoutThunk())}>Log out</Button>
        </Box>
    )
}