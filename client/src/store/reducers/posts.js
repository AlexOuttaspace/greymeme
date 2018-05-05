import * as actionTypes from '../actions/actionTypes'

const initialState = [
  {
    liked: false,
    _id: `adsfasdfasdf`,
    title: 'Skyrim lmao',
    imageURL: 'https://img-9gag-fun.9cache.com/photo/aW17L3Z_460swp.webp',
    user: {
      username: 'Johndoe'
    },
    comments: [
      {
        _id: 'adsgfaedhgarte',
        text: 'nice meme, post more!',
        user: {
          username: 'memer'
        },
        likes: Math.floor(Math.random() * 100),
        liked: false
      },
      {
        _id: 'asfgagrag342dgs',
        text: 'ayyy lmao',
        user: {
          username: 'mlg'
        },
        likes: Math.floor(Math.random() * 100),
        liked: false
      }
    ],
    likes: Math.floor(Math.random() * 100),
    tags: [
      'Skyrim',
      'stealth',
      'arrow to the knee'
    ]
  },
  {
    liked: false,
    _id: `dhgfjghndghn`,
    title: 'Skyrim lmao',
    imageURL: 'https://img-9gag-fun.9cache.com/photo/aW17L3Z_460swp.webp',
    user: {
      username: 'Johndoe'
    },
    comments: new Array(35),
    likes: Math.floor(Math.random() * 100),
    tags: [
      'Skyrim',
      'stealth',
      'arrow to the knee'
    ]
  },
  {
    liked: false,
    _id: `bxvnytxfynxb`,
    title: 'Skyrim lmao',
    imageURL: 'https://img-9gag-fun.9cache.com/photo/aW17L3Z_460swp.webp',
    user: {
      username: 'Johndoe'
    },
    comments: new Array(35),
    likes: Math.floor(Math.random() * 100),
    tags: [
      'Skyrim',
      'stealth',
      'arrow to the knee'
    ]
  },
  {
    _id: 'asdfjkhlnadsfg',
    liked: false,
    title: 'Skyrim lmao',
    imageURL: 'https://img-9gag-fun.9cache.com/photo/aW17L3Z_460swp.webp',
    user: {
      username: 'Johndoe'
    },
    comments: new Array(35),
    likes: Math.floor(Math.random() * 100),
    tags: [
      'Skyrim',
      'stealth',
      'arrow to the knee'
    ]
  }
]

// TODO: optimize
const postLikeComment = (state, action) => {
  const untouchedPosts = state.filter(p => 
    p._id !== action.post_id
  );

  const postToEdit = state.find(p =>
    p._id === action.post_id
  );

  const editedComments = postToEdit.comments.map(c =>
    c._id !== action.comment_id ? c : {...c, liked: !c.liked}
  );
  // this will put liked comment to the end of the list
  // how to avoid it?
  return [
    ...untouchedPosts,
    {...postToEdit, comments: [...editedComments]}
  ];
}

const postAddComment = (state, action) => {
  const untouchedPosts = state.filter(p => 
    p._id !== action.post_id
  );

  const postToEdit = state.find(p =>
    p._id === action.post_id
  );

  const editedComments = [...postToEdit.comments, action.comment]

  return [
    ...untouchedPosts,
    {...postToEdit, comments: [...editedComments]}
  ];
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_LIKE:
      return state.map(p =>
        p._id === action._id ? {...p, liked: !p.liked} : p
      );
    case actionTypes.POST_LIKE_COMMENT:
      return postLikeComment(state, action);
    case actionTypes.POST_ADD_COMMENT:
      return postAddComment(state, action);
    default:
      return state;
  }
}

export default reducer;