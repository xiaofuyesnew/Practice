#!/usr/bin/env python3
#-*- coding: utf-8 -*-
'''
if conditions:
	content
else:
	content
	
if conditions:
	content
elif conditions:
	content
else:
	content
	
when conditions are ture operate content
ignore the other

input data type is string

'''
height=1.75
weight=80.5
bmi=weight/height**2
if bmi<18.5:
	print("too light")
elif bmi<25:
	print("normal")
elif bmi<28:
	print("over weight")
elif bmi<32:
	print("fat")
else:
	print("too fat")