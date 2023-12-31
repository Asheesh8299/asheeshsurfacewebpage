// Get the tweet form and the tweets list
const tweetForm = document.getElementById('tweet-form');
const tweetInput = document.getElementById('tweet-input');
const tweetsList = document.getElementById('tweets-list');

// Handle the tweet submission
tweetForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  const tweetContent = tweetInput.value.trim();
  if (tweetContent === '') {
    return; // Ignore empty tweets
  }
  createTweet(tweetContent); // Create and append the tweet
  tweetInput.value = ''; // Clear the input field
});

// Create a new tweet and append it to the tweets list
function createTweet(content) {
  const tweet = document.createElement('div');
  tweet.classList.add('tweet');

  const tweetText = document.createElement('p');
  tweetText.textContent = content;

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const likeBtn = createActionButton('like', 'Like', handleLike);
  const retweetBtn = createActionButton('retweet', 'Retweet', handleRetweet);

  actions.appendChild(likeBtn);
  actions.appendChild(retweetBtn);

  tweet.appendChild(tweetText);
  tweet.appendChild(actions);

  tweetsList.appendChild(tweet);
}

// Create an action button
function createActionButton(iconClass, tooltipText, onClickHandler) {
  const button = document.createElement('span');
  button.innerHTML = `<i class="fa fa-${iconClass}"></i>${tooltipText}`;
  button.classList.add(`${iconClass}-btn`);
  button.addEventListener('click', onClickHandler);
  return button;
}

// Handle the like action
function handleLike(event) {
  const likeBtn = event.target;
  const tweet = likeBtn.closest('.tweet');
  tweet.classList.toggle('liked');
}

// Handle the retweet action
function handleRetweet(event) {
  const retweetBtn = event.target;
  const tweet = retweetBtn.closest('.tweet');
  const tweetContent = tweet.querySelector('p').textContent;
  createTweet(`Retweeted: ${tweetContent}`);
}
