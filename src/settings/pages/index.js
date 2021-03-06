/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
import Blocks from './blocks';
import Typography from './typography';
import Icons from './icons';
import CssJs from './css-js';
import Fonts from './fonts';

const { __ } = wp.i18n;

const {
    applyFilters,
} = wp.hooks;

export default applyFilters( 'ghostkit.settings.pages', {
    blocks: {
        label: __( 'Blocks', '@@text_domain' ),
        block: Blocks,
    },
    icons: {
        label: __( 'Icons', '@@text_domain' ),
        block: Icons,
    },
    typography: {
        label: __( 'Typography', '@@text_domain' ),
        block: Typography,
    },
    fonts: {
        label: __( 'Fonts', '@@text_domain' ),
        block: Fonts,
    },
    css_js: {
        label: __( 'CSS & JavaScript', '@@text_domain' ),
        block: CssJs,
    },
} );
