import React, {useEffect, useState} from 'react';
import PhoneInput from "react-phone-input-2";

const Phone = (props) => {

    const [country, setCountry] = useState('');

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then( res => res.json())
            .then(response => {
                setCountry(response.country_code);
                console.log(response);
            })
            .catch((data, status) => {
                console.log('Request failed:', data);
            });
    },[])
   
    return(
        <PhoneInput
            placeholder="Enter phone number"
            country={country.toLowerCase()}
            value={props.phone}
            onChange={phone =>props.onChange(phone)}/>
    )
}

export default Phone;
