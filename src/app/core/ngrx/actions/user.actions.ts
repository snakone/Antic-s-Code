import { props, createAction } from '@ngrx/store';
import { User, Interaction, MostActive } from '@app/shared/interfaces/interfaces';

// GET ALL USERS
export const getAllUsers =
  createAction('[Users] Get All Users');

export const getAllUsersSuccess =
  createAction('[Users] Get All Users Success',
  props<{ users: User[] }>());

export const getAllUsersFailure =
  createAction('[Users] Get All Users Failure',
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

// GET INTERACTION BY USER
export const getInteractionByUser =
  createAction('[Users] Get Interaction By User');

export const getInteractionByUserSuccess =
  createAction('[Users] Get Interaction By User Success',
  props<{ interaction: Interaction[] }>());

export const getInteractionByUserFailure =
  createAction('[Users] Get Interaction By User Failure',
  props<{ error: string }>());

// GET MOST ACTIVE USERS
export const getMostActiveUsers =
  createAction('[Users] Get Most Active Users');

export const getMostActiveUsersSuccess =
  createAction('[Users] Get Most Active Users Success',
  props<{ active: MostActive[] }>());

export const getMostActiveUsersFailure =
  createAction('[Users] Get Most Active Users Failure',
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

// SET USER EMAIL
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

// RESET INTERACTION
export const resetInteraction =
  createAction('[Articles API] Reset Interaction');
