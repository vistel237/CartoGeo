import React, { Component } from 'react';
import {MapContainer, GeoJSON} from "react-leaflet";
import mapData from '../data/countries.json';
import "leaflet/dist/leaflet.css";
import "./MyMap.css"


class MyMap extends Component {
    state = { color: "#ffff00" };

    color = ["green", "blue", "yellow", "orange", "grey"];

    componentDidMount() {
        console.log(mapData);
    };
    
    countryStyle = {
        fillColor: "red",
        fillOpacity: 1,
        color: "black",
        weight: 2,
    };

    printMessageToConsole =(e) => {
        console.log("clicked");
    }

    ChangeCountryColor = (e) => { 
        e.target.setStyle({
            color: "red",
            weight: 2.5,
            fillColor: this.state.color,
            fillOpacity: 1,
        });
    }

    onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        console.log(countryName);
        layer.bindPopup(countryName); //+ " population: 1000" pour oncatener les informations

        layer.options.fillOpacity = Math.random();
        // const colorIndex = Math.floor(Math.random() * this.color.length);
        // layer.options.fillColor = this.color[colorIndex];

        layer.on({
            click: this.ChangeCountryColor,
        });
    };

    colorChange = (e) => {
        this.setState({ color: e.target.value });
    }    

    render() {
        return( 
            <div>
                <MapContainer className="map" zoom={2} center={[20, 100]}>
                    <GeoJSON
                        style={this.countryStyle}
                        data={mapData.features}
                        onEachFeature={this.onEachCountry}
                    />
                </MapContainer>
                <input
                    type="color"
                    value={this.state.color}
                    onChange={this.colorChange}
                />
            </div>
        );
    }
}

export default MyMap;