import React, { Component } from 'react'
import axios from 'axios'
class GetList extends Component {
	constructor(props) {
		super(props)
		this.state = {
      posts: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('http://127.0.0.1:8000/api/v1/latest-products/      ')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { posts, errorMsg } = this.state
		return (
			<div>
				List of posts
				{posts.length
					? posts.map(post => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
}

export default GetList