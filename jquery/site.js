$(document).ready(function(){
	update();
	function getNumbers() {
		return $('.item').length;
	}
	function update() {
		$('.count').html(getNumbers()+' item left');
	}
	$(document).on('click', '.remove', function(){
		$(this).parent().remove();
		update();
	});
	$(document).on('click', 'input[type="checkbox"]', function(){
		if($(this).prop('checked')){
			$(this).parent().addClass('done');
		} else {
			$(this).parent().removeClass('done');
		}
	});
	$('form').submit(function(){
		let input = $(this).find('input[type="text"]');
		if (input.val() != '') {
			let html = '<div class="item"><input type="checkbox"><b>'+input.val()+'</b><span class="remove">X</span></div>';
			$('.list-item').append(html);
		}
		input.val('');
		update();
		return false;
	});
	$('button').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
	$('#all').click(function(){
		$('.item').show();
	});
	$('#active').click(function(){
		$('.item').each(function(){
			if($(this).hasClass('done')){
				$(this).hide();
			} else {
				$(this).show();
			}
		});
	});
	$('#completed').click(function(){
		$('.item').each(function(){
			if(!$(this).hasClass('done')){
				$(this).hide();
			} else {
				$(this).show();
			}
		});
	});
});