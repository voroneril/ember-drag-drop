import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default Component.extend( {
  dragCoordinator: service(),
  overrideClass: 'sortable-objects',
  classNameBindings: ['overrideClass'],
  enableSort: true,
  useSwap: true,
  inPlace: false,
  sortingScope: 'drag-objects',
  sortableObjectList: A(),

  init() {
    this._super(...arguments);
    if (this.get('enableSort')) {
      this.get('dragCoordinator').pushSortComponent(this);
    }
  },

  willDestroyElement() {
    if (this.get('enableSort')) {
      this.get('dragCoordinator').removeSortComponent(this);
    }
  },

  dragStart(event) {
    event.stopPropagation();
    if (!this.get('enableSort')) {
      return false;
    }
    this.set('dragCoordinator.sortComponentController', this);
  },

  dragEnter(event) {
    //needed so drop event will fire
    event.stopPropagation();
    return false;
  },

  dragOver(event) {
    //needed so drop event will fire
    event.stopPropagation();
    return false;
  },

  drop(event) {
    event.stopPropagation();
    if (this.get('enableSort') && this.get('sortEndAction')) {
      this.get('sortEndAction')(event);
    }
  }
});
