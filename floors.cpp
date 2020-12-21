#include<iostream>
using namespace std;
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
		int rn,nor;
		int extf;
		cin>>rn>>nor;
		
		if(rn==1 ||rn==2)
		{
			cout<<"1";
		}
		else
		{
			if((rn-2)%nor !=0)
			{
				extf= (rn-2)/nor +1;
			cout<<extf+1;
			}
			else
			{
				extf =(rn-2)/nor;
				cout<<extf+1;
			}
		}
	cout<<endl;	
	}
	return 0;
}
