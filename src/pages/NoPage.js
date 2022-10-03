import { Link } from 'react-router-dom';

export default function NoPage() {
    return (
        <div>
            <section className="hero is-fullheight background">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title is-size-1">
                            Page not found
                        </p>
                        <p className="subtitle">
                            We can't seem to find the page you're looking for.
                        </p>
                        <br />
                        <Link class="button is-link has-text-weight-medium" to="/">Go to Home</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
