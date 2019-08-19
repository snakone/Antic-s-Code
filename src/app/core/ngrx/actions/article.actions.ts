import { props, createAction } from '@ngrx/store';
import { Article } from '@shared/interfaces/interfaces';

export const getArticles =          createAction('[App Init] Get Articles');

export const getArticlesSuccess =   createAction('[Articles API] Get Success',
                                    props<{ articles: Article[] }>());

export const GetArticlesFailure =   createAction('[Articles API] Get Failure',
                                    props<{ error: string }>());

export const SeachArticles =        createAction('[Articles API] Search Article',
                                    props<{ value: string }>());


