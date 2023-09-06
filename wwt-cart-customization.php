<?php
/**
 * Plugin Name: Gardenvity Dial Selector & PDF download
 * Plugin URI:
 * Description: Gardenvity customization
 * Version: 1.1.1
 * Author: Gaspar Aleksa
 * Author URI: 
 * Text Domain: wwtscc
 * Domain Path: languages
 *
 * @package WWT Shop cart page customization
 * @category Core
 * @author Gaspar Aleksa
 * 
 * Changes:
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
      $fields = array('images_folder_name', 'cladding_types', 'liner_colors', 'liner_default_color', 'hydro_jets_patterns_group_1', 'hydro_jets_patterns_group_2', 'service_door_default');

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
      $fields = array('images_folder_name', 'cladding_types', 'liner_colors', 'liner_default_color', 'hydro_jets_patterns_group_1', 'hydro_jets_patterns_group_2', 'service_door_default');

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
 * @package WWT Shop cart page customization
 * @since 1.0.0
 */
if (!defined('WWT_SCC_LIB_VER')) {
  define('WWT_SCC_LIB_VER', '1.0.5'); //libraray version of js and css
}
if (!defined('WWT_SCC_DIR')) {
  define('WWT_SCC_DIR', dirname(__FILE__)); // plugin dir
}
if (!defined('WWT_SCC_URL')) {
  define('WWT_SCC_URL', plugin_dir_url(__FILE__)); // plugin url
}

if (!defined('WWT_SCC_INC_DIR')) {
  define('WWT_SCC_INC_DIR', WWT_SCC_DIR . '/includes'); // Plugin include dir
}
if (!defined('WWT_SCC_INC_URL')) {
  define('WWT_SCC_INC_URL', WWT_SCC_URL . 'includes'); // Plugin include url
}
if (!defined('WWT_SCC_ADMIN_DIR')) {
  define('WWT_SSC_ADMIN_DIR', WWT_SCC_INC_DIR . '/admin'); // Plugin admin dir
}


/**
 * Load Text Domain
 *
 * This gets the plugin ready for translation.
 *
 * @package WWT Shop cart page customization
 * @since 1.0.0
 */
load_plugin_textdomain('wwt_scc', false, dirname(plugin_basename(__FILE__)) . '/languages/');

/**
 * Activation Hook
 *
 * Register plugin activation hook.
 *
 * @package WWT Shop cart page customization
 * @since 1.0.0
 */
register_activation_hook(__FILE__, 'wwt_esl_install');

function wwt_esl_install()
{

}

/**
 * Deactivation Hook
 *
 * Register plugin deactivation hook.
 *
 * @package WWT Shop cart page customization
 * @since 1.0.0
 */
register_deactivation_hook(__FILE__, 'wwt_esl_uninstall');

function wwt_esl_uninstall()
{

}

// Global variables
global $wwt_esl_model, $wwt_scc_public, $wwt_scc_scripts;


include_once(WWT_SCC_INC_DIR . '/class-scc-scripts.php');
$wwt_scc_scripts = new WWT_SCC_Scripts();
$wwt_scc_scripts->add_hooks();

// Public class handles most of fronted functionalities of plugin
include_once(WWT_SCC_INC_DIR . '/class-scc-public.php');
$wwt_scc_public = new WWT_SCC_Public();
$wwt_scc_public->add_hooks();