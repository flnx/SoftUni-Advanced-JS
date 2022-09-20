function solution(action) {
  const upvote = () => this.upvotes++;
  const downvote = () => this.downvotes++;

  const report = () => {
    let inflated = 0;
    const totalVotes = this.upvotes + this.downvotes;

    if (totalVotes > 50) {
      inflated = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
    }

    const upvotes = this.upvotes + inflated;
    const downvotes = this.downvotes + inflated;
    const balance = upvotes - downvotes;
    const positiveVotes = (this.upvotes / totalVotes) * 100;
    const ratingResult = checkRating(totalVotes, positiveVotes, balance);

    return [upvotes, downvotes, balance, ratingResult];
  };

  const commands = { upvote, downvote, score: report };
  let fn = commands[action];
  return fn();

  function checkRating(totalVotes, positiveVotes, balance) {
    let rating = 'new';
    if (positiveVotes > 66 && totalVotes >= 10) {
      rating = 'hot';
    } else if (balance >= 0 && totalVotes > 100) {
      rating = 'controversial';
    } else if (balance < 0 && totalVotes >= 10) {
      rating = 'unpopular';
    }
    return rating;
  }
}

let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100,
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score); // [127, 127, 0, 'controversial']
for (let i = 0; i < 50; i++) solution.call(post, 'downvote'); // (execute 50 times)
score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']
console.log(score);
