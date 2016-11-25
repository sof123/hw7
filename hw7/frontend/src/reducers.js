const Reducer = (state =  {
	nextId: 2,
	location: "Landing.js",
	posts: [],
	todoItems: [
	    {id: 0, text: "This is an item", done: false, displayArticles: false},
	    {id: 1, text: "Another item", done: false, displayArticles: false}
	],
	visibilityFilter: 'SHOW_ALL'
}, action) => {
	switch(action.type) {
		case 'loginToDo':
			return { ...state, nextId: state.nextId + 1, location: "Main.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'logoutToDo':
			return { ...state, nextId: state.nextId + 1, location: "Landing.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'goToProfileToDo':
			return { ...state, nextId: state.nextId + 1, location: "Profile.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'updateHeadlineToDo':
			return { ...state, nextId: state.nextId + 1, location: "Main.js", posts: [...posts, action.text],
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false,}]
			}
		case 'getArticlesToDo':
			return { ...state, nextId: state.nextId + 1, location: "Main.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false, displayArticles:true}]
		}
		case 'goToLandingToDo':
			return { ...state, nextId: state.nextId + 1, location: "Landing.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'goToMainToDo':
			return { ...state, nextId: state.nextId + 1, location: "Main.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}

		case 'SET_VISIBILITY_FILTER':
			return { ...state, visibilityFilter: action.filter }
		default:
			return state
	}
}

export default Reducer
