#!/usr/bin/env python3
#-*- coding: utf-8 -*-
#how to use list and tuple
'''
list=[]
len(list)-----length of list
list[x]-----element of list
list.insert(index,new_element)-----add a element to index
list.append(new_element_to_tail)
list.pop()-----delete the last element
list.pop(index)
tuple=()
if a tuple only has one element, should show as "tuple=(element,)"

'''
L = [
    ['Apple', 'Google', 'Microsoft'],
    ['Java', 'Python', 'Ruby', 'PHP'],
    ['Adam', 'Bart', 'Lisa']
]
# Print Apple:
print(L[0][0])
# Print Python:
print(L[1][1])
# Print Lisa:
print(L[2][2])