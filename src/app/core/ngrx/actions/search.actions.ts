import { createAction, props } from '@ngrx/store';
import { SearchRequest, SearchResponse } from '@shared/interfaces/interfaces';

// SEARCH
export const searchContent =
  createAction('[Search API] Search Content',
  props<{ request: SearchRequest }>());

export const searchContentSuccess =
  createAction('[Search API] Search Content Success',
  props<{ result: SearchResponse }>());

export const searchContentFailure =
  createAction('[Search API] Search Content Failure',
  props<{ error: string }>());


// RESET SEARCH
export const resetSearch =
  createAction('[Search API] Reset Search');
