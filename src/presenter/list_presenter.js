import ListView from '../view/list_view.js';
import ListSortView from '../view/list_sort_view.js';
import ListItemView from '../view/list_item_view.js';
import FormEditePointView from '../view/form_edit_point_view.js';
import FormAddNewPointView from '../view/form_add_new_point_view.js';

import {render} from '../render.js';

export default class ListPresenter {
  listComponent = new ListView();

  constructor({listContainer}) {
    this.listContainer = listContainer;
  }

  init() {
    render(new ListSortView(), this.listContainer);
    render(this.listComponent, this.listContainer);
    render(new FormEditePointView(), this.listComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new ListItemView(), this.listComponent.getElement());
    };
    render(new FormAddNewPointView(), this.listComponent.getElement());
  }
}

