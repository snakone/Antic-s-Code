import { props, createAction } from '@ngrx/store';
import { Article } from '@app/shared/interfaces/interfaces';

// GET ARTICLES
export const get =
  createAction('[Articles API] Get Articles');

export const getSuccess =
  createAction('[Articles API] Get Articles Success',
  props<{ articles: Article[] }>());

export const getFailure =
  createAction('[Articles API] Get Articles Failure',
  props<{ error: string }>());

// GET LAST ARTICLES
export const getLast =
  createAction('[Articles API] Get Last Articles');

export const getLastSuccess =
  createAction('[Articles API] Get Last Articles Success',
  props<{ articles: Article[] }>());

export const getLastFailure =
  createAction('[Articles API] Get Last Articles Failure',
  props<{ error: string }>());

// GET MOST LIKED ARTICLES
export const getMostLiked =
  createAction('[Articles API] Get Most Liked Articles');

export const getMostLikedSuccess =
  createAction('[Articles API] Get Most Liked Articles Success',
  props<{ articles: Article[] }>());

export const getMostLikedFailure =
  createAction('[Articles API] Get Most Liked Articles Failure',
  props<{ error: string }>());

// GET MOST VIEWED ARTICLES
export const getMostViewed =
  createAction('[Articles API] Get Most Viewed Articles');

export const getMostViewedSuccess =
  createAction('[Articles API] Get Most Liked Viewed Success',
  props<{ articles: Article[] }>());

export const getMostViewedFailure =
  createAction('[Articles API] Get Most Liked Viewed Failure',
  props<{ error: string }>());

// GET ARTICLES COUNT
export const getCount =
  createAction('[Articles API] Get Articles Count');

export const getCountSuccess =
  createAction('[Articles API] Get Articles Count Success',
  props<{ count: number }>());

export const getCountFailure =
  createAction('[Articles API] Get Articles Count Failure',
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

// GET ARTICLES BY CATEGORY COUNT
export const getByCategoryCount =
  createAction('[Articles API] Get Articles by Category Count');

export const getByCategoryCountSuccess =
  createAction('[Articles API] Get Articles by Category Count Success',
  props<{ count: object }>());

export const getByCategoryCountFailure =
  createAction('[Articles API] Get Articles by Category Count Failure',
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


