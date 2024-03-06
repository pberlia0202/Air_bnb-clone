import { useState } from 'react'
import ReactMapGL from 'react-map-gl';


function Map() {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        longitude: -122.4376,
        latitude: 37.7577,
        maxZoom: 20,
        minZoom: 5,
        zoom: 11,
        
    });
    return (
        <ReactMapGL
            mapStyle='mapbox://styles/pberlia/clte626pk003j01pk3zul24mh'
            mapboxAccessToken={import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN}
            {...viewport}
            doubleClickZoom
            onMove={evt => setViewport(evt.viewport)}
        >

      </ReactMapGL>
    )
}

export default Map


// import * as React from 'react';
// import Map from 'react-map-gl';

// function App() {
//     const [viewport, setViewport] = useState({
//         width: '100%',
//         height: '100%',
//         longitude: -122.4376,
//         latitude: 37.7577,
//         zoom: 11,
//     });
//     return <Map
//         mapLib={import('mapbox-gl')}
//         {...viewport}
//         mapStyle='mapbox://styles/pberlia/clte626pk003j01pk3zul24mh'
//         mapboxAccessToken="pk.eyJ1IjoicGJlcmxpYSIsImEiOiJjbHRlNXE5ajUwOG95MnBybnJqNHRvaWFxIn0.6ZGCxY-WOwLuUV1OM6rmrQ"
//         {...viewport}
//         onViewportChange={(nextViewport) => {
//             console.log('Next Viewport:', nextViewport);
//             setViewport(nextViewport);
//         }}
//     />;
// }

// export default App;