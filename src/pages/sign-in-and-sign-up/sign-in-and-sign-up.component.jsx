import React from 'react';
import './sign-in-and-sign-up.style.scss';

import '../../components/sign-in/sign-in.components';
import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.components';

const SignUpAndSignIn = ()=>(
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignUpAndSignIn;