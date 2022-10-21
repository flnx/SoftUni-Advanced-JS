class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length == 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length == 1) {
      return `${this._likes[0]} likes this story!`;
    } else {
      return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    }
    if (this.creator === username) {
      throw new Error("You can't like your own story!");
    }
    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (!this._likes.includes(username)) {
      throw new Error("You can't dislike this story!");
    }
    const i = this._likes.indexOf(username);
    this._likes.splice(i, 1);
    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    let findComment = this._comments.find((x) => x.id == id);

    if (!findComment) {
      this._comments.push({
        id: this._comments.length + 1,
        username,
        content,
        replies: [],
      });
      return `${username} commented on ${this.title}`;
    }

    const commentId = `${findComment.id}.${findComment.replies.length + 1}`;
    findComment.replies.push({ id: commentId, username, content });
    return 'You replied successfully';
  }

  toString(sortingType) {
    const sortingTypes = {
      asc: (a, b) => a.id - b.id,
      desc: (a, b) => b.id - a.id,
      username: (a, b) => a.username.localeCompare(b.username),
    };

    let output = [
      `Title: ${this.title}`,
      `Creator: ${this.creator}`,
      `Likes: ${this._likes.length}`,
      `Comments:`,
    ];

    let comments = this._comments.sort(sortingTypes[sortingType]);
    comments.forEach((x) => x.replies.sort(sortingTypes[sortingType]));

    for (const comm of comments) {
      output.push(`-- ${comm.id}. ${comm.username}: ${comm.content}`);
      comm.replies.forEach((r) =>
        output.push(`--- ${r.id}. ${r.username}: ${r.content}`));
    }

    return output.join('\n');
  }
}

let art = new Story('My Story', 'Anny');
console.log(art.like('John')); //  "John liked My Story!";
console.log(art.likes); //  "John likes this story!";
// console.log(art.dislike("Sally"));  //  "You can't dislike this story!";
console.log(art.like('Ivan')); //  "Ivan liked My Story!";
console.log(art.like('Steven')); //  "Steven liked My Story!";
console.log(art.likes); //  "John and 2 others like this story!";
console.log(art.comment('Anny', 'Some Content')); //  "Anny commented on My Story";
console.log(art.comment('Ammy', 'New Content', 1)); //  "You replied successfully";
console.log(art.comment('Zane', 'Reply', 2)); //  "Zane commented on My Story";
console.log(art.comment('Jessy', 'Nice :)')); //  "Jessy commented on My Story";
console.log(art.comment('SAmmy', 'Reply@', 2)); //  "You replied successfully");
console.log();
console.log(art.toString('asc'));

// Title: My Story
// Creator: Anny
// Likes: 3
// Comments:
// -- 1. Anny: Some Content
// --- 1.1. Ammy: New Content
// -- 2. Zane: Reply
// --- 2.1. SAmmy: Reply@
// -- 3. Jessy: Nice :);

console.log(`---- 2 ----`);

let art2 = new Story('My Story', 'Anny');
console.log(art2.like('John')); // "John liked My Story!"
console.log(art2.likes); // "John likes this story!"
console.log(art2.dislike('John')); // "John disliked My Story"
console.log(art2.likes); // "My Story has 0 likes"
console.log(art2.comment('Sammy', 'Some Content')); // "Sammy commented on My Story"
console.log(art2.comment('Ammy', 'New Content')); // "Ammy commented on My Story"
console.log(art2.comment('Zane', 'Reply', 1)); // "You replied successfully"
console.log(art2.comment('Jessy', 'Nice :)')); // "Jessy commented on My Story"
console.log(art2.comment('SAmmy', 'Reply@', 1)); // "You replied successfully"
console.log(art2.toString('username'));
