import Component from '@ember/component';

export default Component.extend({
    actions: {
        showNote(hour) {
            alert("This note says:\n" + 
                  "At " + hour.time + " hours you noted:\n" + 
                   hour.note);
        }
    }
});
