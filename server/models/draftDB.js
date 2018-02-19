const db = {
  Listing: {
    Rooms: {
      name: String,
      alias: String,
      setup: {
        isAWholeApartment: Boolean,
        guests: Number,
        beds: Number,
        bathrooms: Number
      },
      common_data: {
        location: {
          address: {
            regular: String,
            airbnb: String,
            alias: String,
          },
          city: String, // Question here!!
          houseNumber: Number,
          zipCode: Number,
        },
        rules: {
          checkin: {
            start: new Date, // Hour
            end: new Date,
          },
          checkout: {
            end: new Date,
          },
        }
      },
    },
    Inventory: {
      basics: {
        // Like toilet paper, towels, soap and so on...
      },
      kitchen: {

      },
      devices: [], // Like 'TV', 'Phone', 'Microwave', etc.
      services: {
        internet:{
          wifi_speed: String,
        },
        laundry: {

        }
      },
    },
    Hosts: {

    },
    Guests: {

    },
  },
  Users: {
    name: String,
    email: String,
    phone: Number // And so on---
  }
}
