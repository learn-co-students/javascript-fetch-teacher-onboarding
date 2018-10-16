const app = "I don't do much.";

const token = '8a912225e4fca940704ce1db7b515d1c92a63a74'
fetch('https://api.github.com/bubbaspaarx/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
