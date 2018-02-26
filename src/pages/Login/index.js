import React from 'react'
import { connect } from 'react-redux'
import { Button, FormGroup, Row } from 'react-bootstrap'
import { signInUser } from '../../reducers/user'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    signInUser({
      email: this.state.email,
      password: this.state.password,
    })
  }

  render() {
    return (
      <div className="user-login content">
        <form>
          <FormGroup>
            <Row>
              <label>Email</label>
              <input type="text"
                name="email"
                placeholder="Email"
                value={this.state.emailInput}
                onChange={this.handleChange} />
            </Row>
            <Row>
              <label>Password</label>
              <input type="password"
                name="password"
                placeholder="Password"
                value={this.state.passwordInput}
                onChange={this.handleChange} />
            </Row>
            <Row>
              <Button bsStyle="primary" onClick={this.handleSubmit}>
                Sign In
              </Button>
            </Row>
          </FormGroup>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Login)