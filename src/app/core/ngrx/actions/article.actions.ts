import { props, createAction } from '@ngrx/store';
import { Article } from '@app/shared/interfaces/interfaces';

// GET ARTICLES
export const getArticles =
  createAction('[Articles API] Get Articles');

export const getArticlesSuccess =
  createAction('[Articles API] Get Articles Success',
  props<{ articles: Article[] }>());

export const GetArticlesFailure =
  createAction('[Articles API] Get Articles Failure',
  props<{ error: string }>());

// GET ARTICLE BY SLUG
export const getArticleBySlug =
  createAction('[Articles API] Get Article by Slug',
  props<{ slug: string }>());

export const getArticleBySlugSuccess =
  createAction('[Articles API] Get Articles by Slug Success',
  props<{ article: Article }>());

export const GetArticleBySlugFailure =
  createAction('[Articles API] Get Article by Slug Failure',
  props<{ error: string }>());

// SEARCH ARTICLES
export const SeachArticles =
  createAction('[Articles API] Search Article',
  props<{ value: string }>());

export const SeachArticlesSuccess =
  createAction('[Articles API] Search Article Success',
  props<{ articles: Article[] }>());

export const SeachArticlesFailure =
  createAction('[Articles API] Search Article Failure',
  props<{ error: string }>());


