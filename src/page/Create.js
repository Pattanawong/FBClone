import React from 'react';

import './Create.css' ;
import { Link } from 'react-router-dom';

function Create() {
  return (
    <div className='Create'>
            <form className='Add'>
                <Link to='/' className='BAdd' >back</Link>
                <input placeholder='Name'/>
                <input placeholder='Last Name'/>
                <input placeholder='email'/>
                <input placeholder='password'/>
                <input placeholder='password-sub'/>
                <button className='Addsubmit'>submit</button>
            </form>
    </div>
  );
}

export default Create;