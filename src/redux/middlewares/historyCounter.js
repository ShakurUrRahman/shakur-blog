const historyCounter = (store) => (next) => (action) => {
    console.log("Current", store.getState());
    console.log("ACTION", action);

    return next(action);
}

export default historyCounter;