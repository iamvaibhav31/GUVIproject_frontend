const Validate = (values) => {
     const error = {}
     const emailRegex = new RegExp(" /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.")
     const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")

     if (!values.name) {
          error.name = "Full name is required"
     }

     if (!values.email) {
          error.email = "Email address is required"
     } else if (!emailRegex.test(values.email)) {
          error.email = "Given Emailid is not valid"
     }

     if (!values.password) {
          error.password = "Pleace the Enter the password"
     } else if (!passwordRegex.test(values.password)) {
          error.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
     }

     if (!values.comfirm_password) {
          error.comfirm_password = "Comfirm password is required"
     } else if (values.password !== values.comfirm_password) {
          error.comfirm_password = "Comfirm password should match to the password"
     }

     return error
}

export default Validate