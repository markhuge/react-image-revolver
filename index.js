var React   = require('react/addons'),
    Cycle   = require('cycle-array'),
    cycle   = new Cycle(),
    img     = React.DOM.img;

module.exports = React.createClass({
  
  getInitialState: function () { return { activeImage: '' }; },
  
  getDefaultProps: function () {
    return { interval: 1000 }
  },
  
  componentDidMount: function () {
    this.swapImage();
    setInterval(this.swapImage, this.props.interval);
  },
  
  render: function () {
    return img({ src: this.state.activeImage });
  },
  
  swapImage: function () {
    var url = cycle(this.props.images)
    this.setState({ activeImage: url});
  }

});
