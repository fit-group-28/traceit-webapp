import Map, { Marker } from "react-map-gl"
import { useState, useEffect } from "react"
import 'mapbox-gl/dist/mapbox-gl.css';
import Navbar from "../components/NavBar";
import DashboardService from "../services/dashboardService";

const MAPBOX_TOKEN = "pk.eyJ1IjoiZWxsZW54aWFvIiwiYSI6ImNsOHUyc2c3NDA3aGczbm83b25mdXE5aXUifQ.HnZaG4PBlvwZt1HUA90eyw"

export default function Supplier() {
    const viewport = {
        latitude: -37.900545,
        longitude: 145.087528,
        zoom: 12
    };
    const [suppliers, setSuppliers] = useState([])
    const [selectedSupplier, setSelectedSupplier] = useState(null)
    const [isInfoDisplay, setIsInfoDisplay] = useState(false)


    useEffect(() => {
        DashboardService.getSuppliers().then(
            (response) => {
                console.log(response)
                setSuppliers(response.suppliers)
            }
        ).catch(err => console.log(err))
    }, [])


    return (
        <>
            <Navbar />
            <section className="hero is-hero-bar">
                <div className="hero-body">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item"><h1 className="title">
                                Suppliers
                            </h1></div>
                        </div>
                    </div>
                </div>
            </section>

            {isInfoDisplay &&
                <div className="notification is-info"
                    style={{ width: 300, position: "absolute", left: "5%", top: "50%" }}>
                    <p>Supplier Name: <span className="has-text-weight-bold">{selectedSupplier.name}</span></p>
                    <p>Contact Number: <span className="has-text-weight-bold">{selectedSupplier.phone_number}</span></p>
                    <p>Address: <span className="has-text-weight-bold">{selectedSupplier.address}</span></p>
                </div>}

            <Map
                initialViewState={viewport}
                style={{ margin: "auto", width: "800px", height: "600px" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
            >

                {suppliers.map((supplier) => (
                    < Marker
                        key={supplier.supplier_id}
                        latitude={supplier.longitude}
                        longitude={supplier.latitude}
                    >
                        <button
                            className={`button ${selectedSupplier && selectedSupplier.supplier_id === supplier.supplier_id ? "is-danger" : "is-primary"}`}
                            onClick={() => {
                                setSelectedSupplier(supplier)
                                setIsInfoDisplay(true)
                            }}>
                            <span className="icon">
                                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                            </span>
                        </button>
                    </Marker>
                ))}


                {/* {selectedSupplier && (
                    <>
                        <Popup
                            latitude={selectedSupplier.latitude}
                            longitude={selectedSupplier.longitude}
                            // onOpen={() => { alert(1) }}
                            anchor="bottom"
                        >
                            <div>
                                HELLO
                            </div>
                        </Popup>
                    </>
                )} */}

            </Map>
        </>
    );
}