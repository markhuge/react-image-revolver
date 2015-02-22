var React   = require('react/addons'),
    Cycle   = require('cycle-array'),
    cycle   = new Cycle(),
    div     = React.DOM.div;

module.exports = React.createClass({
  
  getInitialState: function () { return { activeImage: '' }; },  
  
  getDefaultProps: function () { 
    return { width: '100px', height: '100px', interval: 1000 }
  },
  
  componentDidMount: function () {
    this.swapImage();
    setInterval(this.swapImage, this.props.interval);
  },
  
  render: function () {
    var style = { 
      backgroundImage: 'url(' + this.state.activeImage + ')',
      backgroundRepeat: 'no-repeat',
      width: this.props.width,
      height: this.props.height
    };
    return div({ style: style }, this.state.activeImage);
  },
  
  swapImage: function () {
    var url = cycle(this.props.images)
    this.setState({ activeImage: url});
  }

});
