const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
export const cssLinksFromAssets = (entrypoint) => {
    return assets[entrypoint] ? assets[entrypoint].css ?
        assets[entrypoint].css.map(asset=>
            `<link rel="stylesheet" href="${asset}">`
        ).join('') : '' : '';
};

export const jsScriptTagsFromAssets = (entrypoint, extra = '') => {
    return assets[entrypoint] ? assets[entrypoint].js ?
        assets[entrypoint].js.map(asset=>
            `<script src="${asset}"${extra}></script>`
        ).join('') : '' : '';
};
