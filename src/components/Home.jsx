import collegeImg from "../assets/cas.jpg";
import "./home.css";
function Home() {
    return(
        <div className="hero" id="home">
            <h1>Welcome to CAS Malampuzha</h1>
            <p>Discover a world of knowledge and opportunities at CAS Malampuzha. Join us to embark on a journey of learning and growth.</p>
            <img src={collegeImg} alt="CAS Malampuzha" />

            <a href="#courses">
                <button>Explore Courses</button>
            </a>
        </div>
    )
}
    export default Home;