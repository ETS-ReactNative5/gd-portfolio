import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor() {
        super();

        this.state = {
            toggleFooter: false
        }
        this.toggleFooterFunc = this.toggleFooterFunc.bind(this);
    }
    toggleFooterFunc() {
        this.setState({
            toggleFooter: !this.state.toggleFooter
    })
}
    render() {
        return (
            <div className={this.state.toggleFooter ? 'footerHolder displayFooter' : 'footerHolder hideFooter'} >
                <div className='footerBtn' >
                    <div className='fBtnHolder' onClick={this.toggleFooterFunc}>
                        <div className={this.state.toggleFooter ? 'fBtnBar1 pointDown' : 'fBtnBar1 pointUp'}></div>
                        <div className={this.state.toggleFooter ? 'fBtnBar2 pointUp' : 'fBtnBar2 pointDown'}></div>
                    </div>
                </div>
                <div className='Footer' onClick={this.toggleFooterFunc}>
                    <h3 className='footerItem'>Developed by: Jaden Goodwin </h3>
                    <h3 className='footerItem'>Goodwin Development Inc.</h3>
                </div>
            </div>
        )
    }
}
export default Footer;