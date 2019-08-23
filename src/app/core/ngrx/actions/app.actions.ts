import { props, createAction } from '@ngrx/store';
import { AppData } from '@app/shared/interfaces/interfaces';

export const getData =          createAction('[App Init] Get Data');

export const getDataSuccess =   createAction('[Articles API] Get Success',
                                props<{ data: AppData }>());

export const GetDataFailure =   createAction('[Articles API] Get Failure',
                                props<{ error: string }>());

export const SeachArticles =    createAction('[Articles API] Search Article',
                                props<{ value: string }>());


