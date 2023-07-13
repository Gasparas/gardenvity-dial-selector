<?php

// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;


/**
 * Scripts Class
 *
 * Handles adding scripts functionality to the admin pages
 * as well as the front pages.
 *
 * @package WWT Shop cart page customization
 * @since 1.0.0
 */
class WWT_SCC_Scripts {

	public function __construct() {

	}

	/**
	 * Adding Scripts
	 *
	 * Adding Scripts for check code public
	 */
	 public function wwwt_scc_public_scripts( $hook ){
		 
 			if ( get_the_ID() == 2071 ) {
 				// Round Configurator JS
 				wp_register_script('wwwt-scc-public-script', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script.js', array('jquery'), WWT_SCC_LIB_VER, true);
 		    wp_enqueue_script('wwwt-scc-public-script');
 		    // The wp_localize_script allows us to output the ajax_url path for our script to use.
 				wp_localize_script(
 					'wwwt-scc-public-script',
 					'WWT_SCC_AJAX',
 					array(
 						'ajaxurl' => admin_url( 'admin-ajax.php' ),
 					)
 				);
 			}

			if ( get_the_ID() == 3250 ) {
 				// Quattro Configurator JS
 				wp_register_script('wwwt-scc-public-script-quattro-uk', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script-quattro-uk.js', array('jquery'), WWT_SCC_LIB_VER, true);
 		    wp_enqueue_script('wwwt-scc-public-script-quattro-uk');
 		    // The wp_localize_script allows us to output the ajax_url path for our script to use.
 				wp_localize_script(
 					'wwwt-scc-public-script-quattro-uk',
 					'WWT_SCC_AJAX',
 					array(
 						'ajaxurl' => admin_url( 'admin-ajax.php' ),
 					)
 				);
 			}

			if ( get_the_ID() == 3551 ) {


				// October Optimal Configurator JS
 				wp_register_script('wwwt-scc-public-script-october-optimal', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script-october-optimal.js', array('jquery'), WWT_SCC_LIB_VER, true);
 		    wp_enqueue_script('wwwt-scc-public-script-october-optimal');
 		    // The wp_localize_script allows us to output the ajax_url path for our script to use.
 				wp_localize_script(
 					'wwwt-scc-public-script-october-optimal',
 					'WWT_SCC_AJAX',
 					array(
 						'ajaxurl' => admin_url( 'admin-ajax.php' ),
 					)
 				);
			}

			if ( get_the_ID() == 3645 ) {
				// October Optimal Configurator JS
 				wp_register_script('wwwt-scc-public-script-october-platinum', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script-october-platinum.js', array('jquery'), WWT_SCC_LIB_VER, true);
 		    wp_enqueue_script('wwwt-scc-public-script-october-platinum');
 		    // The wp_localize_script allows us to output the ajax_url path for our script to use.
 				wp_localize_script(
 					'wwwt-scc-public-script-october-platinum',
 					'WWT_SCC_AJAX',
 					array(
 						'ajaxurl' => admin_url( 'admin-ajax.php' ),
 					)
 				);
			}

			if ( get_the_ID() == 3650 ) {
				// October Optimal Configurator JS
				wp_register_script('wwwt-scc-public-script-october-ultra', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script-october-ultra.js', array('jquery'), WWT_SCC_LIB_VER, true);
				wp_enqueue_script('wwwt-scc-public-script-october-ultra');
				// The wp_localize_script allows us to output the ajax_url path for our script to use.
				wp_localize_script(
					'wwwt-scc-public-script-october-ultra',
					'WWT_SCC_AJAX',
					array(
						'ajaxurl' => admin_url( 'admin-ajax.php' ),
					)
				);
			}

 			wp_register_style('wwwt-scc-public-style', WWT_SCC_INC_URL . '/css/wwwt-scc-public-style.css');
 	    wp_enqueue_style('wwwt-scc-public-style');

			wp_register_style('gardenvity-dial-selector', WWT_SCC_INC_URL . '/css/dial-selector.css');
			wp_enqueue_style('gardenvity-dial-selector');
 	}

	/**
	 * Adding Hooks
	 *
	 * @package WWT Shop cart page customization
	 * @since 1.0.0
	 */
	public function add_hooks() {

		//add scripts for check code admin side
		add_action( 'wp_enqueue_scripts', array( $this, 'wwwt_scc_public_scripts' ) );

	}
}
