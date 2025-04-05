import { React, useState, useEffect } from "react";
import AxiosInstance from "./axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from './forms/TextForm';
import SelectForm from "./forms/SelectForm";
import MultiSelectForm from "./forms/MultiSelectForm";
import DescriptionForm from "./forms/DescriptionForm";
import Button from '@mui/material/Button';

const Create = () => {
    const [country, setCountry] = useState([])
    const [league, setLeague] = useState([])
    const [characteristics, setCharacteristics] = useState([])

    console.log('country', country)
    console.log('league', league)
    console.log('characteristics', characteristics)

    const GetData = () => {
        AxiosInstance.get('country/').then((res) => {
            setCountry(res.data)
        })

        AxiosInstance.get('league/').then((res) => {
            setLeague(res.data)
        })

        AxiosInstance.get('characteristics/').then((res) => {
            setCharacteristics(res.data)
        })
    }
    useEffect(() => {
        GetData()
    }, [])
    return (
        <div>
            <Box className={"TopBar"}>
                <AddBoxIcon/>
                <Typography sx={{marginLeft:'5px', fontWeight:'bold'}} variant="subtitle2">Create a new club</Typography>
            </Box>

            <Box className={"FormBox"}>
                <Box className={"FormArea"}>
                    <TextForm
                        label = {'Club Name'}
                    />
                    <Box sx={{marginTop:'35px'}}>
                        <TextForm
                            label = {'City'}
                        />
                    </Box>
                    <Box sx={{marginTop:'35px'}}>
                        <SelectForm
                            label={"League"}
                            options = {league}
                        />
                    </Box>
                    <Box sx={{marginTop:'35px'}}>
                        <Button variant="contained" fullWidth>Submit the data</Button>
                    </Box>
                </Box>
                <Box className={"FormArea"}>
                    <SelectForm
                        label={"Country"}
                        options = {country}
                    />
                    <Box sx={{marginTop:'35px'}}>
                        <TextForm
                            label = {'Attendance'}
                        />
                    </Box>
                    <Box sx={{marginTop:'35px'}}>
                        <MultiSelectForm
                            label = {'Characteristics'}
                            options = {characteristics}
                        />
                    </Box>
                </Box>
                <Box className={"FormArea"}>
                    <DescriptionForm
                        label = {'Description'}
                        rows = {9}
                    />
                </Box>
            </Box>
        </div>
    )
}

export default Create