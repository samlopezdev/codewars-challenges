// Likes Vs Dislikes

// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.



// Logical Solution
function likeOrDislike(buttons) {
    let state = 'Nothing';
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === state) {
        state = 'Nothing'
      } else {
        state = buttons[i]
      }
    }
  
    return state
}


// Other Solutions
function likeOrDislike(buttons) {
    return buttons.reduce( (state,button) => button===state ? Nothing : button , Nothing );
}


// 2
function likeOrDislike(buttons) {
    let state = 'Nothing'
    buttons.forEach((button) => {
      switch(button){
        case 'Like': return state !== 'Like' ? state = 'Like' : state = 'Nothing'
        case 'Dislike': return state !== 'Dislike' ? state = 'Dislike' : state = 'Nothing'
        default: return state
      }
    })
    return state
}


// 3
function likeOrDislike(buttons) {
    if(!buttons.length) return 'Nothing';
    
    let state = 'Nothing';
    
    buttons.map(button => {
      switch(button) {
          case 'Dislike':
            state = state == 'Dislike' ? 'Nothing' : 'Dislike';
          break;
          case 'Like':
            state = state == 'Like' ? 'Nothing' : 'Like';
          break;
      }
    });
    
    return state;
}