function Footer() {
    return (
            <footer style={{ borderTop: "2px solid #dee2e6", marginTop: "3rem" }} className="bg-dark text-light py-5">
                <div className="container">
                    <p className="float-end mb-1">
                        <button className="btn btn-outline-primary btn-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <i className="bi bi-arrow-up-square"></i>
                        </button>
                    </p>
                    <p className="mb-1">DeepFake Detection Software © 2025. All rights reserved.</p>
                    <p className="mb-0">New to DeepFake Detection Software? <a href="/">Visit the homepage</a> or read our <a href="/docs/getting-started">getting started guide</a>.</p>
                </div>
            </footer>
    );
}

export default Footer;
