import { Accordion, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import BookInSelection from './BookInSelection';
import { FC, useCallback } from 'react';
import { BookSelection } from '../../reducers/reducer';
import { removeSelectionActionCreator } from '../../actions/selection-actions';

interface SelectionProps {
  itemKey: number;
  item: BookSelection;
}

const Selection: FC<SelectionProps> = ({ item, itemKey }) => {
  const dispatch = useDispatch();

  const handleRemoveSelection = useCallback(() => {
    dispatch(removeSelectionActionCreator(item._id));
  }, [dispatch, item._id]);

  return (
    <>
      <Accordion.Item eventKey={itemKey.toString()}>
        <Accordion.Header>
          <span>
            <strong>{item.title}</strong> by <i>{item.author}</i>
          </span>
        </Accordion.Header>
        <Accordion.Body>
          {item?.books?.map((el, i) => (
            <BookInSelection selectionId={item._id} bookId={el[0]} key={i} />
          ))}
          <Button
            onClick={handleRemoveSelection}
            className="remove_selection_btn"
            variant="outline-danger"
          >
            Delete selection
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default Selection;
