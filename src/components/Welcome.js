//the welcome text and choice of what to start with
function Welcome() {
    return (
        <div className='welcomeContainer'>
            <div className='welcome'>
                <h1 className='welcomeText'>Hello there,<br/>What would you like to explore first?</h1>
                <div className='links'>
                    <p className='link' id='galleryLink'>My Virtual Art Gallery</p>
                    <p className='link' id='resumeLink'>My Software Journey</p>
                    <p className='link' id='funfactsLink'>Fun Facts About Me</p>
                </div>
            </div>
        </div>
    );
}

export default Welcome;