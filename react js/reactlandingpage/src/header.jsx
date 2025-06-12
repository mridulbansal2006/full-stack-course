import './header.css'
function Header() {
    return (
        <>
            <header className='headerbox'>
                <h1 id='headertitle'> React Landing Page</h1>
                <ul className='headerelementsresize'>
                    <a href="#features" className='navitem'>features</a>
                    <a href="#ABOUT" className='navitem'>ABOUT</a>
                    <a href="#ourservice" className='navitem'>SERVICES</a>
                    <a href="#GALLERY" className='navitem'>GALLERY</a>
                    <a href="#testimonial" className='navitem'>TESTIMONIALS</a>
                    <a href="#team" className='navitem'>TEAM</a>
                    <a href="#form" className='navitem'>CONTACT</a>
                </ul>
            </header>
        </>

    )
}
export default Header;

