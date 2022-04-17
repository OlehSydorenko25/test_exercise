import { createAction } from "@reduxjs/toolkit";


export const currentPageRequest = createAction('pagination/currentPageRequest')
export const currentPageSuccess = createAction('pagination/currentPageSuccess')
export const currentPageError = createAction('pagination/currentPageError')

export const perPageRequest = createAction('pagination/perPageRequest')
export const perPageSuccess = createAction('pagination/perPageSuccess')
export const perPageError = createAction('pagination/perPageError')

export const dataSizeRequest = createAction('pagination/dataSizeRequest')
export const dataSizeSuccess = createAction('pagination/dataSizeSuccess')
export const dataSizeError = createAction('pagination/dataSizeError')

