
	//スロットが回る早さを指定する
	hayasa=30;

	//初期状態のコインの枚数を指定する
	coin=50;

	//コインを使い果たした時のメッセージを指定する
	mes='貴方はコインを使い果たしてしまいました。';

	//ぞろ目時の賞金の倍率を指定する
	//2だったら揃った数の2倍、3だったら揃った数の3倍
	rate1=2;

	//連番時の賞金の倍率を指定する
	//2だったら揃った数の2倍、3だったら揃った数の3倍
	rate2=3;


	kekka=coin;
	nums=new Array('','','');
	timers=0;
	e1=0;
	function hajime()
		{
		kekka=coin;
		document.form1.kekka.value=coin;
		document.form1.text1.value=" ";
		document.form1.text2.value=" ";
		document.form1.text3.value=" ";
		}

	function srot()
		{
		if(e1 < 1000)
			{
			nums[0]=Math.floor(Math.random()*46);
			nums[1]=Math.floor(Math.random()*46);
			nums[2]=Math.floor(Math.random()*46);
			for(l=0; l < 3; l++)
				{
				for(i=0,j=9,k=j; i < 10; i++)
					{
					if(nums[l] < k || nums[l] == 45)
						{
						if(i+1 == 10)nums[l]=0;
						else nums[l]=i+1;
						break;
						}
					j--;
					k+=j;
					}
				}

			document.form1.text1.value=nums[0];
			document.form1.text2.value=nums[1];
			document.form1.text3.value=nums[2];

			e1++;
			clearTimeout(timers);
			timers=setTimeout('srot()',hayasa);
			}

		else 
			{
			document.form1.text1.value=nums[0];
			document.form1.text2.value=nums[1];
			document.form1.text3.value=nums[2];
			if(nums[0] == nums[1] && nums[1] == nums[2])
				{
				if(nums[0] == 0)kekka+=10*rate1;
				else kekka+=nums[0]*rate1;
				}
			else if(nums[0] == nums[1]+1 && nums[1] == nums[2]+1)
				{
				if(nums[0] == 0)kekka+=10*rate2;
				else kekka+=nums[0]*rate2;
				}
			else if(nums[2] == nums[1]+1 && nums[1] == nums[0]+1)
				{
				if(nums[0] == 0)kekka+=10*rate2;
				else kekka+=nums[0]*rate2;
				}
			document.form1.kekka.value=kekka;
			}
		}

	function starts()
		{
		if(kekka<1)
			{
			alert(mes);
			document.form1.kekka.value=0;
			}
		else 
			{
			kekka--;
			document.form1.kekka.value=kekka;
			e1=0;
			srot();
			}
		}

	function stop(){e1=1000;}

