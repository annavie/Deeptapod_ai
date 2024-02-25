
const comments = [
  {
    id: 1,
    text: "This is the first comment",
    parentId: null,
    replies: [
      {
        id: 2,
        text: "This is a reply to the first comment",
        parentId: 1,
        replies: [
          {
            id: 3,
            text: "This is a nested reply",
            parentId: 2,
            replies: [] 
          }
        ]
      }
    ]
  },
  {
    id: 4,
    text: "This is an independent comment",
    parentId: null,
    replies: []
  }
];

function generateCommentHTML(comment, level) {
  const indent = level * 20; 
  const div = document.createElement('div');
  div.className = 'comment';
  div.style.marginLeft = indent + 'px';
  div.textContent = comment.text;
  
  if (comment.replies.length > 0) {
    comment.replies.forEach(reply => {
      div.appendChild(generateCommentHTML(reply, level + 1)); 
    });
  }
  
  return div;
}

function displayComments(commentsArray, container, level) {
  commentsArray.forEach(comment => {
    if (comment.parentId === null) {
      const commentDiv = generateCommentHTML(comment, level);
      container.appendChild(commentDiv);
    }
  });
}

const commentsContainer = document.getElementById('commentsContainer');
displayComments(comments, commentsContainer, 0);