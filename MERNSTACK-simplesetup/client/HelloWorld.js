import React from 'react'
import { hot } from 'react-hot-loader'

const HelloWorld = () => {
    return (
        <div>
          <h1>By continuing, you agree to the AWS Customer Agreement or other agreement
           for AWS services, and the Privacy <i><p>Notice. This site uses essential cookies.
            See our Cookie Notice for more information.New to AWS? Create a new AWS account
!</p></i></h1>
        </div>
      )
}

export default hot(module)(HelloWorld)