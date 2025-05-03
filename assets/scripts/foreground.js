$( () => {

	// Log errors
	$( document ).foundation( ( response ) => {
		if ( window.console ) {
			// eslint-disable-next-line no-console
			console.error( response.errors );
		}
	} );

	// The Echo extension puts an item in personal tools that Foreground really should have in the
	// top menu to make this easier, we move it here and loaded earlier to speed up transform
	$( '#pt-notifications' ).prependTo( '#echo-notifications-alerts' );
	$( '#pt-notifications-message' ).prependTo( '#echo-notifications-messages' );
	$( '#pt-notifications-alert' ).prependTo( '#echo-notifications-alerts' );
	$( '#pt-notifications-notice' ).prependTo( '#echo-notifications-notice' );

	// Turn categories into labels
	$( '#mw-normal-catlinks ul li a' ).addClass( 'label' );

} );
