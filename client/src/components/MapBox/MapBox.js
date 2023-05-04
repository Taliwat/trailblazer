import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './mapbox.css'

// const ROOTMAPBOXURI = 'https://api.mapbox.com/search/searchbox/v1/category/'
const ROOTNPSURI = 'https://developer.nps.gov/api/v1/parks?stateCode='
// const CATEGORY = 'outdoors'
const ACCESSTOKEN = `${process.env.REACT_APP_MAPBOX_API}`
const LOCATIONLON = -83.045753
const LOCATIONLAT = 42.331429
const STATE = 'MI'
// const MAPBOXURI = `${ROOTMAPBOXURI}${CATEGORY}?access_token=${ACCESSTOKEN}&limit=10&origin=${LOCATIONLON},${LOCATIONLAT}&proximity=${LOCATIONLON},${LOCATIONLAT}`


mapboxgl.accessToken = ACCESSTOKEN

//I think we'll eventually want to set the origin state(MI) as a prop -- state agnostic searches will be very tricky
export default function MapBox() {
    const NPSURI = `${ROOTNPSURI}${STATE}&limit=10&api_key=${process.env.REACT_APP_NPS_API}`
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(LOCATIONLON);
    const [lat, setLat] = useState(LOCATIONLAT);
    const [zoom, setZoom] = useState(5);

    async function fetchMapData() {
        // const mapData = await fetch(MAPBOXURI);
        // const data = await mapData.json();
        // Convert the features array to a GeoJSON object
        // const geojsonData = {
        //     type: 'FeatureCollection',
        //     features: data.features
        // };
        // return geojsonData

        const mapData = await fetch(NPSURI);
        const data = await mapData.json();

        return data
    }

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [lng, lat],
            zoom: zoom
        });

        async function populateMap() {
            const npsData = await fetchMapData();

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
