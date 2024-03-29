import "./App.css";

import switchTheme from "./img/darkmode.png";
import switchTheme2x from "./img/darkmode2x.png";
import avatar from "./img/Avatar.png";
import avatar2x from "./img/Avatar2x.png";
import Slogan from "./components/Slogan/Slogan";
import Name from "./components/Name/Name";
import Contacts from "./components/Contacts/Contacts";
import Quote from "./components/Qoute/Quote";
import Nav from "./components/Nav/Nav";
import Article from "./components/Article/Article";
import Emptybox from "./components/Emptybox/Emptybox";

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
            <div className="theme_switch">
                <SwitchTheme/>
            </div>
            <div className="AvatarIco">
                <Avatar/>
            </div>
            <Emptybox/>
            <Slogan/>
            <Name/>
            <Emptybox/>
            <div className="id_info">
                <Contacts/>
                <Quote/>
            </div>
            <Emptybox/>
            <div className="spacer">
            &nbsp;475487645
            </div>
            <Nav/>
            <Emptybox/>
            <div className="work_list">
                <Article/>
                <div className="work_another">
                    <p>Additional history available upon request</p>
                </div>
            </div>
    </div>
    </div>
  );
}

export default App;
