# Users API — Register Endpoint

Endpoint: `POST /users/register`

Description
- Creates a new user account and returns a JSON Web Token plus the created user object.

Request
- Content-Type: `application/json`
- Body JSON shape:

```
{
  "fullname": {
    "firstname": "string (required, min 3)",
    "lastname": "string (optional)"
  },
  "email": "string (required, valid email)",
  "password": "string (required, min 6)"
}
```

Validation rules implemented in the route
- `email` must be a valid email address
- `fullname.firstname` must be at least 3 characters long
- `password` must be at least 6 characters long

Responses
- `201 Created` — registration successful

Example success response:

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "token": "<jwt-token>",
  "user": {
    "_id": "<user id>",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com"
  }
}
```

- `400 Bad Request` — validation failed or missing required fields

Example validation error response:

```
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    { "msg": "First name must be at least 3 characters long", "param": "fullname.firstname", "location": "body" }
  ]
}
```

- `500 Internal Server Error` — unexpected server error

Notes
- The route is defined in `routes/user.routes.js` as `router.post('/register', ...)` and is typically mounted under `/users` (so full path is `/users/register`).
- The response omits the password field (password is stored hashed).

Example curl

```
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "strongpassword"
  }'
```
