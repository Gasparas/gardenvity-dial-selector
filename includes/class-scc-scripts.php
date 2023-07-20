<?php

// Exit if accessed directly
if (!defined('ABSPATH'))
	exit;


/**
 * Scripts Class
 *
 * Handles adding scripts functionality to the admin pages
 * as well as the front pages.
 *
 * @package WWT Shop cart page customization
 * @since 1.0.0
 */
class WWT_SCC_Scripts
{

	public function __construct()
	{

	}

	/**
	 * Adding Scripts
	 *
	 * Adding Scripts for check code public
	 */
	public function wwwt_scc_public_scripts($hook)
	{

		$post_tags = get_the_terms(get_the_ID(), 'product_tag');
		$tag_names = wp_list_pluck($post_tags, 'name');

		if (in_array('universal-config', $tag_names)) {
			// JS
			wp_register_script('wwwt-scc-public-script-universal', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script-universal.js', array('jquery'), WWT_SCC_LIB_VER, true);
			wp_enqueue_script('wwwt-scc-public-script-universal');
			// Pass PHP data to JS			
			$dataToBePassed = array(
				'folderName' => get_post_meta(get_the_ID(), 'images_folder_name', true),			
				'claddingTypes' => get_post_meta(get_the_ID(), 'cladding_types', true),			
				'linerColors' => get_post_meta(get_the_ID(), 'liner_colors', true),	
				'serviceDoorStart' => get_post_meta(get_the_ID(), 'service_door_default', true),	
				'linerColorStart' => get_post_meta(get_the_ID(), 'liner_default_color', true),	
			);
			wp_add_inline_script('wwwt-scc-public-script-universal', 'const php = ' . json_encode($dataToBePassed), 'before');			
		}

		if (get_the_ID() == 77) {
			// Quattro Integrated Configurator JS
			wp_register_script('wwwt-scc-public-script-quattro-integrated', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script-quattro-integrated.js', array('jquery'), WWT_SCC_LIB_VER, true);
			wp_enqueue_script('wwwt-scc-public-script-quattro-integrated');
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'wwwt-scc-public-script-quattro-integrated',
				'WWT_SCC_AJAX',
				array(
					'ajaxurl' => admin_url('admin-ajax.php'),
				)
			);
		}

		if (get_the_ID() == 757) {
			// Quattro External Configurator JS
			wp_register_script('wwwt-scc-public-script-quattro-external', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script-quattro-external.js', array('jquery'), WWT_SCC_LIB_VER, true);
			wp_enqueue_script('wwwt-scc-public-script-quattro-external');
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'wwwt-scc-public-script-quattro-external',
				'WWT_SCC_AJAX',
				array(
					'ajaxurl' => admin_url('admin-ajax.php'),
				)
			);
		}

		if (get_the_ID() == 1514) {
			// Quattro External Configurator JS
			wp_register_script('wwwt-scc-public-script-round-x', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script-round-x.js', array('jquery'), WWT_SCC_LIB_VER, true);
			wp_enqueue_script('wwwt-scc-public-script-round-x');
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'wwwt-scc-public-script-round-x',
				'WWT_SCC_AJAX',
				array(
					'ajaxurl' => admin_url('admin-ajax.php'),
				)
			);
		}

		if (in_array(get_the_ID(), array(1484))) {
			// 6-8 Round Inegrated Configurator JS
			wp_register_script('wwwt-scc-public-script-round-integrated-6-8', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script-round-integrated-6-8.js', array('jquery'), WWT_SCC_LIB_VER, true);
			wp_enqueue_script('wwwt-scc-public-script-round-integrated-6-8');
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'wwwt-scc-public-script-round-integrated-6-8',
				'WWT_SCC_AJAX',
				array(
					'ajaxurl' => admin_url('admin-ajax.php'),
				)
			);
		}

		if (in_array(get_the_ID(), array(1511))) {
			// 6-8 Round Inegrated Configurator JS
			wp_register_script('wwwt-scc-public-script-round-integrated-8-10', WWT_SCC_INC_URL . '/js/wwwt-scc-public-script-round-integrated-8-10.js', array('jquery'), WWT_SCC_LIB_VER, true);
			wp_enqueue_script('wwwt-scc-public-script-round-integrated-8-10');
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'wwwt-scc-public-script-round-integrated-8-10',
				'WWT_SCC_AJAX',
				array(
					'ajaxurl' => admin_url('admin-ajax.php'),
				)
			);
		}

		if (is_product()) {
			wp_register_style('gardenvity-dial-selector', WWT_SCC_INC_URL . '/css/dial-selector.css', array(), WWT_SCC_LIB_VER);
			wp_enqueue_style('gardenvity-dial-selector');
		}
	}

	/**
	 * Adding Hooks
	 *
	 * @package WWT Shop cart page customization
	 * @since 1.0.0
	 */
	public function add_hooks()
	{

		//add scripts for check code admin side
		add_action('wp_enqueue_scripts', array($this, 'wwwt_scc_public_scripts'));
	}

}