import React from 'react';
import { Link} from 'react-router-dom';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    <Link to="/login">Sign Out</Link>
  </button>
);
export default withFirebase(SignOutButton);