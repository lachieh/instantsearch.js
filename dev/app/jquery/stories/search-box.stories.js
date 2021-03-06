import { storiesOf } from 'dev-novel';
import { wrapWithHitsAndJquery } from '../../utils/wrap-with-hits.js';
import * as widgets from '../widgets/index.js';

const stories = storiesOf('SearchBox');

export default () => {
  stories.add(
    'default',
    wrapWithHitsAndJquery(containerNode => {
      const inputNode = document.createElement('input');
      containerNode.append(inputNode);
      window.search.addWidget(
        widgets.searchBox({ inputNode: window.$(inputNode) })
      );
    })
  );
};
