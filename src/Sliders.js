import React from 'react';
import './App.css';

class Sliders extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
    }

    handleCheckboxChange(event) {
        if (event.target.id === 'check') {
            this.props.onCheckboxChange(event.target.checked); 
        }
    }

    handleVolumeChange(event) {
        const volume = event.target.value / 100;  
        this.props.onVolumeChange(volume);
    }

    render() {
        const { volume, isPowerOn } = this.props;
        const volumeDisplay = volume * 100; 
        const volumeSliderDisabled = !isPowerOn;  
        const bankCheckboxDisabled = !isPowerOn;  

        return (
            <div className="the-slider">
                <p className="input-text">Power</p>
                <input 
                    className="input-check"
                    type="checkbox"
                    id="check"
                    checked={isPowerOn}  
                    onChange={this.handleCheckboxChange}
                />
                <label htmlFor="check" className="input-check-slide"></label>
                <div className="volume-container">
                    <h1 className="volume-value">Volume: {volumeDisplay.toFixed(0)}%</h1> 
                </div>
                <input 
                    className="input-range"
                    type="range"
                    min="0"
                    max="100"
                    value={volumeDisplay}
                    onChange={this.handleVolumeChange}
                    disabled={volumeSliderDisabled} 
                />
                {/* This section allows you to switch between different sound banks. */}
                <div className="input-bank">
                    <p className="input-text">Bank</p>
                    <input 
                        className="input-bank-bank"
                        type="checkbox"
                        id="bank"
                        disabled={bankCheckboxDisabled}  
                    />
                    <label htmlFor="bank" className="input-bank-slide"></label>
                </div>
            </div>
        );
    }
}

export default Sliders;
