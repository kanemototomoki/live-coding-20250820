import { useState } from 'react';
import '../Components.css';

interface Todo {
  id: string;
  title: string;
}

/**
 * @desc 仕様
 * - 追加ボタンを押すと、モーダルが表示される
 * - モーダル内でタスクのタイトルを入力できる
 * - タイトルは1文字以上である必要がある
 * - バリデーションエラーがある場合は、エラーメッセージを表示する
 * - バリデーションエラーがある場合は、保存ボタンを非活性化する
 * - タイトルを入力して保存ボタンを押すと、一覧にタスクが追加される
 */
const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [error, setError] = useState('');

  const handleAddClick = () => {
    setIsModalOpen(true);
    setInputTitle('');
    setError('');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setInputTitle('');
    setError('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputTitle(value);

    if (value.trim().length === 0) {
      setError('タイトルは1文字以上入力してください');
    } else {
      setError('');
    }
  };

  const handleSave = () => {
    if (inputTitle.trim().length === 0) {
      setError('タイトルは1文字以上入力してください');
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: inputTitle.trim(),
    };

    setTodos([...todos, newTodo]);
    handleCloseModal();
  };

  const isValidInput = inputTitle.trim().length > 0;

  return (
    <div className="todo-list-container">
      <h2>タスク一覧</h2>

      <button onClick={handleAddClick} className="add-button">
        タスクを追加
      </button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.title}
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>新しいタスク</h3>

            <input
              type="text"
              value={inputTitle}
              onChange={handleInputChange}
              placeholder="タスクのタイトルを入力"
              className="title-input"
              autoFocus
            />

            {error && <p className="error-message">{error}</p>}

            <div className="modal-buttons">
              <button onClick={handleCloseModal} className="cancel-button">
                キャンセル
              </button>
              <button
                onClick={handleSave}
                className="save-button"
                disabled={!isValidInput}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
