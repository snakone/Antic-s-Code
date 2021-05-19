import { props, createAction } from '@ngrx/store';
import { News, NewsResponse } from '@shared/interfaces/interfaces';

// GET NEWS
export const get =
  createAction('[News API] Get News');

export const getSuccess =
  createAction('[News API] Get News Success',
  props<{ news: News[] }>());

export const getFailure =
  createAction('[News API] Get News Failure',
  props<{ error: string }>());

// GET LAST AND VIEWED
export const getLastAndViewed =
  createAction('[News API] Get Last and Viewed News');

export const getLastAndViewedSuccess =
  createAction('[News API] Get Last and Viewed News Success',
  props<{ res: NewsResponse }>());

export const getLastAndViewedFailure =
  createAction('[News API] Get Last and Viewed News Failure',
  props<{ error: string }>());

// GET NOTICE BY SLUG
export const getBySlug =
  createAction('[Articles API] Get News by Slug',
  props<{ slug: string }>());

export const getBySlugSuccess =
  createAction('[Articles API] Get News by Slug Success',
  props<{ notice: News }>());

export const getBySlugFailure =
  createAction('[News API] Get News by Slug Failure',
  props<{ error: string }>());

// GET NOTICE BY CATEGORY
export const getByCategory =
  createAction('[Articles API] Get News by Category',
  props<{ category: string }>());

export const getByCategorySuccess =
  createAction('[Articles API] Get News by Category Success',
  props<{ news: News[] }>());

export const getByCategoryFailure =
  createAction('[News API] Get News by Category Failure',
  props<{ error: string }>());

// RESET NEWS
export const reset =
  createAction('[News API] Reset News');

export const resetSlug =
  createAction('[News API] Reset News Slug');

export const resetCategory =
  createAction('[News API] Reset News Category');

