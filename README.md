![image](https://github.com/emirhanyagci/astopia-test-case/assets/66957950/2b77ec38-c2cc-4053-a688-07fc20325149)
![image](https://github.com/emirhanyagci/astopia-test-case/assets/66957950/12901019-eeff-4942-bd90-cedc647bc260)

## Start 
Installing packages
```bash
    # with npm
    $ npm install
    $ cd backend
    $ npm install

    # or with yarn
    $ yarn
    $ cd backend
    $ yarn

```
Create `.env.local` for root and create `.env` for /backend then fill by reference from example files
```env
 //.env
ENV=development
PORT=3000
MONGO_URI=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
```
For secret keys run that for twice
```bash
  $ node
  $ require('crypto').randomBytes(64).toString('hex')
```
Don't forget if you gonna change this `VITE_BASE_URL` firstly change the `PORT` variable from `.env`
```env
 //.env.local
VITE_BASE_URL=http://localhost:3000
```
## Config
If your frontend don't run automatically at this port `http://localhost:5173/` 
go `/backend/src/config/allowedOrigins.js` and add yours
```javascript
const allowedOrigins = [
  "http://localhost:5173",
  "https://astopia-test-case-frontend.vercel.app",
];
```
## Technologies Used
- Vue3 
- Tailwindcss
- Axios
- [VeeValidate + Yup: For client side validation]([https://express-validator.github.io/docs](https://vee-validate.logaretm.com/v4/))
- Nodejs + Express + Jwt: For authentication
- Mongoose
- [Express Validator : For server side validation](https://express-validator.github.io/docs)
