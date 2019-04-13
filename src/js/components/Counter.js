import React, {Component, PropTypes} from 'react';


async function getData() {
  try {
    let respone = await fetch("https://www.google.com");
    return data;
  } catch(error) {
    console.log(error);
  }
}

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  async tick() {
    let data = await getData();
    console.log(data);
    this.setState({count: this.state.count + 3});
  }
  render() {
    return (
      <div className="btn btn-default" onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };
