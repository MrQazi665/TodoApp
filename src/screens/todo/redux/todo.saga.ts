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
  const {todoPayload, resetForm, showToast} = params;
  try {
    const response = yield call(createNewTodo, todoPayload);
    resetForm();
    showToast('success', 'Add todo successfully');

    yield put(todoCreators.addTodoSuccess(response.data));
  } catch (error: any) {
    showToast('error', error.response.data.message);
    yield put(todoCreators.addTodoFailure(error));
  }
}

function* updateTodo({
  params,
}: UpdateTodoActionParam): Generator<any, void, any> {
  const showToast = params?.showToast;
  try {
    const response = yield call(updateTodoRequest, params.data, params.id);
    if (typeof showToast == 'function') {
      showToast('success', 'Update todo successfully');
    }

    yield put(todoCreators.updateTodoSuccess(response.data));
  } catch (error: any) {
    if (typeof showToast == 'function') {
      showToast('error', error.response.data.message);
    }
    yield put(todoCreators.updateTodoFailure(error));
  }
}

function* deleteTodo({
  params,
}: DeleteTodoActionParam): Generator<any, void, any> {
  const {id, showToast} = params;
  try {
    yield call(deleteTodoRequest, id);
    showToast('success', 'Delete todo successfully');

    yield put(todoCreators.deleteTodoSuccess(id));
  } catch (error: any) {
    showToast('error', error.response.data.message);
    yield put(todoCreators.deleteTodoFailure(error));
  }
}
