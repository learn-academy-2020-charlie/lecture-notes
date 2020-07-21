# Ruby Blocks


# Times Method
# do/end block
5.times do
  'hello'
end

# curlybrace block
5.times {'hello'}

# add one to a number for each iteration
my_num = 1
10.times do
  # p my_num
  my_num += 1
end


# Each - iterates through an object/array/hash
# each can be passed arguments
nums = [2, 3, 4]
nums.each do |value|
  value * 3
end

# while - iterates until a condition is met
num = 1
while num <=10
  num
  num += 1
end

# ranges

my_range = 'a'..'h'
my_range.each do |value|
  value
end

letters = Array('a'..'d')
letters

nums_range = [*1..10]
nums_range

# each - determining if the values of the range are odd or even
nums_range.each do |value|
  if value.even?
    # p 'even'
  else
    # p value
  end
end

# map

def get_odds num
  num.map do |value|
    if value.odd?
      'odd'
    else
      value
    end
  end
end
# p get_odds nums_range


magic_nums = [42, 13, 7]

def mult_two array
  array.map do |value|
    value * 2
  end
end
# p mult_two magic_nums
# p magic_nums


# select - similar to filter, has a built in if/else statememt and looks for true values

def is_even array
  array.select do |value|
    value.even?
  end
end
# p is_even magic_nums


greeting = ['hey', 'yo', 'hello', 'sup']

def has_e array
  array.select do |value|
    value.include?('e') && value.include?('y')
  end
end
p has_e greeting
