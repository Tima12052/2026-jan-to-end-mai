import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    selectedPost: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    const savedId = localStorage.getItem("selectedPostId");

    if (savedId) {
      this.setState({ selectedPostId: Number(savedId) });
    }

    this.loadPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedPostId !== this.state.selectedPostId) {
      localStorage.setItem("selectedPostId", this.state.selectedPostId);
      this.loadPostDetails();
    }

    if (prevProps.category !== this.props.category) {
      this.loadPosts();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  loadPosts = () => {
    this.setState({ loading: true, error: null });

    this.timerId = setTimeout(() => {
      const allPosts = [
        { id: 1, title: "React Basics", category: "react" },
        { id: 2, title: "JS Promises", category: "js" },
        { id: 3, title: "Hooks Guide", category: "react" },
      ];

      const posts = allPosts.filter(
        post => post.category === this.props.category
      );

      this.setState({ posts, loading: false });
    }, 700);
  };

  loadPostDetails = () => {
    this.setState({ loading: true });

    this.timerId = setTimeout(() => {
      const details = {
        1: { id: 1, text: "React is a library for building UI." },
        2: { id: 2, text: "Promises help with async code." },
        3: { id: 3, text: "Hooks let you use state and effects." },
      };

      this.setState({
        selectedPost: details[this.state.selectedPostId],
        loading: false,
      });
    }, 500);
  };

  selectPost = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    return (
      <div>
        <h2>Posts</h2>

        {this.state.loading && <p>Loading...</p>}
        {this.state.error && <p>{this.state.error}</p>}

        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <button onClick={() => this.selectPost(post.id)}>
                {post.title}
              </button>
            </li>
          ))}
        </ul>

        {this.state.selectedPost && (
          <div>
            <h3>Post details</h3>
            <p>{this.state.selectedPost.text}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
