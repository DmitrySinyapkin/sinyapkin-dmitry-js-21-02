import React from "react";
import './ComponentWithHelper.css';

export default class ComponentWithHelper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false };
        this.mouseOut = this.mouseOut.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
      }
    
      mouseOver(event) {
        this.setState({ hovered: true });
        event.stopPropagation();
      }
    
      mouseOut(event) {
        this.setState({ hovered: false });
        event.stopPropagation();
      }
    
      render() {
        return (
          <div
            className="component-with-helper"
            onMouseOut={this.mouseOut}
            onMouseOver={this.mouseOver}
          >
            {this.state.hovered && <div className="component-with-helper__helper">{this.props.text}</div>}
            {this.props.children}
          </div>
        );
      }
}
