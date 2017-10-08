import React from 'react';

const Pane = React.createClass({
  displayName: 'Pane',
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default Pane;
