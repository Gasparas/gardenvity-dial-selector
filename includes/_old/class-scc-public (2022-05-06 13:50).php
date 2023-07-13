<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Public Class
 *
 * Manage Public Class
 *
 * @package WWT Shop cart page customization
 * @since 1.0.0
 */

class WWT_SCC_Public {

	public $model;

	//class constructor
	function __construct() {

		global $woo_cpi_model;

		$this->model = $woo_cpi_model;
	}


	/**
	 * Add engraving text to cart item.
	 */
	public function wwt_scc_add_data_to_cart_item( $cart_item_data, $product_id, $variation_id ) {

		$hydro_jets_text = (isset($_COOKIE['hydro_jets_text']) ? $_COOKIE['hydro_jets_text'] : '');
		$hydro_jets = (isset($_COOKIE['hydro_jets']) ? $_COOKIE['hydro_jets'] : '');
		$conf_service = (isset($_COOKIE['conf_service']) ? $_COOKIE['conf_service'] : '');
		$conf_filter = (isset($_COOKIE['conf_filter']) ? $_COOKIE['conf_filter'] : '');


		if(isset($_POST['cart_pdf_submit_data'])){
			 global $woocommerce;
    		 $woocommerce->cart->empty_cart();
    		 $cart_item_data['cart_pdf_submit_data'] = $_POST['cart_pdf_submit_data'];
		}

		if ( $hydro_jets_text != '' ) {
			$hydro_jets_val = $hydro_jets - 1;
			$cart_item_data['conf_jets'] = $hydro_jets_val > 0 ? $hydro_jets_val : '0';
		}

		if ( $hydro_jets_text != '' ) {
			//$cart_item_data['conf_jets_text'] = $hydro_jets_text;
			$cart_item_data['conf_jets_text'] = 'Hydro Düsen Massagesitze';

		}

		if ( $conf_service != '' ) {
			$cart_item_data['conf_service'] = $conf_service;
		}

		if ( $conf_filter != '' ) {
			$cart_item_data['conf_filter'] = $conf_filter;
		}


		/*if (isset($_POST['_custom_opt_data'])) {
			$cart_item_data['_custom_opt_data'] = $_POST['_custom_opt_data'];
		}
		if(isset($_POST['conf_jets'])){
			$cart_item_data['conf_jets'] = $_POST['conf_jets'];
		}
		if(isset($_POST['conf_jets_type'])){
			$cart_item_data['conf_jets_type'] = $_POST['conf_jets_type'];
		}*/

		return $cart_item_data;
	}

	/**
	 * Display engraving text in the cart.
	 */
	public function wwt_scc_display_data_cart( $item_data, $cart_item ) {

		/*if ( !empty( $cart_item['_custom_opt_data'] ) ) {

			foreach($cart_item['_custom_opt_data'] as $key => $val){
				foreach($val as $subval){
					$item_data[] = array(
						'key'     => __( $key, 'wwt_scc' ),
						'value'   => wc_clean( $subval ),
						'display' => '',
					);
				}
			}
	    }*/

		if ( isset( $cart_item['conf_jets'] ) && $cart_item['conf_jets'] != '' ) {
			$key0 = 'Hydro Düsen Massagesitze';
	        $item_data[] = array(
				'key'     => __( $key0, 'wwt_scc' ),
				'value'   => wc_clean( $cart_item['conf_jets'] ),
				'display' => '',
			);
	    }

	    if ( isset( $cart_item['conf_service'] ) && $cart_item['conf_service'] != '' ) {
			$key = 'Wartungstür und Bedienfeld Position';
	        $item_data[] = array(
				'key'     => __( $key, 'wwt_scc' ),
				'value'   => wc_clean( $cart_item['conf_service'] ),
				'display' => '',
			);
	    }

	    if ( isset( $cart_item['conf_filter'] ) && $cart_item['conf_filter'] != '' ) {
			$key1 = 'Filtergehäuse Position';
	        $item_data[] = array(
				'key'     => __( $key1 , 'wwt_scc' ),
				'value'   => wc_clean( $cart_item['conf_filter'] ),
				'display' => '',
			);
	    }

	    return $item_data;
	}

	/**
	 * Add engraving text to order.
	 */
	public function wwt_scc_data_order_items( $item, $cart_item_key, $values, $order ) {

		if ( !empty( $values['conf_jets'] ) ) {
			$key0 = 'Hydro Düsen Massagesitze';
			$item->add_meta_data( __( $key0, 'wwt_scc' ), $values['conf_jets'] );
		}

		if ( !empty( $values['conf_service'] ) ) {
			$key = 'Wartungstür und Bedienfeld Position';
			$item->add_meta_data( __( $key, 'wwt_scc' ), $values['conf_service'] );
		}

		if ( !empty( $values['conf_filter'] ) ) {
			$key1 = 'Filtergehäuse Position';
			$item->add_meta_data( __( $key1, 'wwt_scc' ), $values['conf_filter'] );
		}
	}

	function validate_all_cart_contents(){
		$clear_cart = false;
		foreach ( WC()->cart->get_cart() as $cart_item_key => $values ) {

	    	if(isset($values['cart_pdf_submit_data']) && !empty($values['cart_pdf_submit_data'])){
	        	wp_redirect(home_url('?cart-pdf=true&custom_product=true'));
	        }
	    }

	}

	function custom_pdf_link_add(){
		echo '<br /><br /><a href="javascript:void(0);" class="pdf_button_print custom_cls"><i class="fa fa-file-pdf-o fa-1x "></i>  Download as PDF </a>';
	}

	function custom_pdf_remove_product_from_cart( $cart_html ) {

		if( !empty( $_GET['cart-pdf'] ) && !empty( $_GET['custom_product'] ) ) {

			global $woocommerce;
	    	$woocommerce->cart->empty_cart();
		}

		return $cart_html;
	}

	/**
	 * Adding Hooks
	 *
	 * @package WWT Shop cart page customization
	 * @since 1.0.0
	 */
	function add_hooks() {

		// Add Custom Cart Item Data in WooCommerce
		add_filter( 'woocommerce_add_cart_item_data', array( $this, 'wwt_scc_add_data_to_cart_item' ), 10, 3 );
		add_filter( 'woocommerce_get_item_data', array( $this, 'wwt_scc_display_data_cart' ), 99, 2 );
		add_action( 'woocommerce_checkout_create_order_line_item', array( $this, 'wwt_scc_data_order_items' ), 99, 4 );

		//dd_action('woocommerce_check_cart_items', array( $this,'validate_all_cart_contents'));
		//add_action('woocommerce_after_add_to_cart_button', array( $this,'custom_pdf_link_add'));
		//add_filter('woocommerce_cart_pdf_after_cart', array( $this,'custom_pdf_remove_product_from_cart' ), 99 );

	}

}
