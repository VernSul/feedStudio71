# Notes Feed app

The challenge here was to handle several response objects differently formatted. By using ternary operator and JSX the missing element doesn't disrupt the DOM structure. I also used the onError property of the img tag to implement an error handling logic in case the src link is broken.

I used Semantic UI to format pictures and buttons so we don't need to overload the css file. The likes counter is handled thanks to the App global state, referencing each element with its index in the JSON response. To make sure that the Post component is mounting after the request response has been received, we call for the JSON in an upper level component.

To see the message you can click on the post. Then click again on the page to get back to the feed wall view.