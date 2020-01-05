def fibo(n):
    a={}
    a[0]=0
    a[1]=1
    if a.get(n)==None:
        a[n]=fibo(n-1)+fibo(n-2)
    return a[n]    
def sum_store(num):
    a=[]
    for i in range(num):
        a.append(fibo(i))
    print(a)    
    a=[i for i in a if i%2==0]   
    return sum(a)

print(sum_store(43))              
