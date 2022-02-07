num = temp = int(input())
count = 0
while True:
ten = num // 10
one = num % 10
total = ten + one
num = int(str(one)  + str(total%10))
count += 1

if temp == num :
break

print(count)