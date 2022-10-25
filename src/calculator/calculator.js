import react from 'react';


export default function Calculator (startCoordLat, startCoordLng, endCoordLat, endCoordLng) {
    let lon1 = startCoordLng
    let lat1 = startCoordLat
    let lon2 = endCoordLng
    let lat2 = endCoordLat

    console.log(startCoordLng)

    let res = 0;

    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;

    let a = Math.pow(Math.sin(dlat / 2), 2)
    + Math.cos(lat1) * Math.cos(lat2)
    * Math.pow(Math.sin(dlon / 2),2);
  
    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles use 6371
    let r = 3956;

    // calculate the result
    console.log(c*r)
    res = c*r;
    return(c * r);

}