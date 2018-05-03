import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({

  sortFinishText: null,
  sortableObjectList: A(
    [{id: 1, title:'Number 1'},
    {id: 2, title:'Number 2'},
    {id: 3, title:'Number 3'},
    {id: 4, title:'Number 4'}]
  ),
  sortableObjectList2: A(
    [{id: 1, title:'Number 5'},
      {id: 2, title:'Number 6'},
      {id: 3, title:'Number 7'},
      {id: 4, title:'Number 8'}]
  ),

  actions: {
    sortEndAction: function() {
      console.log('Sort Ended', this.get('sortableObjectList'));
    },
    sortEndAction2: function() {
      console.log('Sort Ended on second list', this.get('sortableObjectList2'));
    }
  }
});
