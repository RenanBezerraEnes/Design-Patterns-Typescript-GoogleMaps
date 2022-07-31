import faker from 'faker'
import {Marker} from './CustomMap'

export class Company implements Marker {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    }
    color: string = 'blue'

    constructor() {
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()

        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string {
        return `<div>
                <h1>User Company Name: ${this.companyName}</h1>
                <h3>CatchPhrase: ${this.catchPhrase}</h3>
                </div>
        `
    }
}