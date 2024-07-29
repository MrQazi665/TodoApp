import {call, put, takeEvery} from 'redux-saga/effects';

import {todoCreators, todoTypes} from './todo.action';
import {
  createNewTodo,
  deleteTodoRequest,
  getTodoListing,
  updateTodoRequest,
} from './todo.api';
import {
  DeleteTodoActionParam,
  GetListingActionParam,
  PostTodoActionParam,
  UpdateTodoActionParam,
} from '../interface';

export function* watchTodo() {
  yield takeEvery(todoTypes.GET_ALL_TODOS, getAllTodos);
  yield takeEvery(todoTypes.ADD_TODO, addTodo);
  yield takeEvery(todoTypes.UPDATE_TODO, updateTodo);
  yield takeEvery(todoTypes.DELETE_TODO, deleteTodo);
}

function* getAllTodos({
  params,
}: GetListingActionParam): Generator<any, void, any> {
  try {
    const response = yield call(getTodoListing, params);

    yield put(
      todoCreators.getAllTodosSuccess({
        response: response.data,
        append: params?.append,
      }),
    );
  } catch (error) {
    yield put(todoCreators.getAllTodosFailure(error));
  }
}

function* addTodo({params}: PostTodoActionParam): Generator<any, void, any> {
  try {
    const {todoPayload, resetForm, showToast} = params;
    const response = yield call(createNewTodo, todoPayload);
    resetForm();
    showToast('success', 'Add todo successfully');
    yield put(todoCreators.addTodoSuccess(response.data));
  } catch (error) {
    yield put(todoCreators.addTodoFailure(error));
  }
}

function* updateTodo({
  params,
}: UpdateTodoActionParam): Generator<any, void, any> {
  try {
    const response = yield call(updateTodoRequest, params.data, params.id);

    yield put(todoCreators.updateTodoSuccess(response.data));
  } catch (error) {
    yield put(todoCreators.updateTodoFailure(error));
  }
}

function* deleteTodo({
  params,
}: DeleteTodoActionParam): Generator<any, void, any> {
  try {
    const response = yield call(deleteTodoRequest, params);

    yield put(todoCreators.deleteTodoSuccess(params));
  } catch (error) {
    yield put(todoCreators.deleteTodoFailure(error));
  }
}
