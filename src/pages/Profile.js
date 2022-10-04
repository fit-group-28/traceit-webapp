import ProfileService from "../services/profileService";
import { useState, useEffect } from "react";
import Loading from '../components/Loading';
import Navbar from "../components/NavBar";
import "../scss/profile.scss";
import avatar from "../assets/avatar.jpg";

const Profile = () => {
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        ProfileService.getProfile().then(
            (response) => {
                setProfile(response.data)
            }
        ).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    // const data = profile ? JSON.parse(profile) : "";

    return (
        <Loading loading={loading}>
            <Navbar />
            <figure className="image is-128x128 avatar">
                <img className="is-rounded" src={avatar} alt="avatar" />
            </figure>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title">
                            Hello
                        </p>
                        <p className="subtitle">
                            {profile && profile.username}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container py-6 has-text-centered info-display field-set">
                {/* <fieldset disabled> */}
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">UID</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded">
                                <input readOnly className="input" type="text" value={profile ? profile.uid : ''} />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Username</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded">
                                <input readOnly className="input" type="text" value={profile ? profile.username : ''} />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Email</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded">
                                <input readOnly className="input" type="text" value={profile ? profile.email : ''} />
                            </p>
                        </div>
                    </div>
                </div>
                {/* </fieldset> */}
            </div>
        </Loading >
    )
}

export default Profile;