import './Meettheteam.css'

export const Meettheteam = () => {
  return (
    <>
    <div>
        <h1>MEET THE TEAM</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        
        <div className="team-container">
          <div className="team-member">
            <img src="./first.jpg" alt="John Doe" className="team-photo" />
            <h3>John Doe</h3>
            <p>Director</p>
          </div>
          
          <div className="team-member">
            <img src="./second.jpg" alt="Mike Doe" className="team-photo" />
            <h3>Mike Doe</h3>
            <p>Senior Designer</p>
          </div>
          
          <div className="team-member">
            <img src="./third.jpg" alt="Jane Doe" className="team-photo" />
            <h3>Jane Doe</h3>
            <p>Senior Designer</p>
          </div>
          
          <div className="team-member">
            <img src="./fourth.jpg" alt="Karen Doe" className="team-photo" />
            <h3>Karen Doe</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    

    </>
  )
}
