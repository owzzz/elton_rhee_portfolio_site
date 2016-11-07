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
 * @module mainNav
 * @description An mainNav hook module.
 *
 */
const mainNav = {
    /**
     *
     * @public
     * @method init
     * @memberof mainNav
     * @description Method runs once when window loads.
     *
     */
    init () {
        if ( this.isActive() ) {
            initElement();
        }
        // console.log( "mainNav module: initialized" );
    },


    /**
     *
     * @public
     * @method isActive
     * @memberof mainNav
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
     * @memberof mainNav
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
     * @memberof mainNav
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
     * @memberof mainNav
     * @description Method queries DOM for this modules node.
     * @returns {number}
     *
     */
    getElements () {
        $_jsElements = core.dom.body.find( ".er-main-nav" );

        return ( $_jsElements.length );
    }
};


/**
 *
 * @private
 * @method execElement
 * @memberof mainNav
 * @description Handles execution of something.
 * @param {jQuery} $element The element.
 *
 */
const execElement = function ( $element ) {
    // Grab some data from $el.
    const elementData = $element.data();

    $element.find('li').on({
        mouseenter: (el) => {
            let idx = $(el.currentTarget).index();
            $element.find('li').addClass('non-active-item');
            $(el.currentTarget).removeClass('non-active-item').addClass('active-item');
            $('.er-bg-container').css('zIndex', 1).find('img').eq(idx).addClass('active-item');
        },
        mouseleave: (el) => {
            $element.find('li').removeClass('non-active-item');
            $(el.currentTarget).removeClass('active-item');
            $('.er-bg-container').css('zIndex', 0).find('img').removeClass('active-item');
        }
    });
};


/**
 *
 * @private
 * @method initElement
 * @memberof mainNav
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
export default mainNav;