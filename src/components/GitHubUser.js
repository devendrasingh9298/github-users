import '../App.css';
import UserCard from './UserCard';
import axios from 'axios'
import { useState, createRef, useEffect } from 'react';

function GitHubUser(){

    const [userData, setUserData] = useState({});
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const inputRef = createRef();
    const btnRef = createRef();

    const getUserInfo = () =>{
        axios.get(`https://api.github.com/users/${name}`)
        .then((response) => setUserData(response.data))
        .catch((err) => {
            if(err.response.status === 404){
                setError('User Not Found');
            }
        })
        inputRef.current.value = '';
        setName('');
    };

    useEffect( () => {
        inputRef.current.focus();
        btnRef.current.disabled = true;
    }, []);

    useEffect( () => {
        if(name.length > 0){
            btnRef.current.disabled = false;
        }else{
            btnRef.current.disabled = true;
        }
    }, [name]);

    return(
        <div className='github-wrapper'>
            <h1>Get github user details</h1>
            <input 
                className='user-name'
                placeholder='Enter UserName.....'
                onChange={(e) => setName(e.target.value)}
                ref={inputRef}
            />
            <br />
            <button 
                className='info-btn'
                onClick={getUserInfo}
                ref = {btnRef}
                >
                Get Info    
            </button>
        <br /><br />
            {
                error && <h2>{error}</h2>
            }

            <UserCard 
            userData = {userData}
            />
        </div>
    );
}

export default GitHubUser;