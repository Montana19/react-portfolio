import "./App.css";

import switchTheme from "./img/darkmode.png";
import switchTheme2x from "./img/darkmode2x.png";
import avatar from "./img/Avatar.png";
import avatar2x from "./img/Avatar2x.png";

const SwitchTheme = () => (
  <img src={switchTheme} srcSet={`${switchTheme} 1x, ${switchTheme2x} 2x`} alt="Сменить тему"/>
);

const Avatar = () => (
  <img src={avatar} srcSet={`${avatar} 1x, ${avatar2x} 2x`} alt="Аватар"/>
);


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="top_header">
            <div className="theme_switch">
                <SwitchTheme/>
            </div>
            <div className="AvatarIco">
                <Avatar/>
            </div>
            <div className="Education">
                <h3>Education</h3>
                <p>Mentors, books, the internet — self taught.</p>
            </div>
        </div>
        <div className="id_header">
            <div className="id_name">
                <h1>Carlos Montoya</h1>
                <h2>Design Director</h2>
            </div>
            <div className="id_info">
                <div className="id_contact">
                    losmontoya.com<br/>
                    los@losmontoya.com<br/>
                    435-764-0563<br/>
                    Redwood City, CA<br/>
                </div>
                <div className="id_quote">
                    <h3>"I’m a design director, software designer,
                        and a really good friend."</h3>
                </div>
            </div>
        </div>
        <div className="main">
            <nav className="nav_portfolio">
                <p className="nav_title">Projects</p>
                <p>Twenty</p>
                <p>Mappen</p>
                <p>Atlassian</p>
                <p>Sideline</p>
                <p>Textfree</p>
            </nav>
            <div className="work_list">
                <div className="work_twenty">
                    <h3><span>Design Director</span> at Twenty</h3>
                    <h4>August 2019 — Present</h4>
                    <p>I led the merger of our combined products, customer experience, systems, culture, and
                        collaborative design process in a successful merger via acquisition from Spring 2019 to Fall
                        2019.
                        <br/><br/>
                        Social media today is centered around sharing your experiences with your followers and
                        “connecting” with people via digital engagement. As a result, people are consumed by their
                        phones and using digital to replace real-life experiences. At Twenty our mission is to enable
                        and enrich experiences by bringing people together. I own, manage, and coach our teams towards
                        solutions which help bring people together by increasing moments of serendipity.
                    </p>
                </div>
                <div className="work_mappen">
                    <h3><span>Creative Director</span> at Mappen</h3>
                    <h4>August 2017 — August 2019</h4>
                    <p>I drove the introduction, influence, and scale of our internal design operations, while ensuring
                        that we matured the design capabilities of our broader product team.
                        <br/><br/>
                        At times I led from the front by designing as an IC for Mappen’s product experiences which
                        included our mobile apps, marketing, and various brand touch points. Responsible for taking
                        ideas from conception to production while continuosly improving design operations for both the
                        design, product, and engineering teams.
                    </p>
                </div>
                <div className="work_atlassian">
                    <h3><span>Sr. Designer, Marketing Design Studio</span> at Atlassian</h3>
                    <h4>April 2015 — August 2017</h4>
                    <p>I partnered creatively and strategically with key stakeholders to bring the Atlassian vision to
                        life in bold, unexpected ways.
                        <br/><br/>
                        I worked with copywriters, data scientists, content and email marketers, brand designers,
                        developers, PR, community managers, product and program managers to drive our internal design
                        operations in building a design-led culture so that we could have an expansive decision making
                        framework when designing our various product marketing web experiences at scale.
                        <br/><br/>
                        I led the creation of our internal web design system.
                    </p>
                </div>
                <div className="work_pinger">
                    <h3><span>UI / UX Product Designer</span> at Pinger</h3>
                    <h4>January 2013 — March 2015</h4>
                    <p>I led the full product design life cycle for our mobile user experiences, interface designs,
                        animation designs, visual designs, interactive prototypes, typography, and screen layouts for
                        iOS, Android, Windows Phone, desktop, web and other interactive media.
                        <br/><br/>
                        Notable apps I led the design for include — Pinger, TextFree, Pop Messenger, Sideline, GIF Chat,
                        and JukeVox.
                    </p>
                </div>
                <div className="work_another">
                    <p>Additional history available upon request</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
