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
 * @package Gardenvity Dial Selector
 * @since 1.0.0
 */
class GAR_DS_Scripts
{

	public function __construct()
	{

	}

	/**
	 * Adding Scripts
	 *
	 * Adding Scripts for check code public
	 */
	public function GAR_DS_public_scripts($hook)
	{

		$post_tags = get_the_terms(get_the_ID(), 'product_tag');
		$tag_names = wp_list_pluck($post_tags, 'name');

		if (in_array('universal-config', $tag_names)) {
			// JS
			wp_register_script('gar-ds-script-universal', GAR_DS_INC_URL . '/js/gar-ds-script-universal.js', array('jquery'), GAR_DS_LIB_VER, true);
			wp_enqueue_script('gar-ds-script-universal');
			// Pass PHP data to JS			
			$dataToBePassed = array(
				'folderName' => get_post_meta(get_the_ID(), 'images_folder_name', true),			
				'claddingTypes' => get_post_meta(get_the_ID(), 'cladding_types', true),			
				'linerColors' => get_post_meta(get_the_ID(), 'liner_colors', true),	
				'serviceDoorStart' => get_post_meta(get_the_ID(), 'service_door_default', true),	
				'linerColorStart' => get_post_meta(get_the_ID(), 'liner_default_color', true),	
			);
			wp_add_inline_script('gar-ds-script-universal', 'const php = ' . json_encode($dataToBePassed), 'before');			
		}

		if (get_the_ID() == 77) {
			// Quattro Integrated Configurator JS
			wp_register_script('gar-ds-script-quattro-integrated', GAR_DS_INC_URL . '/js/gar-ds-script-quattro-integrated.js', array('jquery'), GAR_DS_LIB_VER, true);
			wp_enqueue_script('gar-ds-script-quattro-integrated');
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'gar-ds-script-quattro-integrated',
				'GAR_DS_AJAX',
				array(
					'ajaxurl' => admin_url('admin-ajax.php'),
				)
			);
		}

		if (get_the_ID() == 757) {
			// Quattro External Configurator JS
			wp_register_script('gar-ds-script-quattro-external', GAR_DS_INC_URL . '/js/gar-ds-script-quattro-external.js', array('jquery'), GAR_DS_LIB_VER, true);
			wp_enqueue_script('gar-ds-script-quattro-external');
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'gar-ds-script-quattro-external',
				'GAR_DS_AJAX',
				array(
					'ajaxurl' => admin_url('admin-ajax.php'),
				)
			);
		}

		if (get_the_ID() == 1514) {
			// Quattro External Configurator JS
			wp_register_script('gar-ds-script-round-x', GAR_DS_INC_URL . '/js/gar-ds-script-round-x.js', array('jquery'), GAR_DS_LIB_VER, true);
			wp_enqueue_script('gar-ds-script-round-x');
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'gar-ds-script-round-x',
				'GAR_DS_AJAX',
				array(
					'ajaxurl' => admin_url('admin-ajax.php'),
				)
			);
		}

		if (in_array(get_the_ID(), array(1484))) {
			// 6-8 Round Inegrated Configurator JS
			wp_register_script('gar-ds-script-round-integrated-6-8', GAR_DS_INC_URL . '/js/gar-ds-script-round-integrated-6-8.js', array('jquery'), GAR_DS_LIB_VER, true);
			wp_enqueue_script('gar-ds-script-round-integrated-6-8');
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'gar-ds-script-round-integrated-6-8',
				'GAR_DS_AJAX',
				array(
					'ajaxurl' => admin_url('admin-ajax.php'),
				)
			);
		}

		if (in_array(get_the_ID(), array(1511))) {
			// 6-8 Round Inegrated Configurator JS
			wp_register_script('gar-ds-script-round-integrated-8-10', GAR_DS_INC_URL . '/js/gar-ds-script-round-integrated-8-10.js', array('jquery'), GAR_DS_LIB_VER, true);
			wp_enqueue_script('gar-ds-script-round-integrated-8-10');
			// The wp_localize_script allows us to output the ajax_url path for our script to use.
			wp_localize_script(
				'gar-ds-script-round-integrated-8-10',
				'GAR_DS_AJAX',
				array(
					'ajaxurl' => admin_url('admin-ajax.php'),
				)
			);
		}

		if (is_product()) {
			wp_register_style('gardenvity-dial-selector', GAR_DS_INC_URL . '/css/gar-ds-styles.css', array(), GAR_DS_LIB_VER);
			wp_enqueue_style('gardenvity-dial-selector');
		}
	}

	/**
	 * Adding Hooks
	 *
	 * @package Gardenvity Dial Selector
	 * @since 1.0.0
	 */
	public function add_hooks()
	{

		//add scripts for check code admin side
		add_action('wp_enqueue_scripts', array($this, 'GAR_DS_public_scripts'));
	}

}