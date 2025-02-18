import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

const SignUp = () => {
    return (
        <>
            <section class="section signInPage signUpPage">
                <div class="shape-bottom">
                    <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8">
                        <path class="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path>
                    </svg>
                </div>
                <div class="container">
                    <div class="box card p-3 shadow border-0">
                        <div class="text-center">
                            <img src="data:image/jpeg;base64,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"/>
                        </div>
                        <form class="mt-2">
                            <h2 class="mb-3">Sign Up</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <TextField
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="Name"
                                        type="email"
                                        required
                                        variant="standard"
                                    />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <TextField
                                        fullWidth
                                        id="phone"
                                        name="phone"
                                        label="Phone No."
                                        type="number"
                                        required
                                        variant="standard"
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group position-relative">
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    required
                                    variant="standard"
                                />
                            </div>

                            <div className="form-group">
                                <TextField
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    required
                                    variant="standard"
                                />
                            </div>
                            <a href='#' class="border-effect cursor txt">Forgot Password?</a>
                            <div class="d-flex align-items-center mt-3 mb-3">
                                <Button type="submit" className="btn-blue w-100 btn-lg btn-big">Sign Up </Button>
                                <a href="/" className='d-block w-100'>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        type="button"
                                        className="btn-lg btn-big col ml-2"
                                    >
                                        Cancel
                                    </Button>
                                </a>
                            </div>
                            <p class="txt">Not Registered? <a class="border-effect" href="/signUp">Sign In</a></p>
                            <h6 class="mt-4 text-center font-weight-bold">Or continue with social account</h6>
                            <Button
                                variant="outlined"
                                color="primary"
                                fullWidth
                                className="loginWithGoogle mt-2"
                            >
                                <img src="data:image/png;base64,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" />
                                Sign In with Google<span class="MuiTouchRipple-root css-w0pj6f"></span>
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;