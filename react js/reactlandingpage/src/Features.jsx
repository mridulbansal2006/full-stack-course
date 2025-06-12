import './features.css'
function Features({ icon, heading, para }) {
    return (
        <>
            <div className="features-box">
                    <button className="featuresicon">{icon}</button>
                    <h2 className="featuresheading">{heading}</h2>
                    <p className="featurespara">{para}</p>
            </div>
        </>
    )
}
export default Features



