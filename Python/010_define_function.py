#!/usr/bin/env python3
#-*- coding: utf-8 -*-
'''
def function_name(parameter):
	function_body
	return
	
if no return, there will be a None
return None = return

from file_name import function_name

def nop():
	pass
	
parameter check
if not isinstance(x,(type)):
	raise TypeError('tips')
	
multiple value
a tuple
'''
import math
def quadratic(a,b,c):
	d=b**2-4*a*c
	if a==0:
		if b==0:
			print('parameter error!')
		else:
			print('only one solution: x=%f'%(-c/b))
	if d<0:
		d=-d
		x1='%f+%fi'%(-b/(2*a),math.sqrt(d)/(2*a))
		x2='%f-%fi'%(-b/(2*a),math.sqrt(d)/(2*a))
		return x1,x2
	else:
		x1=(-b+math.sqrt(d))/(2*a)
		x2=(-b-math.sqrt(d))/(2*a)
		return x1,x2

print(quadratic(2,3,1))
print(quadratic(1,3,-4))