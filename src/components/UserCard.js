

function UserCard(props){
    if(Object.keys(props.userData).length < 1){
        return <h3>Enter User Name</h3>;
    }

        // console.log(props.userData);

        let {avatar_url, name, company, blog, location, public_repos} = props.userData;
        
        return(
            <div className="user-wrapper">
                <img src={avatar_url} />
                <h2>{name}</h2>
                <h3>{company}</h3>
                <p>Blog Link :<a href="{blog}">{blog}</a></p>
                <p>Location : <b>{location}</b></p>
                <p>Public Repos : <b>{public_repos}</b></p>
            </div>
        );

    // return(
    //     <div className="user-wrapper">
    //         <img src={props.userData.avatar_url} />
    //         <h2>{props.userData.name}</h2>
    //         <h3>{props.userData.company}</h3>
    //         <p>Blog Link :<a href="{props.userData.blog}">{props.userData.blog}</a></p>
    //         <p>Location : <b>{props.userData.location}</b></p>
    //         <p>Public Repos : <b>{props.userData.public_repos}</b></p>
    //     </div>

    //     // <h1>User Information</h1>
    // );
}

export default UserCard;