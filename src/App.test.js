import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
const AddTodo = (tasks) => {
  const inputElement = screen.getByPlaceholderText('add Todo ...');
  const AddButton = screen.getByRole('button' , {name : 'Add'});
    tasks.forEach((task) => {
      fireEvent.change(inputElement , {target : {value:task}})
       fireEvent.click(AddButton)
    })
}
test('renders the button ', () => {
  render(<App />);
  const AddButton = screen.getByRole('button' , {name : 'Add'});
  expect(AddButton).toBeInTheDocument();
});
test('renders the input ', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('add Todo ...');
  expect(inputElement).toBeInTheDocument();
});
test('click the button and set to empty string', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('add Todo ...');
  AddTodo(['go'])
  expect(inputElement.value).toBe('');
});
test('make sure that it s added first', () => {
  render(<App />);
  AddTodo(['Go'])
  const firstTodo = screen.getByTestId('p-tag-0')
  expect(firstTodo.textContent).toBe('Go');
});
test('make sure delete works', () => {
  render(<App />);
  AddTodo(['first','second','third'])
  const deleteButton = screen.getByTestId('delete-0');
  fireEvent.click(deleteButton)
  const Todos = screen.getAllByTestId(/p-tag/i)
  expect(Todos.length).toBe(2);
});
test('add empty Todo ', () => {
  render(<App />);
  AddTodo(['first','','third'])
  const Todos = screen.getAllByTestId(/p-tag/i)
  expect(Todos.length).toBe(2);
});
