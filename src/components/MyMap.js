import React, { Component } from 'react';
import {MapContainer, GeoJSON, TileLayer, Marker, Popup} from "react-leaflet";
import mapData from '../data/countries.json';
import "leaflet/dist/leaflet.css";
import "./MyMap.css"


class MyMap extends Component {
    state = { color: "#ffff00" };

    color = ["green", "blue", "yellow", "orange", "grey"];

    // componentDidMount() {
    //     console.log(mapData);
    // };
    
    countryStyle = {
        fillColor: "red",
        fillOpacity: 1,
        color: "black",
        weight: 2,
    };

    // printMessageToConsole =(e) => {
    //     console.log("clicked");
    // }

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
        // console.log(countryName);
        layer.bindPopup("<center><b><u>Attribut</u></b></center> <br>" + 
                        "<b>Nom:</b> " +  countryName); //+ " population: 1000" pour oncatener les informations

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
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                        <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <GeoJSON
                        style={this.countryStyle}
                        data={mapData.features}
                        onEachFeature={this.onEachCountry}
                    />
                    <input
                        type="color"
                        value={this.state.color}
                        onChange={this.colorChange}
                        className="mapcolor"
                    />
                </MapContainer>
            </div>
        );
    }
}

export default MyMap;