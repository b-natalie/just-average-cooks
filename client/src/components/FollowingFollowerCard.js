import React from "react";
import { Link } from "react-router-dom";
import { List, Image } from "semantic-ui-react";

function FollowingFollowerCard({ person }) {
    return (
        <List.Item>
            <Image avatar src={person.image} />
            <List.Content>
                <Link to={`/users/${person.id}`}><List.Header>{person.first_name} {person.last_name}</List.Header></Link>
            </List.Content>
        </List.Item>
    )
}

export default FollowingFollowerCard;