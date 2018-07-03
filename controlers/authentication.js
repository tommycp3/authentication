exports.signup = function(req, res, next) {
    res.send({ success: 'true-that-nigger' });
    console.log("cool");
    console.log(req.body);

    const email = req.body.email;
    const password = req.body.password;
    console.log(email);

  
    

   // see if a user with a given email exists.
   

   // If a user with email does exist, return an error.


   // If a user with email does NOT exist, create an save user record.

   // Respond to request indicating the user was created.



}