import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import AuthModal from './components/AuthModal'
import HomeScreenPage from '../HomeScreenPage'

function mapStateToProps(state) {
  return {
    addresses: state.account.identityAccount.addresses,
    publicKeychain: state.account.identityAccount.publicKeychain
  }
}

const AuthPage = (props) =>
(
  <div style={{ width: '100%', height: '100%' }}>
    <HomeScreenPage />
    <AuthModal
      addresses={props.addresses}
      publicKeychain={props.publicKeychain}
    />
  </div>
)

AuthPage.propTypes = {
  addresses: PropTypes.array.isRequired,
  publicKeychain: PropTypes.string.isRequired
}


export default connect(mapStateToProps)(AuthPage)
