import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
 
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
 
  scrollToTop() {
    scroll.scrollToTop();
  }
 
  render() {
    return (
      <nav>
        <ul>
          <li><Link activeClass="active" to="section1" spy={true} smooth={true} duration={500} onClick={this.scrollToTop}>Section 1</Link></li>
          <li><Link activeClass="active" to="section2" spy={true} smooth={true} duration={500} offset={50}>Section 2</Link></li>
          <li><Link activeClass="active" to="section3" spy={true} smooth={true} duration={500} offset={50}>Section 3</Link></li>
          <li><Link activeClass="active" to="section4" spy={true} smooth={true} duration={500} offset={50}>Section 4</Link></li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;