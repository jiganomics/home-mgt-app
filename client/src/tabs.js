import React, { Component } from 'react';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: 'Tabs',
      propTypes: {
    	    selected: React.PropTypes.number,
    	    children: React.PropTypes.oneOfType([
    	      React.PropTypes.array,
    	      React.PropTypes.element
    	    ]).isRequired
    	  }
    };
  }

  handleClick(index, event) {
    event.preventDefault();
    this.props.onSelect(index);
  }

  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.props.selected === index ? 'active' : '');
      return (
        <li key={index}>
          <a href="#" 
            className={activeClass}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.props.selected]}
      </div>
    );
  }

  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }
}

export default Tabs;
