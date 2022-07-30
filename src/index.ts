/// <reference types="@types/google.maps" />
// import {User} from './User'
// import {Company} from './Company'

// const user = new User()

// console.log(user)

// const company = new Company()

// console.log(company)

new google.maps.Map(document.getElementById('map')!, {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});