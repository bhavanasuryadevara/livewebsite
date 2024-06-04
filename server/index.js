const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const Signup = require('./Routes/Signup1');
const Sendverification = require('./Routes/sendVerification');
const Login = require('./Routes/Login');
const verify = require('./Routes/Verify');
const sendotp = require('./Routes/Sendotp');
const verifyotp = require('./Routes/Otpverification')
const path = require('path')

const emailotp = require('./Routes/Emailgenotp');
const emailVerification = require('./Routes/Emailverify');


app.use(express.static(path.join(__dirname, '/client/build')));

console.log('...........') 




//sign up
app.use('/Signup1', Signup);

//send email
app.use('/sendVerification', Sendverification);
//verify
app.use('/verify', verify);
//user login

app.use('/Login',Login);
// send verfication
app.use('/send-otp',sendotp);

//
app.use('/verify-otp',verifyotp);



app.use('/send-Emailverification',emailotp);
app.use('/verify-Emailotpp',emailVerification);








//app.use('/verify-emailotp',emailverifiotp);

  
  app.listen(5000, () => {console.log('Loading')
})

     
    



