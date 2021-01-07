function getCurrentPoll() {
    const pollId = model.app.currentPoll;
    // return model.polls.filter(p => p.id === pollId)[0];

    for (let poll of model.polls) {
        if (poll.id === pollId) return poll;
    }
    return null;
}

function findById(list, id) {
    for (let obj of list) {
        if (obj.id === id) return obj;
    }
    return null;
}