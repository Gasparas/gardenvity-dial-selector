<?php
/**
 * Plugin Name: Gardenvity Dial Selector (& PDF download)
 * Plugin URI:
 * Description: Gardenvity Dial Selector (EPO customization)
 * Version: 1.3.3
 * Author: Gaspar Aleksa
 * Author URI: 
 * Text Domain: gards
 * Domain Path: languages
 *
 * @package Gardenvity Dial Selector
 * @category Core
 * @author Gaspar Aleksa
 * 
 * Change log:
 * 1.3.3: Check 2, 10 restrictions
 * 1.3.2: Position restrictions
 * 1.3.1: Same position adjustment
 * 1.3.0: NPM, Webpack, Babel
 * 1.2.0: Global renanaming WWT -> GAR 
 * 1.1.4: LEDS toggle
 * 1.1.3: New fields for fiberglass
 * 1.0.8: Fiberglass universal config
 */

// Exit if accessed directly
if (!defined('ABSPATH'))
  exit;

/**
 * Core Admin code
 */
function load_admin_core_code()
{
  if (is_admin()) {
    function custom_product_meta_box()
    {
      // global $post;
      $post_tags = get_the_terms($post->ID, 'product_tag');
      $tag_names = wp_list_pluck($post_tags, 'name');

      if (in_array('universal-config', $tag_names)) {
        add_meta_box('universal_config_fields', 'Universal configurator plugin', 'render_custom_meta_box', 'product', 'normal', 'default');
      }
    }
    add_action('add_meta_boxes', 'custom_product_meta_box');

    // Render meta box data
    function render_custom_meta_box($post)
    {
      // Define an array of custom field names and labels
      $fields = array('images_folder_name', 'cladding_types', 'liner_colors', 'liner_default_color', 'hydro_jets_patterns_group_1', 'hydro_jets_patterns_group_2', 'service_door_default', 'filter_default', 'filter_position_range', 'service_position_range', 'position_restrictions');

      // Loop through the fields and display them
      foreach ($fields as $field_name) {
        // Retrieve saved value
        $value = get_post_meta($post->ID, $field_name, true);
        $field_label = ucfirst(str_replace("_", ' ', $field_name));

        // Display the field
        echo '<div style="margin-bottom:0.75rem">';
        echo '<label for="' . $field_name . '">' . $field_label . ': </label>';
        echo '<input type="text" name="' . $field_name . '" id="' . $field_name . '" class="large-text" value="' . esc_attr($value) . '"><br>';
        echo '</div>';
      }
    }

    // Save meta box data
    function save_custom_meta_box($post)
    {
      // Define the array of custom field names
      $fields = array('images_folder_name', 'cladding_types', 'liner_colors', 'liner_default_color', 'hydro_jets_patterns_group_1', 'hydro_jets_patterns_group_2', 'service_door_default', 'filter_default', 'filter_position_range', 'service_position_range', 'position_restrictions');

      // Loop through the fields and save their values
      foreach ($fields as $field_name) {
        if (isset($_POST[$field_name])) {
          update_post_meta($post, $field_name, sanitize_text_field($_POST[$field_name]));
        }
      }
    }
    add_action('save_post', 'save_custom_meta_box');
  }
}
add_action('admin_init', 'load_admin_core_code', 20);

/**
 * Basic plugin definitions
 *
 * @package Gardenvity Dial Selector
 * @since 1.0.0
 */

// Get Plugin Version
if (!function_exists('get_plugin_data')) {
  require_once(ABSPATH . 'wp-admin/includes/plugin.php');
}

$plugin_data = get_plugin_data('wp-content/plugins/gardenvity-dial-selector/gardenvity-dial-selector.php');
$plugin_version = $plugin_data['Version'];

if (!defined('GAR_DS_LIB_VER')) {
  define('GAR_DS_LIB_VER', $plugin_version); //libraray version of js and css
}
if (!defined('GAR_DS_DIR')) {
  define('GAR_DS_DIR', dirname(__FILE__)); // plugin dir
}
if (!defined('GAR_DS_URL')) {
  define('GAR_DS_URL', plugin_dir_url(__FILE__)); // plugin url
}
if (!defined('GAR_DS_INC_DIR')) {
  define('GAR_DS_INC_DIR', GAR_DS_DIR . '/includes'); // Plugin include dir
}
if (!defined('GAR_DS_INC_URL')) {
  define('GAR_DS_INC_URL', GAR_DS_URL . 'includes'); // Plugin include url
}
if (!defined('GAR_DS_ADMIN_DIR')) {
  define('GAR_DS_ADMIN_DIR', GAR_DS_INC_DIR . '/admin'); // Plugin admin dir
}

/**
 * Load Text Domain
 *
 * This gets the plugin ready for translation.
 *
 * @package Gardenvity Dial Selector
 * @since 1.0.0
 */
load_plugin_textdomain('GAR_DS', false, dirname(plugin_basename(__FILE__)) . '/languages/');

/**
 * Activation Hook
 *
 * Register plugin activation hook.
 *
 * @package Gardenvity Dial Selector
 * @since 1.0.0
 */
register_activation_hook(__FILE__, 'GAR_esl_install');

function GAR_esl_install()
{

}

/**
 * Deactivation Hook
 *
 * Register plugin deactivation hook.
 *
 * @package Gardenvity Dial Selector
 * @since 1.0.0
 */
register_deactivation_hook(__FILE__, 'GAR_esl_uninstall');

function GAR_esl_uninstall()
{

}

// Global variables
global $GAR_esl_model, $GAR_DS_public, $GAR_DS_scripts;


include_once(GAR_DS_INC_DIR . '/gar-ds-scripts.php');
$GAR_DS_scripts = new GAR_DS_Scripts();
$GAR_DS_scripts->add_hooks();

// Public class handles most of fronted functionalities of plugin
include_once(GAR_DS_INC_DIR . '/gar-ds-public.php');
$GAR_DS_public = new GAR_DS_Public();
$GAR_DS_public->add_hooks();