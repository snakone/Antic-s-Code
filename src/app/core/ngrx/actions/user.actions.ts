import { props, createAction } from '@ngrx/store';
import { User } from '@app/shared/interfaces/interfaces';

// GET USER BY ID
export const getUserById =
  createAction('[Users] Get User By ID',
  props<{ id: string }>());

export const getUserByIdSuccess =
  createAction('[Users] Get User By ID Success',
  props<{ user: User }>());

export const getUserByIdFailure =
  createAction('[Users] Get User By ID Failure',
  props<{ error: string }>());

// GET USER BY NAME
export const getUserByName =
  createAction('[Users] Get User By Name',
  props<{ name: string }>());

export const getUserByNameSuccess =
  createAction('[Users] Get User By Name Success',
  props<{ user: User }>());

export const getUserByNameFailure =
  createAction('[Users] Get User By Name Failure',
  props<{ error: string }>());

// SET USER
export const setUser =
  createAction('[Users] Set User',
  props<{ user: User }>());

export const setUserSuccess =
  createAction('[Users] Set User Success',
  props<{ user: User }>());

export const setUserFailure =
  createAction('[Users] Set User Failure',
  props<{ error: string }>());

// SET USER EMAIL TOKEN
export const setUserEmail =
  createAction('[Users] Set User Email',
  props<{ email: string }>());

export const setUserEmailSuccess =
  createAction('[Users] Set User Email Success',
  props<{ email: string }>());

export const setUserEmailFailure =
  createAction('[Users] Set User Email Failure',
  props<{ error: string }>());

// VERIFY TOKEN
export const verifyToken =
  createAction('[Users] Verify Token');

export const verifyTokenSuccess =
  createAction('[Users] Verify Token Success',
  props<{ user: User }>());

export const verifyTokenFailure =
  createAction('[Users] Verify Token Failure',
  props<{ error: string }>());

// REFRESH TOKEN
export const refreshToken =
  createAction('[Users] Refresh Token',
  props<{ id: string }>());

export const refreshTokenSuccess =
  createAction('[Users] Refresh Token Success',
  props<{ user: User }>());

export const refreshTokenFailure =
  createAction('[Users] Refresh Token Failure',
  props<{ error: string }>());

// USER LOGOUT
export const userLogOut =
  createAction('[Users] User Log Out');

// RESET ARTICLES
export const resetUserName =
  createAction('[Articles API] Reset User Name');
