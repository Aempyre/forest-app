import { helper } from '@ember/component/helper';

export function hasNote(note) {
   
    if (note.toString().length > 0) {
        return " hours, * click to see";
        
    } else {
        return " hours, + click to add ";
    }

}

export default helper(hasNote);