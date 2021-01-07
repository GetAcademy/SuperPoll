const model = {
    app: {
        currentPoll: 1,
        loggedInUser: 'per',
        currentPage: 'createPoll',
    },

    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],

    inputs: {
        createPoll: {
            pollId: null,
            newAlternative: '',
            question: 'Hva er yndlingsfaregn din?',
            options: ['Rød'],
            usersCanAddAlternatives: true,
        },
        votePage: {

        },
    },

    polls: [

        {
            pollId: 1,
            question: 'Hvem er den tøffeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            usersCanAddAlternatives: true,
        },

        {
            pollId: 2,
            question: 'Hvem er den sprekeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            usersCanAddAlternatives: true,
        },

        {
            pollId: 3,
            question: 'Hvem er den kuleste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            usersCanAddAlternatives: true,
        },

    ],

    // votes: {   // votes.Geir - votes['Geir']
    //     'Geir' : 0,
    //     'Eskil' : 0,
    //     'Terje' : 0,
    // },

    votes: [

        { pollId: 1, vote: 'Geir', user: 'per', },
        { pollId: 1, vote: 'Geir', user: 'pål', },
        { pollId: 1, vote: 'Geir', user: 'espen', },
        { pollId: 2, vote: 'Geir', user: 'per', },
        { pollId: 2, vote: 'Geir', user: 'pål', },

    ],
};

/*
    Hvilke andre måter kunne vi lagret stemmene på?
        - Hva er best for å legge til nye stemmer?
        - Hva er best for å endre stemmer?
        - Hva er best for å telle opp stemmer?

    Hvordan ville det blitt om hvert alternativ var et objekt, med en id?
*/