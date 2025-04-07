import { React, useState, useEffect } from "react";
import AxiosInstance from "./axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router";

const Delete = () => {
    const MyParameter = useParams()
    const MyId = MyParameter.id

    const [myData, setMyData] = useState({
            name: "",
            description: "",
            attendance: "",
            city: "",
            country: "",
            league: "",
            characteristics: []
    })

    const GetData = () => {

        console.log('ID: ', MyId)
        AxiosInstance.get(`footballclub/${MyId}/`).then((res) => {
            setMyData(res.data)
        })
    }
    useEffect(() => {
        GetData()
    }, [])

    return (
        <div>
            <Box className={"TopBar"}>
                    <AddBoxIcon/>
                    <Typography sx={{marginLeft:'5px', fontWeight:'bold'}} variant="subtitle2">Confirm Delete</Typography>
            </Box>
            <Box>
                <Box sx={{marginTop:'35px'}}>
                    <Button type="submit" variant="contained" color="error">Delete</Button>
                </Box>
                <Box sx={{marginTop:'35px'}}>
                    <Button type="submit" variant="contained">Go Back</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Delete