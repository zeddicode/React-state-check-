
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'King Drey',
        bio: 'A passionate photographer with a love for travels and capturing.',
        imgSrc: 'https://images.pexels.com/photos/19920928/pexels-photo-19920928/free-photo-of-view-of-a-palm-trees.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        profession: 'Photographer',
      },
      shows: false,
      mountedTime: 0,
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
      mountedTime: 0,
    }));
  };

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow} className='button' >
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={Person.imgSrc} alt={Person.fullName} />
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <h3>{Person.profession}</h3>
          </div>
        )}

        <div className="time-interval">
          {shows && <p>Time since mounted: {mountedTime} seconds</p>}
        </div>
      </div>
    );
  }
}

export default App;
