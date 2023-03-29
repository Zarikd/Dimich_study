import React from 'react';
import s from './Profile.module.css'
import Preloader from '../../common/preloader/Preloader';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    addActiveMode = () => {
        this.setState({
            editMode: true
        })
    }

    removeActiveMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        let a = this.state
        let b = this.props
        console.log('call')
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={s.status}>
                        <span onDoubleClick={this.addActiveMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    < div >
                        <input autoFocus={true} type="text"
                            onChange={this.onStatusChange} name="" id="" value={this.state.status} onBlur={this.removeActiveMode} />
                    </div >
                }
            </div >


        )
    }
}

export default ProfileStatus;
