// This is a module using an object literal pattern.
// It's an easy way to organize your custom JavaScript into modules with methods.
// Since this system uses Webpack, you can reuse other modules and dependencies
// by importing them into the module.


import * as core from "../core";
// Here's jQuery in case you need it. If you're just doing DOM manipulation, you
// probably won't need it. Recommend using core.dom module to handle node caching.
import $ from "jquery/dist/jquery";


let $_jsElements = null;


/**
 *
 * @public
 * @module secondarNav
 * @description An secondarNav hook module.
 *
 */
const secondaryNav = {
    /**
     *
     * @public
     * @method init
     * @memberof secondarNav
     * @description Method runs once when window loads.
     *
     */
    init () {
        if ( this.isActive() ) {
            initElement();
        }
        // console.log( "secondarNav module: initialized" );
    },


    /**
     *
     * @public
     * @method isActive
     * @memberof secondarNav
     * @description Method informs of active status.
     * @returns {boolean}
     *
     */
    isActive () {
        return (this.getElements() > 0);
    },


    /**
     *
     * @public
     * @method unload
     * @memberof secondarNav
     * @description Method performs unloading actions for this module.
     *
     */
    unload () {
        // Typically unloading and tearing down isn't required unless you're
        // using a complete AJAX Squarespace website that functions like
        // a single page application.
        this.teardown();
    },


    /**
     *
     * @public
     * @method teardown
     * @memberof secondarNav
     * @description Method performs cleanup after this module. Removes events, null vars etc...
     *
     */
    teardown () {
        $_jsElements = null;
    },


    /**
     *
     * @public
     * @method getElements
     * @memberof secondarNav
     * @description Method queries DOM for this modules node.
     * @returns {number}
     *
     */
    getElements () {
        $_jsElements = core.dom.body.find( ".er-secondary-nav" );

        return ( $_jsElements.length );
    }
};


/**
 *
 * @private
 * @method execElement
 * @memberof secondarNav
 * @description Handles execution of something.
 * @param {jQuery} $element The element.
 *
 */
const execElement = function ( $element ) {
    // Grab some data from $el.
    const elementData = $element.data();

    core.dom.body.find(".er-logo-title").on({
        mouseenter: () => {
            //stuff to do on mouse enter
            $element.find("ul").addClass("er-active");
        }
    });

    $element.find('ul').on('mouseleave', function() {
        $element.find('ul').removeClass("er-active");
    });

    // Misc:
    console.log("Look ma, there's an element, and its data attributes!");
    console.log( $element );
    console.log( elementData );

};


/**
 *
 * @private
 * @method initElement
 * @memberof secondarNav
 * @description This module would do something with your elements.
 *
 */
const initElement = function ( ) {
    const $notLoaded = $_jsElements.not( ".is-initialized" );
    let $element = null;
    let i = $notLoaded.length;

    for ( i; i--; ) {
        $element = $_jsElements.eq( i );

        $element.addClass( "is-initialized" );

        execElement( $element );
    }
};



/******************************************************************************
 * Export
*******************************************************************************/
export default secondaryNav;