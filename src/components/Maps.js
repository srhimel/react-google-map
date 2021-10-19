import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer, DirectionsService, Marker, Circle } from '@react-google-maps/api';



const location = {
    lat: 23.918591788213572,
    lng: 90.2115612476981
};
const options = {
    strokeColor: '#8BE78B',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#8BE78B',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 15,
    zIndex: 1
}


const Maps = ({ origin }) => {
    const [response, setResponse] = useState(null);
    const directionsCallback = res => {
        if (res != null) {
            setResponse(res)
        }
    }
    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGL_MAP_API_KEY}
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '80vh',
                        width: '100%'
                    }}
                    // required
                    zoom={19}
                    // required
                    center={location}

                >
                    <Marker
                        position={location}
                    />
                    <Circle center={location} options={options} />

                    <DirectionsService
                        // required
                        options={{
                            destination: 'W696+CJ Dhamrai',
                            origin: origin,
                            travelMode: 'DRIVING'
                        }}
                        // required
                        callback={directionsCallback}

                    />


                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}

                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Maps;