import Button from '@mui/material/Button';

const Newsletter = () => {
    return (
        <>
            <section class="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="text-white mb-1">$20 discount for your first order</p>
                            <h3 class="text-white">Join our newsletter and get...</h3>
                            <p class="text-light">
                                Join our email subscription now to get updates on<br />
                                promotions and coupons.
                            </p>
                            <form class="mt-4">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="416" height="320" x="48" y="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="40" ry="40"></rect>
                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160 144 112 144-112"></path>
                                </svg>
                                <input type="text" placeholder="Your Email Address" />
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div class="col-md-6"><img src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Newsletter;