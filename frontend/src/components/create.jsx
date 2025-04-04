import { React, useState, useEffect } from "react";
import AxiosInstance from "./axios";

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
            This is the create page
        </div>
    )
}

export default Create