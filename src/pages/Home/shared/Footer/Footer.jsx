

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-indigo-900 text-neutral-content">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Curgo</a>
                    <a className="link link-hover">Logistic</a>
                    <a className="link link-hover">Storage</a>
                    <a className="link link-hover">Trucking</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;