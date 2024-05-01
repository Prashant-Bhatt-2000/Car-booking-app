# Backend API Endpoints

## User Authentication Endpoints

- `/api/auth/signup` (POST): User signup with JWT authentication.
- `/api/auth/login` (POST): User login with JWT authentication.
- `/api/auth/logout` (POST): Invalidates JWT to facilitate logout.
- `/api/auth/change-password` (POST): Allows users to change their password.

## Dealer Authentication Endpoints

- `/api/auth/dealer/signup` (POST): Dealer signup with JWT authentication.
- `/api/auth/dealer/login` (POST): Dealer login with JWT authentication.
- `/api/auth/dealer/logout` (POST): Invalidates JWT for dealers to facilitate logout.
- `/api/auth/dealer/change-password` (POST): Allows dealers to change their password.

## Admin Authentication Endpoints

- `/api/auth/admin/signup` (POST): Admin signup with JWT authentication.
- `/api/auth/admin/login` (POST): Admin login with JWT authentication.
- `/api/auth/admin/logout` (POST): Invalidates JWT for admins to facilitate logout.
- `/api/auth/admin/change-password` (POST): Allows admins to change their password.

## Common Endpoints for User and Dealership

- `/api/cars` (GET): Get all cars.
- `/api/cars/dealership/:id` (GET): Get all cars in a certain dealership.
- `/api/cars` (POST): Add a new vehicle to the list of owned/sold vehicles.
- `/api/deals/dealership/:id` (GET): Get all deals from a certain dealership.

## User-Specific Endpoints

- `/api/user/dealerships/:carId` (GET): Get dealerships with a certain car.
- `/api/user/vehicles` (GET): Get all vehicles owned by the user along with dealer info.
- `/api/user/deals/:carId` (GET): Get all deals on a certain car.

## Dealership-Specific Endpoints

- `/api/dealership/cars` (POST): Add cars to dealership.
- `/api/dealership/deals` (POST): Add deals to dealership.
- `/api/dealership/sold-vehicles` (GET): Get all vehicles the dealership has sold along with owner info.

## Admin Endpoints

- `/api/admin/users` (GET): Get all users (admin privilege required).
- `/api/admin/dealerships` (GET): Get all dealerships (admin privilege required).
- `/api/admin/cars` (GET): Get all cars (admin privilege required).
- `/api/admin/deals` (GET): Get all deals (admin privilege required).
- `/api/admin/delete-user/:userId` (DELETE): Delete a user (admin privilege required).
- `/api/admin/delete-dealership/:dealerId` (DELETE): Delete a dealership (admin privilege required).
- `/api/admin/delete-car/:carId` (DELETE): Delete a car (admin privilege required).
- `/api/admin/delete-deal/:dealId` (DELETE): Delete a deal (admin privilege required).
- `/api/admin/create-user` (POST): Create a new user (admin privilege required).
- `/api/admin/create-dealership` (POST): Create a new dealership (admin privilege required).
- `/api/admin/create-car` (POST): Create a new car (admin privilege required).
- `/api/admin/create-deal` (POST): Create a new deal (admin privilege required).
- `/api/admin/update-user/:userId` (PUT): Update user details (admin privilege required).
- `/api/admin/update-dealership/:dealerId` (PUT): Update dealership details (admin privilege required).
- `/api/admin/update-car/:carId` (PUT): Update car details (admin privilege required).
- `/api/admin/update-deal/:dealId` (PUT): Update deal details (admin privilege required).
