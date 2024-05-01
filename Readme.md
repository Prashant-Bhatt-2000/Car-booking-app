## Car Booking App


```bash 
Note : As suggested I havent used any mongoose for making queries.I have build all these with raw mongodb queries. For all queries I have build seperate functions for different users (admin, dealer, user) 
```

```bash 
Note : This is not complete app. I have Build Following Backend apis: 
```

### Authentication APIs + JWT Implementation

```bash
1. Admin Auth (Registeration api and Login Api + JWT implementation)

2. Dealer Auth (Registeration api and Login Api + JWT implementation)

3. User Auth (Registeration api and Login Api + JWT implementation)
```

### Auth APIS

```bash 
Admin Registeration : 
http://localhost:4000/api/admin/auth/register

data : {
  "name": "Prashant", 
  "email": "prashant52@gmail.com", 
  "password": "password"
}


Admin Login 
http://localhost:4000/api/admin/auth/login

data : {
  "email": "prashant52@gmail.com", 
  "password": "password"
}


Dealer Registeration : 

http://localhost:4000/api/dealer/auth/register

data : {
  "dealership_email": "bhatt.prashant71@gmail.com",
  "dealership_name": "Prashant Bhatt", 
  "dealership_location": "D Block, Building No.2, Office no 30, Sector21, Gurugram, Haryana",
  "dealership_info": { 
    "phone": 8368342948, 
    "deal_offered": "Rent"
  }, 
  "password": "password"
}

Dealer Login : 
http://localhost:4000/api/dealer/auth/login

{
  "dealership_email": "bhatt.prashant21@gmail.com",
  "password": "password"
}


Users Registeration : 
http://localhost:4000/api/user/auth/register

data : {
  "useremail": "prashant.bhatt50@gmail.com", 
  "phone":  "+918584328046", 
  "address": "address1, Ram Colony, Chattarpur, New Delhi", 
  "password": "password"
}

User Login: 
http://localhost:4000/api/user/auth/login

data : {
  "useremail": "prashant.bhatt50@gmail.com", 
  "password": "password"
}
```

### Middleware 

```bash
Note : I have build 3 middlewares as we have 3 types of users: 

1. Admin middleware (for only admin)
2. Dealer middleware (for only Dealer)
3. Common middleware (for every user)
```

### Dealers Operations Apis + JWT Implementation

```bash
Please add dealer token before making req from these routes

http://localhost:4000/api/dealer/{route you want}

```

### Dealers Operations Apis + JWT Implementation

#### APIS List I have build for dealer ops: 

```bash
1. addCar
2. addDeal
3. /getsoldcars/:dealerid
```

### Route for Dealers Operation
```bash
Please add common token before making req from these routes

http://localhost:4000/api/dealer/{route you want}

```

## Admin Operation Apis

```bash
Note : I was having trouble as my system was lagging too much thats why I was not able to complete the full Project.
```


### Users Operations APIs

```bash
1. /availablecars
2. /ownedcars/:buyerid
3. dealerspecificcars/:dealerId
```

### Route for Dealers Operation
```bash
Please add common token before making req from these routes

http://localhost:4000/api/dealer/{route you want}

```

## Frontend: 

```bash
Note: I have build frontend with svelte. Although I have not integrated Apis. As I have already mentioned earlier there was a shortage of timing and system issue and I have also spend time in designing the frontend. So please excuse me.
```

```bash
Although I have build the app to an extent that you can analyze my skills.

In future I can complete this project.
```

### Pages I have completed and designed 

```bash
1. Landing Page
2. User Login page and Registeration page
3. Dealer Login and Registeration Page
4. Admin Login Page
5. Admin page navbar
6. CarBooking Page
7. Dealers Inventory page with table
8. About Page
9. Dealer Add Car Popup form design
10. Dealer Popup form appear by clicking functionality.
```

### Pages Path

```bash
Home page :  http://localhost:5173/

About Page : http://localhost:5173/about

Carbookings Page: http://localhost:5173/carbookings

Dealer Login : http://localhost:5173/dealer/auth/login

Dealer Register : http://localhost:5173/dealer/auth/register

Dealer Inventory : http://localhost:5173/dealer

Admin Login : http://localhost:5173/admin/auth/login

Admin dashboard Page: http://localhost:5173/admin


```

```bash
THANK YOU FOR PROVIDING ME THIS OPPORTUNITY.

HOPE MY SKILLS ARE ELIGIBLE FOR THE ROLE. 
```

