export function AboutUs() {
    return (
        <div className='section'>
            <div className='child w30'>
              <div className='black-header'>Welcome</div>
              <div className='logo-container'>
                <img className='logo1' src="images/mighty-guys-logo.png" alt=""/>
              </div>
            </div>
            <div className='child w70'>
              <div className='black-header'>Our goals</div>
              <div>
                Mighty Guys is a group of students at FPT University with the same goal:
                To help others achieve their best state of health.
                This food store is a part of the project. After the process of fundraising,
                100% profit will be invested in "The Green Journey", another project of us to help protect the environment.
                We commit the quality and quantity of our product. The food is healthy and professionally preserved and processed.
                The price is reasonable and affordable to students
              </div>
              <a href="https://www.facebook.com/profile.php?id=100086517291623" className="btn btn-outline-warning">Follow Us</a>
            </div>
          </div>
    )
}