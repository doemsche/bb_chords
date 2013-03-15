$(function() {
     
			$('input').click(function(e) {
					var val = this.value;
					e.preventDefault();
	        $('#new-chord').val( val + this.value); 
	    });

    });