# Full Stack Developer Internship Project

## Backend

### Database Schema

Database Schema: [Link](https://dbdiagram.io/d/64a1c7e102bd1c4a5e5fc28c)

### Requirements

1. Implement admin, user, and dealership authentication using JWT (Json Web Token).
2. Implement JWT invalidation for logout and password change.
3. Create common REST endpoints:
   - View all cars
   - View all cars in a certain dealership
   - Add a new vehicle to the list of owned/sold vehicles
   - View all deals from a certain dealership
4. Create REST endpoints for user:
   - View dealerships with a certain car
   - View all vehicles owned by the user with dealer info
   - View all deals on a certain car
5. Create REST endpoints for dealership:
   - Add cars to the dealership
   - Add deals to the dealership
   - View all vehicles sold by the dealership with owner info
6. Handle multipart/form-data in POST requests
7. Implement asynchronous error handling using promises for all API endpoints
8. Use ES6 compatible code with ES modules and promises
9. Provide basic API documentation
10. Use Faker.js to create dummy data
11. Do not use Mongoose
12. Host the database

## Frontend

### Requirements

1. Secure authentication using JWT
2. Role-Based Access:
   - Users are redirected based on their role (dealer or client)
   - Clear options for selecting dealer or client login
3. User Features:
   - Centralized Vehicle Display
   - Dealership Discovery
   - Personalized Vehicle Showcase
   - Streamlined Purchase Process
4. Dealership Features:
   - Comprehensive Inventory Overview
   - Seamless Inventory Management

### Reference Links

- Node.js Guide: [Link](https://nodejs.org/en/docs/guides/getting-started-guide)
- Express.js Starter: [Link](http://expressjs.com/en/starter/hello-world.html)
- MongoDB Node Driver Docs: [Link](https://www.mongodb.com/docs/drivers/node/current/)
- Svelte Docs: [Link](https://svelte.dev/)
- SvelteKit Docs: [Link](https://kit.svelte.dev/)
- Tailwind CSS Docs: [Link](https://tailwindcss.com/docs/guides/sveltekit)
- MDN Web Docs: [Link](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

---

**Note:** This project is an evaluation for the Full Stack Developer Internship. Your willingness and ability to learn are key factors in the assessment process.
