export interface Marker {
    location: {
        lat: number,
        lng: number
    }

    markerContent(): string;
    color: string
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(marker : Marker): void {
        const assignedMarker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            }
        })

        assignedMarker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: marker.markerContent()
            })
            infoWindow.open(this.googleMap, assignedMarker)
        })
    }


// The bad approach is to have to functions for each company,user...
    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}