import React, { Component } from 'react';
import { Button, Icon, Label, Image } from 'semantic-ui-react'

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {error: false}

        this.handleError = this.handleError.bind(this);
    }

    handleError() {
        this.setState( { error: true })
    }

    render() {

    return (
        <div className="PostArea">
            {this.props.data.thumbnail && !this.state.error ? <Image src={this.props.data.thumbnail} onError={this.handleError} size="small" inline={true} rounded onClick={() => this.props.toggle(this.props.index+1)}/> : null}
            <span className="textPost">
                <h4 onClick={() => this.props.toggle(this.props.index+1)}>{this.props.data.title || this.props.data.message}</h4>
                <Button as='div' labelPosition='right' onClick={() => {this.props.addLike(this.props.index)}}>
                    <Button icon>
                        <Icon name='heart'/>
                        Like
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {this.props.likes}
                    </Label>
                </Button>
            </span>
        </div>
    )
    }
}

export default Post;