import { React, useState, useEffect } from "react";
import AxiosInstance from "./axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import { Form, useNavigate, useParams } from "react-router";
import MyMessage from "./forms/Message";

const Delete = () => {
    const MyParameter = useParams()
    const MyId = MyParameter.id
    const [message, setMessage] = useState([])
    const navigate = useNavigate()
    const [myData, setMyData] = useState({
            name: "",
            description: "",
            attendance: "",
            city: "",
            country: "",
            league: "",
            characteristics: []
    })

    console.log('My Data: ', myData)
    const GetData = () => {

        console.log('ID: ', MyId)
        
        AxiosInstance.get(`footballclub/${MyId}/`).then((res) => {
            setMyData(res.data)
        })
    }
    useEffect(() => {
        GetData()
    }, [])

    const DeleteRecord = (event) => {
        event.preventDefault()
        AxiosInstance.delete(`footballclub/${MyId}/`)
        .then(() => {
            setMessage(              
                <MyMessage
                    
                    messageText={"You successfully deleted the data from the database!"}
                    messageColor={"red"}
                />
            )
            setTimeout(() => {
                navigate('/')
            }, 0)
        })
    }

    return (
        <div>
            <form onSubmit={DeleteRecord}>
                {message}
                <Box className={"TopBar"}>
                        <AddBoxIcon/>
                        <Typography sx={{marginLeft:'5px', fontWeight:'bold'}} variant="subtitle2">Confirm Delete</Typography>
                </Box>
                <Box className={"TextBox"}>
                    <Typography variant="subtitle1" color="error">You will be deleting the club <strong>{myData.name}</strong> from city <strong>{myData.city}</strong>.</Typography>
                </Box>
                
                <Box>
                    <Box sx={{marginTop:'35px', alignItems:'center'}}>
                        <Button type="submit" variant="contained" color="error">Delete</Button>
                    </Box>
                    {/* <Box sx={{marginTop:'35px'}}>
                        <Button type="submit" variant="contained">Go Back</Button>
                    </Box> */}
                </Box>
            </form>
        </div>
    )
}

export default Delete