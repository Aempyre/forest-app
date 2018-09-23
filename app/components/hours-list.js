import Component from '@ember/component';

export default Component.extend({
    actions: {
        showNote(hour) {

            if (hour.note.toString().length > 0) {
                alert("Your note from " + hour.time +
                      " hours says:\n"  + hour.note);
            } else {
                alert("Add a note for " + hour.time +
                      " hours...");
          }
        
        }
    }
});
