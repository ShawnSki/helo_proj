import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
                // console.log('res', res.data)
                this.props.updateAdmin(res.data)
                this.setState({
                    admin: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
            // console.log('props', this.props)
        if (!this.props.email) {
            this.props.history.push('/login')
        }
    }



    render() {
        console.log('state', this.state.admin)
        return (
            <div>
                <h1>Dashboard</h1>
                <Link to={`/post/${this.state.admin.id}`}><button>Posts</button></Link>
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
