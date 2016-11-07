/**
 *
 * Require for Webpack File Loader.
 * File Loader is a way to compile your Sass with Webpack.
 * This is simply a link to your Sass entry point.
 * This is removed from your final JavaScript build.
 *
 */
require( "../sass/app.scss" );



import * as core from "./core";
import secondaryNav from "./modules/secondary-nav";
import mainNav from "./modules/main-nav";


/**
 *
 * @public
 * @class App
 * @classdesc Load the App application Class to handle everything.
 *
 */
class App {
    constructor () {
        this.core = core;
        this.secondaryNav = secondaryNav;
        this.mainNav = mainNav;

        this.initModules();
    }


    /**
     *
     * @public
     * @instance
     * @method initModules
     * @memberof App
     * @description Initialize application modules.
     *
     */
    initModules () {
        this.secondaryNav.init( this );
        this.mainNav.init( this );
    }
}



/******************************************************************************
 * Expose
*******************************************************************************/
window.app = new App();


/******************************************************************************
 * Export
*******************************************************************************/
export default window.app;