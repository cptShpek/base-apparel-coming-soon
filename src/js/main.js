var app = {

    hide_show() {

        if ( document.getElementById( 'errtxt' ).style.visibility == "hidden" ) {

            document.getElementById( 'errtxt' ).style.visibility = 'visible';
            document.getElementById( 'err' ).style.visibility = 'visible';
            return

        } else if ( document.getElementById( 'errtxt' ).style.visibility == "visible" ) {

            document.getElementById( 'errtxt' ).style.visibility = 'hidden';
            document.getElementById( 'err' ).style.visibility = 'hidden';
            return

        }

    },

    follow() {

        let value = document.getElementById( 'inpt' ).value;
        let errmsg = document.getElementById( 'errtxt' );

        if ( ( value == "" || !value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i) ) && errmsg.style.visibility == 'visible' ) {

            return

        } else if ( ( value == "" || !value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i) ) && errmsg.style.visibility == 'hidden' ) {

            app.hide_show();
            return

        } else if ( value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i) ) {

            app.hide_show();
            return alert( "You are now follorw us!" )

        }

    },

    init() {

        document.getElementById( 'errtxt' ).style.visibility = 'hidden';
        document.getElementById( 'err' ).style.visibility = 'hidden';

        document.getElementById( 'btn' ).addEventListener( 'click', this.follow )

    }

}

app.init()