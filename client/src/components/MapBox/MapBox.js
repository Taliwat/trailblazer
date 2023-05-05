import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './mapbox.css'

// const ROOTMAPBOXURI = 'https://api.mapbox.com/search/searchbox/v1/category/'

// const CATEGORY = 'outdoors'

// const MAPBOXURI = `${ROOTMAPBOXURI}${CATEGORY}?access_token=${ACCESSTOKEN}&limit=10&origin=${LOCATIONLON},${LOCATIONLAT}&proximity=${LOCATIONLON},${LOCATIONLAT}`


mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_API}`
//I think we'll eventually want to set the origin state(MI) as a prop -- state agnostic searches will be very tricky
export default function MapBox({ lonx, latx, npsData }) {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(lonx);
    const [lat, setLat] = useState(latx);
    const [zoom, setZoom] = useState(5);

    useEffect(() => {
        if (map.current || !npsData.data) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [lng, lat],
            zoom: zoom
        });

        async function populateMap() {
            npsData.data.map((feature) => {
                const popup = new mapboxgl.Popup({ offset: 15 })
                    .setHTML(`<p><b>${feature.fullName}</b></p>
                            <p>${feature.addresses[0].city} ${feature.addresses[0].line1} ${feature.addresses[0].postalCode}</p>`);

                return new mapboxgl.Marker()
                    .setLngLat({ lng: feature.longitude, lat: feature.latitude })
                    .setPopup(popup)
                    .addTo(map.current);
            });
        }
        populateMap()
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className='mapcontainer' />
        </div>
    );
}
