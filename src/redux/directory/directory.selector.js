import {createSelector} from 'reselect'

const store = state => state.directory

export const sectionSelector = createSelector(
    store,
    directory => directory.sections
)