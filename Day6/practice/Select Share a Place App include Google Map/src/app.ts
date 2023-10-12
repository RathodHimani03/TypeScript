import axios, { formToJSON } from 'axios';


const form = document.querySelector('form')!

const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler() {
    // event.preventDefault();
    const enteredAddress = addressInput.value;

    type GoogleGeoCodingResponse = {

        results: { geometry: { location: { lat: number; lng: number } } },
        status: 'OK' | 'ZERO_RESULT'
    }
    //send this to Google API
    axios.get<GoogleGeoCodingResponse>('https://mocki.io/v1/d7d48789-9c46-497e-9b23-c45c9381df29') //it will return promises
        .then(
            response => {
                if (response.data.status !== 'OK') {
                    throw new Error('Could not fetch location!')
                }
                
                console.log(response)
                // const coordinates = response.data.results.geometry.location;
                // console.log(JSON.stringify(coordinates))
            }
        )
        .catch(err => {
            alert(err.message);
            console.log(err)
        })


}


form.addEventListener('click', searchAddressHandler)