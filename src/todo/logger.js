function logger(reducers) {

    return (prestate, action) => {

        console.group(action.type)
        console.log('Prestate', prestate)
        console.log('action', action)
        const newstate = reducers(prestate, action)
        console.log('Next State', newstate)
        console.groupEnd()
        return newstate
    }
}
export default logger