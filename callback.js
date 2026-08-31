// example--> when you like some photo, you click the like button, the still go on , it doesnt stop, to first increase the like then continue the video.
// in whatsapp , when you send a video, and immediatly sent text also, while video is being sent , the text also goes on.

function likePost(callback) {
  console.log("like the post");
  setTimeout(() => {
    callback();
  }, 1000);
}

likePost(() => {
  console.log("increase the like");

});

console.log("constinue the video");