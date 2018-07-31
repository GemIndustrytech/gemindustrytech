import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import styles from "./navigation.scss";
class Navigation extends Component {
    
    render(){
      console.log("styles",styles)
        return(
          <div className="nuclei-navbar  navbar-wrapper ">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/" >Gem Industry</Link>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to="/" className="gem-tech-nav" onClick={this.classNameChange}>Home</Link></li>
                <li><Link to="/images">Images</Link></li>
                <li><Link to="/videos" >Videos</Link></li>
                <li><Link to="/" >Page 3</Link></li>
              </ul>
            </div>
          </nav>
          <div>{this.props.children}</div>
          </div>
        )
    }
}

export default Navigation;