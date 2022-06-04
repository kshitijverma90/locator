import React from "react";
import { useGeolocated } from "react-geolocated";
import './Geolocator.css'
const Geolocator = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <h2>YOUR LOCATION</h2>
            <tbody>
                <tr>
                    <td>Latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>Longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Geolocator;