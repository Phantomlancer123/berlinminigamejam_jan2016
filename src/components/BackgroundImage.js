import React, {Component} from 'react';

class BackgroundImage extends Component {
  static defaultProps = {
    onClick: function() {}
  }

  render() {
    var style = {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      position: 'absolute',
    };

    return <img onClick={this.props.onClick} src={this.props.src} style={style} />;
  }
}

export default BackgroundImage;
