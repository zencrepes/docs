## How it works

ZenCrepes is client-side and stateless. The main concept around using ZenCrepes is not to introduce any dependencies to third-party services. Users have the option to operate directly with GitHub's UI or to use ZenCrepes. It also means that ZenCrepes cannot see any user data, once authenticated, all data exchanges are directly made between the user's browser and GitHub.

But this approach has two major drawbacks:

- ZenCrepes cannot register to GitHub hooks, therefore cannot be `informed` about updates. Instead, it needs to regularly pull for changes.
- Since the database (Minimongo) is entirely client-side and bound to the browser's capabilities, the more data there is, the slower ZenCrepes is going to be. A few thousands of issues should be perfectly fine though.

## Try-it!

Just go to https://zencrepes.io and log-in. It's all client-side, so not a chance we'll see your data.

## What's Next?

_(and a quick note from the Author)_

In its current state, ZenCrepes is really more a proof-of-principle app than something with a proper design and correct implementation. Nevertheless, it does work, and already greatly simplifies agile management for my teams.

When starting ZenCrepes, the vision was to create an app sitting entirely on top of GitHub API, without needing any additional metadata stored elsewhere. The point was not to create a competitor to ZenHub or Waffle but to remove the need from using those. To give developers (and the team as a whole) the choice between updating their issues directly in GitHub or through an app (like ZenCrepes), both options achieving the same result.

Finally, ZenCrepes is OpenSource with the hope that getting people interested in the app will encourage contribution to its codebase. Getting a community of contributors to help build the necessary improvements, to hopefully get to an open platform built by team managers for team managers.
