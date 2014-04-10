(function(){
	'use strict';

	$(document).ready(initialize);

	function initialize()
	{
		$('#add').click(add);
		$('#subtract').click(subtract);
		$('#multiply').click(multiply);
		$('#divide').click(divide);
		$('#exponent').click(exponent);
		$('#squareroot').click(squareroot);
		$('#factorial').click(factorial);
	}

	function operate(operator)
	{
		var nums = getValues();
		var ans;
		switch(operator)
		{
			case 'a':
				ans = nums[0] + nums[1];
				break;
			case 's':
				ans = nums[0] - nums[1];
				break;
			case 'm':
				ans = nums[0] * nums[1];
				break;
			case 'd':
				ans = nums[0] / nums[1];
				break;
			case '^':
				ans = 1;
				for(var i = 0; i < nums[1]; ++i)
				{
					ans *= nums[0];
				}
				break;
			case '√':
				ans = [];
				for(var ii = 0; ii < nums.length; ++ii)
				{
					ans[ii] = Math.sqrt(nums[ii]);
				}
				break;
			case '!':
				ans = [];
				for(var iii = 0; iii < nums.length; ++iii)
				{
					var currentAns = 1;
					for(var j = 1; j <= nums[iii]; ++j)
					{
						currentAns *= j;
					}
					ans[iii] = currentAns;
				}
				break;
			default:
		}
		$('#ans').text(ans);
	}

	function getValues()
	{
		var num1 = $('#num1').val() * 1;
		var num2 = $('#num2').val() * 1;
		return [num1, num2];
	}

	function add()
	{
		operate('a');
	}

	function subtract()
	{
		operate('s');
	}

	function multiply()
	{
		operate('m');
	}

	function divide()
	{
		operate('d');
	}

	function exponent()
	{
		operate('^');
	}

	function squareroot()
	{
		operate('√');
	}

	function factorial()
	{
		operate('!');
	}

})();