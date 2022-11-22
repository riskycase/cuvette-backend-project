# Cuvette Backend Project Submission

## What is this?

A project which was made as a requirement for Cuvette's take home assignment

## How to use

- Clone the repository
- Run `npm install` to install the dependencies
- Set the environment variables in a `.env` file as defined in the `.env.example` file
- Run the application with `npm start`
- If a variable for `PORT` is not set, the application by default listens on port 3000

## APIs

#### POST /login

##### Request body

```json
{
  "username": "riskycase",
  "password": "password"
}
```

##### Request headers

None

##### Response body

```json
{
  "response": "ok",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpc2t5Y2FzZSIsImlhdCI6MTY2OTExNTI1OH0.HXAZ7LobUugu0y8IJoS4pNG3slxAaA9JQyYE_aFXkKs"
}
```

#### POST /patch

##### Request body

```json
{
  "json": {
    "baz": "qux",
    "foo": "bar"
  },
  "patch": [
    {
      "op": "replace",
      "path": "/baz",
      "value": "boo"
    },
    {
      "op": "add",
      "path": "/hello",
      "value": ["world"]
    },
    {
      "op": "remove",
      "path": "/foo"
    }
  ]
}
```

##### Request headers

Include jwt returned from `/login` as value for `Bearer` header

```json
{
  "bearer": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpc2t5Y2FzZSIsImlhdCI6MTY2OTA1NTkwMX0.c5CWOtpZDWpWj2IvgzfI0Rh0Nt106BVjqImVw1jM5Z8"
}
```

##### Response body

```json
{
  "response": "ok",
  "newJson": {
    "baz": "boo",
    "hello": ["world"]
  }
}
```

#### POST /resize

##### Request body

`path` contains the public URL of the image

```json
{
  "path": "https://images.unsplash.com/photo-1664386047697-b0403876d3c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}
```

##### Request headers

Include jwt returned from `/login` as value for `Bearer` header

```json
{
  "bearer": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpc2t5Y2FzZSIsImlhdCI6MTY2OTA1NTkwMX0.c5CWOtpZDWpWj2IvgzfI0Rh0Nt106BVjqImVw1jM5Z8"
}
```

##### Response body

Resized image is generated as a download

#### POST /address

##### Request body

`address` contains the user address

```json
{
  "address": "127.0.0.1"
}
```

##### Request headers

Include jwt returned from `/login` as value for `Bearer` header

```json
{
  "bearer": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpc2t5Y2FzZSIsImlhdCI6MTY2OTA1NTkwMX0.c5CWOtpZDWpWj2IvgzfI0Rh0Nt106BVjqImVw1jM5Z8"
}
```

##### Response body

Address and username are also added as an entry to the connected database instance

```json
{
  "response": "ok"
}
```
