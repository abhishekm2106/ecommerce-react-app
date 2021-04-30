import {createSelector} from 'reselect'

const shopSelector = state =>state.shop

export const selectCollections = createSelector(
    shopSelector,
    shopSelector => shopSelector.collections
)

export const selectCollectionsForPreview = createSelector(
    selectCollections,
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => (
    createSelector(
        selectCollections,
        collections => collections[collectionUrlParam]

    )
)