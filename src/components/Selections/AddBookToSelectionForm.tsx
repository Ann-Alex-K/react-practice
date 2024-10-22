import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo, useState } from 'react';
import { showError } from '../../actions/error-actions';
import { Book, BookSelection, StateType } from '../../reducers/reducer';
import { addBookToSelectionActionCreator } from '../../actions/selection-actions';
import { SelectList } from '../common/Form/SelectList';

const AddBookToSelectionForm = () => {
  const dispatch = useDispatch();
  const { books, selections } = useSelector((state: StateType) => state);
  const makeTransformData = (data: Book[] | BookSelection[]) => {
    return data
      .filter((el) => !!el._id)
      .map((el) => {
        return {
          value: el._id as string,
          label: `${el.title} by ${el.author}`,
        };
      });
  };

  const transformBooks = useMemo(() => makeTransformData(books), [books]);
  const transformSelections = useMemo(
    () => makeTransformData(selections?.data ?? []),
    [selections?.data],
  );

  const [bookId, setBookId] = useState('');
  const [selectionId, setSelectionId] = useState('');

  const onSubmit = () => {
    if (bookId && selectionId) {

      dispatch(addBookToSelectionActionCreator(bookId, selectionId));
    } else {
      
      dispatch(showError('Please select book and selection'));
    }
  };

  const handleBookSelect = useCallback((val: string) => setBookId(val), []);
  const handleSelectionSelect = useCallback((val: string) => setSelectionId(val), []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="selection_control_wrap"
    >
      <div className="row">
        <div className="selection_control_item col-md-4">
          <label htmlFor="bookSelect">Add book</label>
          <SelectList id="bookSelect" onSelect={handleBookSelect} data={transformBooks} />
        </div>

        <div className="selection_control_item col-md-5">
          <label htmlFor="selectionSelect">to selection</label>
          <SelectList
            id="selectionSelect"
            onSelect={handleSelectionSelect}
            data={transformSelections}
          />
        </div>

        <div className="col-md-1 d-flex align-items-end">
          <button type="submit" className="btn btn-primary add-book-to-selection-button">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBookToSelectionForm;
