import { props, createAction } from '@ngrx/store';
import { Article, TagRequest, ArticlesDataResponse } from '@shared/interfaces/interfaces';

// GET ARTICLES
export const get =
  createAction('[Articles API] Get Articles');

export const getSuccess =
  createAction('[Articles API] Get Articles Success',
  props<{ articles: Article[] }>());

export const getFailure =
  createAction('[Articles API] Get Articles Failure',
  props<{ error: string }>());

// GET ARTICLES DATA
export const getData =
  createAction('[Articles API] Get Articles Data');

export const getDataSuccess =
  createAction('[Articles API] Get Articles Data Success',
  props<{ res: ArticlesDataResponse }>());

export const getDataFailure =
  createAction('[Articles API] Get Articles Data Failure',
  props<{ error: string }>());

// GET ARTICLE BY SLUG
export const getBySlug =
  createAction('[Articles API] Get Article by Slug',
  props<{ slug: string }>());

export const getBySlugSuccess =
  createAction('[Articles API] Get Articles by Slug Success',
  props<{ article: Article }>());

export const getBySlugFailure =
  createAction('[Articles API] Get Article by Slug Failure',
  props<{ error: string }>());

// GET ARTICLES BY USER
export const getByUser =
  createAction('[Articles API] Get Articles by User',
  props<{ id: string }>());

export const getByUserSuccess =
  createAction('[Articles API] Get Articles by User Success',
  props<{ articles: Article[] }>());

export const getByUserFailure =
  createAction('[Articles API] Get Articles by User Failure',
  props<{ error: string }>());

// GET ARTICLES BY CATEGORY
export const getByCategory =
  createAction('[Articles API] Get Articles by Category',
  props<{ category: string }>());

export const getByCategorySuccess =
  createAction('[Articles API] Get Articles by Category Success',
  props<{ articles: Article[] }>());

export const getByCategoryFailure =
  createAction('[Articles API] Get Articles by Category Failure',
  props<{ error: string }>());

// GET ARTICLES BY TAGS
export const getByTagsSuccess =
  createAction('[Articles API] Get Articles by Tags Success',
  props<{ articles: Article[] }>());

export const getByTagsFailure =
  createAction('[Articles API] Get Articles by Tags Failure',
  props<{ error: string }>());

// RESET ARTICLES
export const reset =
  createAction('[Articles API] Reset Articles');

export const resetSlug =
  createAction('[Articles API] Reset Article Slug');

export const resetByUser =
  createAction('[Articles API] Reset Articles By User');

export const resetByCategory =
  createAction('[Articles API] Reset Articles By Category');


