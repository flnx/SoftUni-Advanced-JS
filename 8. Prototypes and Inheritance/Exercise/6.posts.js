function solution() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content)
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(` * ${comment}`);
    }

    toString() {
      if (this.comments.length < 1) {
        return `${super.toString()}\nRating: ${this.likes - this.dislikes}`;
      } 
      return `${super.toString()}\nRating: ${this.likes - this.dislikes}\nComments:\n${this.comments.join('\n')}`
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content)
        this.views = views;
    }
    view() {
      this.views++;
      return this;
    }

    toString() {
      return `${super.toString()}\nViews: ${this.views}`
    }
  }
  return {Post, SocialMediaPost, BlogPost };
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("Cars", "Blue ones", 25, 30);

console.log(scm.toString());

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

let test = new classes.BlogPost("TestTitle", 25, 30);
test.view()


// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
