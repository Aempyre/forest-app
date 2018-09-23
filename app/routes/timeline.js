import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            { time: '0900', note: 'Walking in...' },
            { time: '1000', note: 'Another world.' }, 
            { time: '1100', note: 'Did we see the wanderer?' }, 
            { time: '1200', note: '' }, 
            { time: '1300', note: 'Back down into the green gloom.' }, 
            { time: '1400', note: 'Hiking out.' }, 
            { time: '1500', note: 'Looking back with gratitude.' }
        ];
    }
});
