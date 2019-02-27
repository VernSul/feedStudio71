import React from "react";
import { Button, Icon, Label } from 'semantic-ui-react'

const BigPost = (props) => {
    return (
        <div className="BigPost">
            <div className="text" onClick={props.toggle}>
                <h4>{props.data.title}</h4>
                <p>"{props.data.message}"</p>
            </div>

            <Button as='div' labelPosition='right' onClick={() => {props.addLike(props.index)}}>
                <Button icon>
                    <Icon name='heart' />
                    Like
                </Button>
                <Label as='a' basic pointing='left'>
                    {props.likes}
                </Label>
            </Button>
        </div>
    )
}

export default BigPost;