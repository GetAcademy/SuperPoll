function addAlternative(){
    const inputObj = model.inputs.createPoll;
    inputObj.options.push(inputObj.newAlternative);
    inputObj.newAlternative = '';
    updateView();
}

function createOrUpdatePoll() {
    const inputObj = model.inputs.createPoll;

    if (inputObj.pollId !== null) {
        // oppdatere
        let pollObj = findById(model.polls, inputObj.pollId);
        if (pollObj === null) return;
        pollObj.question = inputObj.question;
        pollObj.usersCanAddAlternatives = inputObj.usersCanAddAlternatives;
        pollObj.options = inputObj.options;

    } else {
        // legge til nytt objekt
        const id = model.polls.length + 1;
        model.polls.push({
            id: id,
            isOpen: true,
            usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
            question: inputObj.question,
            options: [...inputObj.options],
            votes: {},
        });
        inputObj.pollId = id;
    }

    updateView();
}

