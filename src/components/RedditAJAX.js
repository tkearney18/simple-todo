import axios from 'axios'
import React from 'react'

class RedditAJAX extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    //after the component has mounted to the DOM, make this axios (ajax) call and set the state.
    componentDidMount() {
        axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
        .then(res => {
            const posts = res.data.data.children.map(obj => obj.data)
            this.setState({ posts })
        })
    }

    render() {
        return(
        <div>
            <h1>{`/r/${this.props.subreddit}`}</h1>
            <ul>
                {this.state.posts.map(post =>
                <li key={post.id}><a href={post.url}>{post.title} </a></li>
                )}
            </ul>
        </div>
        );
    }
}

export default RedditAJAX