import React from 'react';
import Sliders from './Sliders';
import './App.css';

class Drum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: null,
            isPowerOn: false,
            volume: 1.0,  
        };
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
        window.addEventListener('keyup', this.handleKeyUp); 
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress);
        window.removeEventListener('keyup', this.handleKeyUp); 
    }

    playSound(buttonId) {
        if (this.state.isPowerOn) {
            const audio = new Audio(`/sounds/${buttonId}.mp3`);
            audio.volume = this.state.volume;  
            audio.play();
        }
    }

    handleKeyPress(event) {
        if (this.state.isPowerOn) {
            const keyMap = {
                'Q': 'Q',
                'W': 'W',
                'E': 'E',
                'A': 'A',
                'S': 'S',
                'D': 'D',
                'Z': 'Z',
                'X': 'X',
                'C': 'C'
            };

            const buttonId = keyMap[event.key.toUpperCase()];
            if (buttonId) {
                this.playSound(buttonId);
                this.setState({ activeButton: buttonId }); 
            }
        }
    }

    handleKeyUp(event) {
        const keyMap = {
            'Q': 'Q',
            'W': 'W',
            'E': 'E',
            'A': 'A',
            'S': 'S',
            'D': 'D',
            'Z': 'Z',
            'X': 'X',
            'C': 'C'
        };

        const buttonId = keyMap[event.key.toUpperCase()];
        if (buttonId) {
            this.setState({ activeButton: null }); 
        }
    }

    handleCheckboxChange(isPowerOn) {
        this.setState({ isPowerOn });
    }

    handleVolumeChange(volume) {
        this.setState({ volume });  // Update volume
    }

    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <div className="btn-container">
                        {['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].map(key => (
                            <button
                                key={key}
                                className={`btn ${this.state.activeButton === key ? 'active' : ''}`}
                                id={key}
                                onClick={() => this.playSound(key)}
                                disabled={!this.state.isPowerOn}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                    <div className="input-container">
                        <Sliders 
                            onCheckboxChange={this.handleCheckboxChange}
                            onVolumeChange={this.handleVolumeChange}
                            volume={this.state.volume} 
                            isPowerOn={this.state.isPowerOn}  
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Drum;
