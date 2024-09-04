import ListPresenter from './presenter/list_presenter.js';
import NewEventButtonView from './view/new_event_button_view.js';
import HeaderView from './view/header_view.js';
import ListFilterView from './view/list_filter_view.js';

import {render} from './render.js';

const tripMainElement = document.querySelector('.trip-main');
const listContainerElement = document.querySelector('.trip-events');
const listPresenter = new ListPresenter({listContainer: listContainerElement});

// Блок Header

render(new HeaderView(), tripMainElement);
render(new ListFilterView(), tripMainElement);
render(new NewEventButtonView(), tripMainElement);

// Блок Main

listPresenter.init();
