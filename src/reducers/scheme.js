/**
 * scheme reducer
 * @param  {Object} state  [App scheme]
 * @param  {[type]} action [dispatch(action)]
 * @return {[type]}        [next State]
 */
const scheme = (state = {
	bgColor: 'blue',
	bgImg: ''
}, action) => {
	return Object.assign({}, state, {
		bgColor: action.bgColor,
		bgImg: action.bgImg
	})
};


export default scheme;