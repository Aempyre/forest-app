import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            '0900', 
            '1000', 
            '1100', 
            '1200', 
            '1300', 
            '1400', 
            '1500'
        ];
    }
});
