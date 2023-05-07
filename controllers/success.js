exports.getSuccessPage = (req, res, next) => {
    console.log("User Details: \n name", req.body.name, "\n Email Id:", req.body.email);
    res.send("<h1>Form Sucessfully filled</h1>");
};