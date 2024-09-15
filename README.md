## ReqRes API Endpoints Testing using Cypress

In this we are testing various API endpoints provided by ReqRes to validate responses, handle errors, and ensure edge cases are covered.

### Endpoints and Test Cases:

1. **List of Users**
   - `GET /api/users/2`
   - Validates successful response (200 OK).

2. **Single User**
   - `GET /api/users/2`
   - Verifies user retrieval (200 OK).

3. **Single User Not Found**
   - `GET /api/users/29`
   - Checks non-existent user (404 Not Found).

4. **List of Resources**
   - `GET /api/unknown`
   - Fetches available resources (200 OK).

5. **Single Resource**
   - `GET /api/unknown/2`
   - Confirms single resource retrieval (200 OK).

6. **Create User**
   - `POST /api/users`
   - Tests user creation (201 Created).

7. **Update User**
   - `PUT /api/users/2`
   - Validates user update (200 OK).

8. **Partial Update User**
   - `PATCH /api/users/2`
   - Checks partial update (200 OK).

9. **Delete User**
   - `DELETE /api/users/2`
   - Tests user deletion (204 No Content).

10. **Register - Successful**
    - `POST /api/register`
    - Validates successful registration (200 OK).

11. **Register - Unsuccessful**
    - `POST /api/register`
    - Verifies registration failure (400 Bad Request).

12. **Login - Successful**
    - `POST /api/login`
    - Confirms successful login (200 OK).

13. **Login - Unsuccessful**
    - `POST /api/login`
    - Tests login failure (400 Bad Request).

14. **Delayed Response**
    - `GET /api/users?delay=3`
    - Verifies response delay handling.

### Tools:
- Cypress for end-to-end API testing.

### How to run:
1. Clone the repository.
2. Install Cypress: `npm install cypress`.
3. Run the tests: `npx cypress open`.

