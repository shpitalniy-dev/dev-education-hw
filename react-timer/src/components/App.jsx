import React, { Component } from "react";
import '../styles/App.less';

class Timer extends Component {
    constructor(props){
        super(props)
        this.startTimer = this.startTimer.bind(this);
        this.readInputValue = this.readInputValue.bind(this);
        this.setTime = this.setTime.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.state = {
            time: 0,
            inputValue: 0,
            timer: null
        }
    }

    readInputValue(value){
        if(value >= 0  && value <= 5999 && value % 1 == 0){
            this.setState({
                inputValue: value,
            })
        }
    }

    setTime(){
        if(this.state.timer === null){
            this.setState({
                time: this.state.inputValue,
                inputValue: 0,
            })
        }
    }

    startTimer() {
        if(this.state.timer != null){
            return;
        }
        // clearInterval(this.state.timer);
        let timer = setInterval(() => {
            let time = this.state.time - 1;
            if(time < 0){
                clearInterval(this.state.timer);
                this.setState({
                    timer: null,
                })
                return;
            }
            this.setState({
                time: time,
            })
        }, 1000)
        this.setState({
            timer: timer,
        })
    }

    stopTimer(){
        clearInterval(this.state.timer);
        this.setState({
            timer: null
        })
    }

    resetTimer(){
        clearInterval(this.state.timer);
        this.setState({
            time: 0,
            timer: null
        })
    }

    render(){
        return (
            <div className='timer-body'>
                <div className="timer-body__up-settings up-settings">
                    <div className="up-settings__input">
                        <Input callback = {this.readInputValue}/>
                    </div>
                    <div className="up-settings__button">
                        <Button callback = {this.setTime} text="SET"/>
                    </div>
                </div>
                <div className="timer-body__timer">
                    <TimerDisplay time = {this.state.time}/>
                </div>
                <div className="timer-body__down-settings down-settings">
                    <div className="down-settings__button">
                        <Button callback = {this.startTimer} text="START"/>
                    </div>
                    <div className="down-settings__button">
                        <Button callback = {this.stopTimer} text="STOP"/>
                    </div>
                    <div className="down-settings__button">
                        <Button callback = {this.resetTimer} text="RESET"/>
                    </div>
                </div>
            </div>
        )
    }
}

class Button extends Component{
    // handleStartTimer(){
    //     return this.props.callback();
    // }

    render(){
        return(
        <button onClick = {this.props.callback} className='btn-style'>{this.props.text}</button>
        )
    }
}

class Input extends Component{
    handleChange(event){
        return this.props.callback(+event.target.value);
    }

    render(){
        return(
            <input type='number' className='input-style' onBlur={this.handleChange.bind(this)}></input>
        )
    }
}

class TimerDisplay extends Component{
    render(){
        const time = +this.props.time;
        const minutes = Math.floor(time/60);
        const seconds = time % 60
        return(
            <h1>{minutes < 10 ? "0" + minutes: minutes} : {seconds < 10 ? "0" + seconds: seconds}</h1>
        )
    }
}

export default Timer;