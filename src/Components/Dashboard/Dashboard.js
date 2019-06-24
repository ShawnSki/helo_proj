import React, { Component } from 'react';
import axios from 'axios';
import { updateAdmin, clearAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            admin: {}
        }
    }
    

    componentDidMount() {
        this.handleGetAdmin();
    }

    handleGetAdmin = async () => {
        await axios.get('/auth/dashboard')
            .then(res => {
                this.props.updateAdmin(res.data)
                this.setState({
                    admin: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
        if (!this.props.firstname) {
            this.props.history.push('/login')
        }
    }



    render() {
        return (
            <div>
                <h1>{this.props.firstname}'s Dashboard</h1>
            </div>
        )
    }
}


function mapStateToProps(reduxState) {
    const { id, email } = reduxState;
    return {
        id,
        email
    }
}
const mapDispatchToProps = {
    updateAdmin,
    clearAdmin
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
