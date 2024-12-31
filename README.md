# Serverless API

This project contains a serverless API with two GET routes.

## Routes

### GET /

This route returns a welcome message.

### GET /sai

This route returns a custom message for the `/sai` endpoint.

## Setup

To set up and deploy this serverless API, follow these steps:

1. Install the Serverless Framework:
  ```bash
  npm install -g serverless
  ```

2. Deploy the service:
  ```bash
  serverless deploy
  ```

3. After deployment, you will get the endpoints for the routes.

## Usage

You can test the routes using any HTTP client like curl or Postman.

### Example

```bash
curl [https://hdkijor7r3.execute-api.us-east-1.amazonaws.com/]
curl [https://hdkijor7r3.execute-api.us-east-1.amazonaws.com/sai]
```

Replace `(https://hdkijor7r3.execute-api.us-east-1.amazonaws.com/)` with the actual endpoint provided after deployment.

## License

This project is licensed under the MIT License.