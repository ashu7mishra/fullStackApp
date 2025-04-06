import { React, useState, useEffect } from "react";
import AxiosInstance from "./axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from './forms/TextForm';
import SelectForm from "./forms/SelectForm";
import MultiSelectForm from "./forms/MultiSelectForm";
import DescriptionForm from "./forms/DescriptionForm";
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import MyMessage from "./forms/Message";

const Create = () => {
    const [country, setCountry] = useState([])
    const [league, setLeague] = useState([])
    const [characteristics, setCharacteristics] = useState([])
    const [message, setMessage] = useState([])

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

    const validationSchema = yup.object({
        name: yup
                .string("The name must be text")
                .required("Name is required"),
        attendance: yup
                .number("Attendance must be a number")
                .required("Attendance is required"),
        characteristics: yup
                .array()
                .min(1, "Select at least one option")
    })

    const formik = useFormik({
        initialValues:{
            name: '',
            description: '',
            attendance: '',
            city: '',
            country: '',
            league: '',
            characteristics: []
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            AxiosInstance.post('footballclub/', values)
            .then(() => {
                console.log("message: ", message)
                setMessage(
                    
                    <MyMessage
                        
                        messageText={"You successfully submitted the data to the database!"}
                        messageColor={"green"}
                    />
                )
            })
        }
    })
    console.log('form values: ',formik.values)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Box className={"TopBar"}>
                    <AddBoxIcon/>
                    <Typography sx={{marginLeft:'5px', fontWeight:'bold'}} variant="subtitle2">Create a new club</Typography>
                </Box>
                {message}

                <Box className={"FormBox"}>
                    <Box className={"FormArea"}>
                        <TextForm
                            label={'Club Name'}
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <Box sx={{marginTop:'35px'}}>
                            <TextForm
                                label={'City'}
                                name='city'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                            />
                        </Box>
                        <Box sx={{marginTop:'35px'}}>
                            <SelectForm
                                label={"League"}
                                options = {league}
                                name='league'
                                value={formik.values.league}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.league && Boolean(formik.errors.league)}
                                helperText={formik.touched.league && formik.errors.league}
                            />
                        </Box>
                        <Box sx={{marginTop:'35px'}}>
                            <Button type="submit" variant="contained" fullWidth>Submit the data</Button>
                        </Box>
                        
                    </Box>
                    <Box className={"FormArea"}>
                        <SelectForm
                            label={"Country"}
                            options = {country}
                            name='country'
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.country && Boolean(formik.errors.country)}
                            helperText={formik.touched.country && formik.errors.country}
                        />
                        <Box sx={{marginTop:'35px'}}>
                            <TextForm
                                label = {'Attendance'}
                                name='attendance'
                                value={formik.values.attendance}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.attendance && Boolean(formik.errors.attendance)}
                                helperText={formik.touched.attendance && formik.errors.attendance}
                            />
                        </Box>
                        <Box sx={{marginTop:'35px'}}>
                            <MultiSelectForm
                                label = {'Characteristics'}
                                options = {characteristics}
                                name='characteristics'
                                value={formik.values.characteristics}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.characteristics && Boolean(formik.errors.characteristics)}
                                helperText={formik.touched.characteristics && formik.errors.characteristics}
                            />
                        </Box>
                    </Box>
                    <Box className={"FormArea"}>
                        <DescriptionForm
                            label = {'Description'}
                            rows = {9}
                            name='description'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </Box>
                </Box>
            </form>
        </div>
    )
}

export default Create