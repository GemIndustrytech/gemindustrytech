import React,{Component} from 'react';

class Navigation extends Component {
    
    render(){
        return(
          <div className="nuclei-navbar  navbar-wrapper ">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="/images">Images</a></li>
                <li><a href="/videos">Videos</a></li>
                <li><a href="#">Page 3</a></li>
              </ul>
            </div>
          </nav>
          <div>{this.props.children}</div>
          </div>
        )
    }
}

export default Navigation;