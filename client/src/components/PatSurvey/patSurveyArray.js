var panel = $("#survey-area");
var countStartNumber = 30;

var questions = [{
        suvHeader: 'MEDICATION',
        question: 'Are You Current With Your Parkinson Medication?',
        answers: ['Yes, I Am', 'No, I Am Not']
    },

    {
        suvHeader: 'SYMPTOMS',
        question: 'Since taking your LAST Parkinson medication: have you had any:',
        answers: ['Falls', 'Freezing Of Gait', 'Dizziness', 'Hallucinations', 'None Of These']
    },

    {
        suvHeader: 'Kick In',
        question: 'Since taking your LAST Parkinson medication: how long did it take to kick in?',
        answers: ['Immediately', 'Quickly', 'Awhile', 'Very Late', 'Never']
    },

    {
        suvHeader: 'Wearing Off',
        question: 'Since taking your LAST Parkinson medication: if wearing off, how long ago.?',
        answers: ['Still Nothing', '15 Minutes Ago', '45 Minutes Ago', '1 Hour And 15 MInutes Ago', '2 Hours Ago']
    },

    {
        suvHeader: 'ACTIVITY',
        question: 'Since taking your LAST Parkinson medications: how much of the time have you been able to do normal activities',
        answers: ['All Of The Time', 'Most Of The Time', 'About Half The Time', 'Less Than Half The Time', 'None Of The Time']
    },

    {
        suvHeader: 'MOVEMENT',
        question: 'Since taking your LAST Parkinson medications: how much of the time have you been able to move comfortable?',
        answers: ['All Of The Time', 'Most Of The Time', 'About Half The Time', 'Less Than Half The Time', 'None Of The Time']
    },

    {
        suvHeader: 'OFF TIME',
        question: 'Right Now: do you feel off (slow, stiff, difficult to walk)?',
        answers: ['Normal', 'A Little Slow', 'Slow', 'Very Slow', 'Can\'t Move At All']
    },

    {
        suvHeader: 'TREMORS',
        question: 'Right Now: if you suffer form tremor, how is it now?',
        answers: ['No Tremor', 'Bothering Me A Little', 'Worse Than Normal', 'Quite Bad', 'Very Bad, Can\'t Do Normal Tasks']
    },

    {
        suvHeader: 'STIFFNESS',
        question: 'Right Now: how is your stiffness?',
        answers: ['No Stiffness', 'A Little Stiff', 'Quite Stiff', 'Very Stiff', 'So Stiff Can\'t Move']
    },

    {
        suvHeader: 'WALKING',
        question: 'Right Now: how is your walking?',
        answers: ['Good', 'A Little Slow', 'Slower Than Normal', 'Very Slow, Shuffling', 'Can\'t Walk At All']
    },

    {
        suvHeader: 'BALANCE',
        question: 'Right Now: how is your balance when you stand or walk?',
        answers: ['Good', 'A Little Unsteady', 'Unsteady', 'Very Unsteady, Worry About Falling', 'Too Unsteady To Stand Or Walk']

    }

    {
        suvHeader: 'SLEEPY',
        question: 'Since taking your LAST Parkinson medication: how tired have you  been?',
        answers: ['Not At All', 'Some', 'Sleepy', 'Very Sleepy, Exhausted All The Time']

    }
];