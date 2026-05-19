import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>Dayananda Sagar College of Engineering, Bangalore</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing Computer Science Engineering, building full stack and AI
              projects alongside academics. Actively developing skills in modern
              web technologies and machine learning.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Competitive Programming</h4>
                <h5>LeetCode · CodeChef</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Solved 250+ problems on LeetCode covering data structures,
              algorithms, and problem solving. Achieved 2-Star rating on CodeChef,
              consistently participating in coding contests.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Udemy Web Dev Bootcamp</h4>
                <h5>Web Development</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a comprehensive Web Development Bootcamp on Udemy, gaining
              hands-on experience across the full stack — from building responsive
              frontends to designing backends, working with databases, and deploying
              production-ready web applications.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GigaSkill ML with Python</h4>
                <h5>Machine Learning · Python</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a Machine Learning course with Python covering core ML
              concepts, algorithms, and hands-on implementation using libraries.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII</h4>
                <h5>Loyola School, Jamshedpur</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed higher secondary education with Science and Mathematics,
              building a strong foundation for engineering and technology.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X</h4>
                <h5>Loyola School, Jamshedpur</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed secondary education at Loyola School, one of the
              premier institutions in Jamshedpur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
